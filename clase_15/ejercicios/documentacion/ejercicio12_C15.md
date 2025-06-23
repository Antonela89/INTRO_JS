# Documentación del Código: Ejercicio 12 - Clasificación de Palabras Según su Longitud

## Descripción General

Este script de JavaScript toma una oración predefinida, la divide en palabras individuales, y luego clasifica cada palabra en una de dos categorías: "cortas" (menos de 5 letras) o "largas" (5 letras o más). Finalmente, muestra en la consola los arrays resultantes de palabras cortas y largas.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, incluyendo métodos de strings (`split()`) y arrays (`push()`, `length`), así como ciclos y condicionales. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Definición de la Oración y División en Palabras**

```js
const oracion = 'JavaScript es un lenguaje poderoso y versátil';
let palabras = oracion.split(' ');
console.log(palabras); // Muestra el array de palabras inicial
```

*   **Propósito**: Establecer la oración base y separarla en un array de palabras individuales.
*   **Detalle**:
    *   `const oracion = '...';`: Define la oración como una cadena de texto constante.
    *   `let palabras = oracion.split(' ');`: El método `split(' ')` se llama sobre la `oracion`.
        *   Divide la cadena `oracion` en un array de subcadenas, utilizando el espacio (' ') como delimitador.
        *   El array resultante `['JavaScript', 'es', 'un', 'lenguaje', 'poderoso', 'y', 'versátil']` se almacena en la variable `palabras`.
    *   `console.log(palabras);`: Imprime el array de palabras para verificación.

2️⃣ **Inicialización de Arrays para Clasificación**

```js
let cortas = [];
let largas = [];
```

*   **Propósito**: Crear dos arrays vacíos que almacenarán las palabras clasificadas según su longitud.
*   **Detalle**:
    *   `let cortas = [];`: Array para palabras con menos de 5 letras.
    *   `let largas = [];`: Array para palabras con 5 letras o más.

3️⃣ **Clasificación de Palabras con un Ciclo `for`**

```js
for (let i = 0; i < palabras.length; i++) {
    palabras[i].length < 5 ? cortas.push(palabras[i]) : largas.push(palabras[i]);
}
```

*   **Propósito**: Recorrer el array `palabras` y asignar cada palabra al array `cortas` o `largas` según su longitud.
*   **Detalle**:
    *   `for (let i = 0; i < palabras.length; i++)`: Un ciclo `for` que itera sobre cada palabra en el array `palabras`.
    *   `palabras[i].length`: Accede a la longitud (número de caracteres) de la palabra actual.
    *   `palabras[i].length < 5 ? cortas.push(palabras[i]) : largas.push(palabras[i]);`: Se utiliza un operador ternario para la clasificación:
        *   **Condición**: `palabras[i].length < 5` (¿La longitud de la palabra es menor que 5?)
        *   **Si es verdadero**: `cortas.push(palabras[i])` (La palabra se añade al array `cortas`).
        *   **Si es falso**: `largas.push(palabras[i])` (La palabra se añade al array `largas`).

4️⃣ **Visualización de las Listas Clasificadas**

```js
console.log(cortas);
console.log(largas);
```

*   **Propósito**: Mostrar en la consola los arrays resultantes con las palabras cortas y largas.
*   **Detalle**:
    *   Se imprime el contenido del array `cortas`.
    *   Se imprime el contenido del array `largas`.

## Salida Esperada en Consola

```
[ 'JavaScript', 'es', 'un', 'lenguaje', 'poderoso', 'y', 'versátil' ]
[ 'es', 'un', 'y' ]
[ 'JavaScript', 'lenguaje', 'poderoso', 'versátil' ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `clasificarPalabras.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el array original de palabras y luego los dos arrays con las palabras clasificadas por longitud.

🏁 **Resumen**

Este script es un buen ejemplo de procesamiento de texto básico en JavaScript. Muestra cómo dividir una cadena en palabras, iterar sobre ellas, y clasificarlas en diferentes colecciones basadas en una propiedad (en este caso, la longitud). El uso del operador ternario ofrece una forma concisa para la lógica de clasificación.