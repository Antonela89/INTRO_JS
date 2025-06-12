// Ejercicio 8: Convertir grados Celsius a Fahrenheit **(Ejercicio entrevista)**
// Crea una función expresada llamada `convertirCelsiusAFahrenheit` que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
// Fórmula:

// > Fahrenheit = (Celsius × 9/5) + 32

const prompt = require('prompt-sync')();

let temperatura = parseFloat(prompt('Ingresa la temperatura: '));

let convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;

    return fahrenheit;
}

console.log(`${temperatura}°C es igual a ${convertirCelsiusAFahrenheit(temperatura)}°F`);

