import ToDos from "./ToDos.js";

const todos = new ToDos("todoList");

const form = document.forms['task'];
form.addEventListener('submit', createTask, false);


window.addEventListener("load", () => {
  todos.showToDosList();
});

function createTask(event) {
    event.preventDefault()
    const task = {};
    task.content = form.taskContent.value;
    todos.addTask(task)
    return task
}