class Alumno {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}
class Aula {
  constructor(nombre, piso, capacidad) {
    this.nombre = nombre;
    this.piso = piso;
    this.capacidad = capacidad;
    this.alumnos = new Array();
  }
  agregarAlumnos(Alumno) {
    this.alumnos.push(Alumno);
  }
}

let aulaA = new Aula("A", 1, 15);
let alumno1=new Alumno("Mario", "Pérez","mperez@gmail.com");
let alumno2=new Alumno("Laura", "López","lauralpz@gmail.com");
let alumno3=new Alumno("Álex", "Martínez","alexmtz@gmail.com");
let alumno4=new Alumno("Sara", "García","saragarcia@gmail.com");
aulaA.agregarAlumnos(alumno1);
aulaA.agregarAlumnos(alumno2);
aulaA.agregarAlumnos(alumno3);
aulaA.agregarAlumnos(alumno4);

let aulaB = new Aula("B", 1, 10);
let alumnob1=new Alumno("Lucas", "Rodríguez","lucasrdz@gmail.com");
let alumnob2=new Alumno("Marta", "Pardo","martap@gmail.com");
let alumnob3=new Alumno("Paula", "Suárez","paulasuarez@gmail.com");
let alumnob4=new Alumno("Pablo", "García","pablogarcia@gmail.com");
aulaB.agregarAlumnos(alumnob1);
aulaB.agregarAlumnos(alumnob2);
aulaB.agregarAlumnos(alumnob3);
aulaB.agregarAlumnos(alumnob4);
aulas=new Array();
aulas.push(aulaA);
aulas.push(aulaB);
document.addEventListener("DOMContentLoaded",ready);
function ready(){
    let btn =document.getElementById("boton");
    btn.addEventListener("click",pintar);
}
function pintar(){
    let color=["cyan","green","red","yellow","pink","orange"];
    let container=document.getElementById("container");
    for(let i=0;i<aulas.length;i++){
        let div=document.createElement("div");
        div.style.width="600px";
        div.style.height="600px";
        div.style.border="solid 5px black"; 
        div.style.margin = "0 auto";
        let p=document.createElement("p");
        p.innerHTML=aulas[i].nombre + " capacidad: "+aulas[i].capacidad;
        div.appendChild(p);
        for(let j=0;j<aulas[i].alumnos.length;j++){
            let alumno = document.createElement("div");
            alumno.style.width = "180px";
            alumno.style.height = "180px";
            alumno.style.border ="solid 5px " + color[Math.floor(Math.random() * 6)];
            alumno.style.display = "inline-block";
            alumno.style.margin = "5px";
            let datosAl = document.createElement("p");
            datosAl.innerHTML=aulas[i].alumnos[j].nombre+" "+aulas[i].alumnos[j].apellido;
            alumno.appendChild(datosAl);
            div.appendChild(alumno);
            container.appendChild(div);
        }
    }
   
}