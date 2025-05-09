
// to create the todo row
function addTodo(sno = 1, value, id) {
  let container = document.getElementById("main-container")

  //created parent row
  let parentDiv = document.createElement("div")
  parentDiv.id = id;
  parentDiv.classList.add('row')
  parentDiv.classList.add('align-items-center')
  parentDiv.classList.add('border-bottom')
  parentDiv.classList.add('pt-3')
  parentDiv.classList.add('pb-3')
  container.appendChild(parentDiv)

  //created col with h6 child
  let childDiv_1 = document.createElement("div")
  childDiv_1.classList.add('col-lg-2', "col-md-2", "col-sm-12", "mt-3","text-center")
  parentDiv.appendChild(childDiv_1)

  let childH6_1 = document.createElement("h6");
  childH6_1.classList.add("mb-0")
  childH6_1.innerText = sno;
  childDiv_1.appendChild(childH6_1)


  //created col-8 with h6 child
  let childDiv_2 = document.createElement("div")
  childDiv_2.classList.add("col-lg-7", "col-md-7", "col-sm-12", "mt-3","text-center")
  parentDiv.appendChild(childDiv_2)

  let childH6_2 = document.createElement("h6");
  childH6_2.classList.add("mb-0")
  childH6_2.innerText = value
  childDiv_2.appendChild(childH6_2)


  //create col with edit and delete button
  let childDiv_3 = document.createElement("div")
  childDiv_3.classList.add('col-lg-3', "col-md-3", "col-sm-12", "mt-3")
  childDiv_3.classList.add("d-flex")
  childDiv_3.classList.add("align-items-center")
  childDiv_3.classList.add("gap-1","buton-gap")
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


  edit_button.addEventListener('click', (e) => {
    console.log(e.target.parentElement.parentElement.id)
    let title = prompt("enter new title");
    update(e.target.parentElement.parentElement.id, title)
  })

  delete_button.addEventListener('click', (e) => {
    console.log(e.target.parentElement.parentElement.id)
    deleteTodo(e.target.parentElement.parentElement.id)
  })
}

function getTodos(title = "") {

  let loading = true;

  fetch(`http://4.240.85.243:3000/todos?title=${title}`)
    .then((response) => response.json())
    .then((result) => {
      todos = result.todos;
      if (loading) {
        let container = document.getElementById("main-container");
        container.innerHTML = `<h4 class="d-flex justify-content-center" >loading....</h4>`
      }
      if (todos.length == 0) {
        loading = false;
        let container = document.getElementById("main-container");
        container.innerHTML = `<h4 class="d-flex justify-content-center" >no data found</h4>`
      } else {
        loading = false;
        let container = document.getElementById("main-container");
        container.innerHTML = ""
        todos.map((value, key) => {
          addTodo(key + 1, value.title, value._id)
         
        })
      }
    })
    .catch((error) => {
      let container = document.getElementById("main-container");
      container.innerHTML = "<h1>something went wrong please try again</h1>"
      console.log(error,"something went wrong")
    });
}

function add(title) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "title": title,
    "description": "the description is first"
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://4.240.85.243:3000/todos", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.message) {
        Toastify({
          text: result.message,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "red",
            color: "white"
          },
          onClick: function () { }
        }).showToast();
      } else {
        let main = document.getElementById("main-container")
        main.innerHTML = ""
        getTodos()
      }
    })
    .catch((error) => console.log(error));
}

function addButton() {

  let input = document.getElementById("todo-input");
  if (input.value.trim() == "") {
    Toastify({
      text: "please enter a value",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "red",
        color: "white"
      },
      onClick: function () { }
    }).showToast();
    return;

  } else {

    add(input.value);
    input.value = "";
  }
}

let input = document.getElementById("todo-input").addEventListener("keypress", (e) => {
  // console.log(e)
  if (e.key == "Enter") {
    add(e.target.value);
    e.target.value = "";
  }
})

function update(id, title) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "title": title,
    "description": "the description is first"
  });

  const requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
  };

  fetch(`http://4.240.85.243:3000/todos/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.message == "Todo updated successfully") {
        Toastify({
          text: result.message,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "green",
            color: "white"
          },
          onClick: function () { }
        }).showToast();
        let main = document.getElementById("main-container")
        main.innerHTML = ""
        getTodos()
      } else {
        console.log(result,"please try again")
      }
    })
    .catch((error) => console.log(error));
}

function deleteTodo(id) {
  const requestOptions = {
    method: "DELETE",
    redirect: "follow"
  };

  fetch(`http://4.240.85.243:3000/todos/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.message == "Todo not found") {
        Toastify({
          text: result.message,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "red",
            color: "white"
          },
          onClick: function () { }
        }).showToast();
      } else if (result.message == "Todo deleted successfully") {
        Toastify({
          text: result.message,
          duration: 3000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "green",
            color: "white"
          },
          onClick: function () { }
        }).showToast();

        let main = document.getElementById("main-container")
        main.innerHTML = ""
        getTodos()
      }
    })
    .catch((error) => console.log(error));
}

function onSearch() {
  let SearchInput = document.getElementById("search-input")
  getTodos(SearchInput.value)
}
getTodos();

