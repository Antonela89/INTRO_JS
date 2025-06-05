// Ejercicio 4: ¿Es par o impar?
// Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingrese un número: '));

let esPar = numero % 2 === 0 ? 'El número ingresado es par.' : 'El número ingresado es impar.';

console.log(esPar);
