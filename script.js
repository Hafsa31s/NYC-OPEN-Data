let data;
async function init(){

  let link = "data.json"
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";
  for(let i = 0; i < data.length; i+=1){
    let market = data[i];
    build += `<div class="fitted card">
                    <h3>${market.marketname}</h3>
                    <hr>
                    <p>${market.borough}</p>
                    <p>${market.streetaddress}</p>
                    <p>${market.year}</p>
                    <hr>
                    <p>${market.hoursoperations}</p>
                </div>`   
  }
  output.innerHTML = build;
}

function filterByBorough() {
    let output = document.getElementById("output");
    let user_borough = document.getElementById("borough");
    let result = document.getElementById("result");
    let build = "";
    let ct = 0;

    for(let i = 0; i < data.length; i+=1){
        let market = data[i];
 console.log(market.borough + " " + user_borough.value )
        if (market.borough == user_borough.value){
            build += `<div class="fitted card">
                    <h3>${market.marketname}</h3>
                    <hr>
                    <p>${market.borough}</p>
                    <p>${market.streetaddress}</p>
                    <p>${market.year}</p>
                    <hr>
                    <p>${market.hoursoperations}</p>
                </div>`;
       ct += 1;
     }
    }
result.innerHTML = `${ct} Results found.`;
output.innerHTML = build;
}
function filterByMarket(){
  let output = document.getElementById("output");
  let user_market = document.getElementById("market");
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let market = data[i];
    console.log(market.marketname + " " + user_market.value )
    if(market.marketname == user_market.value){
     build += `<div class="fitted card">
                    <h3>${market.marketname}</h3>
                    <hr>
                    <p>${market.borough}</p>
                    <p>${market.streetaddress}</p>
                    <p>${market.year}</p>
                    <hr>
                    <p>${market.hoursoperations}</p>
                </div>`;
        ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

