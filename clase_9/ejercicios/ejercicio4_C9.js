/*
Ejercicio 4:
Declara una variable nombre. Pide al usuario su nombre y verifica si es igual al tuyo.
*/

const prompt = require('prompt-sync')();

const miNombre = "antonela"; 

let nombre = prompt("Por favor, introduce tu nombre: ").toLowerCase();

if (nombre === miNombre) { 
    console.log("¡Hola, tocayo, tu nombre es igual al mío! ¡Qué bueno verte!");
} else {
     console.log("¡Lamentablemente, tu nombre no es igual al mío!");
}

