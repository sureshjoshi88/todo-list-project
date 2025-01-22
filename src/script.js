
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
