// Ejercicio 5: Encuentra los números pares entre dos valores
// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo `for` para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos.

const prompt = require('prompt-sync')();

let inicio = parseInt(prompt('Ingrese un número: '));
let fin = parseInt(prompt('Ingrese un número: '));

if (inicio > fin ) {
    [inicio, fin] = [fin, inicio] 
}

//console.log(`inicio: ${inicio}, fin: ${fin}`);

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }  
}


