/*
Ejercicio 2:
Define dos constantes RANGO_MINIMO y RANGO_MAXIMO. Pide al usuario un número y verifica si está en el rango. 
*/

const prompt = require('prompt-sync')();

const RANGO_MINIMO = 1;
const RANGO_MAXIMO = 10;

const numero = parseInt(prompt('Introduce un número entero: '));

if (numero > RANGO_MINIMO && numero < RANGO_MAXIMO) {
    console.log('El número ingresado está dentro del rango definido.');
} else {
    console.log('El número ingresado NO ESTÁ dentro del rango definido.')
}