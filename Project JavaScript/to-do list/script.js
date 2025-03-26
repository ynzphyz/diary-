function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }
    
    let li = document.createElement("li");
    li.textContent = taskText;
    
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}
