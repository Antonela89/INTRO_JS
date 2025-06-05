// Ejercicio 8: Encuentra los múltiplos de un número
// Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo `for` para resolverlo.

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingrese un número entero positivo: '));


// se itera el numero que multiplica al numero ingresado por el usuario
for (let i = 1; ;i++) {
    // se obtiene el multiplo
    let multiplo = numero * i; 
    // si multiplo es mayor a 100 se detiene la iteración
    if (multiplo > 100) {
        break;
    }
    // impresion de los resultados
    console.log(`${numero} x ${i} = ${multiplo}`);
}


