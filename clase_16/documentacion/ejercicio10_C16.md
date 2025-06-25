# Documentación del Código: Ejercicio 10 - Construir una Frase a Partir de una Lista de Palabras (`reduce`)

## Descripción General

Este script de JavaScript inicializa un array de palabras. Luego, utiliza el método `reduce()` para concatenar todas las palabras del array en una única cadena de texto (una frase), separando cada palabra con un espacio. Finalmente, imprime la frase resultante en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `reduce()` de los arrays y la interpolación de cadenas (plantillas literales). Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `palabras`**

```js
let palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];
```

*   **Propósito**: Definir el array original de palabras que se unirán para formar la frase.
*   **Detalle**:
    *   `let palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];`: Declara una variable `palabras` y le asigna un array con cuatro cadenas de texto.

2️⃣ **Construcción de la Frase usando `reduce()` y Visualización**

```js
let frase = palabras.reduce((acumulador, palabra) => `${acumulador} ${palabra}`);
// Nota: Si se quisiera evitar un espacio inicial, se podría proveer el primer elemento como valor inicial
// o manejar la primera iteración de forma diferente.
// Alternativa con valor inicial para evitar espacio al principio si el primer elemento se usa como tal:
// let frase = palabras.slice(1).reduce((acumulador, palabra) => `${acumulador} ${palabra}`, palabras[0]);
// O más simple, usando join(): let frase = palabras.join(' ');

console.log(frase);
```

*   **Propósito**: Unir todas las palabras del array `palabras` en una sola cadena, separadas por espacios, y luego mostrar esta frase.
*   **Detalle**:
    *   `palabras.reduce((acumulador, palabra) => \`${acumulador} ${palabra}\`)`: El método `reduce()` se llama sobre el array `palabras`.
        *   `(acumulador, palabra) => \`${acumulador} ${palabra}\``: Es la función reductora.
            *   `acumulador`: Es la frase construida hasta el momento. En la primera iteración (sin valor inicial explícito), `acumulador` es el primer elemento ("Me") y `palabra` es el segundo ("gusta").
            *   `palabra`: Es la palabra actual que se está procesando.
            *   `` `${acumulador} ${palabra}` ``: Concatena el `acumulador` actual, un espacio, y la `palabra` actual.
        *   **Proceso de Reducción para `['Me', 'gusta', 'aprender', 'JavaScript']`:**
            1.  `acumulador` = "Me", `palabra` = "gusta"      => retorna "Me gusta"
            2.  `acumulador` = "Me gusta", `palabra` = "aprender" => retorna "Me gusta aprender"
            3.  `acumulador` = "Me gusta aprender", `palabra` = "JavaScript" => retorna "Me gusta aprender JavaScript"
        *   El resultado final es "Me gusta aprender JavaScript".
    *   `let frase = ...`: La frase construida se almacena en la variable `frase`.
    *   `console.log(frase);`: Imprime la `frase` en la consola.
    *   **Alternativa con `join()`**: Para esta tarea específica, `palabras.join(' ')` sería una solución más directa y común. El uso de `reduce()` aquí es para practicar el método.

## Salida Esperada en Consola

```
Me gusta aprender JavaScript
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `construirFraseReduce.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la frase completa impresa en la consola.

🏁 **Resumen**

Este script demuestra cómo se puede utilizar el método `reduce()` para construir una cadena de texto a partir de los elementos de un array. Aunque para la simple concatenación de cadenas con un separador el método `join()` es más idiomático, este ejemplo sirve para ilustrar la flexibilidad de `reduce()` en la acumulación de resultados.