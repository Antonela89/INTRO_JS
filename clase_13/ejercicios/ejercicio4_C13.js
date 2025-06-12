// Ejercicio 4: Número par o impar
// Crea una función declarada llamada `esPar` que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingresa un número: '));

function esPar(numero) {
    let parOImpar = (numero % 2) === 0 ? 'Es par' : 'Es impar';

    console.log(parOImpar);
}

esPar(numero);