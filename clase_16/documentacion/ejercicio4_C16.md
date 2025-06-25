# Documentación del Código: Ejercicio 4 - Calcular la Suma Total de los Números (`reduce`)

## Descripción General

Este script de JavaScript inicializa un array de números. Luego, utiliza el método `reduce()` para calcular la suma de todos los elementos en el array. Finalmente, imprime la suma total en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `reduce()` de los arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `numeros`**

```js
let numeros = [1, 2, 3, 4];
```

*   **Propósito**: Definir el array original de números cuyos elementos se sumarán.
*   **Detalle**:
    *   `let numeros = [1, 2, 3, 4];`: Declara una variable `numeros` y le asigna un array con cuatro números enteros.

2️⃣ **Cálculo de la Suma Total usando `reduce()` y Visualización**

```js
let total = numeros.reduce((acumulador, numero) => acumulador + numero);
// Alternativamente, con un valor inicial para el acumulador (aunque no es necesario para la suma si el array no está vacío):
// let total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(total);
```

*   **Propósito**: Sumar todos los números del array `numeros` para obtener un único valor total, y luego mostrar este total.
*   **Detalle**:
    *   `numeros.reduce((acumulador, numero) => acumulador + numero)`: El método `reduce()` se llama sobre el array `numeros`.
        *   `reduce()` ejecuta una función "reductora" (callback) sobre cada elemento del array, de izquierda a derecha, para reducirlo a un único valor.
        *   `(acumulador, numero) => acumulador + numero`: Es la función reductora.
            *   `acumulador`: Es el valor acumulado devuelto por la última invocación del callback, o el valor inicial si se provee. Para la primera llamada, si no se provee valor inicial, `acumulador` es el primer elemento del array y `numero` es el segundo.
            *   `numero`: Es el elemento actual que está siendo procesado en el array.
            *   `acumulador + numero`: La operación que se realiza. El resultado de esta suma se convierte en el `acumulador` para la siguiente iteración.
        *   **Proceso de Reducción para `[1, 2, 3, 4]` sin valor inicial:**
            1.  `acumulador` = 1, `numero` = 2  => retorna 1 + 2 = 3
            2.  `acumulador` = 3, `numero` = 3  => retorna 3 + 3 = 6
            3.  `acumulador` = 6, `numero` = 4  => retorna 6 + 4 = 10
        *   El valor final del `acumulador` (10) es el resultado de la reducción.
    *   `let total = ...`: El resultado de la reducción (que será `10`) se almacena en la variable `total`.
    *   `console.log(total);`: Imprime el `total` en la consola.

## Salida Esperada en Consola

```
10
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `sumarNumeros.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la suma total impresa en la consola.

🏁 **Resumen**

Este script es un ejemplo fundamental del uso del método `reduce()`. `reduce()` es un método de array extremadamente versátil y potente que puede usarse para una amplia variedad de operaciones de agregación o transformación que resultan en un único valor (como sumas, productos, encontrar máximos/mínimos, aplanar arrays, etc.).