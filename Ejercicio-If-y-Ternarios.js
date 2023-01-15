/*
    Ejercicio de edad
        Se estima que una edad sea perteneciente a un adulto, o a una persona joven
*/

let edad;

edad = 15;
edadAdultez = 18;

if (edad >= edadAdultez) {
    console.log("Esta persona es un adulto");
} else {
    console.log("Esta persona es menor de edad");
}

/* Ejercicio de intervalo 
    Se indica si un numero ingresado pertenece a un intervalo especificado
*/

let intervaloMenor, intervaloMayor;
let numeroIngresado;

intervaloMenor = 500;
intervaloMayor = 1000;
numeroIngresado = 1000;

if (    numeroIngresado >= intervaloMenor 
        && numeroIngresado <= intervaloMayor ) {
    console.log("Dentro del intervalo.");
} else {
    console.log("Fuera del intervalo");
}

/*
    Ejercicio de OR
*/

let vacaciones, finDeSemana;

vacaciones = false;
finDeSemana = false;

if (vacaciones || finDeSemana) {
    console.log("Tiene tiempo disponible.");
} else {
    console.log("No tiene tiempo disponible.");
}


/* Operador ternario */

let resultado,resultado2;

resultado = 1>2? "SIUUUUUUU":"NOOOOOOOOOOOOOOO"
resultado2 = 3>2? "SIUUUUUUU":"NOOOOOOOOOOOOOOO"
console.log(resultado);
console.log(resultado2);