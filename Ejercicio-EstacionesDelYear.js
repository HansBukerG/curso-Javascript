/*
    Ejercicio estaciones del year
*/

let mesIngresado;
let primavera, verano, otono, invierno;

primavera = ["septiembre","octubre","noviembre"];
verano = ["diciembre","enero","febrero"];
otono = ["marzo","abril","mayo"];
invierno = ["junio","julio","agosto"];

mesIngresado= "asdasd";

let comparar = function(input, cadena ){
    
    let salida = false;
    if (Array.isArray(cadena)) {
        cadena.forEach(elemento => {
            if(input == elemento)
                salida =  true;
        });
    }else
    {
        console.log("La cadena no es un array");
    }

    return salida;
}

if(comparar(mesIngresado,primavera)){
    console.log("Estamos en primavera");
}else if (comparar(mesIngresado,verano)){
    console.log("Estamos en verano");
}else if (comparar(mesIngresado,otono)){
    console.log("Estamos en otono");
}else if (comparar(mesIngresado,invierno)){
    console.log("Estamos en invierno");
}else{
    console.log("Mes desconocido");
}
