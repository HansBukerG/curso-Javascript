/**
 * Ejercicio con Switch
 * 
 */
let valorPrueba;
let mensajeTrue, mensajeFalse,variableNumero;
let salida;

valorPrueba= "4";
variableNumero = isNaN(Number(valorPrueba))? 0:Number(valorPrueba);
mensajeTrue = "Numero conocido";
mensajeFalse = "Numero desconocido";

switch (variableNumero) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(mensajeTrue);
    break;
    default:
        console.log(mensajeFalse);
    break;
}