const ToDosList = [];
  
  export default class ToDos {
    constructor(elementId) {
      this.parentElement = document.getElementById(elementId);
    }
    getAllToDos() {
      return ToDosList;
    }

    showToDosList() {
      this.parentElement.innerHTML = '';

      renderToDosList(this.parentElement, this.getAllToDos());
    }
    
    addTask(task){
        ToDosList.push(task)
    }
  }

  function renderToDosList(parent, todos) {
    todos.forEach(task => {
      parent.appendChild(renderOneTask(task));
    });
  }
  function renderOneTask(task) {
    const item = document.createElement('li');
    item.innerHTML = `<input type="checkbox" name="completed">
        <p>${task.content}</p  
        `;
    return item;
  }