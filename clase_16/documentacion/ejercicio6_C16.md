# Documentación del Código: Ejercicio 6 - Agregar Prefijo y Sufijo a Cada Palabra (`map`)

## Descripción General

Este script de JavaScript inicializa un array de palabras. Luego, utiliza el método `map()` para crear un nuevo array donde a cada palabra del array original se le ha añadido un prefijo "¡" y un sufijo "!". Finalmente, imprime tanto el array original como el nuevo array transformado en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `map()` de los arrays y la interpolación de cadenas (plantillas literales). Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `palabras`**

```js
let palabras = ['hola', 'mundo', 'javascript'];
```

*   **Propósito**: Definir el array original de palabras que se transformarán.
*   **Detalle**:
    *   `let palabras = ['hola', 'mundo', 'javascript'];`: Declara una variable `palabras` y le asigna un array con tres cadenas de texto.

2️⃣ **Creación del Array `nuevasPalabras` usando `map()` y Visualización**

```js
let nuevasPalabras = palabras.map(palabra => `¡${palabra}!`);

console.log(palabras);
console.log(nuevasPalabras);
```

*   **Propósito**: Generar un nuevo array donde cada palabra del array `palabras` original esté rodeada por "¡" y "!", y luego mostrar ambos arrays.
*   **Detalle**:
    *   `palabras.map(palabra => \`¡${palabra}!\`)`: El método `map()` se llama sobre el array `palabras`.
        *   `map()` crea un **nuevo array** aplicando una función a cada elemento del array original.
        *   `palabra => \`¡${palabra}!\``: Es una función flecha que se ejecuta para cada `palabra` en el array `palabras`.
            *   `` `¡${palabra}!` ``: Utiliza una plantilla literal para construir una nueva cadena que consiste en el prefijo "¡", seguido de la `palabra` actual, seguido del sufijo "!".
        *   El resultado de esta operación para cada elemento se recoge en el nuevo array.
    *   `let nuevasPalabras = ...`: El nuevo array resultante (que será `['¡hola!', '¡mundo!', '¡javascript!']`) se almacena en la variable `nuevasPalabras`.
    *   `console.log(palabras);`: Imprime el array `palabras` original, que no ha sido modificado.
    *   `console.log(nuevasPalabras);`: Imprime el nuevo array `nuevasPalabras` con las transformaciones.

## Salida Esperada en Consola

```
[ 'hola', 'mundo', 'javascript' ]
[ '¡hola!', '¡mundo!', '¡javascript!' ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `transformarPalabras.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el array original y el array transformado impresos en la consola.

🏁 **Resumen**

Este script es otro ejemplo práctico del método `map()`, demostrando su utilidad para transformar cada elemento de un array (en este caso, cadenas de texto) en una nueva forma, produciendo un nuevo array sin alterar el original. El uso de plantillas literales facilita la construcción de las nuevas cadenas.