/**
    Ejemplo con operadores de transformacion
    NaN = Not a Number
 */

let numeroIngresado, edad, resultado2;
numeroIngresado = "18asdsad"

edad = isNaN(Number(numeroIngresado))? 0:Number(numeroIngresado);
edadAdultez = 18;

console.log(edad);
console.log(typeof edad);

resultado2 = edad >= edadAdultez ? "Es un adulto":"Es un joven";

console.log(resultado2);
