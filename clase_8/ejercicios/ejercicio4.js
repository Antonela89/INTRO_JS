/*
Ejercicio 4: Determinar si un número es par o impar
Enunciado:
En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales.
Debes escribir un programa que:
1. Solicite al usuario que ingrese un número entero.
2. Determine si el número es par o impar.
3. Muestre un mensaje indicando si el número es par o impar.
Requisitos:
• Utiliza el operador módulo (%) para comprobar si el número es divisible por 2.
• Usa una estructura if-else para mostrar el mensaje adecuado.
*/

// Requerir promp-sync para poder usar prompt en node.js
const prompt = require('prompt-sync')();    

// 1- Pedir al usuario que ingrese un número
const numero = parseInt(prompt('Ingrese un número entero: '));  

// 2- Verificación del número con estructura de control de flujo:
// - Numero par = divisible por 2 -> numero % 2 === 0;
// - Numero impar = no divisible por 2 -> numero % 2 !== 0; 

if (numero % 2 === 0) {

    // 3-a- Mostrar mensaje indicando si el número es par
    console.log(`El número ${numero} es par.`);
} else {
     // 3-b- Mostrar mensaje indicando si el número es par
    console.log(`El número ${numero} es impar.`);
}   

