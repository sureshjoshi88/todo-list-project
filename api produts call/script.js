
let row = document.getElementById("row")




function createProduct(data){
    //  <div class="col-lg-4 col-md-6 col-sm-12">
    let screenSizeDiv = document.createElement("div")
    screenSizeDiv.classList.add('col-lg-4','col-md-6','col-sm-12')

    // <div class="card" style="width: 100%;" >
    let cardDiv = document.createElement("div")
    cardDiv.classList.add('card','w-100',"p-2","pt-3")
    cardDiv.style.height = "100%"

    // <img src="" style="height: 200px; object-fit: contain;" class="card-img-top" alt="...">
    let productImg = document.createElement("img")
    productImg.src = data.image ? data.image : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
    productImg.style.height = "200px"
    productImg.style.objectFit = "contain"
    productImg.classList.add('card-img-top')
    productImg.alt = "product image"


    // <div class="card-body">
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')

    // <h5 class="card-title"></h5>
    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = data.title ? data.title : "No Price found";

    // <p class="card-text" style="color: gray;" ></p>
    let cardText = document.createElement("p")
    cardText.style.color = "gray";
    cardText.classList.add('card-text')
    cardText.innerText = data.description ? data.description : "no description found"


    // <p>₹ 109.95</p> 
    let price = document.createElement("p")
    price.innerText = "₹ " + data.price ? data.price : "no price found"

    // <p>⭐ 3.9</p>
     let rating = document.createElement("p")
     rating.innerText = "⭐ " + data.rating.rate

     row.appendChild(screenSizeDiv)
    screenSizeDiv.appendChild(cardDiv)
    cardDiv.appendChild(productImg)
    cardDiv.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardText)
    cardBody.appendChild(price)
    cardBody.appendChild(rating)
}


function fetchProducts(){
    fetch('https://fakestoreapi.com/products')
    .then((data)=>{
        return data.json()
    })
    .then((data)=>{
        console.log(data)
        let finalOutput = data.map((value,key)=>{
            createProduct(value)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

fetchProducts()
