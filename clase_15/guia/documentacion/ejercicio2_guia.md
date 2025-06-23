# Documentación del Código: Práctica Relámpago - Manipulación de Strings

## Descripción General

Este script de JavaScript realiza varias operaciones de manipulación de cadenas sobre un nombre completo.
1.  Inicializa una variable `frase` con un nombre completo.
2.  Extrae el apellido de la `frase` utilizando el método `slice()`.
3.  Crea una nueva frase reemplazando el nombre original por "Coder" utilizando `replace()`.
4.  Calcula y muestra la longitud de la frase modificada utilizando la propiedad `length`.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente métodos de strings (`slice()`, `replace()`) y la propiedad `length`. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de operaciones:

1️⃣ **Inicialización de la Variable `frase` y Visualización**

```js
let frase = 'Antonela de los Milagros Borgogno';
console.log(frase);
```

*   **Propósito**: Definir la cadena de texto original (nombre completo) y mostrarla.
*   **Detalle**:
    *   `let frase = 'Antonela de los Milagros Borgogno';`: Almacena el nombre completo.
    *   `console.log(frase);`: Imprime la frase original.

2️⃣ **Extracción del Apellido con `slice()` y Visualización**

```js
let apellido = frase.slice(25,33);
console.log(apellido);
console.log(frase); // Muestra la frase original para ver que no fue modificada por slice()
```

*   **Propósito**: Aislar el apellido "Borgogno" de la `frase`.
*   **Detalle**:
    *   `frase.slice(25,33)`: Extrae la porción de la cadena desde el índice 25 (inclusive) hasta el índice 33 (exclusive).
        *   Índice 25 corresponde a la 'B' de "Borgogno".
        *   Índice 33 corresponde al final de "Borgogno" (o el carácter siguiente si lo hubiera, que no se incluye).
    *   `let apellido = ...`: Almacena "Borgogno" en la variable `apellido`.
    *   El primer `console.log(apellido)` imprime "Borgogno".
    *   El segundo `console.log(frase)` demuestra que `slice()` no modifica la cadena original.

3️⃣ **Reemplazo del Nombre con `replace()` y Visualización**

```js
let fraseConReplace = frase.replace('Antonela', 'Coder');
console.log(fraseConReplace);
```

*   **Propósito**: Crear una nueva versión de la frase donde "Antonela" es reemplazado por "Coder".
*   **Detalle**:
    *   `frase.replace('Antonela', 'Coder')`: Busca la primera ocurrencia de "Antonela" en `frase` y la reemplaza con "Coder". Devuelve una nueva cadena.
    *   `let fraseConReplace = ...`: Almacena "Coder de los Milagros Borgogno" en `fraseConReplace`.
    *   `console.log(fraseConReplace);`: Imprime la frase modificada.

4️⃣ **Cálculo de la Longitud de la Frase Modificada**

```js
console.log(fraseConReplace.length);
```

*   **Propósito**: Contar el número de caracteres en la `fraseConReplace`.
*   **Detalle**:
    *   `fraseConReplace.length`: Accede a la propiedad `length` de la cadena, que devuelve el número total de caracteres, incluyendo espacios.
    *   `console.log(...)`: Imprime la longitud.

## Salida Esperada en Consola

```
Antonela de los Milagros Borgogno
Borgogno
Antonela de los Milagros Borgogno
Coder de los Milagros Borgogno
30
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `manipulacionNombre.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa las diferentes salidas en la consola.

🏁 **Resumen**

Esta práctica relámpago es un buen ejercicio para repasar métodos comunes de manipulación de cadenas en JavaScript como `slice()` para extraer subcadenas, `replace()` para sustituir partes de una cadena, y la propiedad `length` para obtener la longitud de una cadena. También refuerza que métodos como `slice()` y `replace()` devuelven nuevas cadenas sin alterar la original.