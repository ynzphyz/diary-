//membut perhitungan matematika
//1.luas lingkaran
//2.luas segitiga
//3.luar persegi panjang
//4.luas jajargenjang

//1.luas lingkaran
function luasLIngkaran() {
    let nilaiR = parseFloat(prompt('masukan nilai r'))
    let Lingkaran =   (nilaiR ** 2) * Math.PI;
    return Lingkaran;
}

let hasilNya = luasLIngkaran();
alert(`luas lingkaran adalah ${hasilNya.toFixed(2)}`);

//2.luas segitiga
function luasSegitiga()  {
    let alasSegitiga = parseFloat(prompt('masukan nilai alas:'))
    let tinggiSegitiga = parseFloat(prompt('masukan nilai tinggi:'))

    let luasNya = (alasSegitiga * tinggiSegitiga) /2;
  
alert(`jadi luas segitiganya adalah ${luasNya}`)

}
luasSegitiga();

//3. luas persegi panjang
 function luasPersegipanjang () {
    let panjangNya = parseInt(prompt('masukan panjang nya:'))
    let lebarNya = parseInt(prompt('masukan lebar nya:'))
 
    let hasilLuas = panjangNya * lebarNya;
    return hasilLuas
 }
 let hasilLuas =luasPersegipanjang()
 alert(`luas persegi panjang nya adalah ${hasilLuas}`)
 
 
//4.luas jajargenjang
function luasJajargenjang(){
   let alasJajargenjang = parseFloat(prompt('masukan alasnya:'))
   let tinggiJajargenjang = parseFloat(prompt('masukan tingginya:'))

   let hasilLuasnya = alasJajargenjang * tinggiJajargenjang;
   return hasilLuasnya 
}
  let hasilLuasnya = luasJajargenjang(); 
  alert(`luas jajargenjang mu adalah ${hasilLuasnya}`)



//menghitung total gaji yang didapat selama 1 bulan dengan input minimal:
//1.nama karyawan
//2.gaji perhari
//3.jumlah hari masuk kerja

 function totalGaji () {
   const namaKamu = prompt('masukan nama kamu:')
const gajiPerhari = 150000;
let jumlahMasukkerja = parseInt(prompt('masukan jumlah hari kerja mu:'),10);

let gajiBulanan = gajiPerhari * jumlahMasukkerja;
return {nama : namaKamu, gaji : gajiBulanan};
 }

 let hasilMu = totalGaji();
 alert(` total gaji selama 1 bulan kamu adalah Rp.${hasilMu.gaji.toLocaleString('id-ID')}`);





