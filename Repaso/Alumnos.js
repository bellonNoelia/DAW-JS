alumnos = [];
class Alumnos {
  //Nombre
  //Apellidos
  //edad
  //nif
  //email
  constructor(nombre, apellidos, edad, nif, email) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.nif = nif;
    this.email = email;
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre=nombre;
  }

  getNif() {
    return this.nif;
  }
  setNif(nif) {
      if(validarNif(nif)){
        this.nif=nif;
      }else{
          console.error("DNI erróneo")
      }
    
  }
}
function nuevoAlumno() {
    
    let nuevoAlumno= new Alumnos(document.getElementById("nombre").value,
    document.getElementById("apellidos").value,
    document.getElementById("edad").value,
    document.getElementById("nif").value,
    document.getElementById("email").value);

    alumnos.push(nuevoAlumno);
}

function ordenarBurbuja(){
    for(let i=0;i<alumnos.length-1;i++){
        if(alumnos[i].edad>=alumnos[i+1].edad){
            let temp=alumnos[i];
            alumnos[i]=alumnos[i+1];
            alumnos[i+1]=temp;
        }
    }
    for(let i=alumnos.length-1;i<0;i--){
        if(alumnos[i].edad<=alumnos[i-1].edad){
            let temp=alumnos[i];
            alumnos[i]=alumnos[i-1];
            alumnos[i-1]=temp;
        }
    }
}

function validarNif(nif){
    let patron= new RegExp(/^[0-9]{8}-[A-Za-z]$/);
    let valido=patron.test(nif);
    return valido;
}

function ready(){
    document.getElementById("nuevo").addEventListener("click",nuevoAlumno);
    document.getElementById("ord").addEventListener("click",ordenarBurbuja);

}
document.addEventListener("DOMContentLoaded",ready);
