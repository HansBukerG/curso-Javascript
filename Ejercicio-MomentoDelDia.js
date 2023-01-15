/*
    Ejercicio Hora del dia
*/
let today = new Date();
var now = today.toLocaleTimeString('it-IT');
now = now.split(":");

let horaIngresada;
let buenosDias, buenasTardes, buenasNoches, durmiendo;

buenosDias = [6,11];
buenasTardes = [12,18];
buenasNoches = [19,23];
durmiendo = [0,5];
horaIngresada = now[0];

function estadoDelDia(input,cadenaInput)
{
    
    let salida = false;
    if (input >= cadenaInput[0]
        && input <= cadenaInput[1]) {
        salida = true;
    }
    return salida;
};

if(estadoDelDia(horaIngresada,buenosDias)){
    console.log("Buenos dias");
}else if (estadoDelDia(horaIngresada,buenasTardes)){
    console.log("Buenas tardes");
}else if (estadoDelDia(horaIngresada,buenasNoches)){
    console.log("Buenas noches");
}else if (estadoDelDia(horaIngresada,durmiendo)){
    console.log("Durmiendo");
}else{
    console.log("Hora desconocida");
}