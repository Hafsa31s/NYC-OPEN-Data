let data, output, result;
async function init(){
  
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
}

let subdata;
function ByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  for(let i = 0; i < data.length; i++){
    let market = data[i];
    if(market.borough == "Queens"){
      q++;
    }else if(market.borough == "Manhattan"){
      m++;
    }else if(market.borough == "Brooklyn"){
      bk++;
    }else if(market.borough == "Bronx"){
      bx++;
    }else if(market.borough == "Staten Island"){
      s++;
    }
  }
  let chartData = [
    ["QUEENS",q],
    ["Manhatta",m],
    ["Brooklyn", bk],
    ["Bronx", bx],
    ["Staten Island", s]
  ]
  
  let chartType = get("chartType").value;
  
  displayChart(chartData,"output",chartType)
}





