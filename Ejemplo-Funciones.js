/**
 * Ejemplo funciones autollamado
 *
 */

let salida;
(function (a, b) {
  resultado = a + b;
  console.log("El resultado es: " + Number(resultado));
})(2, 8);

//Creacion de funcion flecha
const funcionFlechaSumar = (variable1, variable2) => variable1 + variable2;

salida = funcionFlechaSumar(5, 9);

console.log(salida);

/**
 * Ejemplo de creacion de objetos en JavaScript
 */

let persona = {
  rut: "18389381-5",
  nombre: "Hans",
  apellido: "Buker",
  nombreCompleto_F: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombreCompleto_F());

//Forma 2 de creacion de objetos

let persona2 = new Object();
persona2.nombre = "Hans";
persona2.apelldo = "Buker";
persona2.apellido2 = "Gutierrez";
persona2.nombreCompleto2_f = function () {
  return this.nombre + " " + this.apelldo + " " + this.apellido2;
};

console.log(persona2.nombreCompleto2_f());
console.log(persona2["nombre"]);
console.log(persona2["apellido2"]);
