// Menampilkan waktu yang selalu update setiap detik
function updateTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    document.getElementById('current-time').textContent = timeString;
}

// Mengubah cuaca saat tombol diklik
document.getElementById('change-weather').addEventListener('click', function() {
    const cities = [
        { name: "Jakarta", temp: "30°C", condition: "Cerah" },
        { name: "Bandung", temp: "25°C", condition: "Hujan" },
        { name: "Surabaya", temp: "32°C", condition: "Awan" },
        { name: "Bali", temp: "28°C", condition: "Berawan" }
    ];

    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    document.getElementById('city-name').textContent = `Kota: ${randomCity.name}`;
    document.getElementById('temperature').textContent = `Suhu: ${randomCity.temp}`;
    document.getElementById('condition').textContent = `Kondisi: ${randomCity.condition}`;
});

// Update waktu setiap detik
setInterval(updateTime, 1000);
