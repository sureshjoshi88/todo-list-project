
let input = document.getElementById("input-value")
input.addEventListener("keypress",(e)=>{
    if(e.key =="Enter"){
        getvalue();
    }
})
function getvalue(){
    if(input.value.trim()==""){
        alert("please enter a value")
        return;
    }else{

        let value = input.value
        input.value = ""
        let maindiv1 = document.getElementById("s-number")
        let elements1 = document.createElement("li");
        maindiv1.appendChild(elements1)
        elements1.classList.add("list")
        let maindiv2 = document.getElementById("todo")
        let elements2 = document.createElement("h4")
        elements2.innerText = value
        maindiv2.appendChild(elements2)
        let mainFordiv3 = document.createElement("div")
        mainFordiv3.classList.add("gap")
        let maindiv3 = document.getElementById("action")
        let elements3 = document.createElement("button")
        elements3.innerText = "Edit"
        elements3.classList.add("edit")
        mainFordiv3.appendChild(elements3)
        let elements4 = document.createElement("button")
        elements4.innerText = "Delete"
        elements4.classList.add("edit1")
        mainFordiv3.appendChild(elements4)
        maindiv3.appendChild(mainFordiv3)
        elements4.addEventListener("click",()=>{
            maindiv1.removeChild(elements1)
            maindiv2.removeChild(elements2)
            maindiv3.removeChild(mainFordiv3)
        })

        elements3.addEventListener("click",()=>{
            let createInput = document.createElement("input")
            maindiv2.removeChild(elements2)
            maindiv2.appendChild(createInput)
            let savButton = document.createElement("button")
            let cancalButon = document.createElement("button")
            cancalButon.innerText = "Cancel"
            cancalButon.classList.add("cancel")
            mainFordiv3.removeChild(elements4)
            mainFordiv3.appendChild(cancalButon)
            savButton.innerText = "Save"
            savButton.classList.add("savbut")
            mainFordiv3.removeChild(elements3)
            mainFordiv3.appendChild(savButton)
            savButton.addEventListener("click",()=>{
                maindiv2.removeChild(createInput)
                let heading_5 = document.createElement("h5")
                heading_5.innerText = createInput.value
                maindiv2.appendChild(heading_5)
                mainFordiv3.removeChild(cancalButon)
                mainFordiv3.removeChild(savButton)
                mainFordiv3.appendChild(elements3)
                mainFordiv3.appendChild(elements4)                
            })

            cancalButon.addEventListener("click",()=>{
                maindiv2.removeChild(createInput)
                maindiv2.appendChild(elements2)
                mainFordiv3.removeChild(cancalButon)
                mainFordiv3.removeChild(savButton)
                mainFordiv3.appendChild(elements3)
                mainFordiv3.appendChild(elements4)
            })

        })

    }   
    }
    
let butons = document.getElementById("buton-task")
butons.addEventListener("click",()=>{
    getvalue();
})




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


let datagetloca = JSON.parse(localStorage.getItem("tasks"))
let tasks = datagetloca || [];
let count = tasks.length ? tasks[tasks.length-1].serialNo+1:1;


function getinpvalue(){
    let inputvlauses = document.getElementById("input-vale")
    let task = {
        serialNo:count,
        taskvalue:inputvlauses.value
    }
    tasks.push(task)
    localStorage.setItem("taska",JSON.stringify(tasks))
    inputvlauses.value = ""
    location.reload();
}
function privalues(){
    let data = localStorage.getItem("tasks")
    let datapars = JSON.parse(data)
    let maincontent = document.getElementById("bac")
    datapars.forEach(element =>{
    let heading3 = document.createElement("h3")
    heading3.innerText  =element.taskvalue
    maincontent.appendChild(heading3)
    let heads3 = document.createElement("h3")
    heads3.innerText = element.serialNo
    maincontent.appendChild(heads3)
    })
}
privalues();