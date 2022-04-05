SIZETABLE=30;
document.addEventListener("DOMContentLoaded",ready);
function ready(){
dibujarTablero();
generarEventosCambioColor();
}
function dibujarTablero(){
    let zonaDibujo=document.getElementById("zonadibujo");
    let table=document.createElement("table");
    table.classList.add("tablerodibujo");
    zonaDibujo.appendChild(table);
    
    for(let i=0;i<SIZETABLE;i++){
        //crear una fila (tr)
        let fila=document.createElement("tr");
        for(let j=0;j<SIZETABLE;j++){
        //crear columna (td)
        let columna=document.createElement("td");
        columna.classList.add("tablerodibujo");
        columna.id="celda_"+(i*SIZETABLE+j+1);
        //añadimos la columna(td) a la fila
        fila.appendChild(columna);
        }
        //cerrar la fila (tr) y añadir a tabla
        table.appendChild(fila);
    }
}
//Generamos un evento para cada uno de los colores
function generarEventosCambioColor(){
    colores=document.getElementById("paleta").
                    getElementsByTagName("tr")[0].
                    getElementsByTagName("td");
    
    for(let i=0;i<colores.length;i++){
        colores[i].addEventListener("click",cambioColor);
    }
}

function cambioColor(ev){
    //Solo puede estar un color seleccionado por ello cogemos el de la posición 0 para eliminar el seleccionado
    document.getElementsByClassName("seleccionado")[0].classList.remove("seleccionado");
    ev.target.classList.add("seleccionado");
}

