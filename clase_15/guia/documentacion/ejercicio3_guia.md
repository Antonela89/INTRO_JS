# Documentación del Código: Desafío Final - Limpiar Texto y Separar por Palabras

## Descripción General

Este script de JavaScript define una función `limpiarTexto` que toma una cadena de texto como entrada. La función realiza dos operaciones principales:
1.  Elimina los espacios en blanco al principio y al final de la cadena utilizando el método `trim()`.
2.  Divide la cadena resultante en un array de palabras utilizando el espacio como delimitador, mediante el método `split()`.
El script luego llama a esta función con una cadena de ejemplo que tiene espacios extra y muestra el array de palabras limpias resultante. Adicionalmente, incluye un pequeño fragmento para demostrar el método `pop()` de los arrays.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente métodos de strings (`trim()`, `split()`) y arrays (`pop()`). Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script se divide en dos partes principales: la función `limpiarTexto` y una demostración de `pop()`.

### Parte 1: Función `limpiarTexto`

1️⃣ **Definición de la Función `limpiarTexto`**

```js
function limpiarTexto(texto) {
  return texto.trim().split(" ");
}
```

*   **Propósito**: Crear una función que reciba una cadena de texto, la limpie de espacios en blanco en los extremos y la divida en un array de palabras.
*   **Detalle**:
    *   `function limpiarTexto(texto) { ... }`: Declara una función llamada `limpiarTexto` que acepta un parámetro `texto` (la cadena a procesar).
    *   `texto.trim()`: Primero, se llama al método `trim()` sobre el `texto` de entrada. Esto devuelve una nueva cadena sin los espacios en blanco iniciales y finales.
    *   `.split(" ")`: Sobre la cadena resultante de `trim()`, se llama al método `split(" ")`. Esto divide la cadena en un array de subcadenas, utilizando un solo espacio (" ") como el delimitador. Cada palabra se convierte en un elemento del array.
    *   `return ...`: La función devuelve el array de palabras resultante.

2️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(limpiarTexto("  Bienvenidas al curso de JS  "));
```

*   **Propósito**: Demostrar el funcionamiento de `limpiarTexto` con una cadena de ejemplo.
*   **Detalle**:
    *   `limpiarTexto("  Bienvenidas al curso de JS  ")`: Se llama a la función con la cadena que tiene espacios extra.
        *   `trim()` la convertirá en `"Bienvenidas al curso de JS"`.
        *   `split(" ")` la convertirá en `["Bienvenidas", "al", "curso", "de", "JS"]`.
    *   `console.log(...)`: Imprime el array resultante en la consola.

### Parte 2: Demostración del Método `pop()`

```js
let lista = ["a", "b", "c"];
//let resultado = lista.removerUltimo(); tendria que ser .pop() // Comentario original

let resultado = lista.pop();
console.log(resultado);
console.log(lista); // Para ver el estado de 'lista' después de pop()
```

*   **Propósito**: Ilustrar cómo funciona el método `pop()` de los arrays.
*   **Detalle**:
    *   `let lista = ["a", "b", "c"];`: Inicializa un array `lista`.
    *   `let resultado = lista.pop();`: El método `pop()` elimina el último elemento del array `lista` ("c") y devuelve ese elemento eliminado.
        *   `resultado` almacenará "c".
        *   `lista` se modificará a `["a", "b"]`.
    *   `console.log(resultado);`: Imprime el elemento eliminado ("c").
    *   `console.log(lista);`: (Añadido para claridad) Imprime el array `lista` modificado.

## Salida Esperada en Consola

```
[ 'Bienvenidas', 'al', 'curso', 'de', 'JS' ]
c
[ 'a', 'b' ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `procesarTexto.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa las salidas en la consola.

🏁 **Resumen**

Este desafío final combina dos métodos de string útiles (`trim` y `split`) dentro de una función para realizar una tarea común de limpieza y tokenización de texto. La demostración adicional de `pop()` refuerza el conocimiento sobre la manipulación de arrays.