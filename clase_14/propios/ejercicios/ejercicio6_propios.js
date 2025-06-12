// Ejercicio 6: Calculadora como Objeto
// Crea un objeto literal llamado `calculadora` que tenga los siguientes métodos, todos recibiendo dos números como parámetros:
// `sumar(a, b)`
// `restar(a, b)`
// `multiplicar(a, b)`
// `dividir(a, b)`: Este método debe verificar que el segundo número (`b`) no sea cero antes de realizar la operación.

let calculadora = {
    sumar: (a,b) => a + b, 
    restar: (a,b) => a - b,
    multiplicar: (a,b) => a * b,
    dividir: (a,b) => b !== 0 ? a / b : 'No se puede dividir por cero.' 
}

console.log(calculadora.sumar(1,1));
console.log(calculadora.restar(8,9));
console.log(calculadora.multiplicar(2,7));
console.log(calculadora.dividir(21,0));