
// let input = document.getElementById("input-value")
// input.addEventListener("keypress",(e)=>{
//     if(e.key =="Enter"){
//         getvalue();
//     }
// })
// function getvalue(){
//     if(input.value.trim()==""){
//         alert("please enter a value")
//         return;
//     }else{

//         let value = input.value
//         input.value = ""
//         let maindiv1 = document.getElementById("s-number")
//         let elements1 = document.createElement("li");
//         maindiv1.appendChild(elements1)
//         elements1.classList.add("list")
//         let maindiv2 = document.getElementById("todo")
//         let elements2 = document.createElement("h4")
//         elements2.innerText = value
//         maindiv2.appendChild(elements2)
//         let mainFordiv3 = document.createElement("div")
//         mainFordiv3.classList.add("gap")
//         let maindiv3 = document.getElementById("action")
//         let elements3 = document.createElement("button")
//         elements3.innerText = "Edit"
//         elements3.classList.add("edit")
//         mainFordiv3.appendChild(elements3)
//         let elements4 = document.createElement("button")
//         elements4.innerText = "Delete"
//         elements4.classList.add("edit1")
//         mainFordiv3.appendChild(elements4)
//         maindiv3.appendChild(mainFordiv3)
//         elements4.addEventListener("click",()=>{
//             maindiv1.removeChild(elements1)
//             maindiv2.removeChild(elements2)
//             maindiv3.removeChild(mainFordiv3)
//         })

//         elements3.addEventListener("click",()=>{
//             let createInput = document.createElement("input")
//             maindiv2.removeChild(elements2)
//             maindiv2.appendChild(createInput)
//             let savButton = document.createElement("button")
//             let cancalButon = document.createElement("button")
//             cancalButon.innerText = "Cancel"
//             cancalButon.classList.add("cancel")
//             mainFordiv3.removeChild(elements4)
//             mainFordiv3.appendChild(cancalButon)
//             savButton.innerText = "Save"
//             savButton.classList.add("savbut")
//             mainFordiv3.removeChild(elements3)
//             mainFordiv3.appendChild(savButton)
            
//             savButton.addEventListener("click",()=>{
//                 maindiv2.removeChild(createInput)
//                 let heading_5 = document.createElement("h5")
//                 heading_5.innerText = createInput.value
//                 maindiv2.appendChild(heading_5)
//                 mainFordiv3.removeChild(cancalButon)
//                 mainFordiv3.removeChild(savButton)
//                 mainFordiv3.appendChild(elements3)
//                 mainFordiv3.appendChild(elements4)                
//             })

//             cancalButon.addEventListener("click",()=>{
//                 maindiv2.removeChild(createInput)
//                 maindiv2.appendChild(elements2)
//                 mainFordiv3.removeChild(cancalButon)
//                 mainFordiv3.removeChild(savButton)
//                 mainFordiv3.appendChild(elements3)
//                 mainFordiv3.appendChild(elements4)
//             })

//         })

//     }   
//     }
    
// let butons = document.getElementById("buton-task")
// butons.addEventListener("click",()=>{
//     getvalue();
// })




// document.getElementById("input-value").addEventListener("keypress", (e) => {
//     if (e.key === "Enter") addTask();
// });

// document.getElementById("buton-task").addEventListener("click", addTask);

// function addTask() {
//     const input = document.getElementById("input-value");
//     const value = input.value.trim();

//     if (!value) {
//         alert("Please enter a value");
//         return;
//     }

//     input.value = "";

//     // Create task elements
//     const taskItem = document.createElement("li");
//     taskItem.classList.add("list");

//     const taskText = document.createElement("h4");
//     taskText.innerText = value;

//     const actionContainer = createActionButtons(taskText, taskItem);

//     // Append elements to the DOM
//     document.getElementById("s-number").appendChild(taskItem);
//     document.getElementById("todo").appendChild(taskText);
//     document.getElementById("action").appendChild(actionContainer);
// }

// function createActionButtons(taskText, taskItem) {
//     const actionContainer = document.createElement("div");
//     actionContainer.classList.add("gap");

//     const editButton = document.createElement("button");
//     editButton.innerText = "Edit";
//     editButton.classList.add("edit");

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.classList.add("edit1");

//     // Delete task
//     deleteButton.addEventListener("click", () => {
//         taskItem.remove();
//         taskText.remove();
//         actionContainer.remove();
//     });

//     // Edit task
//     editButton.addEventListener("click", () => editTask(taskText, actionContainer, editButton, deleteButton));

//     actionContainer.appendChild(editButton);
//     actionContainer.appendChild(deleteButton);

//     return actionContainer;
// }

// function editTask(taskText, actionContainer, editButton, deleteButton) {
//     const editInput = document.createElement("input");
//     editInput.value = taskText.innerText;
//     taskText.replaceWith(editInput);
//     editInput.focus();

//     const saveButton = document.createElement("button");
//     saveButton.innerText = "Save";
//     saveButton.classList.add("savbut");

//     const cancelButton = document.createElement("button");
//     cancelButton.innerText = "Cancel";
//     cancelButton.classList.add("cancel");

//     // Save edited task
//     saveButton.addEventListener("click", () => {
//         if (!editInput.value.trim()) {
//             alert("Task cannot be empty!");
//             return;
//         }

//         taskText.innerText = editInput.value.trim();
//         editInput.replaceWith(taskText);
//         restoreButtons(actionContainer, editButton, deleteButton, saveButton, cancelButton);
//     });

//     // Cancel editing
//     cancelButton.addEventListener("click", () => {
//         editInput.replaceWith(taskText);
//         restoreButtons(actionContainer, editButton, deleteButton, saveButton, cancelButton);
//     });

//     actionContainer.replaceChild(saveButton, editButton);
//     actionContainer.replaceChild(cancelButton, deleteButton);
// }

// function restoreButtons(container, editButton, deleteButton, saveButton, cancelButton) {
//     container.replaceChild(editButton, saveButton);
//     container.replaceChild(deleteButton, cancelButton);
// }









let input = document.getElementById("input-value").addEventListener("input",(e)=>{
    if(e.key =="Enter"){
        getvalue();
    }
})
let buton  = document.getElementById("buton-task").addEventListener("click",getvalue())

function getvalue(){
    let input = document.getElementById("input-value")
    let value = input.value.trim();
    if(!value){
        alert("please Enter a value")
        return;
    }
    input.value =""

let createelement = document.createElement("li")
createelement.classList.add("list")

let createheading = document.createElement("h4")
createheading.innerText = value

let actionContainer = createActionButton(createelement,createheading)

let main1 = document.getElementById("s-number").appendChild(createelement)
let main2 = document.getElementById("todo").appendChild(createheading)
let main3 = document.getElementById("action").appendChild(actionContainer)




}


function createActionButton (createelement,createheading){
let actionContainer = document.createElement("div")
actionContainer.classList.add("gap")

let editbuton = document.createElement("button")
editbuton.innerText = "Edit"
editbuton.classList.add("edit")
let deletebutton = document.createElement("button")
deletebutton.innerText = "Delete"
deletebutton.classList.add("edit1")


deletebutton.addEventListener("click",()=>{
    main1.remove();
    main2.remove();
    main3.remove();
});

editbuton.addEventListener("click",()=>edittask(createheading,editbuton,deletebutton,actionContainer))

actionContainer.appendChild(editbuton)
actionContainer.appendChild(deletebutton)
return actionContainer
}


function edittask(createheading,editbuton,deletebutton,actionContainer){
    let createinput = document.createElement("input")
    createinput.value = createheading.innerText
    createheading.replaceWith(createinput)
    createinput.focus()


    let savbutton = document.createElement("button")
    savbutton.innerText = "Save"
    savbutton.classList.add("savbut")


    let cancelbutton = document.createElement("button")
    cancelbutton.innerText = "Cancel"
    cancelbutton.classList.add("cancel")

    savbutton.addEventListener("click",()=>{
        if(!createinput.value.trim()){
            alert("enter a task value")
            return
        }

        createheading.innerText = createinput.value.trim()
        createinput.replaceWith(createheading)
        restoebuton(actionContainer,editbuton,deletebutton,savbutton,cancelbutton)

    })

    cancelbutton.addEventListener("click",()=>{
        createinput.replaceWith(createheading)
        restoebuton(actionContainer,editbuton,deletebutton,savbutton,cancelbutton)
    })

    actionContainer.replaceChild(savbutton,editbuton)
    actionContainer.replaceChild(cancelbutton,deletebutton)



}

function restoebuton(container,editbuton,deletebutton,savbutton,cancelbutton){
    container.replaceChild(editbuton,savbutton)
    container.replaceChild(deletebutton,cancelbutton)
}







// let obj ={name:"Deependra",age:20}
// localStorage.setItem("obj",JSON.stringify(obj))
// let jsonString = localStorage.getItem("obj")
// let jsObject = JSON.parse(jsonString)
// console.log(jsObject)


// let obj = {
//     name:"suresh joshi",
//     age:20,
//     city:"nagaur"
// }
// localStorage.setItem("obj",JSON.stringify(obj));
// let jsonstring = localStorage.getItem("obj")
// let jsobject = JSON.parse(jsonstring)
// let abc = document.getElementById("bac")
// abc.innerText = jsobject.name


// localStorage.setItem("todo-items",JSON.stringify([
//   {
//     "serialNo":1,
//     "task":"todo task 1"
//   },
//   {
//     "serialNo":2,
//     "task":"todo task 2"
//   },
//   {
//     "serialNo":3,
//     "task":"todo task 3"
//   },
// ]))

// tasks = []
// count = 1




// let taskFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
// let tasks = taskFromLocalStorage || [];
// let count = tasks.length ? tasks[tasks.length-1].serialNo+1 : 1;

// console.log(count)

// function getTodoValue(){
//   let todoInput = document.getElementById("todo-input")
//   let task = {
//     serialNo:count,
//     taskValue: todoInput.value
//   }
//   tasks.push(task)
//   localStorage.setItem("tasks",JSON.stringify(tasks))
//   count++
// }

// function printValues(){
//   let stringTask = localStorage.getItem("tasks")

// let parsedTask = JSON.parse(stringTask)

//  let main = document.getElementById("mainContent")

 
//  parsedTask.forEach(element => {
//    let h3 = document.createElement("h3")
//   h3.innerText = element.taskValue
//   main.appendChild(h3)
//  });
// }

// printValues()




// let taskFromLocalStorage = JSON.parse(localStorage.getItem("tasks"))
// let tasks = taskFromLocalStorage || [];
// let count = tasks.length ? tasks[tasks.length-1].serialNo+1:1;

// function getvaluelocal(){
//     let input_todo = document.getElementById("input-vale")
//     let task = {
//         serialNo:count,
//         taskvalue:input_todo.value
//     }
//     tasks.push(task)
//     localStorage.setItem("tasks",JSON.stringify(tasks))
//     count++;
//     input_todo.value = ""
//     location.reload();
// }

// function printValues(){
//     let stringTask = localStorage.getItem("tasks")
//     let parsed = JSON.parse(stringTask)
//     let maincontent = document.getElementById("bac")
//     parsed.forEach(element => {
//         let h3 = document.createElement("h3")
//         h3.innerText = element.taskvalue
//         maincontent.appendChild(h3)
//         let createlem = document.createElement("h3")
//         createlem.innerText = element.serialNo
//         maincontent.appendChild(createlem)
//     });
// }
// printValues();


// let tasklocal = JSON.parse(localStorage.getItem("todos"))
// let todos = tasklocal || []
// let conuter = todos.length ? todos[todos.length-1].srno+1:1;

// function getvalue(){
//     let input_todo = document.getElementById("input-vale")
//     let todo ={
//         srno:conuter,
//         inputvalue:input_todo.value
//     }
//     todos.push(todo)
//     localStorage.setItem("todos",JSON.stringify(todos))
//     conuter++
//     input_todo.value =""
// }

