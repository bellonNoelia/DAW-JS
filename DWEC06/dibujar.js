SIZETABLE = 30;
//creamos la variable pincelActivado inicialmente a false;
let pincelActivado = false;
document.addEventListener("DOMContentLoaded", ready);
function ready() {
  dibujarTablero();
  generarEventosCambioColor();
}
function dibujarTablero() {
  let zonaDibujo = document.getElementById("zonadibujo");
  let table = document.createElement("table");
  table.classList.add("tablerodibujo");
  zonaDibujo.appendChild(table);

  for (let i = 0; i < SIZETABLE; i++) {
    //crear una fila (tr)
    let fila = document.createElement("tr");
    for (let j = 0; j < SIZETABLE; j++) {
      //crear columna (td)
      let columna = document.createElement("td");
      columna.classList.add("tablerodibujo");
      columna.id = "celda_" + (i * SIZETABLE + j + 1);
      //añadimos el evento click a la celda y que llame a la función estadoPincel.
      columna.addEventListener("click", estadoPincel);
      //añadimos el evento mouseover a la celda y que llame a la función pintar.
      columna.addEventListener("mouseover", pintar);
      //añadimos la columna(td) a la fila
      fila.appendChild(columna);
    }
    //cerrar la fila (tr) y añadir a tabla
    table.appendChild(fila);
  }
}
//Generamos un evento para cada uno de los colores
function generarEventosCambioColor() {
  colores = document
    .getElementById("paleta")
    .getElementsByTagName("tr")[0]
    .getElementsByTagName("td");

  for (let i = 0; i < colores.length; i++) {
    colores[i].addEventListener("click", cambioColor);
  }
}

function cambioColor(ev) {
  //Solo puede estar un color seleccionado por ello cogemos el de la posición 0 para eliminar el seleccionado
  document
    .getElementsByClassName("seleccionado")[0]
    .classList.remove("seleccionado");
  ev.target.classList.add("seleccionado");
}

function estadoPincel(event) {
  if (pincelActivado) {
    //Si el pincel está activado se pasa la variable a false;
    pincelActivado = false;
    //Modificamos valor del elemento con iD pincel.
    document.getElementById("pincel").firstChild.nodeValue =
      "PINCEL DESACTIVADO.";
  } else {
    //Si el pincel no está activado se pasa la variable a true;
    pincelActivado = true;
    //Modificamos valor del elemento con iD pincel.
    document.getElementById("pincel").firstChild.nodeValue = "PINCEL ACTIVADO.";
    //Para pintar la celda en la que hacemos click llamamos a pintar.
    pintar(event);
  }
}
function pintar(event) {
  if (pincelActivado) {
    //Si el pincel está activado accedemos a la clase del color seleccionado.
    color = document.getElementsByClassName("seleccionado")[0].className;
    //Realizamos substring para quedarnos solo con la clase color.
    color = color.substring(0, 6);
    //Le añadimos la clase
    event.target.setAttribute("class", `tablerodibujo ${color}`);
  }
}
