package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/rs/cors"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/docs/v1"
	"google.golang.org/api/drive/v3"
	"google.golang.org/api/option"
	"google.golang.org/api/sheets/v4"
)

type FormData struct {
	Nama           string
	Kelas          string
	NIS            string
	NoWA           string
	NamaAlat       string
	JumlahAlat     int
	TanggalPinjam  string
	TanggalKembali string
	Keterangan     string
	FotoPath       string
}

func getServices() (*sheets.Service, *drive.Service, *docs.Service, error) {
	b, err := os.ReadFile("credentials.json")
	if err != nil {
		return nil, nil, nil, fmt.Errorf("unable to read credentials: %v", err)
	}
	config, err := google.ConfigFromJSON(b, sheets.SpreadsheetsScope, drive.DriveFileScope, docs.DocumentsScope)
	if err != nil {
		return nil, nil, nil, fmt.Errorf("unable to parse credentials: %v", err)
	}
	client := getClient(config)

	sheetsService, _ := sheets.NewService(context.Background(), option.WithHTTPClient(client))
	driveService, _ := drive.NewService(context.Background(), option.WithHTTPClient(client))
	docsService, _ := docs.NewService(context.Background(), option.WithHTTPClient(client))

	return sheetsService, driveService, docsService, nil
}

func parseTanggal(t string) time.Time {
	d, _ := time.Parse("2006-01-02", t)
	return d
}

func saveFileLocally(file io.Reader, filename string) (string, error) {
	os.MkdirAll("uploads", os.ModePerm)
	path := filepath.Join("uploads", fmt.Sprintf("%d_%s", time.Now().UnixNano(), filename))
	f, err := os.Create(path)
	if err != nil {
		return "", err
	}
	defer f.Close()
	io.Copy(f, file)
	return path, nil
}

func uploadToDrive(localPath, filename string, driveService *drive.Service) (string, error) {
	f, _ := os.Open(localPath)
	defer f.Close()

	meta := &drive.File{
		Name:     filename,
		Parents:  []string{"19iloK_NHLVzAhy_I_dt6RH6aNRaTQkAV"},
		MimeType: "image/jpeg",
	}
	file, err := driveService.Files.Create(meta).Media(f).Do()
	if err != nil {
		return "", err
	}

	driveService.Permissions.Create(file.Id, &drive.Permission{Role: "reader", Type: "anyone"}).Do()
	return fmt.Sprintf("https://drive.google.com/uc?id=%s", file.Id), nil
}

func generateSurat(form FormData, nomorUrut int, driveService *drive.Service, docsService *docs.Service) (pdfURL, docURL string, err error) {
	templateID := "1RK2I4oAUvPFTlv98Hp5bDlassulBFvrASuhs5-riVUM"
	docFolder := "1Y3cvxCOy4M0GtRPe7A1DrAg1iji5O0lQ"
	pdfFolder := "1HhZncgqeqEzgTkMQZOBC9HAsPTIB0zTv"
	title := fmt.Sprintf("Formulir Peminjaman %03d - %s", nomorUrut, form.Nama)

	copy, err := driveService.Files.Copy(templateID, &drive.File{Name: title}).Do()
	if err != nil {
		return "", "", fmt.Errorf("failed to copy template: %v", err)
	}
	docID := copy.Id
	docURL = fmt.Sprintf("https://docs.google.com/document/d/%s/edit", docID)

	_, err = driveService.Files.Update(docID, nil).
		AddParents(docFolder).
		RemoveParents("root").
		Do()
	if err != nil {
		log.Println("⚠️ Gagal memindahkan file ke folder Dokumen:", err)
	}

	replacements := map[string]string{
		"<<NMR>>":    fmt.Sprintf("%03d", nomorUrut),
		"<<TGL>>":    time.Now().Format("02 January 2006"),
		"<<NAMA>>":   form.Nama,
		"<<KLS>>":    form.Kelas,
		"<<NIS>>":    form.NIS,
		"<<NO>>":     form.NoWA,
		"<<NMALT>>":  form.NamaAlat,
		"<<JML>>":    fmt.Sprintf("%d", form.JumlahAlat),
		"<<TGLPMJ>>": form.TanggalPinjam,
		"<<TGLPGN>>": form.TanggalKembali,
		"<<LMPJM>>":  fmt.Sprintf("%d hari", int(parseTanggal(form.TanggalKembali).Sub(parseTanggal(form.TanggalPinjam)).Hours()/24)),
		"<<KET>>":    form.Keterangan,
	}

	var reqs []*docs.Request
	for key, val := range replacements {
		reqs = append(reqs, &docs.Request{
			ReplaceAllText: &docs.ReplaceAllTextRequest{
				ContainsText: &docs.SubstringMatchCriteria{Text: key, MatchCase: true},
				ReplaceText:  val,
			},
		})
	}
	docsService.Documents.BatchUpdate(docID, &docs.BatchUpdateDocumentRequest{Requests: reqs}).Do()

	if form.FotoPath != "" {
		doc, err := docsService.Documents.Get(docID).Do()
		if err == nil {
			var index int64
			for _, c := range doc.Body.Content {
				if c.Paragraph != nil {
					for _, e := range c.Paragraph.Elements {
						if e.TextRun != nil && strings.Contains(e.TextRun.Content, "<<FOTO>>") {
							index = e.StartIndex
							break
						}
					}
				}
			}
			end := index + int64(len("<<FOTO>>"))
			imgReq := []*docs.Request{
				{DeleteContentRange: &docs.DeleteContentRangeRequest{
					Range: &docs.Range{StartIndex: index, EndIndex: end},
				}},
				{InsertInlineImage: &docs.InsertInlineImageRequest{
					Location: &docs.Location{Index: index},
					Uri:      form.FotoPath,
					ObjectSize: &docs.Size{
						Width:  &docs.Dimension{Magnitude: 100, Unit: "PT"},
						Height: &docs.Dimension{Magnitude: 100, Unit: "PT"},
					},
				}},
			}
			docsService.Documents.BatchUpdate(docID, &docs.BatchUpdateDocumentRequest{Requests: imgReq}).Do()
		}
	}

	export, err := driveService.Files.Export(docID, "application/pdf").Download()
	if err != nil {
		return "", "", fmt.Errorf("failed to export PDF: %v", err)
	}
	tmp := filepath.Join("uploads", fmt.Sprintf("%s.pdf", title))
	out, _ := os.Create(tmp)
	io.Copy(out, export.Body)
	out.Close()

	file, _ := os.Open(tmp)
	pdf, _ := driveService.Files.Create(&drive.File{
		Name:     filepath.Base(tmp),
		Parents:  []string{pdfFolder},
		MimeType: "application/pdf",
	}).Media(file).Do()
	file.Close()
	os.Remove(tmp)

	driveService.Permissions.Create(pdf.Id, &drive.Permission{Role: "reader", Type: "anyone"}).Do()
	driveService.Permissions.Create(docID, &drive.Permission{Role: "reader", Type: "anyone"}).Do()

	pdfURL = fmt.Sprintf("https://drive.google.com/uc?id=%s", pdf.Id)
	return pdfURL, docURL, nil
}

func kirimPesanWaBangkit(no string, pesan string) error {
	if !strings.HasPrefix(no, "62") {
		return fmt.Errorf("❌ Format nomor WA tidak valid (harus 62...), silakan isi ulang")
	}

	payload := map[string]string{
		"api_key": "tW3CWRv5NyTGKuhsrmcRqoKYEnCMVQ",
		"sender":  "6287760573989",
		"number":  no,
		"message": pesan,
	}
	body, _ := json.Marshal(payload)

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Post("https://wa.bangkitsolusibangsa.id/send-message", "application/json", bytes.NewBuffer(body))
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 300 {
		return fmt.Errorf("WA API error: %s", resp.Status)
	}
	return nil
}

func getSalam() string {
	hour := time.Now().Hour()
	switch {
	case hour < 11:
		return "Selamat pagi"
	case hour < 15:
		return "Selamat siang"
	case hour < 18:
		return "Selamat sore"
	default:
		return "Selamat malam"
	}
}

func handlePinjam(w http.ResponseWriter, r *http.Request) {
	r.ParseMultipartForm(10 << 20)
	jumlah, _ := strconv.Atoi(r.FormValue("jumlahAlat"))
	form := FormData{
		Nama:           r.FormValue("nama"),
		Kelas:          r.FormValue("kelas"),
		NIS:            r.FormValue("nis"),
		NoWA:           r.FormValue("noWa"),
		NamaAlat:       r.FormValue("namaAlat"),
		JumlahAlat:     jumlah,
		TanggalPinjam:  r.FormValue("tanggalPinjam"),
		TanggalKembali: r.FormValue("tanggalKembali"),
		Keterangan:     r.FormValue("keterangan"),
	}

	sheetsService, driveService, docsService, err := getServices()
	if err != nil {
		http.Error(w, "❌ Gagal inisialisasi layanan", 500)
		log.Println("Service error:", err)
		return
	}

	file, handler, err := r.FormFile("foto")
	if err == nil {
		defer file.Close()
		localPath, _ := saveFileLocally(file, handler.Filename)
		url, err := uploadToDrive(localPath, handler.Filename, driveService)
		if err == nil {
			form.FotoPath = url
		}
		os.Remove(localPath)
	}

	sheetId := "1uULs6gLCAeLVeOI-qjdIcb4pRod-mC6g4Cu9TvtIVak"
	resp, err := sheetsService.Spreadsheets.Values.Get(sheetId, "Form Peminjam!B5:B").Do()
	if err != nil {
		log.Println("❌ Gagal mengambil data dari Sheets:", err)
		http.Error(w, "❌ Gagal mengambil data dari Sheets", 500)
		return
	}
	if resp == nil || resp.Values == nil {
		log.Println("❌ Response dari Sheets kosong")
		http.Error(w, "❌ Response dari Sheets kosong", 500)
		return
	}
	row := len(resp.Values) + 1
	writeRange := fmt.Sprintf("Form Peminjam!A%d", row+4)

	pdf, doc, err := generateSurat(form, row, driveService, docsService)
	if err != nil {
		log.Println("❌ Gagal generate surat:", err)
		http.Error(w, err.Error(), 500)
		return
	}

	values := []interface{}{
		fmt.Sprintf("%04d", row), time.Now().Format("2006-01-02"), form.Nama, form.Kelas, form.NIS,
		form.NoWA, form.NamaAlat, form.JumlahAlat, form.TanggalPinjam, form.TanggalKembali,
		form.Keterangan, fmt.Sprintf("%d hari", int(parseTanggal(form.TanggalKembali).Sub(parseTanggal(form.TanggalPinjam)).Hours()/24)),
		form.FotoPath, pdf, doc, "",
	}

	vr := &sheets.ValueRange{Values: [][]interface{}{values}}
	_, err = sheetsService.Spreadsheets.Values.Update(sheetId, writeRange, vr).ValueInputOption("USER_ENTERED").Do()
	if err != nil {
		log.Println("❌ Gagal update data ke Sheets:", err)
		http.Error(w, "❌ Gagal update data ke Sheets", 500)
		return
	}

	// Kirim WA
	salam := getSalam()
	pesan := fmt.Sprintf(`%s *%s* 👋

Terima kasih telah mengajukan izin pinjam alat dengan detail berikut:

🛠️ *Nama Alat*   : _%s_
📦 *Jumlah Alat* : _%d_
📅 *Tgl Pinjam*  : _%s_
📆 *Tgl Kembali* : _%s_

📄 *Dokumen*: %s

⏳ Mohon tunggu persetujuan. Izin akan dikirim melalui WA ini.

🙏 Terima kasih.`, salam, form.Nama, form.NamaAlat, form.JumlahAlat, form.TanggalPinjam, form.TanggalKembali, pdf)

	err = kirimPesanWaBangkit(form.NoWA, pesan)
	if err != nil {
		log.Println("⚠️ Gagal kirim WA:", err)
	} else {
		log.Println("📲 WA terkirim ke:", form.NoWA)
	}

	w.Write([]byte("✅ Data berhasil dikirim dan disimpan"))
}

func main() {
	http.HandleFunc("/pinjam", handlePinjam)
	fmt.Println("🚀 Server berjalan di http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", cors.AllowAll().Handler(http.DefaultServeMux)))
}
