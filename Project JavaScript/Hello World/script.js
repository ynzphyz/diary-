let inputValid = false;

const tampilkanSapaan = nama => {
    while (!inputValid) {
        if (!nama || !/^[a-zA-Z\s]+$/.test(nama.trim())) {
            document.getElementById('hasilSapaan').innerText = 'Nama hanya boleh huruf dan spasi!';
            document.getElementById('hasilSapaan').style.color = 'red';
            return null;
        } else {
            inputValid = true;
            return `Halo, ${nama.trim()}! Selamat datang 👋`;
        }
    }
};

const tampilkanPesan = callback => {
    const inputNama = document.getElementById('namaInput').value;
    const hasil = callback(inputNama);

    if (hasil) {
        document.getElementById('hasilSapaan').innerText = hasil;
        document.getElementById('hasilSapaan').style.color = '#333';
    }
};

document.getElementById('btnSapaan').addEventListener('click', () => {
    inputValid = false; // Reset validasi setiap klik
    tampilkanPesan(tampilkanSapaan);
});
