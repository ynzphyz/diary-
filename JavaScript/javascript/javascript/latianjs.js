// Soal 1: Validasi Input (Error Handling)

// Instruksi
// Buat sebuah function yang meminta user memasukkan angka positif. Jika user memasukkan angka negatif, string, atau input kosong, tampilkan pesan error dan minta input ulang sampai mendapatkan angka yang valid.

function nomorPositif() {
    let inputAngka = Number(prompt('masukan angka postif:'));
    while (isNaN(inputAngka ) || inputAngka <= 0) {
        if (isNaN(inputAngka)) {
             alert('Masukan angka yang benar!')
        } else if (inputAngka <= 0 ) {
            alert(`masukan angka yang lebih dari 0!`)
        }
        inputAngka = Number(prompt('Masukan angka positif:'))
    }
    alert (`input valid: ${inputAngka}`);
}
 nomorPositif();
 

//  Soal 2: Manipulasi Array dengan map(), filter(), dan reduce()

// Instruksi:
// Buat sebuah function yang menerima array angka, lalu:

// instruksi:
// Buat sebuah function yang menerima array angka, lalu:

// Mengalikan setiap angka dengan 2 menggunakan map().
// Menyaring angka yang lebih besar dari 10 menggunakan filter().
// Menjumlahkan semua angka yang tersisa menggunakan reduce().

function manipulasiAngka() {
    let inputUser = (prompt('masukan angka beri spasi:'));
    while (!inputUser || !inputUser.split(" ").every(num => !isNaN(num) && 
    num.trim() !== " " && Number(num) > 0)) {
        alert('masukan angka yang benar (pisahkan dengan spasi)');
        inputUser = prompt('masukan angka yang benar (hanya angka positif!):')
    }

    let angkaArray = inputUser.split(" ").map(Number);
    let angkaDIpangkat = angkaArray.map(angkaNya => angkaNya * 2);
    let angkaLebihBesar10 =  angkaDIpangkat.filter(angkaNya => angkaNya > 10);
    let angkaJumlah;
    if (angkaLebihBesar10.length > 0 ) {
         angkaJumlah = angkaLebihBesar10.reduce((acc,num)=> acc + num , 0);
    } else {
         angkaJumlah = 0;
    }
    alert(`Angka yang telah di proses: ${angkaDIpangkat.join(", ")}\n` +
`Angka yang lebih besar dari 10: ${angkaLebihBesar10.join(", ")}\n`+
`Jumlah angka yang tersisa: ${angkaJumlah}`);
}
manipulasiAngka();

// Soal 3: Konversi Waktu dengan split() dan Validasi Input
// Instruksi:
// Buat function yang meminta user memasukkan waktu dalam format HH:MM, lalu mengubahnya ke format 12 jam (dengan AM/PM).

// Jika user salah memasukkan format (misal 1234 tanpa titik dua :), tampilkan error dan minta input ulang.

function convertWaktu() {
    let waktu = prompt('masukan waktu (HH:MM)');
    while (!waktu || !waktu.includes(":") || waktu.split(":").length !== 2) {
        waktu = prompt("Format salah! Masukkan waktu dalam format HH:MM");
    }
    let bagianWaktu = waktu.split(':');
    let jam = parseInt(bagianWaktu[0],10);
    let menit = parseInt(bagianWaktu[1],10);

    while (isNaN(jam) || isNaN(menit) || jam < 0 || jam > 23 || menit < 0 || menit > 59) {
        alert("Waktu tidak valid! Masukkan jam antara 00-23 dan menit 00-59");
        waktu = prompt("Masukkan waktu (HH:MM)");
        bagianWaktu = waktu.split(':');
        jam = parseInt(bagianWaktu[0], 10);
        menit = parseInt(bagianWaktu[1], 10);
    }

    let periode = jam >= 12 ? 'PM' : 'AM';
   if (jam > 12) {
    jam -= 12;
   } else if (jam === 0) {
    jam = 12;
   }
   return `${jam}:${menit.toString().padStart(2,'0')} ${periode}`;
} 
let hasilNya = convertWaktu();
alert(`waktu nya adalah: ${hasilNya}`)

// Soal 4: Asynchronous JavaScript dengan setTimeout()
// Instruksi:
// Buat program yang menampilkan pesan "Halo, ini pesan pertama!", lalu setelah 3 detik, muncul pesan "Ini pesan kedua setelah 3 detik".

function asynchronous() {
    let pesanPertama = prompt('masukan pesan pertama:')
    while (!pesanPertama.trim() || !isNaN(pesanPertama)) {
        alert('masukan pesan yang benar!!')
        pesanPertama  = prompt('masukan pesan pertama (harus berupa teks, bukan angka)!:')
    }

    setTimeout(() => {
        console.log(`Ini ${pesanPertama} pesan kedua setelah 3 detik!`);
    }, 3000);
}

asynchronous();








