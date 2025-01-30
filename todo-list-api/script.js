let main = document.getElementById("main")


let todos = []

function printvalue(){
let div = document.createElement("div")

let filtertodos = todos.map((value,key)=>{
    let h3 = document.createElement("h3")
    let hr = document.createElement("hr")
    h3.innerText = value.title
    div.appendChild(h3)
    div.appendChild(hr)

})
main.appendChild(div)
}

function getvalue(){
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

getvalue();