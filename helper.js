
function byId(id){
  return document.getElementById(id);
}
function showMap(latitude, longitude){
  let location = [latitude, longitude];
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);
  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);

}
function card( market ){ 

  let location = [market.latitude, market.longitude];
  let mapButton = "";
  if(market.latitude && market.longitude){
  mapButton = `<input type="button" onclick="showMap(${market.latitude}, ${market.longitude})" value="Map">`
  }
  let build = `<div class="card fitted">
                    <h3>${market.marketname}</h3>
                    <hr>
                    <p>${market.borough}</p>
                    <p>${market.streetaddress}</p>
                    <p>${market.year}</p>
                    <hr>
                    <p>${market.hoursoperations}</p>
                  ${mapButton}
              </div>`;
  return build;
}

function get(id){
  return document.getElementById(id);
}
function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}