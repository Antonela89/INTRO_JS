// Ejercicio 2: Generar URL (función arrow)
// Crea una función arrow llamada `generarUrl` que reciba un nombre de dominio (ej: "google") y devuelva la URL completa (ej: "http://www.google.com"). Usa un retorno implícito.

const prompt = require('prompt-sync')();

let dominio = prompt('Ingresa un dominio: ')

const generarUrl = dominio => `http://www.${dominio}.com`;

console.log(generarUrl(dominio));
