/*
Ejercicio 6 - Comparaciones y Operadores Lógicos
Declara dos variables con valores numéricos. Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10 y muestra el resultado en la consola.

Pasos a seguir:
1. Declara dos variables y asígnales valores numéricos.
2. Utiliza los operadores `>` y `&&` para verificar si ambos números son mayores que 10.
3. Utiliza `console.log()` para mostrar el resultado.

Pista: Los operadores de comparación en JavaScript son `>`, `<`, `>=`, `<=`, `===`, `!==`. El operador lógico `&&` se usa para combinar condiciones.
*/

let numero1 = 15; // Primer número
let numero2 = 2; // Segundo número

(numero1 > 10 && numero2 > 10) ? console.log("Ambos números son mayores que 10") : console.log("Al menos uno de los números no es mayor que 10");