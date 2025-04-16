// 🎯 Materi Hari 1: **Pengondisian Dasar dan Penggunaan `!`, `&&`, `||`
// Latihan Soal 1: Validasi Nama
// Buatlah sebuah program yang:

// Meminta input nama dari prompt().

// Nama harus tidak kosong, hanya huruf dan spasi, dan tidak boleh hanya spasi kosong.

// Jika valid, tampilkan:
// "Selamat datang, [nama]!"
// Jika tidak valid, minta ulang.

// ➡️ Gunakan kombinasi !, ||, dan && dalam pengondisiannya.

function namaOrang() {
    let namaUser = prompt('masukan nama anda:');
    while (!namaUser || !/^[a-zA-Z\s]+$/i.test(namaUser)) {
        alert("Nama hanya boleh mengandung huruf dan spasi. Coba lagi!");
        namaUser = prompt('masukan nama anda:');
    }
    alert(`Halo, ${namaUser.trim()}! Selamat datang.`);
}
namaOrang();

// LATIHAN FINAL MATERI 1:
// Buat fungsi validasi email dan nama seperti ini:

// ✅ Ketentuan:
// Nama tidak boleh kosong dan hanya boleh huruf & spasi.

// Email harus mengandung “@” dan “.

function validasiAkun() {
    let nama = prompt('masukan nama:');
    while(!nama ||!/^[a-zA-Z\s]+$/i.test(nama)) {
        alert('masukan nama yang benar!')
        nama = prompt('masukan nama:');
    }

    let email = prompt('masukan email (pastikan gunakan @ pada email!):');
    if (!email || !email.includes("@") || !email.includes(".")) {
        alert('masukan email yang benar!')
        email = prompt('Masukan email (pastikan gunakan @ dan . pada email!):');
    }
    
    alert(`Selamat datang, ${nama}! Email kamu adalah ${email}`);
}
validasiAkun();


// 💡 Mini Challenge
// Buatlah sebuah fungsi bernama cekLogin yang menerima dua parameter:

// username

// password

// Fungsi ini akan:

// Mengecek apakah username dan password tidak kosong (gunakan && dan !)

// Jika kosong, tampilkan alert: "Username dan Password tidak boleh kosong!"

// Jika ada isi, tampilkan: "Selamat datang, [username]!"

function cekLOgin(username,password) {
     if (!username || !password) {
        alert('Username dan Password tidak boleh kosong!')
     } else {
        alert(`selamat datang,${username}`)
     }
}

let username = prompt('masukan username:');
let password = prompt('masukan password:')
cekLOgin(username,password);


// Soal 1:
// Buat fungsi validasi untuk nama pengguna (username):

// Tidak boleh kosong

// Panjang minimal 5 karakter

// Tidak boleh mengandung spasi

// Hanya boleh huruf dan angka


function userName() {
    let pengguna = prompt('masukan nama anda:');
    while(!pengguna || 
        pengguna.length >= 5 || 
        pengguna.includes(" ") ||  
        !/^[a-zA-Z0-9]+$/.test(pengguna)) 
        {
        alert('username tidak valid!');
        pengguna = prompt('masukan nama anda:');
    }
    alert(`username anda adalah: ${pengguna}`)
}

userName();


// Soal 2:
// Buat fungsi validasi angka:

// Input angka dipisahkan spasi (misal: 12 43 7)

// Semua angka harus lebih dari 0 dan kurang dari 100

// Tampilkan angka yang lebih dari 50

// Hitung rata-rata dari seluruh angka

function validasiAngka() {
    let angka = prompt('masukan angka(pisahkan dengan spasi!):');
    while(!angka || !angka.split(" ").every(num => !isNaN(num) && num.trim() !== "" && Number(num) > 0 && Number(num) < 100)) {
        alert('angka tidak valid');
        angka = prompt('masukan angka(pisahkan dengan spasi!):');
    }
    let input = angka.split(" ").map(num => Number(num));
    let angkaLebih50 = input.filter(num => num > 50);

    let totalAngka = input.reduce((acc,num) => acc + num ,0)
    alert(`Angka lebih besar dari 50: ${angkaLebih50.join(", ")}`);
    alert(`Jumlah total angka: ${totalAngka}`);
}

validasiAngka();

// Soal 1: Buat program yang meminta user memasukkan beberapa angka (dipisahkan spasi). Validasi input menggunakan .some() supaya:

// Minimal 1 angka harus lebih besar dari 100

// Semua angka tidak boleh negatif

function masukanAngka() {
    let angka = prompt('masukan angka(pisahkan dengan spasi!):');
    while(!angka || !angka.split(" ").every( num => !isNaN(num) && num.trim() !== "") || !angka.split(" ").some(num => Number(num) > 100) || angka.split(" ").every(num => Number(num) >= 0)) {
        alert('Input tidak valid! Pastikan setidaknya satu angka lebih dari 100 dan tidak ada angka negatif.');
        angka = prompt('Masukkan angka (pisahkan dengan spasi!):');
    }
    let inputAngka = angka.split(" ").map(Number);
    let angkaLebih100 = inputAngka.filter(num => num > 100);
    let total = inputAngka.reduce((acc, num) => acc + num, 0);

    alert(`Angka lebih dari 100: ${angkaLebih100.join(", ")}`);
    alert(`Total seluruh angka: ${total}`);
}
masukanAngka();


// Buatlah fungsi bernama cekNilaiSiswa, yang:

// Meminta input dari pengguna berupa nilai-nilai siswa (pisah dengan spasi).

// Validasi: semua nilai harus angka 0–100 (gunakan .every()).

// Cek apakah ada yang dapat nilai di atas 90 (gunakan .some()).

// Tampilkan:

// Rata-rata nilai

// Pesan “Ada siswa berprestasi!” jika ada nilai > 90.

// Contoh tampilan output:

// yaml
// Copy
// Edit
// Rata-rata nilai: 81.25
// Ada siswa berprestasi!

function cekNilaiSiswa() {
    let nilai = prompt('masukan nilai kamu(pisahkan dengan spasi)');
    while(!nilai || 
        !nilai
        .split(" ")
        .every(num => {
            let angka = Number(num); 
            return !isNaN(num) && num.trim() !== "" && angka >= 0 && angka <= 100;
        })
    ) {
        alert('nilai tidak valid!(pastikan nilai 0-100!)');
        nilai = prompt('masukan nilai kamu(pisahkan dengan spasi)');
    }
    let nilaiAngka = nilai.split(" ").map(Number);
    let rataRata = nilaiAngka.reduce((acc, num ) => acc + num , 0) /nilaiAngka.length;
    let adaSiswaBerprestasi = nilaiAngka.some(num => Number(num) > 90);

    alert(`rata-rata nilai: ${rataRata.toFixed(2)}`)
    if (adaSiswaBerprestasi) {
        alert('ada siswa berprestasi')
    }  else {
        alert('tidak ada siswa berprestasi')
    }
} 
cekNilaiSiswa();

// Soal:
// Buatlah program JavaScript yang:

// Meminta pengguna menginput angka n

// Menampilkan angka dari 1 sampai n menggunakan for loop


function nilaiN() {
    let nilaiEn = prompt('masukan angka:')
    nilaiEn=Number(nilaiEn)
for(let n=1; n <= nilaiEn; n++ ) {
    console.log('data ke-', n)
}
}
nilaiN();



// Buat sebuah fungsi segitigaBintang() yang:

// Meminta pengguna menginput angka (tinggi segitiga)

// Menampilkan pola bintang naik seperti di atas

let tinggi = 3;

for (let i = 1; i <= tinggi; i++) {
    let baris = "";
    for (let j = 1; j <= i; j++) {
        baris += "* ";
    }
    console.log(baris);
}

// Latihan 1: Buat segitiga terbalik dari angka
// Contoh input: tinggi = 5
// Output yang diharapkan:

// Copy
// Edit
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 🎯 Tugas kamu:
// Buat kode JavaScript menggunakan nested loop untuk menghasilkan pola angka seperti di atas.

function segitigaTerbalik() {
    let tinggi = Number(prompt('masukan angka:'));
     
    for(let z = tinggi; z >= 1; z--) {
        let baris = "";
        for (let m = 1; m <= z; m++) {
            baris += m + " ";
        }
        console.log(baris)
    }
   
}

segitigaTerbalik();

// Latihan 2: Buat pola kotak angka
// Contoh input: ukuran = 4
// Output:

// Copy
// Edit
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 

function polaKotak() {
    let kotak = Number(prompt('masukan angka:')); 
    let baris = "";
    for (let i = 1;i <= kotak; i++) {
        for (let j = 1;j <= kotak; j++)
            baris += j + " ";
        console.log(baris);
    } 
}

polaKotak();

// Latihan 1: While Loop
// Buat program yang:

// Meminta user memasukkan sebuah angka (n).

// Menampilkan teks "Data ke-1" sampai "Data ke-n" menggunakan while.

// Contoh tampilan di console:

// python-repl
// Copy
// Edit
// Data ke-1
// Data ke-2
// ...
// Data ke-n

function whileLoop() {
    let n = Number(prompt('masukan angka:'));
    let i = 1;
    while ( i <= n) {
        console.log('Data ke-',i)
        i++;
    }
}
whileLoop();


// Latihan 2: Do...While Loop
// Buat program yang:

// Meminta user memasukkan angka minimal 1.

// Jika input kurang dari 1, tetap jalankan minimal 1 kali dan beri pesan: "Angka terlalu kecil".

// Ulangi sampai user memasukkan angka >= 1.

// Setelah itu, tampilkan "Terima kasih".

function doWhileLoop() {
    let angkaInput;
    do {
        angkaInput = Number(prompt('Masukkan angka (minimal 1):'));
        if (angkaInput < 1 || isNaN(angkaInput)) {
            console.log('Angka terlalu kecil');
        }
    } while (angkaInput < 1 || isNaN(angkaInput));

    console.log('Terima kasih');
}

doWhileLoop();

//1.Buat arrow function bernama kali yang mengalikan dua angka 2. Buat fungsi selesaikanTugas(callback) yang mencetak "Tugas dikerjakan" lalu menjalankan callback

// Kalau kamu siap, langsung kerjakan latihannya dulu, atau kalau mau aku kasih contoh jawaban dulu, tinggal bilang.


   const kali =(a,b) => a*b;

   
console.log(kali(3, 4));

function selesaikanTugas(callback)  {
     console.log('Tugas dikerjakan!');
     const hasil = callback(3,4);
     console.log('Hasil callback:', hasil);
}
selesaikanTugas(kali);

