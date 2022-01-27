//Tabla de sumar  utilizando for.
let num =+prompt("Introduce un número para realizar su tabla de sumar.");
console.log("Tabla de sumar");
for(let i=1;i<=10;i++){
    let result=num+i; 
    console.log(`${num} + ${i} es igual a ${result}`);
}
//Tabla de multiplicar utilizando while.
console.log("Tabla de multiplicar del 10");
let j=1
while(j<=10){
    let result=10*j;
    console.log("10 * " + j +  " es igual a " + result);
    j++;
}
//Tabla de dividir utilizando do while.
console.log("Tabla de dividir del 9");
let n=1
do{
    let result=9/n;
    console.log(`9 / ${n} es igual a ${result.toFixed(2)}`);
    n++;
}while(n<=10);
//Desplazamiento de bits.
console.log("Desplazamiento de bits");
console.log (`250/2 es  250>>1 igual a ${250>>1} `);
console.log(`40x8 es 40<<3 igual a ${40<<3} `);
console.log(`25x4  es 25<<2 igual a ${25<<2}`);
console.log (`512/16 es 512>>4 igual a ${512>>4} `);