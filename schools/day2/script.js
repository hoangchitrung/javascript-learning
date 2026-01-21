const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const text = input.value;
    if (!text) { // nếu input field trống thì sẽ alert
        alert("Don't leave the field empty!");
        return;
    }

    // element li để hiển thị task ở phía dưới
    const newTask = document.createElement("li");
    newTask.textContent = text;
    const removeBtn = document.createElement("button");
    newTask.classList.add("list");
    // nút xóa
    removeBtn.textContent = "🗑️";
    removeBtn.style.margin = "8px";
    removeBtn.onclick = () => newTask.remove();
    // chèn child elements vào bên trong
    newTask.appendChild(removeBtn);
    list.appendChild(newTask);
    input.value = "";
});


input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
})
