// Ejercicio 2: Número mayor (función expresada)
// Crea una función expresada llamada `encontrarMayor` que reciba dos números como parámetros y devuelva el número mayor.

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Ingresa el primer número: '));
let num2 = parseInt(prompt('Ingresa el segundo número: '));

let encontrarMayor = function(num1,num2) {
    if (num1 === num2) {
        return `Los dos números ingresados son iguales`;
    } else if (num1 > num2) {
        return `El número ${num1} es mayor que ${num2}`;
    } else {
        return `El número ${num2} es mayor que ${num1}`;
    }
}

console.log(encontrarMayor(num1,num2));
