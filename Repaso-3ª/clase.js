class Alumno {
  constructor(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
  setNombre(n) {
    this.nombre = n;
  }
  getNombre() {
    return this.nombre;
  }
  setApellido(a) {
    this.apellido = a;
  }
  getApellido() {
    return this.apellido;
  }
  setEmail(e) {
    this.email = e;
  }
  getEmail() {
    return this.email;
  }
}
class Aula {
  constructor(numero, piso, capacidad) {
    this.numero = numero;
    this.piso = piso;
    this.capacidad = capacidad;
    this.alumnos = new Array();
  }
  setNumero(n) {
    this.numero = n;
  }
  getNumero() {
    return this.numero;
  }
  setPiso(p) {
    this.piso = p;
  }
  getPiso() {
    return this.piso;
  }
  setCapacidad(c) {
    this.capacidad = c;
  }
  getCapacidad() {
    return this.capacidad;
  }

  anadirAlumno(alumno) {
    this.alumnos.push(alumno);
  }

  anadirAlumnos(alumnos) {
    for (let i; i < alumnos.length; i++) {
      this.anadirAlumno(alumnos[i]);
    }
  }
  anadirAlumnos(alumnos) {
    alumnos.forEach((item, index, objeto) => {
      this.anadirAlumno(item);
    });
  }
  pintar() {
    let color = ["red", "grey", "yellow", "blue", "cyan", "orange"];
    let container = document.getElementById("container");
    container.style.width = "600px";
    container.style.height = "600px";
    container.style.border = "solid 5px black";
    container.style.margin = "0 auto";
    let datos = document.createElement("p");
    datos.innerHTML=aula.numero + " "+ aula.capacidad
    container.appendChild(datos);
      for (let i = 0; i < aula.alumnos.length; i++) {
        let alumno = document.createElement("div");
        alumno.style.width = "180px";
        alumno.style.height = "180px";
        alumno.style.border ="solid 5px " + color[Math.floor(Math.random() * 6)];
        alumno.style.display = "inline-block";
        alumno.style.margin = "5px";
        let datosAl = document.createElement("p");
        datosAl.innerHTML=aula.alumnos[i].nombre+" "+aula.alumnos[i].apellido;
        alumno.appendChild(datosAl);
        container.appendChild(alumno);
      }
 

    document.getElementById("boton").removeEventListener("click", aula.pintar);
  }
}

let a1 = new Alumno("Pepe", "Perez", "pepePerez@gmail.com");
let a2 = new Alumno("Alicia", "Alonso", "aliciaAlonso@gmail.com");
let a3 = new Alumno("David", "Martínez", "davidMartinez@gmail.com");
let a4 = new Alumno("María", "Rodríguez", "mariaRodriguez@gmail.com");

let aula = new Aula("Aula 1", 1, 25);
aula.anadirAlumnos([a1, a2, a3, a4]);
function ready() {
  document.getElementById("boton").addEventListener("click", aula.pintar);
}

document.addEventListener("DOMContentLoaded", ready);
