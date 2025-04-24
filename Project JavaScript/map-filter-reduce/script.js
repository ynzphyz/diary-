function olahData() {
    const inputField = document.getElementById("inputAngka");
    let input = inputField.value.trim();
  
    // Validasi kosong
    if (!input) {
      alert("Input tidak boleh kosong.");
      return;
    }
  
    let data = input.split(',').map(x => x.trim());
  
    // Validasi semua elemen harus angka
    while (data.some(item => isNaN(item) || item === "")) {
      alert("Input harus berupa angka dan dipisahkan dengan koma. Contoh: 5, 10, 15");
      input = prompt("Masukkan angka lagi (pisahkan dengan koma):").trim();
      if (!input) {
        alert("Input masih kosong, operasi dibatalkan.");
        return;
      }
      data = input.split(',').map(x => x.trim());
    }
  
    const angka = data.map(Number);
  
    document.getElementById("awal").innerText = angka.join(', ');
    const hasilMap = angka.map(num => num + 5);
    document.getElementById("map").innerText = hasilMap.join(', ');
    const hasilFilter = hasilMap.filter(num => num % 2 === 0);
    document.getElementById("filter").innerText = hasilFilter.join(', ');
    const hasilReduce = hasilFilter.reduce((acc, num) => acc + num, 0);
    document.getElementById("reduce").innerText = hasilReduce;
  }
  