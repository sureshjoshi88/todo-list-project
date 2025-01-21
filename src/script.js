function getvalue(){
    let input = document.getElementById("input-value");
    let value = input.value
    let container = document.getElementById("main-conatiner")
    let containerChild = document.createElement("div")
    container.appendChild(containerChild)
    let child1 = document.createElement("div")
    let child2 = document.createElement("div")
    let child3 = document.createElement("div")
    containerChild.classList.add("flex")
    let elements1 = document.createElement("li")
    // elements1.style.listStyle = "decimal"
    console.log(elements1);
    
    child1.appendChild(elements1)
    let num = document.getElementById("num")
    elements1.innerText = 1

}
let button = document.getElementById("ad-button")
button.addEventListener("click",()=>{
    getvalue();
})