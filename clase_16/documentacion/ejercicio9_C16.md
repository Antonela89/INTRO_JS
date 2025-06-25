# Documentación del Código: Ejercicio 9 - Contar la Cantidad Total de Letras en una Lista de Palabras (`reduce`)

## Descripción General

Este script de JavaScript inicializa un array de palabras. Luego, utiliza el método `reduce()` para calcular la suma total de las longitudes (cantidad de letras) de todas las palabras en el array. Finalmente, imprime este total de letras en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `reduce()` de los arrays y la propiedad `length` de las cadenas. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `palabras`**

```js
let palabras = ['sol', 'luna', 'estrella'];
```

*   **Propósito**: Definir el array original de palabras cuyas longitudes se sumarán.
*   **Detalle**:
    *   `let palabras = ['sol', 'luna', 'estrella'];`: Declara una variable `palabras` y le asigna un array con tres cadenas de texto.

2️⃣ **Cálculo del Total de Letras usando `reduce()` y Visualización**

```js
// cantidad de letras x palabra = palabra.length; // Comentario explicativo

let totalLetras = palabras.reduce((acumulador, palabra) => {
    return acumulador + palabra.length;
}, 0); // Se provee un valor inicial de 0 para el acumulador

console.log(totalLetras);
```

*   **Propósito**: Sumar las longitudes de todas las palabras en el array `palabras` para obtener un único valor total, y luego mostrar este total.
*   **Detalle**:
    *   `palabras.reduce((acumulador, palabra) => { ... }, 0)`: El método `reduce()` se llama sobre el array `palabras`.
        *   `reduce()` ejecuta una función "reductora" (callback) sobre cada elemento del array para reducirlo a un único valor.
        *   `(acumulador, palabra) => { return acumulador + palabra.length; }`: Es la función reductora.
            *   `acumulador`: Es el valor acumulado devuelto por la última invocación del callback, o el valor inicial si se provee.
            *   `palabra`: Es el elemento actual (una cadena de texto) que está siendo procesado en el array.
            *   `palabra.length`: Obtiene la cantidad de letras de la `palabra` actual.
            *   `return acumulador + palabra.length;`: Suma la longitud de la palabra actual al `acumulador`. El resultado de esta suma se convierte en el `acumulador` para la siguiente iteración.
        *   `0`: Este es el **valor inicial** para el `acumulador`. Es importante proveerlo, especialmente si el array pudiera estar vacío (aunque en este caso no lo está). Si no se provee y el array está vacío, `reduce` lanzaría un error. Si no se provee y el array no está vacío, el primer elemento se usa como valor inicial del acumulador y la iteración comienza desde el segundo elemento.
        *   **Proceso de Reducción para `['sol', 'luna', 'estrella']` con valor inicial 0:**
            1.  `acumulador` = 0, `palabra` = "sol" (length 3)  => retorna 0 + 3 = 3
            2.  `acumulador` = 3, `palabra` = "luna" (length 4) => retorna 3 + 4 = 7
            3.  `acumulador` = 7, `palabra` = "estrella" (length 8) => retorna 7 + 8 = 15
        *   El valor final del `acumulador` (15) es el resultado de la reducción.
    *   `let totalLetras = ...`: El resultado de la reducción (que será `15`) se almacena en la variable `totalLetras`.
    *   `console.log(totalLetras);`: Imprime el `totalLetras` en la consola.

## Salida Esperada en Consola

```
15
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `contarLetras.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el total de letras impreso en la consola.

🏁 **Resumen**

Este script es otro ejemplo práctico del método `reduce()`, demostrando cómo se puede utilizar para agregar valores derivados de cada elemento de un array (en este caso, la longitud de cada palabra). El uso de un valor inicial para el acumulador es una buena práctica.