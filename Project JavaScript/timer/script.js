function mulaiCountdown() {
    let detik = parseInt(document.getElementById("inputDetik").value, 10);

    if (isNaN(detik) || detik <= 0) {
        alert("Masukkan waktu dalam hitungan detik (positif).");
        return;
    }

    let countdownElement = document.getElementById("hasil");
    let interval = setInterval(() => {
        let menit = Math.floor(detik / 60);
        let sisaDetik = detik % 60;

        countdownElement.innerText = `${menit.toString().padStart(2, '0')}:${sisaDetik.toString().padStart(2, '0')}`;

        if (detik === 0) {
            clearInterval(interval);
            countdownElement.innerText = "Waktu Habis!";
        } else {
            detik--;
        }
    }, 1000);
}
