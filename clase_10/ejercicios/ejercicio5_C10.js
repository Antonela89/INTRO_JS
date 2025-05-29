/*
Ejercicio 5 – Operadores
Declarar y asignar un valor numérico a dos variables: `primerNumero` y `segundoNumero`.

Operaciones Matemáticas:
1. Declara las siguientes variables: `resultadoSuma`, `resultadoResta`, `resultadoMultiplicacion`, `resultadoDivision`.
2. Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables `primerNumero` y `segundoNumero`.

Mostrar Resultados:
1. Utiliza `console.log(nombreDeLaVariable)` para imprimir cada uno de los resultados.

Pistas:
- Para crear una variable utilizamos la palabra `let`.
- Para asignar el valor a una variable utilizamos el operador `=`.
*/

let primerNumero = 76; // Puedes cambiar este valor
let segundoNumero = 101; // Puedes cambiar este valor

let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = (primerNumero / segundoNumero).toFixed(2);

console.log(`
    Resultado de la suma: ${resultadoSuma}
    Resultado de la resta: ${resultadoResta}
    Resultado de la multiplicación: ${resultadoMultiplicacion}
    Resultado de la división: ${resultadoDivision}
    `);