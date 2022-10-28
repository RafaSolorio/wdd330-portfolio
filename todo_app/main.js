
function renderTask(task) {
  const todoList = document.querySelector('#todoList');
  const id = document.querySelector(`[data-key='${task.id}']`);

  if (task.deleted) {
    // remove the item from the DOM
    id.remove();
    return
  }

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
  console.log(ToDos);

  if (id) {
    list.replaceChild(node, id);
  } else {
    list.append(node);
  }
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

function deleteTask(key) {
  const index = ToDos.findIndex(item => item.id === Number(key));
  const task = {
    deleted: true,
    ...ToDos[index]
  };
  // remove the todo item from the array by filtering it out
  ToDos = ToDos.filter(item => item.id !== Number(key));
  renderTask(task);
}

const list = document.querySelector('#todoList');

list.addEventListener('click', event => {
  if (event.target.classList.contains('delete-task')) {
    const itemKey = event.target.parentElement.dataset.key;

    deleteTask(itemKey);
  }
});
