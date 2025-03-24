const quotes = [
    "Jangan menyerah, keajaiban terjadi setiap hari.",
    "Sukses adalah hasil dari kerja keras, ketekunan, dan belajar dari kegagalan.",
    "Mimpi besar, kerja keras, dan jangan pernah berhenti belajar.",
    "Kesuksesan bukanlah akhir, kegagalan bukanlah fatal, yang terpenting adalah keberanian untuk melanjutkan.",
    "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih cerdas.",
    "Jadilah perubahan yang ingin kamu lihat di dunia."
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
