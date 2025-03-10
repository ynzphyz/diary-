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
const hasil = bilangan();
console.log(hasil);

//7️⃣ Cek Palindrom
// Soal: Buat fungsi isPalindrome(kata) untuk mengecek apakah kata tersebut sama jika dibalik.
// Clue: Bandingkan kata asli dengan hasil reverse().

function isPalindrome() {
    let kata = prompt('masukan kata');
    let kataAsli = kata;
    let kataBalik = kata.split('').reverse().join('');
    return kataAsli === kataBalik;
}
if (isPalindrome()) {
    alert(`kata tersebut adalah palindrom `)
} else {
    alert(`kata tersebut bukan palindorm `)
}

