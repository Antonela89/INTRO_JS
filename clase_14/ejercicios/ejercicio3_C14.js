// Ejercicio 3: Clasificación de edades
// Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.

// Niño: 0 - 11;
// Adolescente: 12 - 18;
// adulto: 18 - 60;
// adulto mayor: + 60;
 
const prompt = require('prompt-sync')();

let edad = parseInt(prompt('Ingresa una edad: '));

let clasificacionPorEdad = edad => {
    if (edad >= 0 && edad <= 11) {
        return 'Es un niño';
    } else if  (edad > 11 && edad <= 18) {
        return 'Es un adolescente';
    } else if (edad > 18 && edad <= 60) {
        return 'Es un adulto';
    } else {
        return 'Es un adulto mayor';
    }
}

console.log(clasificacionPorEdad(edad));

