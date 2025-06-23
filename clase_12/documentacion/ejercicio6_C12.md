# Documentación del Código: Ejercicio 6 - Suma Condicional en Matriz

## Descripción General

Este script de JavaScript define una matriz (un array de arrays) de números. Luego, recorre todos los elementos de esta matriz y suma únicamente aquellos números que cumplen con la condición de ser mayores o iguales a 10 Y menores que 1000. Finalmente, imprime la suma total de los números que satisfacen esta condición.

---

## Requisitos Previos

Este script no requiere bibliotecas externas como `prompt-sync`, ya que la matriz está definida directamente en el código y no se solicita entrada del usuario. Utiliza funcionalidades básicas de JavaScript y puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Definición de la Matriz e Inicialización de la Suma**

```js
let matriz = [
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4]
];

// inicializar variable suma
let suma = 0;
```

*   **Propósito**: Establecer la estructura de datos (matriz) con los números a procesar y preparar una variable para acumular la suma.
*   **Detalle**:
    *   `let matriz = [...]`: Declara una variable `matriz` y le asigna un array de arrays, donde cada array interno representa una fila de la matriz.
    *   `let suma = 0;`: Declara una variable `suma` y la inicializa en `0`. Esta variable almacenará la suma de los números que cumplan la condición.

2️⃣ **Recorrido de la Matriz y Suma Condicional**

```js
//recorrer matriz con dos ciclos for
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        //sumar según condición
        if (matriz[fila][columna] >= 10 && matriz[fila][columna] < 1000) {
            suma += matriz[fila][columna];
        }
    }
}
```

*   **Propósito**: Iterar sobre cada elemento de la matriz, verificar si cumple la condición especificada y, si es así, añadirlo a la `suma`.
*   **Detalle**:
    *   `for (let fila = 0; fila < matriz.length; fila++)`: El primer ciclo `for` (externo) itera sobre las filas de la `matriz`. `matriz.length` da el número de filas.
    *   `for (let columna = 0; columna < matriz[fila].length; columna++)`: El segundo ciclo `for` (interno) itera sobre los elementos (columnas) de la fila actual (`matriz[fila]`). `matriz[fila].length` da el número de columnas en esa fila.
    *   `if (matriz[fila][columna] >= 10 && matriz[fila][columna] < 1000)`: Esta es la condición que se evalúa para cada elemento `matriz[fila][columna]`.
        *   El elemento debe ser mayor o igual a 10.
        *   Y (`&&`) el elemento debe ser estrictamente menor que 1000.
    *   `suma += matriz[fila][columna];`: Si ambas partes de la condición son verdaderas, el valor del elemento actual se añade a la variable `suma`.

3️⃣ **Impresión de la Suma Resultante**

```js
//imprimir suma
console.log(`La suma de los números mayores o iguales a 10 y menores a 1000 es: ${suma}`);
```

*   **Propósito**: Mostrar el resultado final de la suma de los elementos que cumplieron la condición.
*   **Detalle**:
    *   `console.log(...)`: Imprime el mensaje en la consola, utilizando una plantilla literal para incluir el valor de `suma`.

## Salida Esperada en Consola (con la matriz proporcionada)

```
La suma de los números mayores o iguales a 10 y menores a 1000 es: 355
```
Elementos que suman: 10 (fila 0), 10 (fila 1), 100 (fila 1), 125 (fila 2), 10 (fila 2), 100 (fila 3) -> 10+10+100+125+10+100 = 355
Fila 0: 10
Fila 1: 10, 100
Fila 2: 125, 10
Fila 3: 100
Suma = 10 + 10 + 100 + 125 + 10 + 100 = 355.

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `sumaMatrizCondicional.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node sumaMatrizCondicional.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás la suma resultante impresa en la consola.

🏁 **Resumen**

Este script demuestra cómo trabajar con matrices (arrays bidimensionales) en JavaScript. Utiliza ciclos `for` anidados para acceder a cada elemento individual de la matriz y aplica lógica condicional para procesar selectivamente esos elementos.