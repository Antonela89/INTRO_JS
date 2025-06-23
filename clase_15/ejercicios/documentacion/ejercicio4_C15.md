# Documentación del Código: Ejercicio 4 - Convertir una Lista de Palabras en una Frase

## Descripción General

Este script de JavaScript inicializa un array de palabras llamado `palabras`. Luego, utiliza el método `join()` para unir todas las palabras de este array en una única cadena de texto (una frase), utilizando un espacio como separador entre cada palabra. Finalmente, muestra la frase resultante en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `join()` de los arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `palabras`**

```js
const palabras = ['JavaScript', 'es', 'divertido'];
```

*   **Propósito**: Crear un array que contenga las palabras individuales que formarán la frase.
*   **Detalle**:
    *   `const palabras = [...]`: Declara una constante `palabras` y le asigna un array con tres cadenas de texto.

2️⃣ **Unión de Palabras en una Frase con `join()` y Visualización**

```js
let frase = palabras.join(' ');
console.log(frase);
```

*   **Propósito**: Combinar los elementos del array `palabras` en una sola cadena, utilizando un espacio como delimitador, y luego mostrar esta cadena.
*   **Detalle**:
    *   `palabras.join(' ')`: El método `join()` se llama sobre el array `palabras`.
        *   Este método concatena todos los elementos del array en una única cadena.
        *   El argumento pasado a `join()` (en este caso, `' '`, un espacio) se utiliza como el separador que se insertará entre cada elemento en la cadena resultante. Si no se proporciona un argumento, los elementos se unen con una coma por defecto.
    *   `let frase = ...`: La cadena resultante ("JavaScript es divertido") se almacena en la variable `frase`.
    *   `console.log(frase);`: Imprime el contenido de la variable `frase` en la consola.

## Salida Esperada en Consola

```
JavaScript es divertido
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `formarFrase.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la frase resultante impresa en la consola.

🏁 **Resumen**

Este script es un ejemplo claro y conciso del uso del método `join()` de los arrays. Este método es muy útil para convertir un array de cadenas (o elementos que se puedan convertir a cadenas) en una única cadena de texto, con control sobre el separador utilizado.