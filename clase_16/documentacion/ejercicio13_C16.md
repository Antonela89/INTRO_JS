# Documentación del Código: Desafío - Análisis de Películas (Duración y Títulos)

## Descripción General

Este script de JavaScript trabaja con una lista de películas, donde cada película es un objeto con propiedades `title` y `duration` (en minutos). El objetivo es realizar las siguientes tareas:
1.  Encontrar la película con la menor duración.
2.  De las películas restantes (excluyendo la más corta), seleccionar aquellas cuyo título tenga más de 10 caracteres.
3.  Crear una lista con los títulos de estas películas largas, convertidos a minúsculas.
Finalmente, imprime en la consola el título de la película más corta y la lista de títulos largos en minúsculas.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, incluyendo los métodos de array `reduce()`, `filter()`, y `map()`, así como propiedades de string como `length` y `toLowerCase()`. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de varios pasos:

1️⃣ **Definición del Array `movies`**

```js
const movies = [
    { title: 'El Señor de los Anillos', duration: 200 },
    { title: 'Inception', duration: 148 },
    { title: 'Matrix', duration: 136 },
    { title: 'Toy Story', duration: 81 },
    { title: 'Coco', duration: 105 }
];
```

*   **Propósito**: Establecer la lista inicial de películas, cada una con su título y duración.
*   **Detalle**: `movies` es un array de objetos.

2️⃣ **Encontrar la Película más Corta (`reduce`)**

```js
const menorDuracion = movies.reduce((acumulador, movie) => {
    return acumulador.duration < movie.duration ? acumulador : movie;
});
// Si el array movies pudiera estar vacío, se necesitaría un valor inicial para reduce
// o una comprobación previa. Para este caso, se asume que no está vacío.

console.log(menorDuracion.title);
```

*   **Propósito**: Identificar el objeto película completo que tiene la menor duración.
*   **Detalle**:
    *   `movies.reduce((acumulador, movie) => { ... })`:
        *   Se aplica `reduce` al array `movies`.
        *   La función de callback `(acumulador, movie) => acumulador.duration < movie.duration ? acumulador : movie` compara la `duration` de la película actual (`movie`) con la `duration` de la película que hasta ahora es la más corta (`acumulador`).
        *   Si la `duration` del `acumulador` es menor, se mantiene el `acumulador`. Si la `duration` de `movie` es menor (o igual, en cuyo caso se toma la más reciente), `movie` se convierte en el nuevo `acumulador`.
        *   Como no se provee un valor inicial, el primer elemento del array (`{ title: 'El Señor de los Anillos', duration: 200 }`) se toma como el `acumulador` inicial, y la iteración comienza con el segundo elemento.
    *   `menorDuracion` contendrá el objeto `{ title: 'Toy Story', duration: 81 }`.
    *   `console.log(menorDuracion.title);`: Imprime "Toy Story".

3️⃣ **Obtener Títulos Largos (más de 10 caracteres) en Minúsculas de las Películas Restantes (Encadenamiento de `filter` y `map`)**

```js
const titulosLargosEnMinuscula = movies
    .filter(movie => movie.title !== menorDuracion.title) // Excluye la película más corta
    .filter(movie => movie.title.length > 10)          // Filtra por longitud de título
    .map(movie => movie.title.toLowerCase());           // Convierte a minúsculas
console.log(titulosLargosEnMinuscula);
```

*   **Propósito**: Crear una lista de los títulos (en minúsculas) de las películas que no son la más corta y cuyo título tiene más de 10 caracteres.
*   **Detalle**: Se utiliza encadenamiento de métodos:
    *   `.filter(movie => movie.title !== menorDuracion.title)`:
        *   El primer `filter` crea un nuevo array excluyendo la película que se identificó como `menorDuracion`.
        *   Películas restantes: 'El Señor de los Anillos', 'Inception', 'Matrix', 'Coco'.
    *   `.filter(movie => movie.title.length > 10)`:
        *   El segundo `filter` se aplica al resultado del anterior. Selecciona solo las películas cuyo `title.length` es mayor que 10.
        *   Películas filtradas: 'El Señor de los Anillos' (23), 'Inception' (9 - no pasa), 'Matrix' (6 - no pasa), 'Coco' (4 - no pasa).
        *   *Corrección en el análisis*: 'Inception' tiene 9 caracteres, 'Matrix' tiene 6, 'Coco' tiene 4. Solo 'El Señor de los Anillos' (23) pasaría este filtro.
        *   *Revisando el ejemplo*: Si la intención es que 'Inception' y 'Matrix' pasen, el umbral de longitud debería ser menor o los títulos diferentes. Asumiendo que el código es correcto y el umbral es `> 10`:
            *   'El Señor de los Anillos' (23 > 10) -> Pasa
            *   'Inception' (9 > 10) -> No Pasa
            *   'Matrix' (6 > 10) -> No Pasa
            *   'Coco' (4 > 10) -> No Pasa
        *   Resultado intermedio: `[{ title: 'El Señor de los Anillos', duration: 200 }]`
    *   `.map(movie => movie.title.toLowerCase())`:
        *   `map` se aplica al resultado del segundo `filter`. Transforma cada objeto película en su título convertido a minúsculas.
    *   `titulosLargosEnMinuscula` contendrá (basado en el análisis corregido): `['el señor de los anillos']`.
    *   Se imprime este array.

## Salida Esperada en Consola

Basado en el análisis corregido del filtro de longitud `> 10`:
```
Toy Story
[ 'el señor de los anillos' ]
```

Si el filtro de longitud fuera, por ejemplo, `movie.title.length > 5` para incluir más películas:
Películas restantes: 'El Señor de los Anillos', 'Inception', 'Matrix', 'Coco'.
Filtro `> 5`:
*   'El Señor de los Anillos' (23) -> Pasa
*   'Inception' (9) -> Pasa
*   'Matrix' (6) -> Pasa
*   'Coco' (4) -> No Pasa
Resultado intermedio: `[{ title: 'El Señor de los Anillos', ...}, { title: 'Inception', ...}, { title: 'Matrix', ...}]`
Map a minúsculas: `['el señor de los anillos', 'inception', 'matrix']`
Salida con filtro `> 5`:
```
Toy Story
[ 'el señor de los anillos', 'inception', 'matrix' ]
```
**La documentación seguirá el código tal como está (`> 10`).**

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `analisisPeliculas.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa las salidas en la consola.

🏁 **Resumen**

Este desafío combina múltiples métodos de array (`reduce`, `filter`, `map`) de forma encadenada para realizar un análisis de datos en varios pasos sobre una colección de objetos. Demuestra cómo se pueden aplicar secuencialmente diferentes transformaciones y filtros para llegar a un resultado deseado, una técnica muy común y poderosa en el procesamiento de datos con JavaScript.