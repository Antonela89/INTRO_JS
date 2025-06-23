# Documentación del Código: Ejercicio 2 - Eliminar al Último Invitado

## Descripción General

Este script de JavaScript simula la gestión de una lista de invitados a una fiesta. Inicializa un array `invitados` con varios nombres. Luego, utiliza el método `pop()` para eliminar al último invitado de la lista. El script muestra en la consola quién fue el invitado eliminado y el estado actualizado de la lista de invitados. Adicionalmente, imprime el array `personajes` del Ejercicio 1.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente métodos de arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización del Array `invitados`**

```js
let invitados = ['Ana', 'Juan', 'Carlos', 'Sofía'];
```

*   **Propósito**: Crear una lista inicial de invitados.
*   **Detalle**:
    *   `let invitados = [...]`: Declara una variable `invitados` y le asigna un array con cuatro nombres.

2️⃣ **Eliminación del Último Invitado con `pop()`**

```js
let eliminado = invitados.pop();
```

*   **Propósito**: Remover el último elemento del array `invitados` y almacenar ese elemento eliminado.
*   **Detalle**:
    *   `invitados.pop()`: El método `pop()` se llama sobre el array `invitados`.
        *   Este método elimina el último elemento del array (en este caso, "Sofía") y modifica el array original.
        *   Además, `pop()` devuelve el elemento que fue eliminado.
    *   `let eliminado = ...`: El valor devuelto por `pop()` ("Sofía") se almacena en la variable `eliminado`.
    *   Después de esta línea, `invitados` será `['Ana', 'Juan', 'Carlos']` y `eliminado` será `"Sofía"`.

3️⃣ **Visualización de Resultados**

```js
console.log(`El invitado  eliminado de la lista es: ${eliminado}`);
console.log(`Así quedó la lista actualizada: ${invitados} `);
console.log(personajes); // Muestra el array del Ejercicio 1
```

*   **Propósito**: Informar al usuario sobre el invitado eliminado y el estado actual de la lista. También muestra el array `personajes` del ejercicio anterior.
*   **Detalle**:
    *   El primer `console.log` muestra el nombre del invitado que fue eliminado.
    *   El segundo `console.log` muestra el array `invitados` actualizado.
    *   El tercer `console.log` muestra el contenido del array `personajes` (que fue modificado en el Ejercicio 1, si se ejecutan en el mismo contexto/archivo).

## Salida Esperada en Consola

Asumiendo que el Ejercicio 1 se ejecutó antes en el mismo script/contexto:
```
El invitado  eliminado de la lista es: Sofía
Así quedó la lista actualizada: Ana,Juan,Carlos 
[ 'Link', 'Zelda', 'Mario', 'Luigi' ]
```
*(Nota: Cuando un array se interpola en una plantilla literal o se pasa directamente a `console.log` sin ser el único argumento, a menudo se convierte a una cadena donde los elementos están separados por comas. Si se pasara `invitados` solo, ej. `console.log(invitados)`, la salida podría ser `[ 'Ana', 'Juan', 'Carlos' ]`.)*

🚀 **Ejecución del Script**

1.  Guarda el código (preferiblemente junto con el del Ejercicio 1 si quieres ver el `console.log(personajes)` con su valor actualizado) en un archivo con extensión `.js` (por ejemplo, `gestionInvitados.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la salida en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `pop()` de los arrays, que es útil para eliminar y opcionalmente recuperar el último elemento de un array. Es una operación común en estructuras de datos tipo pila (LIFO - Last In, First Out).