// Ejercicio 10: Flores Favoritas
// Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
// 1.  Inicializa un array vacío para almacenar las flores favoritas.
// 2.  Pregunta al usuario por sus tres flores favoritas utilizando `prompt` y agrega cada una al array manualmente (sin usar métodos como `push`).
// 3.  Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
// 4.  Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).

const prompt = require('prompt-sync')();

let floresFavoritas = [];

for (let i = 0; i < 3; i++) {
    let flor = prompt(`Ingresa la flor n° ${i + 1}: `).toLowerCase();
    floresFavoritas[i] = flor;
}

console.log(floresFavoritas);

let florAVerificar = prompt('Ingresa la flor a verificar: ').toLowerCase();

const estaEnLista = (florBuscada, lista) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === florBuscada) {
            return true;
        }
    }
    return false;
}

const cantidadVeces = (florBuscada, lista) => {
    let contador = 0; 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === florBuscada) {
            contador ++;
        }
    }
    return contador
}

if ( estaEnLista(florAVerificar, floresFavoritas)) {
    console.log(`✅ ¡Sí! La flor "${florAVerificar}" está en tu lista de favoritas.`);
} else {
    console.log(`❌ No, la flor "${florAVerificar}" NO está en tu lista de favoritas.`);
}

const cantidad = cantidadVeces(florAVerificar, floresFavoritas)

console.log(`La flor "${florAVerificar}" se mencionó ${cantidad} vez/veces.`);
