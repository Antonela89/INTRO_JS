// ¡Estás a cargo de organizar un desfile! Tenés que decidir cuántos personajes van a participar y qué emoji representa a tu equipo. Usando un bucle for, mostrá cómo desfilan uno a uno por la pasarela.

const prompt = require('prompt-sync')();

let cantidadPersonajes = parseInt(prompt('Ingresa la cantidad de personajes que forman parte de tu equipo: '));
let equipo = prompt('Ingresa un emoji para tu equipo (😀 😂): ')

console.log('Bienvenidos al desfile');
 console.log(`Presentamos a los integrantes del equipo: ${equipo}`);

for (let i = 1; i <= cantidadPersonajes; i++) {
    console.log(`${i} - ${equipo}`);
}

