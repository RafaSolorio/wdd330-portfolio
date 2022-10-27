function renderTask(task) {
  const todoList = document.querySelector('#todoList');


  const isChecked = task.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', task.id);
  node.innerHTML = `
    <input id="${task.id}" type="checkbox"/>
    <label for="${task.id}" class="tick"></label>
    <span>${task.text}</span>
    <button class="delete-task">X</button>
  `;

  todoList.append(node);
  console.log(todoItems);
}

let ToDos = [];

function addTask(text) {
  const task = {
    id: Date.now(),
    text,
    completed: false,
  };

  ToDos.push(task);
  renderTask(task);
}

const form = document.querySelector('#task');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#task-input');

  const text = input.value.trim();
  if (text !== '') {
    addTask(text);
    input.value = '';
    input.focus();
  }
});

