/*
Ejercicio 3: Suma de dos números ingresados por el usuario
Enunciado:
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores aritméticos. 
Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.
Requisitos:
• Utiliza prompt() para recibir los números.
• Utiliza parseFloat() para convertir las entradas a números.
• Almacena los resultados en variables adecuadas y muestra el resultado.
*/

// Requerir promp-sync para poder usar prompt en node.js
const prompt = require('prompt-sync')();

// 1- Pedir al usuario que ingrese primer número
const numero1 = parseFloat(prompt('Ingrese el primer número: '));

// 2- Pedir al usuario que ingrese segundo número
const numero2 = parseFloat(prompt('Ingrese el segundo número: '));

// 3- Sumar ambos números
const suma = numero1 + numero2;

// 4- Mostrar el resultado de la suma
console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);