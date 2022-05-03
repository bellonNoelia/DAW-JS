let peticion;
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  document.getElementById("btn").addEventListener("click", peti);
}

function peti() {
  peticion = new XMLHttpRequest();
  peticion.open("GET", "");
  peticion.send();
  peticion.addEventListener("load", cargada);
}

function cargada() {
  //console.log(peticion);
  //console.log(peticion.response);
  // console.log(peticion.responseText);
  let doc = peticion.responseXML;
  let box=document.createElement("div");
  let name=document.createElement("label");
  name.innerHTML= doc.getElementsByTagName("city")[0].getAttribute("name");
  //console.log(doc.getElementsByTagName("city")[0]);
  box.appendChild(name);
  document.getElementById("datos").appendChild(box);

  //document.getElementById("datos").style.display="block";


  
}
