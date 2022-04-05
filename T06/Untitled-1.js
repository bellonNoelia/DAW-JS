document.addEventListener("DOMContentLodaded", ready);

function ready(){
    document.getElementById("genTab").addEventListener("click", generarTablero);
    document.getElementById("despFich").addEventListener("click", desplegarFichas);
}

function generarTablero(){
    let body=document.body;
    let tablero=document.createElement("div");
    tablero.id="tablero";
    tablero.style.height="512px";
    tablero.style.width="512px";
    tablero.style.border="10 px solid red";

    body.appendChild(tablero);

    for (let i=0; i<64;i++){
        casilla.id="casilla_"+([i]+1);
        casilla.style.height="64px";
        casila.style.width="64px";
        casilla.style.float="left";
        casilla.style.backgroundColor=parseInt((i/8)+i)%2==0?"white":"black";

        tablero.appendChild(casilla);
    }
}

document.getElementById("despFich").addEventListener("click",()=>{
    let casillas=document.getElementById("tablero").childNodes;
    for(let i=0; i<64;i++){
        if((i<24 || i>40) && parseInt(i/8+i)%2==0){
            let ficha=document.createElement("div");
            ficha.id="ficha_"+(i+1)
            ficha.style.height="32px";
            ficha.style.backgroundColor= (i<24)?"red":"blue";
            ficha.style.width="32px";
            ficha.style.float="left";
            ficha.style.margin="16px 0 0 16px";
            ficha.style.borderRadius="50px";
            casillas[i].appendChild(ficha);
        }

        }
    })



