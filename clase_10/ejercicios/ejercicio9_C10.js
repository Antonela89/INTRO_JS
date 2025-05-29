/*
Ejercicio 9 - Cálculo del IMC
Escribe un programa que calcule el Índice de Masa Corporal (IMC).
Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
Fórmula: let imc = peso / (altura * altura);
*/

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));

let imc = peso / (altura * altura);

console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);

