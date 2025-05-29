/*
Ejercicio 8 - Conversión de Temperaturas
Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit.  
Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
Fórmula: let fahrenheit = celsius * 9 / 5 + 32;
*/

const prompt = require('prompt-sync')();

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

let fahrenheit = celsius * 9 / 5 + 32;
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);