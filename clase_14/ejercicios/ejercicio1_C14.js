// Ejercicio 1: Calcular el precio final con IVA
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt('Ingrese el precio de el producto: $'));
let iva = parseFloat(prompt('Ingrese el porcentaje de IVA, solo números: %'));

let precioFinal = (precio, iva) => {
    let porcentaje = iva / 100;
    let precioConIva = (precio * porcentaje) + precio;
    return `El precio del producto con IVA es: $${precioConIva}`;
}

console.log(precioFinal(precio, iva));


