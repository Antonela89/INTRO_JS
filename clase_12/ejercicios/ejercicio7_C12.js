// Ejercicio 7: Matriz 5x5
// Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en la matriz.

//manual
//declarar variable matriz
const matriz1 = [
  [5,   12,  3,   22,  8],
  [1,   9,   45,  16,  30],
  [88,  7,   2,   10,  64],
  [19,  31,  50,  4,   11],
  [6,   27,  100, 15,  99]
];

//dinámico
// Se declara la variable 'matriz2' como un array vacío.
// Usaremos bucles para llenarla.
const matriz2 = [];
const filas = 5;
const columnas = 5;

// 1. Bucle externo para crear las 5 filas
for (let i = 0; i < filas; i++) {
  
  // 2. Crea un array vacío para representar la fila actual
  let filaActual = [];
  
  // 3. Bucle interno para llenar la fila con 5 columnas
  for (let j = 0; j < columnas; j++) {
    
    // 4. Genera un número entero positivo (ej: entre 1 y 100)
    // Math.random() -> número entre 0 y 0.99...
    // * 100 -> número entre 0 y 99.99...
    // Math.floor() -> lo redondea hacia abajo (0 a 99)
    // + 1 -> lo convierte en un rango de 1 a 100
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    // 5. Añade el número a la fila actual
    filaActual.push(numeroAleatorio);
  }
  
  // 6. Añade la fila completa a la matriz principal
  matriz2.push(filaActual);
}

let sumamMatriz1 = 0;

for (let fila = 0; fila < matriz1.length; fila++) {
    for (let columna = 0; columna < matriz1[fila].length; columna++) {
        sumamMatriz1 += matriz1[fila][columna];
    }
}

console.log(`La suma de los elementos de la matriz1 es: ${sumamMatriz1}`)

let sumamMatriz2 = 0;

for (let fila = 0; fila < matriz2.length; fila++) {
    for (let columna = 0; columna < matriz2[fila].length; columna++) {
        sumamMatriz2 += matriz2[fila][columna];
    }
}

console.log(`La suma de los elementos de la matriz2 es: ${sumamMatriz2}`)

//funcion
const sumaMatriz = (matriz) => {
    let suma = 0; 
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            suma += matriz[fila][columna];
        }
    }
    
    return suma; 
    
}

console.log(sumaMatriz(matriz1));
console.log(sumaMatriz(matriz2));