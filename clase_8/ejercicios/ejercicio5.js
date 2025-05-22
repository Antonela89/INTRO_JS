/*
Ejercicio 5: Saludo personalizado
Enunciado:
Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de texto y la función prompt(). 
Escribe un programa que:
1. Solicite al usuario que ingrese su nombre.
2. Muestre un saludo personalizado usando el nombre ingresado.
Requisitos:
• Utiliza prompt() para recibir el nombre del usuario.
• Muestra un mensaje utilizando concatenación de cadenas
*/

// Requerir promp-sync para poder usar prompt en node.js
const prompt = require('prompt-sync')();

// 1- Pedir al usuario que ingrese su nombre
const nombre = prompt('Ingrese su nombre: ');

// 2- Mostrar un saludo personalizado
console.log('Hola ' + nombre + ', ¡bienvenido/a!');

// 2-a- Usando template literals
//console.log(`Hola, ${nombre}! Bienvenido/a al programa!`);