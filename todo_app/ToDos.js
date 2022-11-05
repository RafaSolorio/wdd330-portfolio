  export default class ToDos {
  constructor() {
    this.ToDosList = [];
  }

  getToDosList() {
    return this.ToDosList;
  }

  renderTask(task) {
    const todoList = document.querySelector('#todoList');
    const item = document.querySelector(`[data-key='${task.id}']`);
  
    if (task.deleted) {
      item.remove();
      return
    }
  
    const element = document.createElement("li");
    element.setAttribute('data-key', task.id);
    element.innerHTML = `
      <input id="${task.id}" class="checkbox" type="checkbox"/>
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
    this.countTasksLeft();
  }

  addTask(text) {
    const task = {
      id: Date.now(),
      text,
      completed: false,
    };
  
    this.ToDosList.push(task);
    this.renderTask(task);
  }

  deleteTask(key) {
    const index = this.ToDosList.findIndex(item => item.id === Number(key));
    const task = {
      deleted: true,
      ...this.ToDosList[index]
    };
    this.ToDosList = this.ToDosList.filter(item => item.id !== Number(key));
    this.renderTask(task);
    this.countTasksLeft();
  }

  markDone(key) {
    const index = this.ToDosList.findIndex(item => item.id === Number(key));
    this.ToDosList[index].completed = !this.ToDosList[index].completed;
    this.renderTask(this.ToDosList[index]);
  }

  filterCompleteList(){
    const todoList = document.querySelector('#todoList');
    todoList.innerHTML = "";
    let filtered = this.ToDosList.filter(task => task.completed === true);
    filtered.forEach(task => {
      this.renderTask(task)});
  }
  
  filterIncompleteList(){
    const todoList = document.querySelector('#todoList');
    todoList.innerHTML = "";
    let filtered = this.ToDosList.filter(task => task.completed === false);
    filtered.forEach(task => {
      this.renderTask(task)});
    return filtered;
  }
  
  showList(){
    this.ToDosList.forEach(task => this.renderTask(task));
  }

  countTasksLeft(){
    let filteredList = this.ToDosList.filter(task => task.completed === false);
    let span = document.getElementById('tasksLeft');
    span.textContent = `${filteredList.length} tasks left`;
    
  }
}
