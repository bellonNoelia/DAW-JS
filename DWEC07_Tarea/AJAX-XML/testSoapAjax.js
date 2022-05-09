let peticion;
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  document.getElementById("btn").addEventListener("click", peti);
}

function peti() {
  peticion = new XMLHttpRequest();
  peticion.open("GET","https://api.openweathermap.org/data/2.5/weather?&mode=xml&lat=43.6797100&lon=-8.0208800&appid=dc7981aec1f47398a6c8627724b52ea1");
  peticion.send();
  peticion.addEventListener("load", cargada);
}

function cargada() {
  let doc = peticion.responseXML;
  let box=document.createElement("div");
  let name=document.getElementById("nombre");
  name.innerHTML= doc.getElementsByTagName("city")[0].getAttribute("name");
  let coord=document.getElementById("coord");
  coord.innerHTML="Longitud "+ doc.getElementsByTagName("coord")[0].getAttribute("lon") + " Latitud "+doc.getElementsByTagName("coord")[0].getAttribute("lat");
  document.getElementById("datos").appendChild(box);

  document.getElementById("datos").style.display="block";


  
}
