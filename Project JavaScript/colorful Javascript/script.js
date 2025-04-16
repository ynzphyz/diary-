let count = 0;
const counterDisplay = document.getElementById('counter');

function changeCount(amount) {
    count += amount;
    updateDisplay();
}

function resetCount() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    counterDisplay.textContent = count;
}
