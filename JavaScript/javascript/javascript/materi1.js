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
