// Ejercicio 8: Rojo y Verde
// Para este ejercicio vamos a generar dos funciones:
// a. Una va a sumar los valores en la diagonal marcada en rojo.
// b. La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.
// Rojo: 505
// Verde: 505

// **IMPORTANTE:** Para hacer este ejercicio, tendrán que investigar sobre el método `push` en los Arrays. ¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!

//CUADRICULA DEL EJERICICIO

// Definimos el tamaño de la cuadrícula
const tamano = 10;

// Inicializamos la matriz vacía
const matrizCuadricula = [];

// Usamos bucles anidados para recorrer las filas y columnas
for (let i = 0; i < tamano; i++) {
  // Creamos un array para la fila actual
  const fila = [];
  
  for (let j = 0; j < tamano; j++) {
    // Calculamos el número de la celda
    const valor = i * tamano + j + 1;
    
    // Determinamos el color de la celda por defecto
    let color = 'white'; // 'white' o null para las celdas sin color
    
    // Condición para la diagonal principal (roja)
    // Cuando el índice de la fila (i) es igual al de la columna (j)
    if (i === j) {
      color = 'red';
    }
    
    // Condición para la diagonal secundaria (verde)
    // Cuando la suma de los índices de fila y columna es igual al tamaño - 1
    if (i + j === tamano - 1) {
      color = 'green';
    }
    
    // Añadimos el objeto con el número y el color a la fila
    fila.push({
      valor: valor,
      color: color
    });
  }
  
  // Añadimos la fila completa a la matriz principal
  matrizCuadricula.push(fila);
}

// Para visualizar el resultado en la consola del navegador
console.log(matrizCuadricula);

//Resolución
const diagonalRoja = (matriz) => {
    let diagonalRoja = [];
    let sumaDiagonalRojo = 0;

    for (let fila = 0; fila < matriz.length; fila++) {
        const numero = matriz[fila][fila].valor; // la posicion de la fila y la columna son coincidentes
        diagonalRoja.push(numero);
        sumaDiagonalRojo += numero;

    }

    return {
        suma: sumaDiagonalRojo,
        diagonalRoja: diagonalRoja
    };
};

// 1. Llama a la función UNA SOLA VEZ y guarda el resultado
const resultadoRoja = diagonalRoja(matrizCuadricula);

console.log(`Los números  de la diagonal roja son: ${resultadoRoja.diagonalRoja}`);
console.log(`El resultado de la suma de los elementos de la diagonal roja son: ${resultadoRoja.suma}`);



const diagonalVerde = (matriz) => {
    let diagonalVerdeNumeros = [];
    let sumaDiagonalVerde = 0;
    const tamano = matriz.length;

    for (let fila = 0; fila < tamano; fila++) {
        const columna = (tamano - 1 ) - fila;
        const numero = matriz[fila][columna].valor; 
        diagonalVerdeNumeros.push(numero);
        sumaDiagonalVerde += numero;
    }

    return {
        suma:sumaDiagonalVerde,
        diagonalVerde: diagonalVerdeNumeros
    }
}

const resultadoVerde = diagonalVerde(matrizCuadricula);

console.log(`Los números  de la diagonal roja son: ${resultadoVerde.diagonalVerde}`);
console.log(`El resultado de la suma de los elementos de la diagonal roja son: ${resultadoVerde.suma}`);


