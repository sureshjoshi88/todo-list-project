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


let input = document.getElementById("input-value")
input.addEventListener("keypress",(e)=>{
    if(e.key =="Enter"){
        getvalue();
    }
})
function getvalue(){
    if(input.value==""){
        alert("please enter a value")
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
            valueForinput = createInput.value
            maindiv2.removeChild(elements2)
            maindiv2.appendChild(createInput)
            let savButton = document.createElement("button")
            savButton.innerText = "Save"
            savButton.classList.add("savbut")
            mainFordiv3.removeChild(elements3)
            mainFordiv3.appendChild(savButton)
            savButton.addEventListener("click",()=>{
                maindiv2.removeChild(createInput)
                let heading_5 = document.createElement("h5")
                heading_5.innerText = createInput.value
                maindiv2.appendChild(heading_5)
                console.log(heading_5);
                
            })
        })
    }
    }
let butons = document.getElementById("buton-task")
butons.addEventListener("click",()=>{
    getvalue();
})