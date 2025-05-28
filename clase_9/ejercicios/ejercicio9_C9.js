/*
Ejercicio 9:
Define PI = 3.14159. Pide el radio de un círculo y calcula su área y perímetro.
*/

const prompt = require('prompt-sync')();

const PI = 3.14159;

let radio = parseFloat(prompt("Introduce el radio del círculo: "));

let area = PI*(radio**2);
// empleando math.pow() para elevar al cuadrado 
// let area = PI*Math.pow(radio, 2);
let perimetro = 2*PI*radio;

console.log(`Para un círculo de radio: ${radio}:
    - El área del círculo es: ${area}
    - El perímetro del círculo es: ${perimetro}`);
