/**
 * Ejemplos con ciclos
 * 
 */

let contador;

contador = 0;
salida = 5;

while (contador < salida) {
    console.log(contador);
    contador++;
}

contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador < salida);

contador = 0;

for (contador = 0; contador < salida; contador++) {
    console.log(contador);
}