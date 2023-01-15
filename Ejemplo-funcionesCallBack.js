/**
 *
 * Ejemplo de uso de funciones CallBack en JS
 *
 * Las funciones CallBack tienen el objetivo de usar las propiedades asincronas del computador.
 * Por lo que se pueden ejecutar de forma paralela a la tarea que se está ejecutando.
 */

"use strict";

function mifuncion1() {
  console.log("soy la mifuncion1");
}

function mifuncion2() {
  console.log("soy la mifuncion2");
}

//mifuncion1();
//mifuncion2();

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(variable1, variable2, funcionCallBack) {
  let resultado = variable1 + variable2;
  funcionCallBack(resultado);
}

//sumar(5,3,imprimir)

function miFuncionCallBack() {
  console.log("Me ejecuto en 3 segundos");
}

setTimeout(miFuncionCallBack, 4000);

setTimeout(() => console.log("funcion flecha luego de 3 segundos"), 3000);
