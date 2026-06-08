let datamap = [];
let mapObj;
async function init(){
  let link = "data.json";
let info = await fetch(link);
datamap = await info.json();
  let cards_output = byId("cards_output");
  let build = "";
  for(let i = 0; i < datamap.length; i++){
    build += card(datamap[i]);
  }
  cards_output.innerHTML = build;
}