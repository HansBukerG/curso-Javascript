/**
 * Creacion de clases en js
 */

imprimir = function (palabra) {
  console.log(palabra);
};

class Persona {
  static contadorObjetosPersona = 0;
  _idPersona = 0;
  _nombre = "";
  _apellido = "";

  constructor(nombre, apellido) {
    this._idPersona = Persona.contadorObjetosPersona++;
    this._nombre = nombre;
    this._apellido = apellido;
  }

  get getIdPersona() {
    return this._idPersona;
  }
  get getNombre() {
    return this._nombre;
  }
  get getApellido() {
    return this._apellido;
  }

  set setIdPersona(ID) {
    return (this._idPersona = ID);
  }
  set setNombre(newNombre) {
    return (this._nombre = newNombre);
  }
  set setApellido(newApellido) {
    return (this._apellido = newApellido);
  }
  nombreCompleto() {
    return (
      "ID: " + this.getIdPersona + " " + this.getNombre + " " + this.getApellido
    );
  }
  toString() {
    return this.nombreCompleto();
  }
  static saludar() {
    return console.log("Este es un método estatico");
  }
  static propiedadesPersona(objeto) {
    return imprimir(
      objeto.getIdPersona + " " + this.getNombre + " " + this.getApellido
    );
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, cargo) {
    super(nombre, apellido);
    this._cargo = cargo;
  }
  get getCargo() {
    return this._cargo;
  }
  set setCargo(cargo) {
    this._cargo = cargo;
  }

  //sobreescritura
  /**
   * La palabra super se referencia a la clase padre de donde se está extendiendo esta clase.
   * @returns super.nombreCompleto() + ' ' + this._cargo;
   */
  nombreCompleto() {
    return super.nombreCompleto() + " " + this.getCargo;
  }
}

let madre = new Persona();

madre.setNombre = "Gabriela";
madre.setApellido = "Videla";

console.log(madre);

let padre = new Persona("Juan", "Valdez");
console.log(padre);

padre.setApellido = "Buker";

console.log(padre.getApellido);

let hijo = new Empleado("Luis", "Lillo", "Gerente");

console.log(hijo.toString());

imprimir(hijo.toString());

Persona.saludar();

Persona.propiedadesPersona(padre);

Empleado.saludar();
Empleado.propiedadesPersona(hijo);

imprimir(padre.contadorObjetosPersona);
imprimir(Persona.contadorObjetosPersona);

imprimir(madre.toString());
imprimir(padre.toString());
imprimir(madre.toString());
