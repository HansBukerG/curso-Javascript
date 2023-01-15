/*
    Tipo de dato String
*/
var nombre = "Hans";
console.log(nombre);
console.log(typeof nombre);

nombre = 1000;
console.log("Hola soy la variable: " + nombre);
console.log(typeof nombre);

//Tipo de dato numerico

var numero = 1000;
console.log(numero);

//Tipo de dato objeto

var objeto ={
    nombre:"Hans",
    apellido:"Buker",
    direccion:"El maiten 2339, Chiguayante, Concepción"
};

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.apellido);
console.log(objeto.direccion);

console.log(typeof objeto);


// tipo de dato booleano

var flag = true;
console.log(flag);
console.log(typeof flag);

// tipo de dato funcion
function myfuncion(){};

console.log(myfuncion);
console.log(typeof myfuncion);


//tipo de dato symbol

var simbolo = Symbol("Este es mi simbolo");

console.log(simbolo);
console.log(typeof simbolo);

//tipo de dato clase

class persona{
    constructor(nombre,apellido,direccion){
        this.nombre = "Hans";
        this.apellido = "Buker";
        this.direccion = "El maiten 2339, Chiguayante";
    }
};

console.log(persona);
console.log(typeof persona);

// tipo de dato undefined

var datoCualquiera;
console.log(datoCualquiera);
console.log(typeof datoCualquiera);

datoCualquiera = undefined;

console.log(datoCualquiera);
console.log(typeof datoCualquiera);

// tipo de dato null
var datonulo = null; 
console.log(datonulo); 
console.log(typeof datonulo); 

//tipo de dato array

var autos = ['bmw','awto','onissan','hachi roku']; 
console.log(autos);
console.log(autos[2]);
console.log(typeof autos); 