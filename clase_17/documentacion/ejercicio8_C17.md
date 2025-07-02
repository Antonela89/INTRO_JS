# 🔍 Documentación del Código: Ejercicio 8 - Búsqueda Binaria

## Descripción General

Este script de JavaScript implementa el algoritmo de búsqueda binaria para encontrar la posición de varios números objetivo dentro de un array ordenado. La búsqueda binaria es un algoritmo eficiente que funciona bajo el principio de "divide y vencerás", reduciendo a la mitad el espacio de búsqueda en cada paso. El script define una función `busquedaBinaria` y la utiliza para encontrar la posición de cinco números diferentes en una lista predefinida.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza lógica de programación fundamental, incluyendo ciclos `while` y el objeto `Math`.

## Funcionamiento del Código

### 1️⃣ Inicialización de la Lista y Objetivos
```js
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const objetivo1 = 1;
const objetivo2 = 5;
const objetivo3 = 6;
const objetivo4 = 9;
const objetivo5 = 11;
```
*   **Propósito**: Definir el array ordenado sobre el que se realizará la búsqueda y los números específicos que se buscarán.
*   **Requisito Clave**: El array `list` **debe estar ordenado** para que la búsqueda binaria funcione correctamente.

### 2️⃣ Función `busquedaBinaria`
```js
const busquedaBinaria = (array, objetivo) => {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        let valorMedio = array[medio];

        console.log(`Buscando... Inicio: ${inicio}, Fin: ${fin}, Medio: ${medio} (valor: ${valorMedio})`);

        if (valorMedio === objetivo) {
            return medio;
        } else if (objetivo > valorMedio) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }
    return -1;
};
```
*   **Propósito**: Implementar el algoritmo de búsqueda binaria.
*   **Lógica**:
    1.  **Punteros**: Se inicializan dos punteros, `inicio` (en el índice 0) y `fin` (en el último índice del array).
    2.  **Ciclo `while`**: El ciclo continúa mientras `inicio` no haya superado a `fin`.
    3.  **Cálculo del Medio**: En cada iteración, se calcula el índice `medio` del segmento de búsqueda actual.
    4.  **Comparación**:
        *   Si el valor en el índice `medio` es el `objetivo`, se devuelve el índice `medio` y la búsqueda termina.
        *   Si el `objetivo` es mayor que el `valorMedio`, se descarta la mitad inferior del segmento de búsqueda moviendo `inicio` a `medio + 1`.
        *   Si el `objetivo` es menor que el `valorMedio`, se descarta la mitad superior moviendo `fin` a `medio - 1`.
    5.  **No Encontrado**: Si el ciclo termina (porque `inicio` supera a `fin`), significa que el objetivo no está en el array, y la función devuelve `-1`.

### 3️⃣ Ejecución y Visualización
```js
const indiceEncontrado1 = busquedaBinaria(list, objetivo1);
if (indiceEncontrado1 !== -1) {
  console.log(`\n¡Éxito! El número ${objetivo1} se encuentra en el índice ${indiceEncontrado1}.`);
}
// ... (Se repite para los 5 objetivos) ...
```
*   **Propósito**: Llamar a la función de búsqueda para cada número objetivo y mostrar el resultado de forma clara.

---

## Salida Esperada por Consola

A continuación se muestra la salida para la búsqueda del objetivo `9`.

**Interacción en consola:**
(No hay interacción, la ejecución es automática)

**Resultado en consola para la búsqueda del 9:**
```
Buscando... Inicio: 0, Fin: 10, Medio: 5 (valor: 6)
Buscando... Inicio: 6, Fin: 10, Medio: 8 (valor: 9)

¡Éxito! El número 9 se encuentra en el índice 8.
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `busquedaBinaria.js`).
2.  Abre una terminal y ejecuta:
    ```bash
    node busquedaBinaria.js
    ```

---

## 🏁 Resumen

Este ejercicio es una implementación didáctica del algoritmo de búsqueda binaria. Muestra paso a paso cómo el algoritmo descarta mitades del array para encontrar un elemento de manera mucho más eficiente que una búsqueda lineal (recorriendo elemento por elemento), especialmente en arrays grandes. La clave de su funcionamiento es que el array de entrada debe estar previamente ordenado.