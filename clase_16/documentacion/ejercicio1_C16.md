# Documentación del Código: Ejercicio 1 - Crear Array con Cuadrados de Números (`map`)

## Descripción General

Este script de JavaScript inicializa un array de números. Luego, utiliza el método `map()` para crear un nuevo array donde cada elemento es el cuadrado del elemento correspondiente en el array original. Finalmente, imprime el nuevo array de cuadrados en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `map()` de los arrays y el operador de exponenciación (`**`). Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `numeros`**

```js
let numeros = [2, 4, 6, 8];
```

*   **Propósito**: Definir el array original de números que se transformarán.
*   **Detalle**:
    *   `let numeros = [2, 4, 6, 8];`: Declara una variable `numeros` y le asigna un array con cuatro números enteros.

2️⃣ **Creación del Array `cuadrados` usando `map()` y Visualización**

```js
let cuadrados = numeros.map(numero => numero ** 2);
console.log(cuadrados);
```

*   **Propósito**: Generar un nuevo array donde cada número del array `numeros` original sea reemplazado por su cuadrado, y luego mostrar este nuevo array.
*   **Detalle**:
    *   `numeros.map(numero => numero ** 2)`: El método `map()` se llama sobre el array `numeros`.
        *   `map()` crea un **nuevo array** aplicando una función a cada elemento del array original.
        *   `numero => numero ** 2`: Es una función flecha que se ejecuta para cada `numero` en el array `numeros`.
            *   `numero ** 2`: Calcula el cuadrado del `numero` actual (equivalente a `Math.pow(numero, 2)` o `numero * numero`).
        *   El resultado de esta operación para cada elemento se recoge en el nuevo array.
    *   `let cuadrados = ...`: El nuevo array resultante (que será `[4, 16, 36, 64]`) se almacena en la variable `cuadrados`.
    *   `console.log(cuadrados);`: Imprime el array `cuadrados` en la consola.

## Salida Esperada en Consola

```
[ 4, 16, 36, 64 ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `calcularCuadrados.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el array de cuadrados impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo claro y conciso del uso del método `map()`. `map()` es una herramienta poderosa y fundamental en la programación funcional en JavaScript para transformar cada elemento de un array en un nuevo valor, produciendo un nuevo array de la misma longitud sin modificar el original.