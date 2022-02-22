function validarNombreApellidos() {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;

  let patron = new RegExp(/^[A-Z-a-z]+$/);
  correcto = patron.test(nombre) && patron.test(apellidos);
  if (!correcto) {
    document.getElementById("errores").innerHTML = "Formato de nombre y/o apellidos incorrecto.";
    nombre.focus();
    apellidos.focus();
    return false;
  }
  return true;
}

function pasarMayusculas(event) {
  let elemento = event.target;
  elemento.value = elemento.value.toUpperCase();
}
function validarEdad() {
  let edad = document.getElementById("edad").value;
  if (isNaN(edad) || edad < 0 || edad > 105) {
    document.getElementById("errores").innerHTML = "Formato de edad incorrecto.";
    edad.focus();
    return false;
  }
  return true;
}
function validarNif() {
  let nif = document.getElementById("nif").value;
  //Patrón debe de ser 8 números entre 0 y 9 y una letra entre A-Z mayúscula
  let patron = new RegExp(/^[0-9]{8}-[A-Z]{1}$/);
  correcto = patron.test(nif);
  if (!correcto) {
    document.getElementById("errores").innerHTML = "Formato de NIF incorrecto.";
    nif.focus();
    return false;
  }
  return true;
}

function validarEmail() {
  let email = document.getElementById("email").value;
  /*El patrón del email debe debe empezar por letra o número,puede contener puntos, guiones o guiones bajos, 
    tiene que tener un @ y despues del, otra vez números, letras,puntos y/o guiones y el dominio
    irá tra un punto podrá tener desde 2 hasta 4 letras*/
  let patron = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.([a-zA-Z]{2,4})+$/);
  correcto = patron.test(email);
  if (!correcto) {
    document.getElementById("errores").innerHTML = "Formato de email incorrecto.";
    email.focus();
    return false;
  }
  return true;
}
function validarProvincia(){
  let provincia=document.getElementById("provincia").selectedIndex;
  if(provincia==0){
    document.getElementById("errores").innerHTML = "Debe seleccionar una provincia.";
    provincia.focus();
    return false;
  }else {
    return true;
  }
}

function validarFecha() {
  let fecha = document.getElementById("fecha").value;
  //Patrón debe
  //^\d{1,2}\/\d{1,2}\/\d{2,4}$
  let patron = new RegExp(/^(0[1-9]|[1-2]d|3[01])-(0[1-9]|1[012])-2(d{4})$/);
  correcto = patron.test(fecha);
  if (!correcto) {
    document.getElementById("errores").innerHTML = "Formato de fecha incorrecto.";
    fecha.focus();
    return false;
  }
  return true;
}

function validarTelefono() {
  let telf = document.getElementById("telefono").value;
  //Patrón debe de ser 9 números entre 0 y 9 y una letra entre A-Z mayúscula
  let patron = new RegExp(/^[0-9]{9}$/);
  correcto = patron.test(telf);
  if (!correcto) {
    document.getElementById("errores").innerHTML ="Formato de teléfono incorrecto.";
    telf.focus();
    return false;
  }
  return true;
}

function validarHora() {
  let hora = document.getElementById("hora").value;
  //Patrón debe
  let patron = new RegExp(/^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/);
  correcto = patron.test(hora);
  if (!correcto) {
    document.getElementById("errores").innerHTML = "Formato de hora incorrecto.";
    hora.focus();
    return false;
  }
  return true;
}


function validar(event) {
  let valido = true;
  valido = valido && validarNombreApellidos();
  valido = valido && validarEdad();
  valido = valido && validarNif();
  valido = valido && validarEmail();
  valido = valido && validarProvincia();
  valido = valido && validarFecha();
  valido = valido && validarTelefono();
  valido = valido && validarHora();
  if (!valido) {
    event.preventDefault();
  }
}

function ready() {
  let formulario = document.getElementById("formulario");
  let nombre = document.getElementById("nombre");
  let apellidos = document.getElementById("apellidos");
  formulario.addEventListener("submit", validar);
  nombre.addEventListener("blur", pasarMayusculas, false);
  apellidos.addEventListener("blur", pasarMayusculas, false);
}

document.addEventListener("DOMContentLoaded", ready);