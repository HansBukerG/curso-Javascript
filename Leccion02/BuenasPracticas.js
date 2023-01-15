/**
 * Formas de declaración de una variable
*/

nombre = "Hans" // Mala practica, se debe especificar una declaración de variable
var apellido = "Buker" //Esta p'ractica ya no se usa, debido a la mabiguedad del dato especificado.
const rut = "18389381-5" // Buena práctica: el tipo de dato utilizado se especifica como fijo, y no se puede alterar.
let direccion = "El maiten 2339, Chiguayante" // Buena practica: El tipo de dato empleado se especifica como vaiante.

/*
    Las variables de JavaScript son caseSensitive, por lo que no es lo mismo una declaración tanto con minúscula como con mayúscula
*/

let Direccion = "el maiten";

console.log(direccion);
console.log(Direccion); //Tener ojo con esto