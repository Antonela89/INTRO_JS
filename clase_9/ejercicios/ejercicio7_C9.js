/*
Ejercicio 7:
Pide el peso en kilogramos y conviértelo a libras. Pista: 1 kg = 2.20462 libras.
*/

const prompt = require('prompt-sync')();

let pesoKg = parseFloat(prompt("Introduce el peso en kilogramos: "));

let pesoLibras = pesoKg * 2.20462;

// toFixed(2) limita el resultado a dos decimales
console.log(`${pesoKg} kg son ${pesoLibras.toFixed(2)} libras.`);
