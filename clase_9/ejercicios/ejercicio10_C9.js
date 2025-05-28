/*
Ejercicio 10:
Pide un número del 1 al 7 y muestra el día de la semana correspondiente. Si no está en el rango, muestra error.
*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Introduce un número del 1 al 7: "));

// lo ideal seria usar un switch
// Alternativa usando un switch
/*
switch (numero) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Error: El número debe estar entre 1 y 7.");
}
*/  

// estructura de control if-else para determinar el día de la semana
if (numero === 1) {
    console.log("Lunes");
} else if (numero === 2) {
    console.log("Martes");
} else if (numero === 3) {
    console.log("Miércoles");
} else if (numero === 4) {
    console.log("Jueves");
} else if (numero === 5) {
    console.log("Viernes");
} else if (numero === 6) {
    console.log("Sábado");
} else if (numero === 7) {
    console.log("Domingo");
} else {
    console.log("Error: El número debe estar entre 1 y 7.");
}

