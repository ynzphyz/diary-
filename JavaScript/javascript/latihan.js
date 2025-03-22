//🟢 Easy (Pemula)

//1️⃣ Hitung Luas Lingkaran Soal: Buat fungsi 
// hitungLuasLingkaran(r) yang menerima jari-jari sebagai parameter dan mengembalikan luas lingkaran.
// Clue: Gunakan rumus π × r² dengan Math.PI.

function luasLingkaran () {
    let r = parseFloat(prompt('masukan nilai r:'));
    let luas = Math.PI * ( r ** 2);
    return luas;
}

let  luasNya = luasLingkaran();
alert(`jadi luas lingkarannya adalah ${luasNya.toFixed(2)}`);
 

//2️⃣ Tentukan Bilangan Ganjil atau Genap
// Soal: Buat fungsi cekGanjilGenap(angka) yang menerima satu angka dan mengembalikan "Ganjil" atau "Genap".
// Clue: Gunakan operator % (modulus) untuk mengecek sisa pembagian dengan 2.

function cekGanjilGenap() {
    let angka = parseInt(prompt('masukan nilai angka:'));
    let jenis;

    if ((angka % 2) == 0) {
        jenis = 'bilangan genap';
    } else {
        jenis = 'bilangan ganjil';
    }

alert(`angka mu ${angka} adalah ${jenis}`)
}
cekGanjilGenap();

//3️⃣ Perulangan dengan For Loop
// Soal: Cetak angka 1 sampai 10 menggunakan for.
// Clue: Gunakan for (let i = 1; i <= 10; i++).

for(let i = 0; i <= 10; i ++) {
 console.log(i);
}

//🟡 Medium (Menengah)

// 4️⃣ Hitung Total Gaji Karyawan
// Soal: Buat program yang meminta nama karyawan, gaji per hari, dan jumlah hari kerja dalam sebulan, lalu hitung total gaji bulanannya.
// Clue: Gunakan prompt() untuk input, kalikan jumlah hari dengan gaji per hari.

function programKerja () {
    const gajiPerhari = 150000;
    let namaPegawai = prompt('masukan nama kamu:');
    let jumlahHarikerja = parseInt(prompt('berapa hari kamu kerja:'));

    if (isNaN(jumlahHarikerja) || jumlahHarikerja <= 0) {
        alert('masukan angka yang benar!!')
        return ;
    }
    let totalGaji = gajiPerhari * jumlahHarikerja;
    return totalGaji;
}  

let gajiMu = programKerja();
alert(` total gaji kamu sebulan adalah Rp.${gajiMu.toLocaleString('id-ID')}`)

//5️⃣ Balikkan Sebuah String
// Soal: Buat fungsi reverseString(teks) yang membalikkan teks yang dimasukkan.
// Clue: Gunakan split(''), reverse(), dan join('').

function reverseString(teks) {
    return teks.split('').reverse().join('');
}
console.log(reverseString('mabar epep'));

//6️⃣ Filter Bilangan Genap dari Array
// Soal: Buat program yang menerima array angka, lalu mengembalikan array baru yang hanya berisi angka genap.
// Clue: Gunakan array.filter() untuk menyaring angka.

function bilangan() {
    let inputUser = prompt('masukan angka,beri spasi');
    let angkaArray = inputUser.split(" ").map(Number);
    return angkaArray.filter(num => num % 2 === 0);
}
const hasilee = bilangan();
console.log(hasilee);

//🔴 Hard (Sulit)

//7️⃣ Cek Palindrom
// Soal: Buat fungsi isPalindrome(kata) untuk mengecek apakah kata tersebut sama jika dibalik.
// Clue: Bandingkan kata asli dengan hasil reverse().

function isPalindrome() {
    let kata = prompt('masukan kata').toLowerCase();
    let kataBalik = kata.split('').reverse().join('');
    return kata === kataBalik;
}
if (isPalindrome()) {
    alert(`kata tersebut adalah palindrom `)
} else {
    alert(`kata tersebut bukan palindorm `)
}

//8️⃣ Hitung Jumlah Huruf Vokal dalam String
// Soal: Buat fungsi yang menerima string dan menghitung jumlah huruf vokal (a, i, u, e, o) di dalamnya.
// Clue: Gunakan for atau .filter() dengan includes() untuk mengecek apakah sebuah huruf adalah vokal.

function hitungHuruf() {
    let huruf = prompt('masukan huruf:');
    if(!isNaN(huruf)) {
        return 'input harus berupa huruf woi!!';
    }

    let vokal = ['a','i','u','e','o']
    let hrufArray = huruf.toLowerCase().split('');

    let vokalNya = hrufArray.filter(hurup =>  vokal.includes(hurup));
    return vokalNya.length;
}

 console.log(hitungHuruf());


//  9️⃣ Konversi Waktu (12 Jam ke 24 Jam)
//  Soal: Buat fungsi convertTo24HourFormat(jam12) yang mengubah format "07:45 PM" menjadi "19:45".
//  Clue: Gunakan split(':') untuk memisahkan jam dan menit, lalu konversi berdasarkan AM/PM.
 
function konversiWaktu() {
    let waktu = prompt('Masukkan waktu dalam format HH:MM (misal: 23:45)');
    
    if (!waktu || !waktu.includes(':')) {
        return 'Format waktu tidak valid!';
    }
    
    let bagian = waktu.split(':');
    let jam = parseInt(bagian[0], 10);
    let menit = parseInt(bagian[1], 10);
    
    if (isNaN(jam) || isNaN(menit) || jam < 0 || jam > 23 || menit < 0 || menit > 59) {
        return 'Waktu tidak valid! Masukkan jam antara 00-23 dan menit antara 00-59.';
    }

    let periode = jam >= 12 ? 'PM' : 'AM';
    if (jam > 12) {
        jam -= 12;
    } else if (jam === 0) {
        jam = 12;
    }

    return `${jam}:${menit.toString().padStart(2, '0')} ${periode}`;
}

let hasil = konversiWaktu();
console.log(`Waktu dalam format 12 jam: ${hasil}`);
