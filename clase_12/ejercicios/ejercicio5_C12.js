// Ejercicio 5: Uso de Arrays y Condicionales
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo)

const prompt = require('prompt-sync')();

let arrayNombres = [];
let encontrado = false;

for (let i = 0; i < 5; i++) {
   let nombre = prompt('Ingresa un nombre: ').toLowerCase();
    arrayNombres[i] = nombre;
};

let verificarNombre = (prompt('Ingresa el nombre a verificar: ')).toLowerCase();

for (let i = 0; i < arrayNombres.length; i++) {
    if (arrayNombres[i] === verificarNombre) {
        console.log(`El nombre ingresado: ${verificarNombre}, se encuentra en la lista de nombres.`);
        console.log(arrayNombres);
        encontrado = true;
        break;   
    }
}

if (!encontrado) {
    console.log(`El nombre ingresado: ${verificarNombre}, no se encuentra en la lista de nombres.`);
    console.log(arrayNombres);   
}