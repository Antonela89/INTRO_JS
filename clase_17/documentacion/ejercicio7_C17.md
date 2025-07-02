# 🌸 Documentación del Código: Ejercicio 7 - “La Florería”

## Descripción General

Este script de JavaScript procesa una cadena de texto que contiene una lista de flores separadas por comas. Una función `gestionarFloreria` realiza una serie de tareas condicionales y de manipulación sobre esta lista:
1.  Convierte la cadena en un array de nombres de flores, limpiando espacios.
2.  Verifica si "Margarita" existe y, si es así, añade "Azucena" al final.
3.  Reemplaza "Orquídea" por "Clavel".
4.  Verifica si "Girasol" no existe y, en ese caso, lo añade al principio.
5.  Devuelve una cadena final con los nombres de las flores ordenados alfabéticamente y separados por puntos.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza métodos de strings (`split`, `trim`) y arrays (`map`, `includes`, `findIndex`, `push`, `unshift`, `sort`, `join`).

## Funcionamiento del Código

### 1️⃣ Inicialización de la Cadena de Entrada
```js
let entrada = "Rosa, Tulipán, Orquídea, Lirio";
```
*   **Propósito**: Definir la cadena de texto inicial que contiene la lista de flores.

### 2️⃣ Función de Gestión `gestionarFloreria`
```js
const gestionarFloreria = string => {
    const arrayFlores = string.split(',').map(flor => flor.trim());

    if (arrayFlores.includes('Margarita')) {
        arrayFlores.push('Azucena');
    }

    const reemplazo = arrayFlores.map(flor => flor === 'Orquídea' ? 'Clavel' : flor);

    const estaGirasol = reemplazo.findIndex(flor => flor === 'Girasol');
    if (estaGirasol === -1) {
        reemplazo.unshift('Girasol');
    }

    const ordenadas = reemplazo.sort().join(' . ');

    return ordenadas;
};
```
*   **Propósito**: Encapsular toda la lógica de procesamiento de la lista de flores.
*   **Lógica**:
    1.  `split(',').map(flor => flor.trim())`: Convierte la cadena en un array y limpia los espacios de cada elemento en un solo paso.
    2.  `if (arrayFlores.includes('Margarita'))`: Condición para añadir "Azucena". En este caso, la condición es falsa, por lo que no se añade.
    3.  `map(...)`: Crea un nuevo array `reemplazo` donde "Orquídea" es sustituida por "Clavel". El array resultante será `['Rosa', 'Tulipán', 'Clavel', 'Lirio']`.
    4.  `findIndex(...)`: Busca "Girasol". Como no lo encuentra, `estaGirasol` será `-1`.
    5.  `if (estaGirasol === -1)`: La condición es verdadera, por lo que `unshift('Girasol')` añade "Girasol" al principio del array `reemplazo`. El array ahora es `['Girasol', 'Rosa', 'Tulipán', 'Clavel', 'Lirio']`.
    6.  `sort().join(' . ')`: Ordena el array alfabéticamente (`['Clavel', 'Girasol', 'Lirio', 'Rosa', 'Tulipán']`) y lo une en una cadena separada por puntos.
    7.  **Retorno**: Devuelve la cadena final.

### 3️⃣ Ejecución y Visualización
```js
const resultado = gestionarFloreria(entrada);
console.log(resultado);
```
*   **Propósito**: Llamar a la función y mostrar el resultado final.

---

## Salida Esperada por Consola
```
Clavel . Girasol . Lirio . Rosa . Tulipán
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `gestionarFloreria.js`).
2.  Abre una terminal y ejecuta:
    ```bash
    node gestionarFloreria.js
    ```

---

## 🏁 Resumen

Este ejercicio demuestra la manipulación condicional de un array. Las acciones (añadir, reemplazar) se ejecutan solo si se cumplen ciertas condiciones, lo que refleja una lógica de negocio más compleja. Es un buen ejemplo de cómo combinar métodos de búsqueda (`includes`, `findIndex`) con métodos de modificación (`push`, `unshift`, `map`) para procesar datos de forma dinámica.