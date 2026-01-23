// DOM elements
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = [];
let taskId = 0;

/*
    Khi ấn vào task sẽ gạch chéo
    lấy từ class .done ở trong SecondAttempt/style.css
*/
taskList.addEventListener('click', event => {
    // 
    if (event.target.tagName !== 'LI') return;

    const id = Number(event.target.dataset.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.done = !task.done;
        render();
    }
});

// Render lại các elements 
function render() {
    taskList.replaceChildren(
        ...tasks.map(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
            li.dataset.id = task.id;

            // Nếu như task là true nghĩa là hoàn thành
            // Thêm class done từ css để display dấu gạch
            if (task.done) {
                li.classList.add('done');
            }

            // tạo nút xóa cho mỗi task
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '🗑️';
            removeBtn.style.margin = '8px';

            // thêm event xóa task vào removeBtn
            removeBtn.addEventListener('click', () => {
                tasks = tasks.filter(t => t.id !== task.id);
                render();
            });

            // thêm event vào nút 
            li.appendChild(removeBtn);
            return li;
        })
    );
}

render();

/*
    Event cho nút thêm task
    Khi ấn nút sẽ thực hiện push 
    các params như id, text, done vào tasks
    sau khi thêm vào input sẽ quay về "" và input phải được focus
*/
addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) {
        alert('Please fill the field');
        return;
    }

    tasks.push({ id: taskId, text: text, done: false });
    taskId++;

    input.value = "";
    input.focus();
    render();
});

// Ấn nút enter để thêm task
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});