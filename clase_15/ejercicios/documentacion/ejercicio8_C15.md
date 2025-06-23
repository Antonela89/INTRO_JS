# Documentación del Código: Ejercicio 8 - Extraer una Parte de una Frase

## Descripción General

Este script de JavaScript inicializa una cadena de texto (una frase). Luego, utiliza el método `slice()` de las cadenas para extraer una subcadena específica ("gatos") de la frase original. Finalmente, muestra la palabra extraída en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `slice()` de las cadenas de texto. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización de la Cadena `frase`**

```js
const frase = 'Los gatos son geniales';
```

*   **Propósito**: Definir la cadena de texto original de la cual se extraerá una parte.
*   **Detalle**:
    *   `const frase = 'Los gatos son geniales';`: Declara una constante `frase` y le asigna la cadena de texto especificada.

2️⃣ **Extracción de la Subcadena con `slice()` y Visualización**

```js
let palabra = frase.slice(4,9);
console.log(palabra);
```

*   **Propósito**: Aislar y mostrar la palabra "gatos" de la `frase`.
*   **Detalle**:
    *   `frase.slice(4,9)`: El método `slice()` se llama sobre la cadena `frase`.
        *   Este método extrae una sección de una cadena y devuelve una nueva cadena, sin modificar la original.
        *   El primer argumento (`4`) es el índice de inicio (basado en cero) de la extracción. El carácter en este índice ("g") se incluye en la subcadena.
        *   El segundo argumento (`9`) es el índice de fin de la extracción. El carácter en este índice (" ") **no** se incluye en la subcadena. La extracción va hasta, pero no incluye, el carácter en el índice de fin.
        *   En "Los gatos son geniales":
            *   L -> 0
            *   o -> 1
            *   s -> 2
            *     -> 3 (espacio)
            *   g -> 4 (inicio)
            *   a -> 5
            *   t -> 6
            *   o -> 7
            *   s -> 8
            *     -> 9 (fin, no se incluye)
        *   Por lo tanto, `frase.slice(4,9)` extraerá "gatos".
    *   `let palabra = ...`: La subcadena extraída ("gatos") se almacena en la variable `palabra`.
    *   `console.log(palabra);`: Imprime el contenido de la variable `palabra` en la consola.

## Salida Esperada en Consola

```
gatos
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `extraerPalabra.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la palabra "gatos" impresa en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `slice()` de las cadenas de texto, una herramienta versátil para extraer porciones de cadenas basándose en índices de inicio y fin. Es fundamental para la manipulación y el análisis de texto.