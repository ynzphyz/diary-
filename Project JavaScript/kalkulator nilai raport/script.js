function kalkulatorRapor() {
    let nama = prompt("Masukkan nama siswa:");
    while (!nama || nama.trim() === "") {
        alert("Nama tidak boleh kosong!");
        nama = prompt("Masukkan nama siswa:");
    }

    let nilai = prompt("Masukkan daftar nilai siswa (pisahkan dengan spasi):");
    while (
        !nilai ||
        !nilai.split(" ").every(num => {
            let angka = Number(num);
            return !isNaN(num) && num.trim() !== "" && angka >= 0 && angka <= 100;
        })
    ) {
        alert("Input nilai tidak valid! Harus angka 0-100, pisahkan dengan spasi.");
        nilai = prompt("Masukkan daftar nilai siswa (pisahkan dengan spasi):");
    }

    const nilaiAngka = nilai.split(" ").map(Number);
    const rataRata = nilaiAngka.reduce((acc, val) => acc + val, 0) / nilaiAngka.length;
    const nilaiTertinggi = Math.max(...nilaiAngka);
    const nilaiTerendah = Math.min(...nilaiAngka);

    let predikat = "";

    if (rataRata >= 90) predikat = "A";
    else if (rataRata >= 75) predikat = "B";
    else if (rataRata >= 60) predikat = "C";
    else predikat = "D";

    document.getElementById("hasil").innerHTML = `
        <h2>📄 Rapor Siswa: ${nama}</h2>
        <p>📌 Rata-rata: <strong>${rataRata.toFixed(2)}</strong></p>
        <p>📈 Nilai Tertinggi: ${nilaiTertinggi}</p>
        <p>📉 Nilai Terendah: ${nilaiTerendah}</p>
        <p>🏅 Predikat: <strong>${predikat}</strong></p>
    `;
}
