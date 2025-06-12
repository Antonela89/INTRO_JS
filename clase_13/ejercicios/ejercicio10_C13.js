// Ejercicio 10: Factorial de un número **(Ejercicio entrevista)**
// Crea una función expresada llamada `calcularFactorial` que reciba un número y devuelva su factorial.
// **Fórmula del factorial:**

// > n! = n × (n − 1) × ... × 1

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingrese un número: '));

let calcularFactorial = function(numero) {
    let arrayFactorial = [];
    let multiplicacionFactorial = 1;
    for (let n = numero; n >=1 ; n--){
       arrayFactorial.push(n);
    }

    for (let i = 0; i < arrayFactorial.length; i++) {
            multiplicacionFactorial *= arrayFactorial[i];
        }

    // Caso especial para cuando el número es 0, el array estará vacío
    // pero el factorial debe ser 1.
    if (numero === 0) {
        return {
            arrayFactorial: [0], 
            factorial: 1
        }  
    }

    return {
        arrayFactorial: arrayFactorial,
        factorial: multiplicacionFactorial
    }   
}

const resultado = calcularFactorial(numero);
console.log(`El !${numero} es: ${resultado.factorial}, los números mulitplicados son: ${resultado.arrayFactorial.join(' x ')}`);
