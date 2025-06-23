# Documentación del Código: Ejercicio 8 - Suma de Diagonales en Matriz (Rojo y Verde)

## Descripción General

Este script de JavaScript primero genera una matriz cuadrada (cuadrícula) de 10x10. Cada celda de la matriz contiene un objeto con su valor numérico (del 1 al 100 en secuencia) y un color ('red', 'green', o 'white') que indica si pertenece a la diagonal principal (roja), la diagonal secundaria (verde), o ninguna. Luego, define dos funciones:
1.  `diagonalRoja`: Calcula la suma de los valores en la diagonal principal (roja) y devuelve los números de esa diagonal.
2.  `diagonalVerde`: Calcula la suma de los valores en la diagonal secundaria (verde) y devuelve los números de esa diagonal.
Finalmente, llama a estas funciones e imprime los resultados.

---

## Requisitos Previos

Este script no requiere bibliotecas externas como `prompt-sync`. Utiliza funcionalidades básicas de JavaScript.

## Funcionamiento del Código

El script se desarrolla en varias etapas:

### 1️⃣ Generación de la Matriz Cuadrícula (`matrizCuadricula`)

```js
const tamano = 10;
const matrizCuadricula = [];

for (let i = 0; i < tamano; i++) {
  const fila = [];
  for (let j = 0; j < tamano; j++) {
    const valor = i * tamano + j + 1;
    let color = 'white';
    if (i === j) {
      color = 'red';
    }
    if (i + j === tamano - 1) {
      // Si ya era 'red' (centro en matrices impares), podría sobreescribirse a 'green'
      // o podría ser 'red-green' si se quisiera. Aquí, 'green' tiene precedencia.
      color = 'green';
    }
    fila.push({
      valor: valor,
      color: color
    });
  }
  matrizCuadricula.push(fila);
}
console.log(matrizCuadricula); // Visualización opcional de la matriz generada
```

*   **Propósito**: Crear una matriz de 10x10 donde cada celda es un objeto que contiene un `valor` numérico secuencial (1-100) y un `color` ('red' para la diagonal principal, 'green' para la secundaria, 'white' para las demás).
*   **Detalle**:
    *   `tamano = 10`: Define el tamaño de la cuadrícula.
    *   Ciclos anidados `for` (`i` para filas, `j` para columnas) para poblar la matriz.
    *   `valor = i * tamano + j + 1;`: Calcula el valor numérico secuencial para cada celda.
    *   `if (i === j)`: Condición para la diagonal principal (índice de fila igual al índice de columna). Se asigna `color = 'red'`.
    *   `if (i + j === tamano - 1)`: Condición para la diagonal secundaria. Se asigna `color = 'green'`. Nótese que si una celda está en ambas diagonales (el centro de una matriz de tamaño impar), el color 'green' prevalecerá debido al orden de las condiciones.
    *   `fila.push({ valor: valor, color: color });`: Se añade un objeto con el valor y el color a la fila actual.
    *   `matrizCuadricula.push(fila);`: Se añade la fila completa a la matriz principal.

### 2️⃣ Función `diagonalRoja`

```js
const diagonalRoja = (matriz) => {
    let diagonalRojaNumeros = []; // Renombrado para claridad
    let sumaDiagonalRojo = 0;

    for (let fila = 0; fila < matriz.length; fila++) {
        const numero = matriz[fila][fila].valor;
        diagonalRojaNumeros.push(numero);
        sumaDiagonalRojo += numero;
    }
    return {
        suma: sumaDiagonalRojo,
        diagonal: diagonalRojaNumeros // Renombrado para consistencia
    };
};
```

*   **Propósito**: Calcular la suma de los valores de la diagonal principal (roja) de una matriz dada y devolver tanto la suma como los números de dicha diagonal.
*   **Detalle**:
    *   Itera sobre las filas de la matriz. Para la diagonal principal, el índice de la columna es igual al índice de la fila (`matriz[fila][fila]`).
    *   Accede a la propiedad `.valor` del objeto en cada celda de la diagonal.
    *   Añade el valor al array `diagonalRojaNumeros` y a la `sumaDiagonalRojo`.
    *   Devuelve un objeto con la `suma` y el array `diagonal`.

### 3️⃣ Función `diagonalVerde`

```js
const diagonalVerde = (matriz) => {
    let diagonalVerdeNumeros = [];
    let sumaDiagonalVerde = 0;
    const tamanoMatriz = matriz.length; // Usar una variable para el tamaño

    for (let fila = 0; fila < tamanoMatriz; fila++) {
        const columna = (tamanoMatriz - 1) - fila;
        const numero = matriz[fila][columna].valor;
        diagonalVerdeNumeros.push(numero);
        sumaDiagonalVerde += numero;
    }
    return {
        suma: sumaDiagonalVerde,
        diagonal: diagonalVerdeNumeros // Renombrado para consistencia
    };
};
```

*   **Propósito**: Calcular la suma de los valores de la diagonal secundaria (verde) de una matriz dada y devolver tanto la suma como los números de dicha diagonal.
*   **Detalle**:
    *   Itera sobre las filas de la matriz. Para la diagonal secundaria, el índice de la columna se calcula como `(tamañoDeMatriz - 1) - indiceDeFila`.
    *   Accede a la propiedad `.valor` del objeto en cada celda de la diagonal.
    *   Añade el valor al array `diagonalVerdeNumeros` y a la `sumaDiagonalVerde`.
    *   Devuelve un objeto con la `suma` y el array `diagonal`.

### 4️⃣ Llamada a las Funciones e Impresión de Resultados

```js
const resultadoRoja = diagonalRoja(matrizCuadricula);
console.log(`Los números de la diagonal roja son: ${resultadoRoja.diagonal}`);
console.log(`El resultado de la suma de los elementos de la diagonal roja es: ${resultadoRoja.suma}`);

const resultadoVerde = diagonalVerde(matrizCuadricula);
console.log(`Los números de la diagonal verde son: ${resultadoVerde.diagonal}`); // Corregido "roja" por "verde"
console.log(`El resultado de la suma de los elementos de la diagonal verde es: ${resultadoVerde.suma}`); // Corregido "roja" por "verde"
```

*   **Propósito**: Ejecutar las funciones de suma de diagonales con la `matrizCuadricula` generada y mostrar los resultados.
*   **Detalle**:
    *   Se llama a cada función una vez, almacenando el objeto devuelto.
    *   Se accede a las propiedades `suma` y `diagonal` de los objetos resultado para imprimir la información.

## Salida Esperada en Consola

Primero se imprimirá la `matrizCuadricula` completa (si la línea `console.log(matrizCuadricula);` no está comentada).
Luego, se imprimirán los resultados de las sumas y los números de las diagonales. Para una matriz de 10x10 con valores de 1 a 100:

**Diagonal Roja (Principal):** 1, 12, 23, 34, 45, 56, 67, 78, 89, 100
Suma: 505

**Diagonal Verde (Secundaria):** 10, 19, 28, 37, 46, 55, 64, 73, 82, 91
Suma: 505

**Salida de ejemplo:**
```
// (Aquí iría la impresión de matrizCuadricula si no está comentada)
Los números de la diagonal roja son: 1,12,23,34,45,56,67,78,89,100
El resultado de la suma de los elementos de la diagonal roja es: 505
Los números de la diagonal verde son: 10,19,28,37,46,55,64,73,82,91
El resultado de la suma de los elementos de la diagonal verde es: 505
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `diagonalesMatriz.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la salida en la consola.

🏁 **Resumen**

Este script es un ejercicio más avanzado que implica la generación dinámica de una estructura de datos compleja (una matriz de objetos), la identificación de patrones dentro de esa estructura (las diagonales) y la extracción y procesamiento de datos específicos. Demuestra cómo se pueden encapsular lógicas de cálculo en funciones para una mejor organización y reutilización del código.