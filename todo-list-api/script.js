let main = document.getElementById("main")


let todos = []

function printvalue(){
let div = document.createElement("div")

let filtertodos = todos.map((value,key)=>{
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")
    let hr = document.createElement("hr")
    h3.innerText = value.title
    h4.innerText = value.title
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(hr)

})
main.appendChild(div)
}

function getvalues(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((data)=>{
        return data.json()
    }).then((data)=>{
        todos = data
        printvalue();
    })
    .catch((err)=>{
        console.log(err);
    })
}

getvalues();