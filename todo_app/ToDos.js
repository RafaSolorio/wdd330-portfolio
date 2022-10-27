const ToDosList = [];
  
export default class ToDos {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
  }
  getAllToDos() {
    return ToDosList;
  }
  showToDosList() {
    //this.parentElement.innerHTML = '';
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
  item.innerHTML = task.content;
  console.log(item)
  return item;
}

console.log(ToDosList);