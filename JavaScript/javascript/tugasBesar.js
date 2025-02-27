//membut perhitungan matematika
//1.luas lingkaran
//2.luas segitiga
//3.luar persegi panjang
//4.luas jajargenjang

//1.luas lingkaran
// function luasLIngkaran() {
//     let nilaiR = parseFloat(prompt('masukan nilai r'))
//     let PI = parseFloat(prompt('masukan nilai PI'))
//     let Lingkaran = (nilaiR ** 2) * PI;
//     return Lingkaran;
// }

// let hasilNya = luasLIngkaran();
// alert(`luas lingkaran adalah ${hasilNya}`);

//2.luas segitiga
// function luasSegitiga()  {
//     let alasSegitiga = parseFloat(prompt('masukan nilai alas:'))
//     let tinggiSegitiga = parseFloat(prompt('masukan nilai tinggi:'))

//     let luasNya = (alasSegitiga * tinggiSegitiga) /2;
  
// alert(`jadi luas segitiganya adalah ${luasNya}`)

// }
// luasSegitiga();

//3. luas persegi panjang
 function luasPersegipanjang () {
    let panjangNya = parseInt(prompt('masukan panjang nya;'))
    let lebarNya = parseInt(prompt('masukan lebar nya:'))
 
    let hasilLuas = panjangNya * lebarNya;
    return hasilLuas
 }
 let hasilLuas =luasPersegipanjang()
 alert(`luas persegi panjang nya adalah ${hasilLuas}`)
 
 














//menghitung total gaji yang didapat selama 1 bulan dengan input minimal:
//1.nama karyawan
//2.gaji perhari
//3.jumlah hari masuk kerja