// Ejercicio 9: Última aparición de un modelo de auto
// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos.
// La idea es solo registrar el total de los gastos, al finalizar la jornada.
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas.
// Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.

// a. Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.
// b. La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0.
// c. Por último, es necesario tener el total de gastos realizados en el mes.

// *✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto?*

// d. Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.

// *✔ Posibles matrices para comprobar los resultados.*

// |           | Día 1 | Día 2 | Día 3 | Día 4 | Día 5 | Día 6 | Día 7 |
// |-----------|-------|-------|-------|-------|-------|-------|-------|
// | Semana 1  | 1135  | 2500  | 900   | 1600  | 2800  | 3650  | 1100  |
// | Semana 2  | 1750  | 1890  | 1900  | 1300  | 898   | 1750  | 2800  |
// | Semana 3  | 1700  | 1150  | 1690  | 1900  | 1770  | 4500  | 2560  |
// | Semana 4  | 800   | 1250  | 1430  | 2100  | 1980  | 1270  | 950   |

const prompt = require('prompt-sync')();

const gastos = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
];

let semana = parseInt(prompt('Ingrese el número de la semana a calcular (1-2-3-4): '));

const totalGastosSemana = (matriz, semana) => {
    let sumaGastosSemana = 0;
    let semanaArray = semana - 1
    for (let dia = 0; dia < matriz[semanaArray].length; dia++) {
        const gastoDia = matriz[semanaArray][dia];
        sumaGastosSemana += gastoDia;
    }

    return sumaGastosSemana;
}

console.log(totalGastosSemana(gastos, semana));

let dia = parseInt(prompt('Ingrese el número del día a calcular (1-2-3-4-5-6-7): '));

const totalGastosDia = (matriz, dia) => {
    let sumaGastosDía = 0;
    let diaArray = dia - 1
    for (let semana = 0; semana < matriz.length; semana++) {
        const gastoDia = matriz[semana][diaArray];
        sumaGastosDía += gastoDia;
    }
    return sumaGastosDía;
}

console.log(totalGastosDia(gastos, dia));

const totalGastosYMax = (matriz) => {
    const totalesPorSemana = []
    let totalMes  = 0;
    
    for (let i = 0; i < matriz.length; i++) {
        const semana = matriz[i];
        // Usamos reduce para sumar la semana de forma concisa
        const sumaSemana = semana.reduce((acumulador, gasto) => acumulador + gasto, 0);
        totalesPorSemana.push(sumaSemana);
        totalMes += sumaSemana; // Sumamos al total del mes
    }

    // 2. Encontrar la semana con el gasto máximo
    const maxGastoSemana = Math.max(...totalesPorSemana);
    const numeroSemanaMax = totalesPorSemana.indexOf(maxGastoSemana) + 1;

    // 3. Calcular los totales de cada tipo de día (columna)
    const totalesPorDia = [0, 0, 0, 0, 0, 0, 0]; // Un acumulador para cada día
    for (let fila = 0; fila < matriz.length; fila++) {
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            totalesPorDia[columna] += matriz[fila][columna];
        }
    }

    // 4. Encontrar el día con el gasto máximo
    const maxGastoDia = Math.max(...totalesPorDia);
    const numeroDiaMax = totalesPorDia.indexOf(maxGastoDia) + 1;

    // 5. Devolver TODOS los resultados en un solo objeto (el return va al final)
    return {
        gastoTotalMes: totalMes,
        semanaConMasGasto: {
            numero: numeroSemanaMax,
            total: maxGastoSemana
        },
        diaConMasGasto: {
            numero: numeroDiaMax,
            total: maxGastoDia
        }
    };
};

// Llamamos a la función UNA SOLA VEZ y mostramos los resultados
const resultados = totalGastosYMax(gastos);
console.log(resultados);
