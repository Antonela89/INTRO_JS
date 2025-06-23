# Documentación del Código: Práctica Interactiva - Manipulación de Array `frutas`

## Descripción General

Este script de JavaScript realiza una serie de operaciones de manipulación sobre un array llamado `frutas`.
1.  Inicializa el array con "manzana" y "banana".
2.  Agrega "sandía" al final del array.
3.  Agrega "uva" al principio del array.
4.  Elimina el primer elemento del array.
5.  Verifica si el array resultante incluye el elemento "banana" y muestra el resultado booleano.
6.  Muestra el estado final del array `frutas`.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente métodos de arrays (`push()`, `unshift()`, `shift()`, `includes()`). Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de operaciones sobre el array `frutas`:

1️⃣ **Inicialización del Array `frutas`**

```js
let frutas = ["manzana", "banana"]; // array original
```

*   **Propósito**: Crear un array inicial con dos frutas.
*   **Detalle**: `frutas` es `["manzana", "banana"]`.

2️⃣ **Agregar "sandía" al Final con `push()`**

```js
frutas.push("sandía"); // agrega sandía al final
```

*   **Propósito**: Añadir "sandía" al final del array.
*   **Detalle**:
    *   `frutas.push("sandía")` modifica `frutas`.
    *   Ahora, `frutas` es `["manzana", "banana", "sandía"]`.

3️⃣ **Agregar "uva" al Principio con `unshift()`**

```js
frutas.unshift("uva"); // agrega uva al principio
```

*   **Propósito**: Añadir "uva" al inicio del array.
*   **Detalle**:
    *   `frutas.unshift("uva")` modifica `frutas`.
    *   Ahora, `frutas` es `["uva", "manzana", "banana", "sandía"]`.

4️⃣ **Eliminar el Primer Elemento con `shift()`**

```js
frutas.shift(); // quita primer elemento
```

*   **Propósito**: Remover el primer elemento del array.
*   **Detalle**:
    *   `frutas.shift()` modifica `frutas` y devuelve el elemento eliminado ("uva").
    *   Ahora, `frutas` es `["manzana", "banana", "sandía"]`.

5️⃣ **Verificar Inclusión de "banana" con `includes()`**

```js
console.log(frutas.includes("banana")); //pregunta si hay un elemento - devuelve booleano
```

*   **Propósito**: Comprobar si la cadena "banana" está presente en el array `frutas` actual.
*   **Detalle**:
    *   `frutas.includes("banana")` evalúa a `true` porque "banana" es un elemento del array `["manzana", "banana", "sandía"]`.
    *   Este `console.log` imprimirá `true`.

6️⃣ **Mostrar el Array `frutas` Final**

```js
console.log(frutas);
```

*   **Propósito**: Visualizar el estado final del array `frutas` después de todas las operaciones.
*   **Detalle**:
    *   Este `console.log` imprimirá el array `["manzana", "banana", "sandía"]`.

## Salida Esperada en Consola

```
true
[ 'manzana', 'banana', 'sandía' ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `manipulacionFrutas.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la salida en la consola.

🏁 **Resumen**

Esta práctica interactiva es un excelente ejercicio para consolidar el entendimiento de los métodos básicos de manipulación de arrays en JavaScript: `push` para agregar al final, `unshift` para agregar al principio, `shift` para eliminar del principio, e `includes` para verificar la existencia de un elemento.