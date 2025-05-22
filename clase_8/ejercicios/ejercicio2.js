/*
Ejercicio 2: Verificar si un número es positivo, negativo o cero
Enunciado:
En este ejercicio, practicarás el uso de condicionales (if, else). 
Escribe unprograma en JavaScript que:
1 . Pida al usuario que ingrese un número.
2. Verifique si el número es positivo, negativo o igual a cero.
3. Muestre un mensaje indicando cuál es el caso.
Requisitos:
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las verificaciones.
• Usa parseFloat() para convertir la entrada del usuario a un número.
*/

// Requerir promp-sync para poder usar prompt en node.js
const prompt = require('prompt-sync')();

// 1- Pedir al usuario que ingrese un número
const numero = parseFloat(prompt('Ingrese un número: '));

// 2- Verificación del número con estructura de control de flujo:
// - Numero positivo = mayor a cero -> numero > 0;
// - Numero negativo = menor a cero -> numero < 0;
// - Numero cero = igual a cero -> numero === 0;

if (numero === 0) { 
    console.log('El número es cero.');
} else if (numero > 0) {
    console.log('El número es positivo.');
} else if (numero < 0) {   
    console.log('El número es negativo.');
} else {
    console.log('Entrada no válida. Por favor, ingrese un número.');
}