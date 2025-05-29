/*
Ejercicio 10 - Cálculo de Descuento
Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
Fórmula: let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
*/

const prompt = require('prompt-sync')();

let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;

console.log(`El precio final del producto después de aplicar el descuento es: $${precioFinal.toFixed(2)}`);