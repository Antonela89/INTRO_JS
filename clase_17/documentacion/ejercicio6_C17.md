# 🚗 Documentación del Código: Ejercicio 6 - Autos y más autos...

## Descripción General

Este script de JavaScript procesa una cadena de texto que contiene una lista de marcas de autos separadas por comas. Una función `gestionarAutos` realiza las siguientes tareas:
1.  Convierte la cadena en un array de marcas, eliminando espacios extra.
2.  Verifica si la marca "Tesla" existe en la lista.
3.  Crea una nueva lista reemplazando "Ford" por "BMW".
4.  Encuentra el índice de "Chevrolet" en la lista modificada.
5.  Crea una cadena final con las marcas ordenadas alfabéticamente y separadas por puntos.
La función devuelve un objeto con todos los resultados, que se imprime en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza métodos de strings (`split`, `trim`) y arrays (`map`, `includes`, `findIndex`, `sort`, `join`).

## Funcionamiento del Código

### 1️⃣ Inicialización de la Cadena de Entrada
```js
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
```
*   **Propósito**: Definir la cadena de texto inicial que contiene las marcas de autos.

### 2️⃣ Función de Gestión `gestionarAutos`
```js
const gestionarAutos = string => {
    const arrayMarcas = string.split(',');
    const sinEspacios = arrayMarcas.map(marca => marca.trim());
    const estaTesla = sinEspacios.includes('Tesla');
    const modificado = sinEspacios.map(marca => marca === 'Ford' ? 'BMW' : marca);
    const indiceChevrolet = modificado.findIndex(marca => marca === 'Chevrolet');
    const ordenado = [...modificado].sort();
    const stringFinal = ordenado.join(' . ');

    return {
        estaTesla,
        modificado,
        indiceChevrolet,
        ordenado,
        stringFinal
    };
};
```
*   **Propósito**: Encapsular todas las operaciones de procesamiento sobre la cadena de marcas.
*   **Lógica**:
    1.  `split(',')`: Divide la cadena `entrada` en un array usando la coma como separador.
    2.  `map(marca => marca.trim())`: Crea un nuevo array (`sinEspacios`) donde a cada marca se le han quitado los espacios en blanco de los extremos.
    3.  `includes('Tesla')`: Verifica si "Tesla" está en la lista limpia.
    4.  `map(marca => ...)`: Crea un nuevo array (`modificado`) donde "Ford" se reemplaza por "BMW".
    5.  `findIndex(...)`: Encuentra el índice de "Chevrolet" en la lista `modificado`.
    6.  `[...modificado].sort()`: Crea una copia de `modificado` y la ordena alfabéticamente.
    7.  `join(' . ')`: Une el array ordenado en una cadena separada por puntos.
    8.  **Retorno**: Devuelve un objeto con todos los resultados.

### 3️⃣ Ejecución y Visualización
```js
const resultado = gestionarAutos(entrada);
console.log(resultado.estaTesla);
console.log(resultado.modificado);
console.log(resultado.indiceChevrolet);
console.log(resultado.ordenado);
console.log(resultado.stringFinal);
```
*   **Propósito**: Llamar a la función y mostrar cada propiedad del objeto resultante.

---

## Salida Esperada por Consola
```
false
[ 'Toyota', 'Honda', 'BMW', 'Chevrolet', 'Nissan' ]
3
[ 'BMW', 'Chevrolet', 'Honda', 'Nissan', 'Toyota' ]
BMW . Chevrolet . Honda . Nissan . Toyota
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `gestionarAutos.js`).
2.  Abre una terminal y ejecuta:
    ```bash
    node gestionarAutos.js
    ```

---

## 🏁 Resumen

Este ejercicio demuestra un flujo de trabajo completo de procesamiento de datos: desde una cadena de texto cruda hasta un resultado final formateado y analizado. Se encadenan y utilizan múltiples métodos de strings y arrays para limpiar, transformar, buscar y ordenar los datos de manera eficiente.