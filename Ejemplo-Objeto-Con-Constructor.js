/**
 * Creacion de objetos con constructor
 */

function Persona(nombre, apellido, email, rut) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.rut = rut;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}
Persona.prototype.rutina = "Pecho con mucho cardio"; // Esta es una forma de agregar atributos a una clase con construtor.

let cliente = new Persona(
  "Hans",
  "Buker",
  "hansbuker1993@gmail.com",
  "18389381-5"
);

console.log(cliente.nombre);
console.log(typeof cliente);
console.log(cliente.nombreCompleto());

console.log(cliente.rutina);
