let peticion;
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  document.getElementById("btn").addEventListener("click", peti);
}

function peti() {
  peticion = new XMLHttpRequest();
  peticion.open(
    "GET","https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  peticion.send();
  peticion.addEventListener("load", cargada);
}

function cargada() {
  let respuesta = JSON.parse(peticion.response);
  for (let i = 0; i < respuesta.results.length; i++) {
    let box = document.createElement("div");
    let nombre = document.createElement("p");
    nombre.innerHTML = (i + 1) + " " + respuesta.results[i].name;
    box.appendChild(nombre);

    document.getElementById("datos").appendChild(box);
  }
}
