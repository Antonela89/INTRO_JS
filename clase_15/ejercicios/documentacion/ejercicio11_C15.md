# Documentación del Código: Ejercicio 11 - Gestión de Inventario de una Tienda

## Descripción General

Este script de JavaScript simula la gestión básica del inventario de una tienda. Comienza con una lista inicial de productos en un array. Luego, realiza las siguientes operaciones:
1.  Agrega un nuevo producto ("Impresora") al final del inventario.
2.  Verifica si "Tablet" está presente en el inventario y muestra un mensaje.
3.  Elimina el primer producto del inventario.
4.  Muestra la lista final de productos como una única cadena de texto, con los productos separados por comas.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza varios métodos de arrays de JavaScript (`push()`, `includes()`, `shift()`, `join()`). Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de cinco pasos principales:

1️⃣ **Inicialización del Inventario**

```js
let inventario = ['Laptop', 'Teclado', 'Mouse', 'Monitor'];
```

*   **Propósito**: Establecer la lista inicial de productos disponibles en la tienda.
*   **Detalle**:
    *   `let inventario = [...]`: Declara una variable `inventario` y le asigna un array con cuatro nombres de productos.

2️⃣ **Agregar un Nuevo Producto con `push()`**

```js
inventario.push('Impresora');
```

*   **Propósito**: Añadir "Impresora" al final de la lista de inventario.
*   **Detalle**:
    *   `inventario.push('Impresora')`: El método `push()` agrega "Impresora" al final del array `inventario`.
    *   Ahora, `inventario` es `['Laptop', 'Teclado', 'Mouse', 'Monitor', 'Impresora']`.

3️⃣ **Verificar la Existencia de "Tablet" con `includes()`**

```js
if (inventario.includes('Tablet')) {
    console.log(`El producto Tablet se encuentra en el inventario.`);
} else {
    console.log(`El producto Tablet NO se encuentra en el inventario.`);
}
```

*   **Propósito**: Comprobar si el producto "Tablet" forma parte del inventario actual.
*   **Detalle**:
    *   `inventario.includes('Tablet')`: El método `includes()` verifica si "Tablet" está en el array. Devuelve `true` o `false`.
    *   Se utiliza una estructura `if-else` para imprimir un mensaje apropiado basado en el resultado de `includes()`. Dado el estado actual, imprimirá que "Tablet" NO se encuentra.

4️⃣ **Eliminar el Primer Producto con `shift()`**

```js
let eliminado = inventario.shift();
```

*   **Propósito**: Remover el primer producto de la lista de inventario.
*   **Detalle**:
    *   `inventario.shift()`: El método `shift()` elimina el primer elemento del array `inventario` ("Laptop") y lo devuelve.
    *   `let eliminado = ...`: El producto eliminado ("Laptop") se almacena en la variable `eliminado` (aunque no se usa posteriormente en este script).
    *   Ahora, `inventario` es `['Teclado', 'Mouse', 'Monitor', 'Impresora']`.

5️⃣ **Mostrar el Inventario Actualizado con `join()`**

```js
console.log(`La lista actualizada del inventario es: ${inventario.join(', ')}`);
```

*   **Propósito**: Presentar la lista final de productos en un formato legible, como una cadena separada por comas.
*   **Detalle**:
    *   `inventario.join(', ')`: El método `join()` convierte el array `inventario` en una cadena, usando ", " (coma seguida de un espacio) como separador entre cada producto.
    *   `console.log(...)`: Imprime la cadena resultante.

## Salida Esperada en Consola

```
El producto Tablet NO se encuentra en el inventario.
La lista actualizada del inventario es: Teclado, Mouse, Monitor, Impresora
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `tiendaInventario.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa los mensajes y la lista final del inventario impresos en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo se pueden utilizar diversos métodos de arrays (`push`, `includes`, `shift`, `join`) para realizar operaciones comunes de gestión de listas, como agregar, verificar, eliminar y mostrar elementos. Estas son tareas fundamentales en muchas aplicaciones que manejan colecciones de datos.