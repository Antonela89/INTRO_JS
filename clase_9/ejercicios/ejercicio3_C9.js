/*
Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario dos valores booleanos y muestra las combinaciones.
*/

const prompt = require('prompt-sync')();

let condicion1 = prompt("Introduce el primer valor booleano (true/false): ").toLowerCase() === 'true';
let condicion2 = prompt("Introduce el segundo valor booleano (true/false): ").toLowerCase() === 'true';


console.log(`Combinaciones de las condiciones
    ${condicion1} && ${condicion2} = ${condicion1 && condicion2}
    ${condicion1} || ${condicion2} = ${condicion1 || condicion2}
    !${condicion1} = ${!condicion1}
    !${condicion2} = ${!condicion2}
    !(${condicion1} && ${condicion2}) = ${!(condicion1 && condicion2)}
    !(${condicion1} || ${condicion2}) = ${!(condicion1 || condicion2)}
    `);



