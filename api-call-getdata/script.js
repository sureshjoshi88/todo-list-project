let mainROw = document.getElementById("main-row")
let obj = {}

function createrates(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((data)=>{
    return data.json()
    })
    .then((data)=>{
        obj = data.bpi

        mainROw.innerHTML = `
        <div class="col-12 mt-2">
            <h3 class="text-center" >Bitcoin </h3>
        </div>

        <div class="col-lg-4 mt-3" >
            <div class="card px-3 py-3" >
                <h4>${obj.USD.code}</h4>
                <p>${obj.USD.symbol} <span>${obj.USD.rate}</span></p>
                <p>${obj.USD.description}</p>
                <p>${obj.USD.rate_float}</p>

            </div>
        </div>
        <div class="col-lg-4 mt-3" >
            <div class="card px-3 py-3" >
                <h4>${obj.GBP.code}</h4>
                <p>${obj.GBP.symbol}<span>${obj.GBP.rate}</span></p>
                <p>${obj.GBP.description}</p>
                <p>${obj.GBP.rate_float}</p>

            </div>
        </div>
        <div class="col-lg-4 mt-3" >
            <div class="card px-3 py-3" >
                <h4>${obj.EUR.code}</h4>
                <p>${obj.EUR.symbol}<span>${obj.EUR.rate}</span></p>
                <p>${obj.EUR.description}</p>
                <p>${obj.EUR.rate_float}</p>
            </div>
        </div>`

    })
    
    .catch((err)=>{
        console.log(err);
        mainROw.innerHTML = "<h2>something went wrong plesase try again</h2>";
        
    })

}
setTimeout(()=>{
    createrates();

},2000)