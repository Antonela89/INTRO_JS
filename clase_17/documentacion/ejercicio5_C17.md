# 💬 Documentación del Código: Ejercicio 5 - Manipulación de Arrays y Cadenas

## Descripción General

Este script de JavaScript procesa un array de frases predefinido. Para cada frase, realiza las siguientes tareas:
1.  La convierte a minúsculas.
2.  La divide en un array de palabras.
3.  Reemplaza todas las ocurrencias de la palabra "malo" por "bueno".
4.  Vuelve a unir las palabras en una nueva frase.
El script presenta dos implementaciones de una función `procesarFrases`: una versión paso a paso y una versión más concisa que encadena los métodos. Ambas producen el mismo resultado.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza métodos de strings y arrays como `toLowerCase()`, `split()`, `map()` y `join()`.

## Funcionamiento del Código

### 1️⃣ Inicialización del Array de Frases
```js
let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];
```
*   **Propósito**: Definir el conjunto de datos inicial sobre el cual se realizarán las operaciones.

### 2️⃣ Versión 1: `procesarFrases` (Paso a Paso)
```js
const procesarFrases = (array) => {
    const frasesModificadas = array.map(element => {
        const palabras = element.toLowerCase().split(' ');
        const reemplazo = palabras.map(palabra => palabra === 'malo' ? 'bueno' : palabra);
        const union = reemplazo.join(' ');
        return union;
    });
    return frasesModificadas;
};
```
*   **Propósito**: Crear una función que transforme cada frase del array de entrada.
*   **Lógica**:
    1.  `array.map(element => ...)`: Itera sobre cada frase del array `frases`.
    2.  `element.toLowerCase().split(' ')`: Convierte la frase a minúsculas y la divide en un array de palabras.
    3.  `palabras.map(palabra => ...)`: Itera sobre el array de palabras.
    4.  `palabra === 'malo' ? 'bueno' : palabra`: Usa un operador ternario para reemplazar "malo" por "bueno".
    5.  `join(' ')`: Une las palabras (ya reemplazadas) de nuevo en una sola frase.
    6.  La función devuelve un nuevo array con todas las frases modificadas.

### 3️⃣ Versión 2: `encadenado` (Métodos Encadenados)
```js
const encadenado = array => {
    return array.map(frase => frase
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra === 'malo' ? 'bueno' : palabra)
        .join(' ')
    );
};
```
*   **Propósito**: Realizar la misma transformación de la versión 1, pero de una manera más fluida y concisa.
*   **Lógica**: Encadena todos los métodos uno tras otro. El resultado de un método se convierte en la entrada del siguiente, eliminando la necesidad de variables intermedias. Esto es funcionalmente idéntico a la primera versión pero a menudo se considera más elegante.

### 4️⃣ Ejecución y Visualización
```js
const resultados = procesarFrases(frases);
console.log(resultados);

const resultados2 = encadenado(frases);
console.log(resultados2);
```
*   **Propósito**: Llamar a ambas funciones y mostrar que producen el mismo resultado.

---

## Salida Esperada por Consola

```
[
  'el clima es bueno hoy',
  'este libro es muy bueno',
  'el servicio aquí es bueno'
]
[
  'el clima es bueno hoy',
  'este libro es muy bueno',
  'el servicio aquí es bueno'
]
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `modificarFrases.js`).
2.  Abre una terminal y ejecuta:
    ```bash
    node modificarFrases.js
    ```

---

## 🏁 Resumen

Este ejercicio es una excelente demostración del poder de los métodos de array de alto orden en JavaScript. Muestra cómo se pueden componer y encadenar métodos como `map`, `split` y `join` para realizar transformaciones complejas de datos de una manera declarativa y legible.