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

// * Función ordenar números
function analizarNumeros(numero1, numero2, numero3) {

    if (numero1 == numero2 && numero1 == numero3) {
        return "Los números digitados son todos iguales.";
    }

    // ? Si numero1 es menor o igual a numero2 y numero3
    if (numero1 <= numero2 && numero1 <= numero3) {

        // ? Si numero2 es menor o igual a numero3
        if (numero2 <= numero3) {
            return `${numero1}, ${numero2}, ${numero3}.\n${numero3}, ${numero2}, ${numero1}.`;
        } else { // ? Por descarte
            return `${numero1}, ${numero3}, ${numero2}.\n${numero2}, ${numero3}, ${numero1}.`;
        }

    // ? Si numero2 es menor o igual a numero1 y numero3
    } else if (numero2 <= numero1 && numero2 <= numero3) {

        // ? Si numero1 es menor o igual a numero3
        if (numero1 <= numero3) {
            return `${numero2}, ${numero1}, ${numero3}.\n${numero3}, ${numero1}, ${numero2}.`;

        } else { // ? Por descarte
            return `${numero2}, ${numero3}, ${numero1}.\n${numero1}, ${numero3}, ${numero2}.`;
        }
        
    // ? Por descarte, numero3 es es menor o igual a numero1 y numero2
    } else {

        // ? Si numero1 es menor o igual a numero2
        if (numero1 <= numero2) {
            return `${numero3}, ${numero1}, ${numero2}.\n${numero2}, ${numero1}, ${numero3}.`;
        } else {  // ? Por descarte
            return `${numero3}, ${numero2}, ${numero1}.\n${numero1}, ${numero2}, ${numero3}.`;
        }
    }

}

// * Función main
function main() {

    // * Se reciben los numeros en variables apartes
    let numero1 = validarNumero(pedirNumeros(1), 1);
    let numero2 = validarNumero(pedirNumeros(2), 2);
    let numero3 = validarNumero(pedirNumeros(3), 3);

    console.log(analizarNumeros(numero1, numero2, numero3));
    
}

main();