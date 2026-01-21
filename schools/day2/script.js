const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) { // nếu input field trống thì sẽ alert
        alert("Don't leave the field empty!");
        return;
    }

    // tạo thẻ cha li (Container)
    const taskItem = document.createElement("li");
    taskItem.classList.add("list");

    const taskContent = document.createElement("span");
    taskContent.textContent = text;

    // nút xóa
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "🗑️";
    removeBtn.style.margin = '8px'; // để tạm ở đây

    // sự kiện xóa nút
    removeBtn.onclick = () => taskItem.remove();

    // task item thêm nút xóa
    taskItem.appendChild(taskContent);
    taskItem.appendChild(removeBtn);

    // thêm task item vào list 
    list.appendChild(taskItem);

    // reset lại input sau khi thêm
    input.value = "";
    input.focus();
});

// Sự kiện ấn nút enter để thêm
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
})
