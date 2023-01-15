/**
 * Promesas en JS
 */
'use strict';
let miPromesa = new Promise((resolver,rechazar) =>{
    let boolean = true;
    if (boolean) {
        resolver('hola, soy la funcion resolver');
    } else {
        rechazar('Hola soy la funcion rechazar');
    }
} );

//miPromesa.then(       valor => console.log(valor),   valor => console.log(valor))

let miPromesaTimeOut = new Promise((resolver) => {
        setTimeout( () => resolver('Ejecucion de resolver con timeout'),3000)
    }
);

//miPromesaTimeOut.then(valor => console.log(valor));

/**
 * PRomesa con async
 * Esta es la versión mas simplificada y entendible del uso de una promesa
 */

async function miFuncionConPromesa(){
    return 'saludos con promesa async';
}

miFuncionConPromesa().then(valor => console.log(valor));

/*
    Async con Await
*/

async function miFuncionConPromesaConAwait(){
    let f_promesa = new Promise( resolver => resolver('Soy la promesa async') );
    console.log(await f_promesa);
}

miFuncionConPromesaConAwait().then( valor => console.log(valor) );


/**
 * promesas, await, asnc y setTimeout
 */

async function funcionConPromesaAwaytyTimeout(){
    let miPromesa = new Promise( resultado => {
        setTimeout( () => resultado('promesa con await y timeOut'),3000 );
    });
    console.log(await miPromesa);
};

funcionConPromesaAwaytyTimeout().then( valor => console.log(valor) );
