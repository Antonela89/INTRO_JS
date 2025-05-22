/*
Ejercicio 1: Calcula el doble de un número
Enunciado:
En este ejercicio, practicarás el uso de variables y operadores aritméticos. 
Debes escribir un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos:
• Utiliza la función prompt() para solicitar el dato al usuario.
• Almacena el número ingresado en una variable.
• Utiliza un operador aritmético para calcular el doble del número
*/

// Requerir prompt-sync para poder usar prompt en Node.js
const prompt = require('prompt-sync')();

//1- Solicitar al usuario que ingrese un número cualquiera
let numero = parseFloat(prompt('Ingrese un número: '));

//2- Calcular el doble de ese número
let doble = numero * 2;

//3- Mostrar el resultado en la consola
console.log(`El doble de ${numero} es ${doble}`);
