# Documentación del Código: Ejercicio 3 - Encontrar el Primer Número Mayor a 10 (`find`)

## Descripción General

Este script de JavaScript inicializa un array de números. Luego, utiliza el método `find()` para buscar y devolver el primer elemento en el array que sea mayor que 10. Finalmente, imprime este número encontrado en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `find()` de los arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `numeros`**

```js
let numeros = [5, 8, 12, 20, 3];
```

*   **Propósito**: Definir el array original de números donde se realizará la búsqueda.
*   **Detalle**:
    *   `let numeros = [5, 8, 12, 20, 3];`: Declara una variable `numeros` y le asigna un array con cinco números enteros.

2️⃣ **Búsqueda del Primer Número Mayor a 10 usando `find()` y Visualización**

```js
const mayorQue = numero => numero > 10; // Función de callback definida por separado
let mayor = numeros.find(numero => mayorQue(numero)); // Usando la función de callback
// Alternativa más concisa:
// let mayor = numeros.find(numero => numero > 10);

console.log(mayor);
```

*   **Propósito**: Encontrar y mostrar el primer elemento del array `numeros` que satisfaga la condición de ser mayor que 10.
*   **Detalle**:
    *   `const mayorQue = numero => numero > 10;`: Se define una función flecha `mayorQue` que toma un `numero` y devuelve `true` si es mayor que 10, `false` en caso contrario. Esta es la función de callback (o predicado).
    *   `numeros.find(numero => mayorQue(numero))`: El método `find()` se llama sobre el array `numeros`.
        *   `find()` devuelve el **valor del primer elemento** en el array que satisface la función de prueba proporcionada. Si ningún elemento satisface la prueba, devuelve `undefined`.
        *   La función de callback `numero => mayorQue(numero)` se ejecuta para cada elemento del array `numeros` hasta que `mayorQue(numero)` devuelva `true`.
        *   En este caso, para `5` es `false`, para `8` es `false`, para `12` es `true`. `find()` se detiene aquí y devuelve `12`.
    *   `let mayor = ...`: El primer número encontrado que es mayor que 10 (que será `12`) se almacena en la variable `mayor`.
    *   `console.log(mayor);`: Imprime el número `mayor` en la consola.

## Salida Esperada en Consola

```
12
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `encontrarMayor.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el primer número mayor que 10 impreso en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `find()`. `find()` es muy útil cuando necesitas buscar un único elemento en un array que cumpla una condición específica y no necesitas todos los elementos que la cumplan (para eso se usaría `filter()`). Devuelve el elemento en sí, no su índice (para eso se usaría `findIndex()`).