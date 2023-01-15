/**
 * Mas ejemplos de objatos en JS
 */
/**
 * Forma 1
 */
let persona = {
  nombre: "Hans",
  apellidoPaterno: "Buker",
  apellidoMaterno: "Gutierrez",
  Direccion: "El maiten 2339, Chiguayante",
  Rut: "18.389.381-5",
  nombre_completo: function () {
    return (
      this.nombre + " " + this.apellidoMaterno + " " + this.apellidoPaterno
    );
  },
};

console.log(persona.nombre_completo());

/**
 * Forma 2
 *     Se hacen modificaciones a la estructura de la creacion de un metodo
 *     Con esto también cambia la forma en como accedemos al metodo get
 */
let persona2 = {
  nombre: "Hans",
  apellidoPaterno: "Buker",
  apellidoMaterno: "Gutierrez",
  Direccion: "El maiten 2339, Chiguayante",
  Rut: "18.389.381-5",
  get getRut() {
    return this.Rut;
  },
  set setRut(n_rut) {
    this.Rut = n_rut;
  },
  get nombreCompleto() {
    return (
      this.nombre + " " + this.apellidoPaterno + " " + this.apellidoMaterno
    );
  },
};

console.log(persona2.nombreCompleto);
console.log(persona2.getRut);

persona2.setRut = "8872338-4"; //Aquí se usa el metodo set para cambiar un atrobuto de la clase por medio del metodo set

console.log(persona2.getRut);
