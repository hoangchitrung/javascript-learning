// DOM elements
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

// Array để chứa các tasks được thêm vào
let tasks = [];
let id = 0;

// Render lại element sau khi thay đổi state
function render() {
    list.replaceChildren(
        ...tasks.map(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
            li.dataset.id = task.id;
            if (task.done) {
                li.classList.add("done");
            }

            const removeBtn = document.createElement('button');
            removeBtn.textContent = "🗑️";
            removeBtn.style.margin = '8px';
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                tasks = tasks.filter(t => t.id !== task.id);
                render();
            });
            li.appendChild(removeBtn);
            return li;
        })
    );
}

render();

// Event- toggle todo
list.addEventListener('click', event => {
    if (event.target.tagName !== "LI") return;
    const id = Number(event.target.dataset.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.done = !task.done;
        render();
    }
})

// Thêm tasks item vào list
addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) { // nếu input field trống thì sẽ alert
        alert("Don't leave the field empty!");
        return;
    }

    // thêm task item vào mảng
    tasks.push({ id: id++, text: text, done: false });

    // reset lại input sau khi thêm
    input.value = "";
    input.focus();
    render();
});

// Sự kiện ấn nút enter để thêm
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
})
