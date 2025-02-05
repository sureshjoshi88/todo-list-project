
// to create the todo row
function addTodo(sno = 1, value) {
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



}


// function getTodos(){
//     fetch("http://4.240.85.243:3000/todos")
//       .then((response) => response.json())
//       .then((result) => {
//         todos = result.todos;
//         todos.map((value,key)=>{
//           addTodo(key+1,value.title)
//         })
//       })
//       .catch((error) => console.error(error));
//   }
  
//   getTodos()

function getTodos(){
    fetch("http://4.240.85.243:3000/todos")
    .then((data)=>{
        return data.json()
    })
    .then((data)=>{
        todos = data.todos;
        todos.map((value,key)=>{
            addTodo(key+1,value.title)
        })
    })
    .catch((err)=>{
        console.log("something went wrong",err);
        
    })
}
getTodos();