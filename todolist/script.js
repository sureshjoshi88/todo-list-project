let taskFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
let tasks = taskFromLocalStorage || [];
let count = tasks.length ? tasks[tasks.length - 1].serialNo + 1 : 1;


let input = document.getElementById("todo-input").addEventListener("keypress",(e)=>{
  if(e.key=="Enter"){
    addFunction();
  }
})



// getting the input value and calling the add function
function addFunction(){
  let input = document.getElementById("todo-input")
  if(input.value.trim() == ""){
    alert("please enter a value")
    return;
  }
  addTodo(count,input.value)
  let value = {
    serialNo:count,
    taskValue:input.value
  }
  tasks.push(value);
  localStorage.setItem("tasks",JSON.stringify(tasks))
  input.value = ""
  count++;
}

// to create the todo row
function addTodo(sno, value) {
  let container = document.getElementById("main-container")

  //created parent row
  let parentDiv = document.createElement("div")
  parentDiv.classList.add('row')
  parentDiv.classList.add('align-items-center')
  parentDiv.classList.add('border-bottom')
  parentDiv.classList.add('pt-3')
  parentDiv.classList.add('pb-3')
  container.appendChild(parentDiv)

  //created col with h6 child
  let childDiv_1 = document.createElement("div")
  childDiv_1.classList.add('col')
  parentDiv.appendChild(childDiv_1)

  let childH6_1 = document.createElement("h6");
  childH6_1.classList.add("mb-0")
  childH6_1.innerText = sno;
  childDiv_1.appendChild(childH6_1)


  //created col-8 with h6 child
  let childDiv_2 = document.createElement("div")
  childDiv_2.classList.add('col-8')
  parentDiv.appendChild(childDiv_2)

  let childH6_2 = document.createElement("h6");
  childH6_2.classList.add("mb-0")
  childH6_2.innerText = value
  childDiv_2.appendChild(childH6_2)


  //create col with edit and delete button
  let childDiv_3 = document.createElement("div")
  childDiv_3.classList.add("col")
  childDiv_3.classList.add("d-flex")
  childDiv_3.classList.add("align-items-center")
  childDiv_3.classList.add("gap-1")
  parentDiv.appendChild(childDiv_3)

  //created edit button
  let edit_button = document.createElement("button")
  edit_button.innerText = "Edit"
  edit_button.classList.add("btn")
  edit_button.classList.add("btn-warning")
  childDiv_3.appendChild(edit_button)

  //created delete button
  let delete_button = document.createElement("button")
  delete_button.innerText = "Delete"
  delete_button.classList.add("btn")
  delete_button.classList.add("btn-danger")
  childDiv_3.appendChild(delete_button)

  delete_button.addEventListener('click',deleteTodo)

  edit_button.addEventListener('click',editTodo)

  // delete_button.onclick = deleteTodo;

}


// to load/print the todos when the page loads/refresh
function printValues() {
  if(tasks.length){
    let stringTask = localStorage.getItem("tasks")

    let parsedTask = JSON.parse(stringTask)
  
    // let main = document.getElementById("main-container")
   
    parsedTask.forEach(element => {
      addTodo(element.serialNo,element.taskValue)
    });
  }
}

let searchInput = document.getElementById("search-input")

searchInput.addEventListener("input", (e) => {
  searchTodo(e)
})


// for searching the todos
function searchTodo(e) {
  let filteredTodos = tasks.filter((todo) => {
    return todo.taskValue.includes(e.target.value)
  })

  let main = document.getElementById("main-container")


  main.innerHTML = ""

  filteredTodos.map((element) => {
    addTodo(element.serialNo,element.taskValue)
  });

}


function editTodo(e){

  // get the new value
 let newValue =  prompt("enter new todo")

 if(newValue==""){
  alert("please enter a value")
  return;
 }
 //target the previous value
 let secondChild = e.target.parentElement.parentElement.getElementsByTagName('div')[1].firstElementChild

 //update the previous value with new value
 secondChild.innerText = newValue

 let firstChild = e.target.parentElement.parentElement.getElementsByTagName('div')[0].firstElementChild

  let filterdArray = tasks.map((value,key)=>{
    if(value.serialNo==firstChild.innerText){
      value.taskValue = newValue;
    }
    return value;
  });

  tasks = filterdArray;

  localStorage.setItem("tasks",JSON.stringify(filterdArray));


}




// for deleteing the todo
function deleteTodo(e){
  let removeRow = e.target.parentElement.parentElement;
  let getSno = removeRow.firstElementChild;
  let h6 = getSno.firstElementChild.innerText;
  
  let filteredTodos = tasks.filter((value,key)=>{
    if(value.serialNo != h6){
      return value;
    }
  })

  let finalTodos = filteredTodos.map((task,key)=>{
    let value = {
      serialNo : key+1,
      taskValue : task.taskValue
    }
    return value
  })



  tasks = finalTodos;
  count--

  localStorage.setItem("tasks",JSON.stringify(finalTodos))  // localstorage 
  removeRow.remove() // dom 

  let mainContainer = document.getElementById("main-container")
  mainContainer.innerHTML = ""

  printValues()


}

printValues()