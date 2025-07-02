# 🔢 Documentación del Código: Ejercicio 9 - Ordenamiento y Búsqueda Binaria

## Descripción General

Este ejercicio combina dos algoritmos fundamentales: el ordenamiento y la búsqueda. Comienza con una lista desordenada de números.
1.  **Ordenamiento**: Primero, implementa una función con el algoritmo **Bubble Sort** para ordenar la lista de menor a mayor. También muestra el resultado de usar el método nativo `.sort()` de JavaScript para comparación.
2.  **Búsqueda**: Luego, utiliza el algoritmo de **Búsqueda Binaria** sobre la lista ya ordenada para encontrar la posición de varios números objetivo.
3.  **Desafío Extra**: Implementa una versión avanzada que, después de ordenar, permite encontrar un número y recuperar su **posición original** en la lista desordenada.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza lógica de programación fundamental (ciclos, condicionales), el objeto `Math` y métodos de array como `.sort()` y `.map()`.

## Funcionamiento del Código

### 1️⃣ Inicialización de la Lista Desordenada
```js
let list = [12, 3, 5, 7, 1, 22, 47, 100];
```
*   **Propósito**: Definir el conjunto de datos inicial que necesita ser ordenado antes de la búsqueda.

### 2️⃣ Ordenamiento con Bubble Sort (`ordenadaBubble`)
```js
const ordenadaBubble = array => {
    let n = array.length;
    let intercambiado;
    for (let i = 0; i < n - 1; i++) {
        intercambiado = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                intercambiado = true;
            }
        }
        if (!intercambiado) {
            break;
        }
    }
    return array;
};
```
*   **Propósito**: Implementar el algoritmo Bubble Sort para ordenar el array.
*   **Lógica**:
    1.  Utiliza ciclos anidados para recorrer el array múltiples veces ("pasadas").
    2.  En cada pasada, compara elementos adyacentes y los intercambia si están en el orden incorrecto.
    3.  Los elementos más grandes "burbujean" hacia el final del array con cada pasada.
    4.  Incluye una optimización para detenerse si una pasada completa no produce ningún intercambio.
    *Nota: El código original tenía un error al copiar el array. Esta versión corrige la lógica para que modifique el array pasado por referencia, como es típico en implementaciones in-place de Bubble Sort.*

### 3️⃣ Búsqueda Binaria sobre el Array Ordenado
```js
const busquedaBinaria = (array, objetivo) => {
    // ... (misma implementación que en el Ejercicio 8) ...
};

const numerosYaOrdenados = ordenadaBubble([...list]); // Ordena una copia
const objetivos = [12, 5, 22, 100];

for (const objetivo of objetivos) {
    const indiceEncontrado = busquedaBinaria(numerosYaOrdenados, objetivo);
    // ... (lógica de impresión de resultados) ...
}
```
*   **Propósito**: Aplicar la búsqueda binaria a la lista ya ordenada para encontrar eficientemente la posición de cada número objetivo.

### 4️⃣ Desafío Extra: Conservar el Índice Original
```js
const listConIndices = list1.map((valor, indice) => {
    return { valor: valor, indiceOriginal: indice };
});

listConIndices.sort((a, b) => a.valor - b.valor);

const busquedaBinariaObjetos = (array, objetivo) => {
    // ... (lógica de búsqueda binaria adaptada para objetos) ...
};
```
*   **Propósito**: Resolver el problema de que el ordenamiento pierde las posiciones originales de los elementos.
*   **Lógica**:
    1.  **Mapeo**: Antes de ordenar, se usa `map` para transformar el array de números en un **array de objetos**. Cada objeto contiene el `valor` original y su `indiceOriginal`.
    2.  **Ordenamiento de Objetos**: Se usa `.sort()` para ordenar este nuevo array de objetos basándose en la propiedad `valor`.
    3.  **Búsqueda Adaptada**: La función `busquedaBinariaObjetos` se modifica ligeramente para comparar `array[medio].valor` con el `objetivo`.
    4.  **Retorno Completo**: Cuando encuentra una coincidencia, devuelve el objeto completo (`{ valor, indiceOriginal }`), permitiendo acceder tanto al valor como a su índice original.

---

## Salida Esperada por Consola

**1. Ordenamiento:**
```
Arreglo Original: [ 12, 3, 5, 7, 1, 22, 47, 100 ]
// (Salida detallada del proceso de Bubble Sort)
Arreglo Final Ordenado con método Bubble Sort: [ 1, 3, 5, 7, 12, 22, 47, 100 ]
```
**2. Búsqueda Binaria Simple:**
```
¡Éxito! El número 12 se encuentra en el índice 4 del array ordenado.
¡Éxito! El número 5 se encuentra en el índice 2 del array ordenado.
// ... etc.
```
**3. Desafío Extra (Búsqueda con Índice Original):**
```
El número 12 se encontró.
Su posición en el array ORDENADO es: 4
Su posición en el array ORIGINAL era: 0
El número 5 se encontró.
Su posición en el array ORDENADO es: 2
Su posición en el array ORIGINAL era: 2
// ... etc.
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `ordenarYBuscar.js`).
2.  Abre una terminal y ejecuta:
    ```bash
    node ordenarYBuscar.js
    ```

---

## 🏁 Resumen

Este ejercicio es un desafío completo que conecta dos conceptos algorítmicos importantes. Demuestra que algoritmos eficientes como la búsqueda binaria dependen de precondiciones (un array ordenado) y presenta una solución elegante (mapear a objetos) para un problema común: cómo mantener información asociada (el índice original) a través de una operación de ordenamiento.
