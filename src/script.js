// function getvalue(){
//     let input = document.getElementById("input-value");
//     let value = input.value
//     let container = document.getElementById("main-conatiner")
//     let containerChild = document.createElement("div")
//     container.appendChild(containerChild)
//     containerChild.classList.add("flex")
//     let child1 = document.createElement("div")
//     let elements1 = document.createElement("li")    
//     elements1.innerText = value
//     child1.appendChild(elements1)
//     containerChild.appendChild(child1)    
//     let child2 = document.createElement("div")
//     let elements2 = document.createElement("li")    
//     elements2.innerText = value
//     child2.appendChild(elements2)
//     containerChild.appendChild(child2) 
//     let child3 = document.createElement("div")
//     child3.classList.add("gap")
//     let elements3 = document.createElement("button")
//     elements3.classList.add("edit")
//     elements3.innerText = "Edit"
//     child3.appendChild(elements3)
//     containerChild.appendChild(child3)
//     let elements4 = document.createElement("button")
//     elements4.innerText = "Delate"
//     child3.appendChild(elements4)
//     containerChild.appendChild(child3)
  

// }
// let button = document.getElementById("ad-button")
// button.addEventListener("click",()=>{
//     getvalue();
// })


function getvalue(){
    let input = document.getElementById("input-value")
    let value = input.value
    let maindiv1 = document.getElementById("s-number")
    let elements1 = document.createElement("li");
    maindiv1.appendChild(elements1)
    elements1.classList.add("list")
    let maindiv2 = document.getElementById("todo")
    let elements2 = document.createElement("h5")
    elements2.innerText = value
    maindiv2.appendChild(elements2)


}
let butons = document.getElementById("buton-task")
butons.addEventListener("click",()=>{
    getvalue();
})