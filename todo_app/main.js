
function renderTask(task) {
  const todoList = document.querySelector('#todoList');
  const item = document.querySelector(`[data-key='${task.id}']`);

  if (task.deleted) {
    // remove the item from the DOM
    item.remove();
    return
  }

  const isChecked = task.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', task.id);
  node.innerHTML = `
    <input id="${task.id}" class="tick" type="checkbox"/>
    <label for="${task.id}"></label>
    <span>${task.text}</span>
    <button class="delete-task">X</button>
  `;

  todoList.append(node);

  if (item) {
    todoList.replaceChild(node, item);
  } else {
    todoList.append(node);
  }

  if(task.completed){
    node.style.textDecoration = "line-through"
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

//function filterCompleted(task){
//  if(task.completed === true){
//    return task
//  }
//}
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

let incompleteButton = document.getElementById('incomplete');
incompleteButton.addEventListener('click', filterIncompleteList);

let showAllButton = document.getElementById('all');
showAllButton.addEventListener('click', showList);