/**

* * CODIGO ANALISIS NUMEROS
* * Autora: Michalle Muñoz
*/

// * Definir variables y constantes
const prompt = require('prompt-sync')();

// * Función para solicitar numero con el parametro posicion
function pedirNumeros(posicion) {

    let numero = prompt(`Digite el número para la posición ${posicion}: `);

    return numero;
}

// * Función para validar que se haya digitado un numero
function validarNumero(numero, posicion) {

    let numeroValidado = Number(numero);

    // * Si no es valido o esta vacio entra al ciclo
    while (numero.trim() === "" || !Number.isFinite(numeroValidado)) {

        console.log("El valor ingresado no es válido. Digite un número real.");

        numero = pedirNumeros(posicion);
        numeroValidado = Number(numero);
    }

    return numeroValidado;
}

// * Función main
function main() {

    // * Se reciben los numeros en variables apartes
    let numero1 = validarNumero(pedirNumeros(1), 1);
    let numero2 = validarNumero(pedirNumeros(2), 2);
    let numero3 = validarNumero(pedirNumeros(3), 3);

    console.log(numero1);
    console.log(numero2);
    console.log(numero3);
}

main();