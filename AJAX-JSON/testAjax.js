let peticion;
document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  document.getElementById("btn").addEventListener("click", peti);
}

function peti() {
  peticion = new XMLHttpRequest();
  peticion.open("GET", "https://reqres.in/api/users?page=2");
  peticion.send();
  //document.getElementById("datos").innerHTML = "Cargando...";
  peticion.addEventListener("load", cargada);
 
}

function cargada() {
  //console.log(peticion);
  //console.log(peticion.response);
  // console.log(peticion.responseText);
  //  document.getElementById("datos").innerHTML = peticion.responseText;
  //console.log(JSON.parse(peticion.response));
  let respuesta = JSON.parse(peticion.response);
  for (let i = 0; i < respuesta.data.length; i++) {
    let paisa = respuesta.data[i];
    let box = document.createElement("div");
    box.classList.add("retrato");
    let img = document.createElement("img");
    img.setAttribute("src", paisa.avatar);
    let nombre = document.createElement("p");
    nombre.innerHTML = paisa.first_name + " " + paisa.last_name;
    let email = document.createElement("p");
    email.innerHTML = paisa.email;
    box.appendChild(img);
    box.appendChild(nombre);
    box.appendChild(email);

    document.getElementById("datos").appendChild(box);
  }
}
