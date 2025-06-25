# Documentación del Código: Ejercicio 2 - Filtrar Números Pares de una Lista (`filter`)

## Descripción General

Este script de JavaScript inicializa un array de números. Luego, utiliza el método `filter()` para crear un nuevo array que contiene únicamente los números pares del array original. Finalmente, imprime este nuevo array de números pares en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `filter()` de los arrays y el operador módulo (`%`). Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `numeros`**

```js
let numeros = [1, 2, 3, 4, 5, 6];
```

*   **Propósito**: Definir el array original de números que se filtrarán.
*   **Detalle**:
    *   `let numeros = [1, 2, 3, 4, 5, 6];`: Declara una variable `numeros` y le asigna un array con seis números enteros.

2️⃣ **Creación del Array `pares` usando `filter()` y Visualización**

```js
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);
```

*   **Propósito**: Generar un nuevo array que contenga solo los elementos del array `numeros` original que sean pares, y luego mostrar este nuevo array.
*   **Detalle**:
    *   `numeros.filter(numero => numero % 2 === 0)`: El método `filter()` se llama sobre el array `numeros`.
        *   `filter()` crea un **nuevo array** con todos los elementos que pasan la prueba implementada por la función proporcionada.
        *   `numero => numero % 2 === 0`: Es una función flecha (función de callback o predicado) que se ejecuta para cada `numero` en el array `numeros`.
            *   `numero % 2 === 0`: Esta expresión evalúa si el `numero` actual es par (es decir, si el residuo de su división entre 2 es 0). Devuelve `true` si es par, y `false` si es impar.
        *   Solo los elementos para los cuales la función de callback devuelve `true` se incluyen en el nuevo array.
    *   `let pares = ...`: El nuevo array resultante (que será `[2, 4, 6]`) se almacena en la variable `pares`.
    *   `console.log(pares);`: Imprime el array `pares` en la consola.

## Salida Esperada en Consola

```
[ 2, 4, 6 ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `filtrarPares.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el array de números pares impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo claro del uso del método `filter()`. `filter()` es esencial para seleccionar subconjuntos de un array basados en una condición, creando un nuevo array con los elementos que cumplen dicha condición sin modificar el array original.