function tambahCatatan() {
    let input = document.getElementById("diaryInput").value.trim();
    
    if (input === "") {
        alert("Catatan tidak boleh kosong!");
        return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = input;

    document.getElementById("diaryList").appendChild(listItem);
    document.getElementById("diaryInput").value = ""; // Reset input setelah ditambahkan
}
