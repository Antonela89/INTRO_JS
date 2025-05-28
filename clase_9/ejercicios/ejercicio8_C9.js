/*
Ejercicio 8:
Pide las longitudes de los lados de un triángulo y determina si es equilátero, isósceles o escaleno.
*/

const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Introduce la longitud del primer lado: "));
let lado2 = parseFloat(prompt("Introduce la longitud del segundo lado: "));
let lado3 = parseFloat(prompt("Introduce la longitud del tercer lado: "));

//empleo de condicional  
// si lado 1 es igual a lado 2 y lado 2 es igual a lado 3, entonces es equilátero 
// si lado 1 es igual a lado 2 o lado 2 es igual a lado 3 o lado 1 es igual a lado 3, entonces es isósceles ->
// si no hay igualdades, entonces es escaleno

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log("El triángulo es isósceles.");
} else  {
    console.log("El triángulo es escaleno.");
}
