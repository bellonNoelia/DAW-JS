/*Crear una objeto (clase) que nos permita instanciar edificios. Cada vez que instanciemos un edificio le 
pasaremos la calle, número y código postal como parámetros.*/

class Edificio{
    //calle::String
    //numero::Int
    //codigoPostal::Int
    constructor(calle,num,cp){
        this.calle=calle;
        this.numero=num;
        this.codigoPostal=cp;
        this.numeroPlantas=new Array();
        /*Cada vez que se crea un edificio, realizar la llamada al método infoEdificio para que muestre automáticamente la información del mismo*/
        this.infoEdificio();
    }


/* Se pide además crear los siguientes métodos para el objeto Edificio:
infoEdificio() // Devolverá una cadena con la información del edificio, es decir, sus propiedades.*/
    infoEdificio(){
        console.log(`\nConstruído nuevo edificio en Calle:  ${this.calle}, Numero: ${this.numero}, Código Postal: ${this.codigoPostal}` );
    }


/*agregarPlantasYPuertas(numplantas, puertas) // Se le pasa el número de plantas que queremos crear en el piso y el número 
de puertas por planta. Cada vez que se llame a este método, añadirá el número de plantas y puertas indicadas en los parámetros, 
a las que ya están creadas en el edificio.*/
    agregarPlantasYPuertas(numplantas, puertas){
        for(let i=0;i<numplantas;i++){
            this.numeroPlantas.push(new Array(puertas));
        }
    }


    /*modificarNumero(numero) // Se le pasa el nuevo número del edificio para que lo actualice.*/
    modificarNumero(n){
        this.numero=n;
    }


    /*modificarCalle(calle) // Se le pasa el nuevo nombre de la calle para que lo actualice.*/
    modificarCalle(c){
        this.calle=c;
    }


    /*modificarCodigoPostal(codigo) // Se le pasa el nuevo número de código postal del edificio.*/
    modificarCodigoPostal(cp){
        this.codigoPostal=cp;
    }


    /*imprimeCalle // Devuelve el nombre de la calle del edificio.*/
    imprimeCalle(){
        console.log(`Calle : ${this.calle}`);
    }


    /*imprimeNumero // Devuelve el número del edificio.*/
    imprimeNumero(){
        console.log(`Número: ${this.numero}`);
    }


    /*imprimeCodigoPostal // Devuelve el código postal del edificio.*/
    imprimeCodigoPostal(){
        console.log(`Código postal: ${this.codigoPostal}`);
    }


    /*agregarPropietario(nombre,planta,puerta) // Se le pasa un nombre de propietario, un número de planta y 
    un número de puerta y lo asignará como propietario de ese piso. Adicionalmente devolverá una cadena con la asignación realizada
    imprimePlantas // Recorrerá el edificio y devolverá una cadena con todos los propietarios de cada puerta.*/
    agregarPropietario(nombre,planta,puerta){
        let numPlanta=planta-1;
        let numPuerta=puerta-1
        if(planta<=this.numeroPlantas.length && puerta<=this.numeroPlantas[numPlanta].length){
            this.numeroPlantas[numPlanta][numPuerta]=nombre;
            /*Cada vez que se añada un propietario a un piso de un edificio que muestre un mensaje*/
            console.log(`\n${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}. `);
            
        }else{
            console.log("Datos incorrectos.")
        }
    }
    imprimePlantas(){
        console.log(`\nListado propietarios del edificio calle   ${this.calle}  número: ${this.numero}` );
        for(let i=0;i<this.numeroPlantas.length;i++){
            for(let j=0;j<this.numeroPlantas[i].length;j++){
                if(this.numeroPlantas[i][j]){
                console.log(`Propietario del piso  ${j+1} de la planta ${i+1}: ${this.numeroPlantas[i][j]}`);
                }else{
                    console.log(`Propietario del piso  ${j+1} de la planta ${i+1}:`);
                }
            }
        }
    }
}

/*Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:

Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706. Plantas: 0
Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004. Plantas: 0
Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705. Plantas: 0*/
let edificioA= new Edificio("Garcia Prieto", "58", "15706")
let edificioB= new Edificio("Camino Caneiro", "29", "32004")
let edificioC= new Edificio("San Clemente", "s/n", "15705")

/*El código postal del edificio A es: 15706.
La calle del edificio C es: San Clemente.
El edificio B está situado en la calle Camino Caneiro número 29.*/
console.log(`\nEl código postal del edificio A es ${edificioA.codigoPostal}`);
console.log(`\nLa calle del edificio C es ${edificioC.calle}`);
console.log(`\nEl edificio B está situado en la calle  ${edificioC.calle} número ${edificioB.numero} `);

/*
Agregamos 2 plantas y 3 puertas por planta al edificio A...*/
edificioA.agregarPlantasYPuertas(2,3);

/*Agregamos 4 propietarios al edificio A...
Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1.
Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1.
Marta Castellón es ahora el propietario de la puerta 3 de la planta 1.
Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2.
Listado de propietarios del edificio calle García Prieto número 58*/
edificioA.agregarPropietario("Jose Antonio Lopez",1,1);
edificioA.agregarPropietario("Luisa Martinez",1,2);
edificioA.agregarPropietario("Marta Castellón",1,3);
edificioA.agregarPropietario("Antonio Pereira",2,2);

/*Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
Propietario del piso 2 de la planta 1: Luisa Martinez.
Propietario del piso 3 de la planta 1: Marta Castellón.
Propietario del piso 1 de la planta 2:
Propietario del piso 2 de la planta 2: Antonio Pereira.
Propietario del piso 3 de la planta 2:*/
console.log(edificioA);
edificioA.imprimePlantas();

console.log(edificioA);
/*Agregamos 1 planta más al edificio A...
Propietario del piso 2 de la planta 3: Pedro Meijide. es el último que se muestra en el ejemplo
por eso añadimos dos puertas*/
edificioA.agregarPlantasYPuertas(1,2);

/*Agregamos 1 propietario más al edificio A planta 3, puerta 2...
Pedro Meijide es ahora el propietario de la puerta 2 de la planta 3.*/
edificioA.agregarPropietario("Pedro Meijide",3,2);

/*Listado de propietarios del edificio calle García Prieto número 58
Propietario del piso 1 de la planta 1: Jose Antonio Lopez.
Propietario del piso 2 de la planta 1: Luisa Martinez.
Propietario del piso 3 de la planta 1: Marta Castellón.
Propietario del piso 1 de la planta 2:
Propietario del piso 2 de la planta 2: Antonio Pereira.
Propietario del piso 3 de la planta 2:
Propietario del piso 1 de la planta 3:
Propietario del piso 2 de la planta 3: Pedro Meijide.*/
edificioA.imprimePlantas();
