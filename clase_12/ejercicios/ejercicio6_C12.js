// Ejercicio 6: Iguales a 10 pero menores de 1000
// Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10, pero menores que 1000.

let matriz = [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4]
];

// inicializar variable suma
let suma = 0; 

//recorrer matriz con dos ciclos for
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        //sumar según condición
        if (matriz[fila][columna] >= 10 && matriz[fila][columna] < 1000) {
            suma += matriz[fila][columna];   
        }
    }
}

//imprimir suma
console.log(`La suma de los números mayores o iguales a 10 y menores a 1000 es: ${suma}`);
