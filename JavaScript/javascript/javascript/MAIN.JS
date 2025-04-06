//alert('Hey!!!');
//const usia = 26
//usia = 29 
//let usia =30
//usia = 27
//console.log('Halo Lurdd usia lu berapa ' + usia);

//let y = prompt('Nilai y adalah')
//alert('nilai y adalah' + y)

let nama ='Luffy' //tipe data string atau teks
let usia = '26'   // tipe data number atau angka
let pekerjaan =  2  //tipe data null tipe data kosong
let tinggiBadan = '170' //penulisan camelCase
let beratBadan          //tipe data undifined karena belum diberikan value atau nilanya
beratBadan = 60         //disini berat badan terdeteksi 60 karena di tuliskan beratBadan + 60 dan di let beratBadan undifined
//alert('nama anda adalah' + nama + 'usia anda adalah' + usia ) //ini adalah cara penulisan yang rumit tanpa menggunakan $

//control flow statements

// if (pekerjaan == null){
//     pekerjaan ='sudah ada'
// } else {
//     pekerjaan ='belum ada'
// }

// switch (pekerjaan){
//     case 1:
//         pekerjaan = 'punya 1 pekerjaan'
//         break
//     case 2:
//         pekerjaan = 'punya banyak pekerjaan'
//         break
//     default:
//         pekerjaan = 'belum ada pekerjaan'
// }

// let kasAwal = 60000
// let kasTambahan =80000
// let hutangKas = 20000     
// const kasAkhir = kasAwal + kasTambahan - hutangKas

// const y = 5.2
// const x = 3.5
// const a = y * x

// alert(`nilai a adalah ${a}`)

// alert (
//     `Nama kamu adalah ${nama} usia kamu adalah ${usia} tinggi badan kamu adalah ${tinggiBadan}cm  pekerjaan kamu adalah ${pekerjaan} berat badan kamu adalah ${beratBadan}kg`
// )

// alert ( `kas awal adalah sebsar Rp.${kasAwal} & kas tambahannya adalah sebsar Rp.${kasTambahan} jadi total kas anda adalah ${kasAkhir} `)

//array 

// let namaGuru = ['Nur', 'Tini' , 'Rohmat ']
// namaGuru.push('Eny' , 'Said')
// namaGuru.shift()
// namaGuru.pop()

// for loop

// const namaGuru = ['Abdul', 'Rohmat', 'Eny', 'Said']
// for (let i = 0; i < namaGuru.length;  i++) {
//     console.log(namaGuru[i])
// }


// let i = 0
// while (i < 10) {
//     i++
//     console.log('Sebastian')
// }


// 1.prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user

 let saldoAwal = parseInt(prompt('masukan saldo awal'))
 let saldoTambahan =parseInt(prompt('masukan saldo tambahan' ))
 let saldoPengeluaran =parseInt(prompt('masukan saldo pengeluaran'))

 let saldoAKhir = saldoAwal + saldoTambahan - saldoPengeluaran

 alert(`saldo akhir anda adalah ${saldoAKhir}`)

// 2.menentukan hari dan tanggal yang ada saat ini di pc atau laptop

let hari = new Date().getDay();
let tanggalSekarang = new Date();
let tanggalSaiki = tanggalSekarang.getDate();
let namaHari = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]
let harIni = namaHari[hari];
console.log(`hari ini adalah ${harIni} & tanggal sekarang adalah ${tanggalSaiki}`)

