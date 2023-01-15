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

/**
 * Ciclo for para recorrer las propiedades de un objeto
 */
console.log("Leyendo cualidades");

for (nombrePropiedad in persona2) {
  console.log(nombrePropiedad);
  console.log(persona2[nombrePropiedad]);
}

/* Eliminar una propiedad
        delete persona2.apellido2;
    Con este comando eliminamos propiedades de un objeto, util para cuando se pasan a escribir clases erroneas
    al momento de la creacion de un objeto
*/
