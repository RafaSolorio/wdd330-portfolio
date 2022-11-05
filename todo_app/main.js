import ToDos from "./ToDos.js";

const myToDos = new ToDos();

const form = document.querySelector('#task');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#task-input');

  const text = input.value.trim();
  if (text !== '') {
    myToDos.addTask(text);
    input.value = '';
    input.focus();
  }
});

const todoList = document.querySelector('#todoList');

todoList.addEventListener('click', event => {
  if (event.target.classList.contains('checkbox')) {
    const itemKey = event.target.parentElement.dataset.key;
    myToDos.markDone(itemKey);
  }

  if (event.target.classList.contains('delete-task')) {
    const itemKey = event.target.parentElement.dataset.key;
    myToDos.deleteTask(itemKey);
  }

});

let completedButton = document.getElementById('complete');
completedButton.addEventListener('click', event => {
  event.preventDefault();
  myToDos.filterCompleteList();
});

let incompleteButton = document.getElementById('incomplete');
incompleteButton.addEventListener('click', event => {
  event.preventDefault();
  myToDos.filterIncompleteList();
});


let showAllButton = document.getElementById('all');
showAllButton.addEventListener('click', event => {
  event.preventDefault();
  myToDos.showList();
});