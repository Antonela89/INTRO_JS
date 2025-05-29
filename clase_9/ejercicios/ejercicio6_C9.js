/*
Ejercicio 6:
Pide la edad y muestra si es mayor o menor de edad.
*/

const prompt = require('prompt-sync')();
let edad = parseInt(prompt("Introduce tu edad: "));

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}