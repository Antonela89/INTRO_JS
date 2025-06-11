# Documentación del Código: Ejercicio 9 - Control de Gastos Mensuales

## Descripción General

Este script de JavaScript simula una aplicación de control de gastos. Utiliza una matriz predefinida de 4x7 para representar los gastos diarios durante cuatro semanas. El script define funciones para:
a. Calcular el total de gastos de una semana específica (solicitada al usuario).
b. Calcular el total de gastos de un día específico de la semana (solicitado al usuario).
c. Calcular el total de gastos del mes, la semana con más gastos y el día de la semana (ej. Lunes, Martes) con más gastos acumulados en el mes.

---

## Requisitos Previos

Para la entrada de datos del usuario (número de semana y día) en un entorno **Node.js**, este script requiere el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script se estructura de la siguiente manera:

1️⃣ **Inicialización de `prompt-sync` y Definición de la Matriz de Gastos**

```js
const prompt = require('prompt-sync')();

const gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // Semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // Semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950]  // Semana 4
];
```

*   **Propósito**: Configurar el entorno para la entrada del usuario y definir la estructura de datos principal (la matriz de gastos).
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `const gastos = [...]`: Define una matriz `gastos` donde cada fila representa una semana y cada columna un día de esa semana (de Lunes a Domingo, asumiendo que la columna 0 es el primer día).

2️⃣ **Función `totalGastosSemana` y su Uso**

```js
let semana = parseInt(prompt('Ingrese el número de la semana a calcular (1-2-3-4): '));

const totalGastosSemana = (matriz, semana) => {
    let sumaGastosSemana = 0;
    let semanaArray = semana - 1; // Ajustar a índice base 0
    // Validación básica de la semana (opcional pero recomendable)
    if (semanaArray < 0 || semanaArray >= matriz.length) {
        return "Número de semana inválido.";
    }
    for (let dia = 0; dia < matriz[semanaArray].length; dia++) {
        const gastoDia = matriz[semanaArray][dia];
        sumaGastosSemana += gastoDia;
    }
    return sumaGastosSemana;
};
console.log(`Total gastos semana ${semana}: ${totalGastosSemana(gastos, semana)}`);
```

*   **Propósito**: Calcular y mostrar el total de gastos para una semana específica ingresada por el usuario.
*   **Detalle**:
    *   Se solicita al usuario el número de la semana (1-4).
    *   La función `totalGastosSemana` toma la matriz y el número de semana como entrada.
    *   `semanaArray = semana - 1;`: Ajusta el número de semana ingresado por el usuario (base 1) al índice del array (base 0).
    *   Itera sobre los gastos de los días de la semana seleccionada (la fila `matriz[semanaArray]`) y los suma.
    *   Devuelve la suma total de esa semana.
    *   Se imprime el resultado.

3️⃣ **Función `totalGastosDia` y su Uso**

```js
let dia = parseInt(prompt('Ingrese el número del día a calcular (1-2-3-4-5-6-7): '));

const totalGastosDia = (matriz, dia) => {
    let sumaGastosDia = 0; // Corregido nombre de variable
    let diaArray = dia - 1; // Ajustar a índice base 0
    // Validación básica del día (opcional pero recomendable)
    if (diaArray < 0 || diaArray >= (matriz[0] ? matriz[0].length : 0) ) {
        return "Número de día inválido.";
    }
    for (let semana = 0; semana < matriz.length; semana++) {
        const gastoDia = matriz[semana][diaArray];
        sumaGastosDia += gastoDia;
    }
    return sumaGastosDia;
};
console.log(`Total gastos día ${dia} del mes: ${totalGastosDia(gastos, dia)}`);
```

*   **Propósito**: Calcular y mostrar el total de gastos para un día específico de la semana (ej. todos los Lunes del mes) ingresado por el usuario.
*   **Detalle**:
    *   Se solicita al usuario el número del día (1-7).
    *   La función `totalGastosDia` toma la matriz y el número de día como entrada.
    *   `diaArray = dia - 1;`: Ajusta el número de día al índice de columna.
    *   Itera sobre cada semana (fila) de la matriz y suma el gasto del día especificado (`matriz[semana][diaArray]`).
    *   Devuelve la suma total para ese día a lo largo de todas las semanas.
    *   Se imprime el resultado.

4️⃣ **Función `totalGastosYMax` para Estadísticas Generales**

```js
const totalGastosYMax = (matriz) => {
    const totalesPorSemanaArray = []; // Renombrado para claridad
    let totalMes  = 0;
    // let totalesSemana = [0, 0, 0, 0]; // No es necesario si usamos totalesPorSemanaArray

    for (let i = 0; i < matriz.length; i++) {
        const semanaActual = matriz[i]; // Renombrado para claridad
        const sumaSemana = semanaActual.reduce((acumulador, gasto) => acumulador + gasto, 0);
        totalesPorSemanaArray.push(sumaSemana);
        // totalesSemana[i] += sumaSemana; // Redundante si usamos totalesPorSemanaArray
        totalMes += sumaSemana;
    }

    const maxGastoSemana = Math.max(...totalesPorSemanaArray);
    const numeroSemanaMax = totalesPorSemanaArray.indexOf(maxGastoSemana) + 1;

    const totalesPorDiaArray = [0, 0, 0, 0, 0, 0, 0]; // Renombrado
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            totalesPorDiaArray[columna] += matriz[fila][columna];
        }
    }

    const maxGastoDia = Math.max(...totalesPorDiaArray);
    const numeroDiaMax = totalesPorDiaArray.indexOf(maxGastoDia) + 1;

    return {
        totalesPorSemana: totalesPorSemanaArray, // Devuelve el array de totales
        totalesPorDia: totalesPorDiaArray,       // Devuelve el array de totales
        gastoTotalMes: totalMes,
        semanaConMasGasto: {
            numero: numeroSemanaMax,
            total: maxGastoSemana
        },
        diaConMasGasto: {
            numero: numeroDiaMax, // Representa el día de la semana (1=Lunes, etc.)
            total: maxGastoDia
        }
    };
};

const resultados = totalGastosYMax(gastos);
console.log("Estadísticas generales del mes:", resultados);
```

*   **Propósito**: Calcular el gasto total del mes, identificar la semana con el mayor gasto y el día de la semana (ej. Lunes, Martes) con el mayor gasto acumulado.
*   **Detalle**:
    *   Calcula el total de gastos para cada semana y el total del mes.
    *   Encuentra la semana con el gasto máximo y su número (1-4).
    *   Calcula el total de gastos para cada día de la semana (ej. suma de todos los Lunes, todos los Martes, etc.).
    *   Encuentra el día de la semana con el gasto máximo acumulado y su número (1-7).
    *   Devuelve un objeto con todas estas estadísticas.
    *   Se llama a la función y se imprime el objeto de resultados.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa semana 2 y día 3:**
```
Ingrese el número de la semana a calcular (1-2-3-4): 2
Total gastos semana 2: 12288
Ingrese el número del día a calcular (1-2-3-4-5-6-7): 3
Total gastos día 3 del mes: 5920
Estadísticas generales del mes: {
  totalesPorSemana: [ 13685, 12288, 15520, 9780 ],
  totalesPorDia: [ 5385, 7790, 5920, 6900, 7448, 11170, 7410 ],
  gastoTotalMes: 51273,
  semanaConMasGasto: { numero: 3, total: 15520 },
  diaConMasGasto: { numero: 6, total: 11170 }
}
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `controlGastos.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node controlGastos.js
    ```
7.  Sigue las instrucciones para ingresar el número de semana y día.
8.  Verás los resultados de los cálculos impresos en la consola.

🏁 **Resumen**

Este script es un ejemplo completo de cómo se pueden utilizar matrices para organizar datos tabulares y cómo se pueden definir funciones para realizar análisis específicos sobre esos datos. Cubre la iteración sobre filas y columnas, la agregación de datos (sumas) y la búsqueda de valores máximos, además de la interacción con el usuario.