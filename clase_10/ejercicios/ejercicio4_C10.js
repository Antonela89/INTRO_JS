/*
Ejercicio 4 – Tipo de Datos
Declarar 4 variables utilizando la palabra reservada `let` y asignarles valores según el tipo de dato que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

Pasos a seguir:
Declaración de Variables:
1. Declara una variable llamada `verdadero` y asígnale un dato de tipo booleano (true o false).
2. Declara una variable llamada `texto` y asígnale un string de tu elección.
3. Declara una variable llamada `numero` y asígnale un dato numérico.
4. Declara una variable llamada `nada` y asígnale un valor que represente la ausencia de valor en JavaScript.

Operaciones y Validaciones:
1. Realiza una operación matemática usando la variable `numero`.
2. Concatena el `string` de la variable `texto` con otro mensaje adicional.
3. Verifica si la variable `verdadero` es true o false y muestra un mensaje diferente según el resultado.
4. Implementa una condición para verificar si la variable `nada` es null y muestra un mensaje si es así.
*/

let verdadero = true; // Variable booleana
let texto = "Hola, este es un mensaje."; // Variable de tipo string
let numero = 42; // Variable numérica
let nada = null; // Variable que representa la ausencia de valor

let suma = numero + 10; // Operación matemática
let mensajeConcatenado = texto + " ¡Espero que estés teniendo un buen día!"; // Concatenación de strings
let mensajeBooleano = verdadero ? "La variable 'verdadero' es true." : "La variable 'verdadero' es false."; // Verificación de booleano
let mensajeNada = nada === null ? "La variable 'nada' es null." : "La variable 'nada' tiene un valor."; // Verificación de null 

console.log(`Resultado de la suma: ${suma}`);
console.log(`Mensaje concatenado: ${mensajeConcatenado}`); 
console.log(mensajeBooleano);
console.log(mensajeNada);

