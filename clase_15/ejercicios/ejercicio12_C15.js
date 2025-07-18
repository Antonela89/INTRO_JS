// Ejercicio 12: Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
// 1.  Dividir la oración en palabras individuales.
// 2.  Clasificar las palabras en dos categorías:
//     *   Cortas (menos de 5 letras)
//     *   Largas (5 letras o más)
// 3.  Mostrar ambas listas de palabras clasificadas.
// 4.  La oración es: "JavaScript es un lenguaje poderoso y versátil".

const oracion = 'JavaScript es un lenguaje poderoso y versátil';

let palabras = oracion.split(' ');

console.log(palabras);

let cortas = [];
let largas = [];

for (let i = 0; i < palabras.length; i++) {
    palabras[i].length < 5 ? cortas.push(palabras[i]) : largas.push(palabras[i]);   
}

console.log(cortas);
console.log(largas);


