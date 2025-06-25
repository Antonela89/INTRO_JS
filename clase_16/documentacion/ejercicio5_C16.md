# Documentación del Código: Ejercicio 5 - Recorrer una Lista e Imprimir Cada Elemento (`forEach`)

## Descripción General

Este script de JavaScript inicializa un array de frutas. Luego, utiliza el método `forEach()` para iterar sobre cada elemento del array y mostrar el nombre de cada fruta en la consola, una por una.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `forEach()` de los arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `frutas`**

```js
let frutas = ['manzana', 'banana', 'cereza'];
```

*   **Propósito**: Definir el array original de frutas que se recorrerá.
*   **Detalle**:
    *   `let frutas = ['manzana', 'banana', 'cereza'];`: Declara una variable `frutas` y le asigna un array con tres cadenas de texto, cada una representando una fruta.

2️⃣ **Recorrido e Impresión de Cada Elemento usando `forEach()`**

```js
frutas.forEach(fruta => console.log(fruta));
```

*   **Propósito**: Ejecutar una acción (imprimir en la consola) para cada fruta en el array `frutas`.
*   **Detalle**:
    *   `frutas.forEach(fruta => console.log(fruta))`: El método `forEach()` se llama sobre el array `frutas`.
        *   `forEach()` ejecuta la función de callback proporcionada una vez por cada elemento en el array en orden ascendente. No devuelve un nuevo array (devuelve `undefined`).
        *   `fruta => console.log(fruta)`: Es una función flecha (función de callback) que se ejecuta para cada `fruta` en el array `frutas`.
            *   El parámetro `fruta` representa el elemento actual del array durante la iteración.
            *   `console.log(fruta)`: Imprime el nombre de la `fruta` actual en la consola.

## Salida Esperada en Consola

```
manzana
banana
cereza
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `listarFrutas.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el nombre de cada fruta impreso en una nueva línea en la consola.

🏁 **Resumen**

Este script es un ejemplo básico y claro del uso del método `forEach()`. `forEach()` es una forma común y legible de iterar sobre los elementos de un array cuando se necesita realizar una operación o "efecto secundario" (como imprimir en la consola) para cada elemento, sin la necesidad de crear un nuevo array a partir de los resultados (para lo cual se usaría `map()`).