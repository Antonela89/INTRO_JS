/*
Ejercicio 7 - Intercambio de Valores
Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.  
Pista: Puedes usar una variable temporal, aritmética o asignación simultánea. Investiga cuál método usarás.
*/

// Declaración de variables con valores iniciales  
let primerValor = 10; 
let segundoValor = 20;

console.log(`Antes del intercambio (variable temporal): primerValor = ${primerValor}, segundoValor = ${segundoValor}`);

// Intercambio de valores usando una variable temporal
let valorTemporal = primerValor; // Guardamos el primer valor en una variable temporal

primerValor = segundoValor; // Asignamos el segundo valor al primer valor
segundoValor = valorTemporal; // Asignamos el valor temporal al segundo valor

console.log(`Después del intercambio (variable temporal): primerValor = ${primerValor}, segundoValor = ${segundoValor}`);

// Alternativa: Intercambio de valores usando asignación simultánea

let otroValor1 = 30;
let otroValor2 = 40;

console.log(`Antes del intercambio (asignación simultánea): otroValor1 = ${otroValor1}, otroValor2 = ${otroValor2}`);

[otroValor1, otroValor2] = [otroValor2, otroValor1];

console.log(`Después del intercambio (asignación simultánea): primerValor = ${otroValor1}, segundoValor = ${otroValor2}`);
