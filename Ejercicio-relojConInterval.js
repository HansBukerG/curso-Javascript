/**
 * Ejercicio Reloj con Callback
 */
'use strict';

let reloj = () => {
    let fecha = new Date();
    return console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,2000);
