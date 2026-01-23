const tasktList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');
const input = document.getElementById('taskInput');

let tasks = [];
let taskId = 0;

tasktList.addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return;
    const id = Number(event.target.dataset.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.done = !task.done;
        render();
    }
})

function render() {
    tasktList.replaceChildren(
        ...tasks.map(task => {
            const li = document.createElement('li');
            li.textContent = task.text;
            li.dataset.id = task.id;
            if (task.done) {
                li.classList.add('done');
            }
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '🗑️';
            removeBtn.style.margin = '8px';
            removeBtn.addEventListener('click', () => {
                tasks = tasks.filter(t => t.id !== task.id);
                render();
            });
            li.appendChild(removeBtn);
            return li;
        })
    );
}

render();

addBtn.addEventListener('click', () => {
    const text = input.value.trim();

    if (!text) {
        alert("The field is empty");
        return;
    }
    tasks.push({ id: taskId, text: text, done: false });
    taskId++;

    input.value = "";
    input.focus();
    render();
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addBtn.click();
});