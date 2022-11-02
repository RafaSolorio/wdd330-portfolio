
function renderTask(task) {
  const todoList = document.querySelector('#todoList');
  const item = document.querySelector(`[data-key='${task.id}']`);

  if (task.deleted) {
    item.remove();
    return
  }

  const element = document.createElement("li");
  element.setAttribute('data-key', task.id);
  element.innerHTML = `
    <input id="${task.id}" class="tick" type="checkbox"/>
    <label for="${task.id}"></label>
    <span>${task.text}</span>
    <button class="delete-task">X</button>
  `;

  todoList.append(element);

  if (item) {
    todoList.replaceChild(element, item);
  } else {
    todoList.append(element);
  }

  if(task.completed){
    element.style.textDecoration = "line-through"
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

function markDone(key) {
  const index = ToDos.findIndex(item => item.id === Number(key));
  ToDos[index].completed = !ToDos[index].completed;
  renderTask(ToDos[index]);
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

const todoList = document.querySelector('#todoList');

todoList.addEventListener('click', event => {
  if (event.target.classList.contains('tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    markDone(itemKey);
  }

  if (event.target.classList.contains('delete-task')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTask(itemKey);
  }

});

todoList.addEventListener('touchend', event => {
  if (event.target.classList.contains('tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    markDone(itemKey);
  }

  if (event.target.classList.contains('delete-task')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTask(itemKey);
  }

});

function filterCompleteList(){
  todoList.innerHTML = "";
  let filtered = ToDos.filter(task => task.completed === true);
  filtered.forEach(task => {
    renderTask(task)});
}

function filterIncompleteList(){
  todoList.innerHTML = "";
  let filtered = ToDos.filter(task => task.completed === false);
  filtered.forEach(task => {
    renderTask(task)});
}

function showList(){
  ToDos.forEach(task => renderTask(task));
}


let completedButton = document.getElementById('complete');
completedButton.addEventListener('click', filterCompleteList);
completedButton.addEventListener('touchend', filterCompleteList);

let incompleteButton = document.getElementById('incomplete');
incompleteButton.addEventListener('click', filterIncompleteList);
incompleteButton.addEventListener('touchend', filterIncompleteList);


let showAllButton = document.getElementById('all');
showAllButton.addEventListener('click', showList);
showAllButton.addEventListener('touchend', showList);