/**
 * uso estricto de JS con manejo de errores
 * 
 */

"use strict";
//let x;

try {
    x = 10;
//    throw 'Me he caido amigo';
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    
}
//a pesar de los errores encontrados en el programa, el bloque finally SIEMPRE se va a ejecutar
//Esto es util para cuando se están manejando conexiones a bases de datos.
finally{
    
    console.log('Finalizando prueba de errores, este bloque se ejecuta siempre');

}

console.log(x);