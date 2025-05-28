/*
Ejercicio 5:
Pide al usuario tres números y determina cuál es el mayor.
*/

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));
let num3 = parseFloat(prompt("Introduce el tercer número: "));

// Determinar el mayor de los tres números: empleando una estructura condicional if-else
// Si num1 es mayor que num2 y num3, entonces num1 es el mayor -> num1 > num2 && num1 > num3
// Si num2 es mayor que num1 y num3, entonces num2 es el mayor -> num2 > num1 && num2 > num3
// Si num3 es mayor que num1 y num2, entonces num3 es el mayor -> num3 > num1 && num3 > num2
// Verifica si los números son iguales -> num1 === num2 && num2 === num3

if (num1 > num2 && num1 > num3) {
    console.log(`El primer número: ${num1} es el mayor.`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`El segundo número: ${num2} es el mayor.`);    
} else if (num3 > num1 && num3 > num2) {
    console.log(`El tercer número: ${num3} es el mayor.`); 
} else if (num1 === num2 && num2 === num3 ) {
    console.log("Los tres números son iguales.");
}
