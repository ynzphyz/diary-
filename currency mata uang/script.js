// script.js
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

const API_URL = "https://api.frankfurter.app";

async function loadCurrencies() {
  try {
    const res = await fetch(`${API_URL}/currencies`);
    if (!res.ok) throw new Error("Gagal mengambil data mata uang");
    const data = await res.json();
    const currencies = Object.keys(data);

    currencies.forEach((currency) => {
      const opt1 = document.createElement("option");
      const opt2 = document.createElement("option");
      opt1.value = opt2.value = currency;
      opt1.text = opt2.text = currency;
      fromCurrency.add(opt1);
      toCurrency.add(opt2);
    });

    fromCurrency.value = "USD";
    toCurrency.value = "IDR";
  } catch (err) {
    console.error(err);
    alert("Gagal memuat daftar mata uang. Periksa koneksi internet.");
  }
}

async function convertCurrency() {
  try {
    if (!amount.value) return alert("Masukkan jumlah uang!");
    const res = await fetch(
      `${API_URL}/latest?amount=${amount.value}&from=${fromCurrency.value}&to=${toCurrency.value}`
    );
    if (!res.ok) throw new Error("Gagal konversi");
    const data = await res.json();
    const convertedValue = data.rates[toCurrency.value];
    result.textContent = `${amount.value} ${
      fromCurrency.value
    } = ${convertedValue.toFixed(2)} ${toCurrency.value}`;
  } catch (err) {
    console.error(err);
    alert("Gagal mengonversi mata uang.");
  }
}

convertBtn.addEventListener("click", convertCurrency);

loadCurrencies();
