// Ejercicio 1: Convertir pulgadas a centímetros (función arrow)
// Crea una función arrow llamada `pulgadasACentimetros` que reciba un valor en pulgadas como parámetro y devuelva su equivalente en centímetros. La función debe tener un retorno implícito (sin usar la palabra `return`).
// Pista: 1 pulgada = 2.54 centímetros.

const prompt = require('prompt-sync')();

let pulgadas = parseFloat(prompt('Ingrese un número: '));

const pulgadasACentimetros = pulgadas => pulgadas * 2.54;

console.log(`${pulgadas} pulgadas a centimetros = ${pulgadasACentimetros(pulgadas)} `);
