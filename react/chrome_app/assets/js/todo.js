const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";
// 업데이트
let todos = [];

function saveTodos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
  const deleteList = event.target.parentElement;
  deleteList.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(deleteList.id));
  saveTodos();
}

function paintTodo(newToDo){
  const createList = document.createElement("li");
  createList.id = newToDo.id;
  console.log(newToDo.id);
  const createSpan = document.createElement("span");
  createSpan.innerText = newToDo.text;

  const createBtn = document.createElement("button");
  createBtn.innerText = "❌";
  createBtn.addEventListener("click", deleteTodo);
  createList.appendChild(createSpan);
  createList.appendChild(createBtn);
  toDoList.appendChild(createList);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}