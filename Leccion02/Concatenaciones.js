var nombre = "Hans";
var apellido = "Buker";
var nombreCompleto = "";

nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto),
console.log(typeof nombreCompleto);

/*
    El compilador interpreta de izquierda a derecha el tipo de dato que se va a asignar la variable.
        En este caso encuentra que el primer valor es un String, por lo que asigna como String a la variable nombreCompleto
        Posterior a esto, se toma el numero que está dentro de la declaración, pero al ver que la variable se inicializó como String
        El valor numérico se le dio un tratamiento equivalente, por lo que se adjuntó a la concatenación de la variable.
*/
nombreCompleto += 25262;

console.log(nombreCompleto),
console.log(typeof nombreCompleto);

var numeroConPalabra = 2 + "Juan";

console.log(numeroConPalabra);
console.log(typeof numeroConPalabra);

/*
    Si se utiliza la operación de suma dentro de un paréntesis en una cadena String, el sistema procederá a efectuar la suma de dichas variables
    tratandolas como si fuesen del tipo int, para despues transformarlas a String saliendo del parentesis.
*/
var sumaDentroString = "Hans " + (2+4);
console.log(sumaDentroString);
console.log(typeof sumaDentroString);
