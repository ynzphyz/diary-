document.getElementById('formPemain').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const karakter = document.getElementById('karakter').value;
    const kota = document.getElementById('kota').value;
    const kill = Number(document.getElementById('kill').value);
    const death = Number(document.getElementById('death').value);
    const assist = Number(document.getElementById('assist').value);

    if (!nama || !karakter || !kota || isNaN(kill) || isNaN(death) || isNaN(assist)) {
        alert("Mohon isi semua data dengan benar!");
        return;
    }

    const profil = {
        nama,
        karakter,
        kota,
        statistik: {
            kill,
            death,
            assist
        }
    };

    const output = `Nama: ${profil.nama} (${profil.karakter})\nAsal: ${profil.kota}\nStatistik: ${profil.statistik.kill} Kill, ${profil.statistik.death} Death, ${profil.statistik.assist} Assist`;
    document.getElementById('output').innerText = output;
});
