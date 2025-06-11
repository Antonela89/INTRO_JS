// Ejercicio 1: While
// Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número negativo. Luego, imprime la suma de todos los números ingresados.

const prompt = require('prompt-sync')();

let esNegativo = false;
let suma = 0;

while (!esNegativo) {
    let numero = parseInt(prompt('Ingresa un número (número negativo para terminar): '))   
    if (numero < 0) { 
        esNegativo = true;
        break;
    }
    suma += numero;
}

console.log(`La summa de los números ingresados es: ${suma}`);