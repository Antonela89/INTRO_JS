// Ejercicio 8: Busca un nombre específico
// Tienes una lista de nombres `['Carlos', 'Daniel', 'Laura', 'Ana']`. Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let encontrarNombre = nombre => nombre === 'Laura';

let encontrado = nombres.find(nombre => encontrarNombre(nombre));

console.log(encontrado);
