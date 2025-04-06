// 1. Soal: Format Input Tanggal Valid (DD-MM-YYYY)
// (Soal ini sudah diberikan sebelumnya, tapi tetap disertakan untuk latihan tambahan)

// Buat program yang meminta user memasukkan tanggal dalam format DD-MM-YYYY.

// Jika format salah (misalnya: 1-1-2024, 2024-01-01, abc, dll.), program akan meminta input ulang.

// Setelah input valid, program akan memisahkan tanggal, bulan, dan tahun, lalu menampilkan hasilnya.

// Validasi Input:
// Harus ada dua tanda strip (-) sebagai pemisah.

// Harus terdiri dari tiga bagian (DD, MM, YYYY).

// Semua bagian harus berupa angka.

// DD (tanggal) harus antara 1 - 31.

// MM (bulan) harus antara 1 - 12.

// YYYY (tahun) harus 4 digit.


function inputTanggal() {
    let inputUser = prompt('Masukan tanggal dengan format (DD-MM-YYYY)');
    while (!inputUser || inputUser.split("-").length !== 3 || 
    !inputUser.split("-").every(num => !isNaN(num) &&  num.trim() !== "" )  ) {
        alert('masukan angka yang benar (DD-MM-YYYY)');
         inputUser = prompt('Masukan format tanggal yang benar!(DD-MM-YYYY)')
    } 

    let tanggal = inputUser.split("-").map(num => parseInt(num));

    if (tanggal[0] < 1 || tanggal[0] > 31 || tanggal[1] < 1 || tanggal[1] > 12 || tanggal[2] < 1000 || tanggal[2] > 9999){
        alert('Masukan format nilai tanggal yang benar!');
        inputUser = prompt('Masukan format tanggal yang benar!(DD-MM-YYYY)')
    }
    else {
        alert(`Tanggal yang anda masukan adalah ${tanggal[0]}-${tanggal[1]}-${tanggal[2]} `);
    }
}
inputTanggal();


// 2. Soal: Validasi Format Waktu (HH:MM)
// Buat program yang meminta user memasukkan waktu dalam format HH:MM (misalnya 23:45).

// Jika input salah (misalnya: 7.30, 9:61, 99:00, abc, dll.), program harus meminta input ulang.

// Setelah input benar, tampilkan jam dan menit secara terpisah.

// Validasi Input:
// Harus mengandung satu tanda titik dua (:) sebagai pemisah.

// Harus terdiri dari dua bagian (HH, MM).

// HH (jam) harus antara 0 - 23.

// MM (menit) harus antara 0 - 59.

// contoh output :
// Masukkan waktu (HH:MM): 23:45  
// Jam: 23  
// Menit: 45 


function validateWaktu() {
    let inputNya = prompt('Masukan waktu dengan format (HH:MM)');
    while (!inputNya || !inputNya.includes(":") || inputNya.split(":").length !==2) {
        alert('Format salah! Masukkan waktu dalam format HH:MM');
        inputNya = prompt('Masukan waktu dengan format (HH:MM');
    }
     let waktu = inputNya.split(":").map(num => parseInt(num));
     let jam =  waktu[0];
     let menit = waktu[1];

     while(isNaN(jam) || isNaN(menit) || menit < 0 || menit > 59 || jam < 0 || jam > 23) {
        alert('Waktu tidak valid! Masukkan jam antara 00-23 dan menit 00-59');
        inputNya = prompt('Masukkan waktu dengan format (HH:MM)');
        waktu = inputNya.split(":").map(num => parseInt(num));
        jam = waktu[0];
        menit = waktu[1];
     }
     return `${jam}:${menit}`;
}
let hasilNya = validateWaktu();
alert(`Waktu nya adalah: ${hasilNya}`);
console.log("Hasil akhir:", hasilNya);


// 3. Soal: Memastikan Input Hanya Angka Positif
// Buat program yang meminta user memasukkan daftar angka positif yang dipisahkan oleh spasi (misalnya 4 7 10 25).

// Jika input berisi huruf, angka negatif, atau spasi kosong, program harus meminta input ulang.

// Jika valid, tampilkan angka yang lebih besar dari 10, lalu jumlahkan semua angka yang tersisa.

// Validasi Input:
// Harus mengandung angka (bukan huruf/simbol).

// Tidak boleh negatif.

// Setiap angka harus dipisahkan dengan spasi.

// Contoh Output
// yaml
// Copy
// Edit
// Masukkan angka (pisahkan dengan spasi): 3 10 15 20 8  
// Angka lebih besar dari 10: 15, 20  
// Jumlah angka yang tersisa: 35  

function angkaPositif() {
    let input = prompt('Masukan angka positif(pisahkan dengan spasi!):');
    while (!input || !input.split(" ").every(num => !isNaN(num) && num.trim() !== "" && Number(num) > 0)) {
        alert ('Input tidak valid!,masukan angka positif(pisahkan dengan spasi!):')
        input = prompt('Masukan angka positif(pisahkan dengan spasi!):');
    }
    let angka = input.split(" ").map(num => Number(num));
    let angkaLebih10 = angka.filter(num => num > 10);

    let totalAngka = angka.reduce((acc,num) => acc + num ,0)
    alert(`Angka lebih besar dari 10: ${angkaLebih10.join(", ")}`);
    alert(`Jumlah total angka: ${totalAngka}`);
}

angkaPositif();


// 4. Soal: Memastikan Nama yang Valid
// Buat program yang meminta user memasukkan nama yang hanya berisi huruf (tanpa angka/simbol).

// Jika user memasukkan angka atau karakter khusus (123, @nama, john.doe), program harus meminta input ulang.

// Jika valid, tampilkan pesan sapaan.

// Validasi Input:
// Hanya boleh mengandung huruf dan spasi.

// Tidak boleh kosong.

// Tidak boleh angka atau simbol.

// Contoh Output
// yaml
// Copy
// Edit
// Masukkan nama Anda: John Doe  
// Halo, John Doe! Selamat datang.  

function namaValid() {
    let masukanNama = prompt('masukan nama anda:').trim();
    while (!masukanNama || !/^[a-zA-Z\s]+$/i.test(masukanNama)) {
        alert("Nama hanya boleh mengandung huruf dan spasi. Coba lagi!");
        masukanNama = prompt('masukan nama anda:').trim();
    }
    alert(`Halo, ${masukanNama.trim()}! Selamat datang.`);
}
namaValid();

// 5. Soal: Validasi Nomor Telepon (Format Indonesia)
// Buat program yang meminta user memasukkan nomor telepon Indonesia yang valid.

// Nomor harus diawali dengan 08 dan memiliki panjang 10 - 13 digit.

// Jika input salah (misalnya +628123, 08123abc456, 620812345678), program harus meminta input ulang.

// Jika valid, tampilkan pesan konfirmasi.

// Validasi Input:
// Harus hanya angka.

// Harus diawali 08.

// Panjangnya 10 - 13 digit.

// Contoh Output
// yaml
// Copy
// Edit
// Masukkan nomor telepon: 081234567890  
// Nomor telepon Anda: 081234567890  

function validasiNomor() {
    let masukanNomor = prompt('masukan nomor telepon anda:').trim();
    while ( !masukanNomor || !masukanNomor.startsWith("08") || !/^\d+$/.test(masukanNomor) || masukanNomor.length < 10 || masukanNomor.length > 13) {
        alert('Nomor telepon harus di awali dengan "08" dan memiliki panjang 10-13!');
        masukanNomor = prompt('masukan nomor telepon anda:').trim();
    }
    alert(`Nomor telepong anda adalah: ${masukanNomor}`)
}
validasiNomor();