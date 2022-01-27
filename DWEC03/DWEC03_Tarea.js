//Realizar una aplicación en JavaScript que realice lo siguiente:

/*Función unidad3():
Abra una nueva ventana no redimensionable. Deberá comprobar si la ventana ya existe.
Realice una llamada a la función datosVentana al cabo de 5 segundos.*/

let nuevaVentana=null;
function unidad3(){
   if(nuevaVentana==null || nuevaVentana.closed){//Comprobamos si existe o si está cerrada.
       nuevaVentana=window.open("", "", "width=600,height=700,resizable=false"); //resizable=false' NO FUNCIONA
       setTimeout(datosVentana(),5000);
   }
   else{
       nuevaVentana.focus(); //Si existe le pasamos el focus.
   }
  
}


/*Función datosVentana(): trabajará sobre la nueva ventana en la que mostrará la información que se indica
Escribir en la nueva ventana <h3>Ejemplo de Ventana creada en el navegador (nombre en código): XXXXXXXXXX </h3>
URL Completa: XXXXX
Protocolo utilizado: XXXXX
Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
Java SI disponible en esta ventana, o bien.
Java NO disponible en esta ventana.*/
function datosVentana(){
    let textoN="";
    textoN+=(`<h3>Ejemplo de Ventana creada en el navegador: ${navigator.appCodeName}.<h3><br>`);//appCodeName está en desuso siempre dice Mozilla
    textoN+=(`URL Completa: ${location.href}.<br> `);
    textoN+=(`Protocolo utilizado: ${location.protocol}.<br> `);
    let java;
    if(navigator.javaEnabled()){ //javaEnable está en desuso
        java="SI";
    }else{
        java="NO";
    }
    textoN+=(`Java  ${java} disponible en esta ventana.<br> `);
    return nuevaVentana.document.write(textoN);
}


//Función creada para continuar en la ventana principal
function ventanaPrincipal(){

/*Y ahora fuera del código de la función que siga haciendo lo siguiente:
Que escriba en la ventana principal <h1>TAREA DWEC03</h1><hr>
Que solicite: introduzca su nombre y apellidos.
Que solicite: introduzca DIA de nacimiento.
Que solicite: introduzca MES de nacimiento.
Que solicite: introduzca AÑO de nacimiento.*/
let nombreApellidos=prompt("Introduce tu nombre y apellidos: ");
let mayus=nombreApellidos.toUpperCase();
let dia=+prompt("Introduce el día de tu cumpleaños: ");
let mes=+prompt("Introduce el número de mes de tu cumpleaños: ")-1;
let ano=+prompt("Introduce el número de mes de tu cumpleaños: ");




/*Una vez solicitados esos datos imprimirá en la ventana principal:*/
let texto="";
//Buenos dias XXXXX
texto+=`Buenos días ${nombreApellidos}<br><br>`;

//Tu nombre tiene XX caracteres, incluidos espacios.
texto+=`Tu nombre tiene ${nombreApellidos.length} caracteres, incluidos espacios.<br><br>`;

//La primera letra A de tu nombre está en la posición: X
texto+=`La primera letra A de tu nombre está en la posición: ${mayus.indexOf('A')+1}.<br><br>`;//Indicamos +1 para contar desde 1.

//La última letra A de tu nombre está en la posición: X
texto+=`La última letra A de tu nombre está en la posición: ${ mayus.lastIndexOf('A')+1}.<br><br>`;

//Tu nombre menos las 3 primeras letras es: XXXXXXXX
texto+=`Tu nombre menos las 3 primeras letras es: ${nombreApellidos.substring(3,nombreApellidos.lenght)}.<br><br>`;

//Tu nombre todo en mayúsculas es: XXXXXXXX
texto+=`Tu nombre todo en mayúsculas es ${mayus}.<br><br>`;

//Tu edad es: XX años.
function edad(){
    let hoy=new Date ();
    let edad;
    if(mes<hoy.getMonth()){
        edad=hoy.getFullYear()-ano;
        return edad;
    }else{
       edad=(hoy.getFullYear()-ano)-1;
        return edad;
    }
}
  let anos=edad();
  texto+=`Tu edad es: ${anos} años.<br><br>`;


//Naciste un feliz DIADESEMANAENLETRA del año XXXX.
let cumple=new Date(ano,mes,dia);
switch (cumple.getDay()) {
    case 0:
        day = "Domingo";
        break;
    case 1:
        day = "Lunes";
        break;
    case 2:
        day = "Martes";
        break;
    case 3:
        day = "Miércoles";
        break;
    case 4:
        day = "Jueves";
        break;
    case 5:
        day = "Viernes";
        break;
    case 6:
        day = "Sábado";
        break;
}
texto+=`Naciste un feliz ${day} del año ${cumple.getFullYear()}.<br><br>`;
        
//El coseno de 180 es: XXXXXXXXXX
let coseno=Math.cos(180);
let cos=Math.cos(180 * Math.PI / 180); 
texto+=`El coseno de 180 es: ${cos} .<br><br>`;
//Math.cos(180 * Math.PI / 180); Para calcular coseno hay que pasar a radianes.



//El número menor de (5,77,42,75,350,19) es: XX*/
let  numeros=new Array (5,77,42,75,350,19);//Guardamos los números en un array.
let menor=numeros[0];// En lugar de menor=100 por que Y si todos fueran mayores de 100, te diría que el menor es 100,
//cuando no existe en el array. Podrías por ejemplo asignarle la primera posición del array y empezar el bucle en el índice 1...
for(i=0;i<numeros.length;i++){ //Recorremos el array y comparamos si numero en esa posicion es menor que la variable menor.
    if(numeros[i]<menor){
        menor=numeros[i];
    }
}

texto+=`El número menor de (5,77,42,75,350,19) es: ${menor} .<br><br>`;

//Ejemplo de número al azar del 1 al 100: XXXXXXXXXX
function random(){
       let aleatorio=Math.random()*(101-1)+1;//de este modo están incluídos el max y el min.
       return aleatorio;
   }
let numeroAleatorio=random();
texto+=`Ejemplo de número al azar del 1 al 100: ${numeroAleatorio} .<br><br>`;
document.write(texto);
}

document.getElementById("abrir").onclick=unidad3;
document.getElementById("contin").onclick=ventanaPrincipal;

