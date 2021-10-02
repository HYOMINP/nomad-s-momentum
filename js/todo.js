
const formTodoList = document.querySelector("#formTodoList");
const inputTodoList = formTodoList.querySelector("input");
const contentTodoList = document.querySelector("#contentTodoList");


const TODOS_KEY = "todos";
let todos = [];

//localStorage에 "todos"있을 경우 
const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const savedTodos_parsed = JSON.parse(savedTodos);
    savedTodos_parsed.forEach(showContentTodoList);
    todos = savedTodos_parsed;
};


// x 클릭 시 todo 지우기
function deleteContentTodoList(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}


// submit했을 때 화면에 todolist 보여주기
function showContentTodoList(newTodoListObj){
    const li = document.createElement("li");
    li.id = newTodoListObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoListObj.text;
    const button = document.createElement("button");

    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    contentTodoList.appendChild(li);

    button.addEventListener("click", deleteContentTodoList);
};



// todos에 todo 저장하고, localstarage에 todo저장하는 saveTodos불러오기
function handleTodoSubmit(event){
    
    event.preventDefault();
    const newTodoList = inputTodoList.value;
    const newTodoListObj = {
        text: newTodoList,
        id: Date.now(),
    };
    todos.push(newTodoListObj);
    inputTodoList.value = "";
    showContentTodoList(newTodoListObj);
    saveTodos()
}

// localstorage에 todos 저장하기
function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// submit했을 때, handleTodosubmit
formTodoList.addEventListener("submit", handleTodoSubmit);

