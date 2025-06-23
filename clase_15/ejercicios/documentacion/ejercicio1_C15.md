# Documentación del Código: Ejercicio 1 - Añadir Personajes a una Lista

## Descripción General

Este script de JavaScript inicializa un array llamado `personajes` con dos nombres de personajes de videojuegos. Luego, utiliza el método `push()` para agregar dos personajes adicionales ("Mario" y "Luigi") al final de este array. Finalmente, aunque no se muestra explícitamente en el `console.log` del ejercicio 1, el array `personajes` queda modificado. (El `console.log(personajes)` al final del ejercicio 2 mostrará el estado de este array).

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente métodos de arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `personajes`**

```js
let personajes = ['Link','Zelda'];
```

*   **Propósito**: Crear un array inicial con dos personajes.
*   **Detalle**:
    *   `let personajes = ['Link','Zelda'];`: Declara una variable `personajes` y le asigna un array que contiene las cadenas de texto "Link" y "Zelda".

2️⃣ **Adición de Nuevos Personajes con `push()`**

```js
personajes.push('Mario','Luigi');
```

*   **Propósito**: Agregar dos nuevos personajes al final del array `personajes`.
*   **Detalle**:
    *   `personajes.push('Mario','Luigi');`: El método `push()` se llama sobre el array `personajes`.
        *   Este método modifica el array original añadiendo los argumentos proporcionados ("Mario" y "Luigi") como nuevos elementos al final del array.
        *   Después de esta línea, el array `personajes` será `['Link', 'Zelda', 'Mario', 'Luigi']`.

## Visualización del Resultado (Implícita)

Aunque este ejercicio no tiene su propio `console.log` para `personajes`, si se ejecutara el siguiente código después de las líneas anteriores:
```js
console.log(personajes);
```
La salida esperada sería:
```
[ 'Link', 'Zelda', 'Mario', 'Luigi' ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `gestionPersonajes.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Para ver el resultado, puedes añadir `console.log(personajes);` al final del script.

🏁 **Resumen**

Este script es un ejemplo simple y directo del uso del método `push()` de los arrays en JavaScript. `push()` es una forma común y eficiente de agregar uno o más elementos al final de un array existente, modificando el array original.