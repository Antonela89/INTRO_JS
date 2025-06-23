# Documentación del Código: Ejercicio 9 - Eliminar Espacios Innecesarios

## Descripción General

Este script de JavaScript inicializa una cadena de texto que contiene espacios en blanco adicionales al principio y al final. Luego, utiliza el método `trim()` de las cadenas para eliminar estos espacios innecesarios. Finalmente, muestra la cadena resultante (sin los espacios extra) en la consola, delimitada por `##` para visualizar claramente la eliminación de los espacios.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `trim()` de las cadenas de texto. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización de la Cadena `fraseConEspacios`**

```js
const fraseConEspacios = ' Hola, mundo! ';
```

*   **Propósito**: Definir una cadena de texto que contenga espacios en blanco al inicio y al final, que son los que se desean eliminar.
*   **Detalle**:
    *   `const fraseConEspacios = ' Hola, mundo! ';`: Declara una constante `fraseConEspacios` y le asigna la cadena de texto con un espacio al principio y otro al final.

2️⃣ **Eliminación de Espacios con `trim()` y Visualización**

```js
const fraseSinEspacios = fraseConEspacios.trim();
console.log(`##${fraseSinEspacios}##`);
```

*   **Propósito**: Remover los espacios en blanco de los extremos de la cadena y mostrar la cadena limpia.
*   **Detalle**:
    *   `fraseConEspacios.trim()`: El método `trim()` se llama sobre la cadena `fraseConEspacios`.
        *   Este método devuelve una nueva cadena de texto eliminando los espacios en blanco (espacios, tabulaciones, saltos de línea, etc.) de ambos extremos de la cadena original. No modifica la cadena original.
    *   `const fraseSinEspacios = ...`: La cadena resultante sin espacios extra ("Hola, mundo!") se almacena en la constante `fraseSinEspacios`.
    *   `console.log(\`##${fraseSinEspacios}##\`);`: Imprime la `fraseSinEspacios` en la consola, rodeada de `##` para que sea evidente que los espacios iniciales y finales han sido eliminados.

## Salida Esperada en Consola

```
##Hola, mundo!##
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `limpiarEspacios.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la cadena sin espacios extra, delimitada por `##`, impresa en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `trim()` de las cadenas de texto, una función muy útil para limpiar datos de entrada del usuario o cadenas que puedan contener espacios en blanco no deseados en sus extremos, asegurando una manipulación de texto más consistente.