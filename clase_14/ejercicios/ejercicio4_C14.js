// Ejercicio 4: Calcular descuento por cantidad
// Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad.

const prompt = require('prompt-sync')();

let cantidadProductos = parseInt(prompt('Ingrese la cantidad de productos: '));
let precioUnitario = parseFloat(prompt('Ingrese el precio unitario: '));

const descuentoPorCantidad = (cantidad, precio) => {
    //validación de entrada de datos:
    if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio < 0) {
        console.error("Error: La cantidad y el precio deben ser números positivos.");
        return null;
    }

    let descuento = 0;

    if (cantidad >= 10) {
        descuento = 0.15; // 15% de descuento
    } else if (cantidad >= 5) {
        descuento = 0.10; // 10% de descuento
    } else if (cantidad >= 3) {
        descuento = 0.05; // 5% de descuento
    }

    let precioTotal = cantidad * precio;
    let precioFinal = precioTotal * (1 - descuento);

    return precioFinal.toFixed(2)
}

const totalAPagar = descuentoPorCantidad(cantidadProductos, precioUnitario);

if (totalAPagar > 0) {
    console.log(`El total a pagar es: $${totalAPagar}`);
}