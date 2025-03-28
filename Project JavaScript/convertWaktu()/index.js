// Mini Project: Tebak Angka
function convertWaktu() {
    let waktu = document.getElementById("inputWaktu").value;

    if (!waktu.includes(":") || waktu.split(":").length !== 2) {
        alert("Format salah! Masukkan waktu dalam format HH:MM");
        return;
    }

    let [jam, menit] = waktu.split(":").map(num => parseInt(num, 10));

    if (isNaN(jam) || isNaN(menit) || jam < 0 || jam > 23 || menit < 0 || menit > 59) {
        alert("Waktu tidak valid! Masukkan jam antara 00-23 dan menit 00-59");
        return;
    }

    let periode = jam >= 12 ? "PM" : "AM";
    if (jam > 12) jam -= 12;
    else if (jam === 0) jam = 12;

    document.getElementById("hasil").innerText = `Waktu dalam format 12 jam: ${jam}:${menit.toString().padStart(2, '0')} ${periode}`;
}
