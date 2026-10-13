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

    // * Definir arreglo de números
    let numeros = [];

    // * Ciclo para pedir 3 numeros y guardarlo en el arreglo si corresponde
    for (let i = 0; i < 3; i++) {

        let numero = pedirNumeros(i + 1);
        let numeroValidado = validarNumero(numero, i + 1);

        numeros.push(numeroValidado);
    }

    console.log("El array numeros es:");
    console.log(numeros);

}

main();