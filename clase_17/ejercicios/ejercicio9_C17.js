// Ejercicio 9: Desafío extra! Orden, lugar y números

// Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo mismo del ejercicio anterior (buscar la posición de un número en un array), pero partiendo de esta lista:
// ```javascript
// let list = [12,3,5,7,1,22,47,100];
// ```
// Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas:
// *   ¿Cuál es la posición del número 12?
// *   ¿Cuál es la posición del número 5?
// *   ¿Cuál es la posición del número 22?
// *   ¿Cuál es la posición del número 100?


// lista desordenada 
let list = [12, 3, 5, 7, 1, 22, 47, 100];

// primero ordenar de menor a mayor
// usando bubble sort
const ordenadaBubble = array => {
    let arrayCopia = [...array];
    let n = arrayCopia.length;
    let intercambiado;

    // se usan 2 bucles, uno externo y otro interno
    // bucle externo -> numero de pasadas: elemento por elemento
    for (let i = 0; i < n - 1; i++) {
        intercambiado = false;
        console.log(`\n--- Pasada ${i + 1} ---`);

        // bucle interno -> hace comparaciones e intercambio
        // se resta 'i' porque los últimos 'i' elementos ya están ordenados
        for (let j = 0; j < n - 1 - i; j++) {
            console.log(`Comparando ${array[j]} y ${array[j + 1]}`);

            // Si el elemento actual es mayor que el siguiente
            if (array[j] > array[j + 1]) {
                console.log(` -> Intercambiando ${array[j]} y ${array[j + 1]}`);

                // Intercambiamos los elementos
                // Sintaxis moderna de JavaScript (destructuring assignment)
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                intercambiado = true; // Marcamos que hubo un intercambio
            }
        }
        // Si no hubo intercambios en esta pasada, el arreglo ya está ordenado
        if (!intercambiado) {
            console.log("No hubo intercambios, el arreglo está ordenado. Terminando antes.");
            break;
        }

        console.log(`Estado del arreglo al final de la pasada: [${array.join(', ')}]`);
    }
    return arrayCopia;
}

console.log("Arreglo Original:", list);
const numerosYaOrdenados = ordenadaBubble(list);
console.log("\nArreglo Final Ordenado con método Bubble Sort:", numerosYaOrdenados);

// usando sort()
console.log("Arreglo Original:", list);
const copiaList = [...list]
const ordenadaSort = copiaList.sort((a, b) => a - b);
console.log("\nArreglo Final Ordenado con método .sort():", ordenadaSort);

const objetivo1 = 12;
const objetivo2 = 5;
const objetivo3 = 22;
const objetivo4 = 100;

const busquedaBinaria = (array, objetivo) => {
    // son variables que se van a reasignar
    let inicio = 0; // indice del primer elemento
    let fin = list.length - 1 // inidice del ultimo elemento

    //usamos un while
    while (inicio <= fin) {
        // indice del medio - Math.floor -> redondea hacia abajo
        let medio = Math.floor((inicio + fin) / 2);
        let valorMedio = array[medio];

        console.log(`Buscando... Inicio: ${inicio}, Fin: ${fin}, Medio: ${medio} (valor: ${valorMedio})`);

        // comparación
        // primer caso - se encuentra 

        if (valorMedio === objetivo) {
            return medio
            // segundo caso - El objetivo es mayor
        } else if (objetivo > valorMedio) {
            inicio = medio + 1;
            // tercer caso - El objetivo es menor
        } else {
            fin = medio - 1;
        }
    }

    return -1; // cuando no se encuentra el objetivo
}

const indiceEncontrado1 = busquedaBinaria(numerosYaOrdenados, objetivo1);

if (indiceEncontrado1 !== -1) {
    console.log(`\n¡Éxito! El número ${objetivo1} se encuentra en el índice ${indiceEncontrado1}.`);
} else {
    console.log(`\nEl número ${objetivo1} no se encontró en el arreglo.`);
}

const indiceEncontrado2 = busquedaBinaria(numerosYaOrdenados, objetivo2);

if (indiceEncontrado2 !== -1) {
    console.log(`\n¡Éxito! El número ${objetivo2} se encuentra en el índice ${indiceEncontrado2}.`);
} else {
    console.log(`\nEl número ${objetivo2} no se encontró en el arreglo.`);
}

const indiceEncontrado3 = busquedaBinaria(numerosYaOrdenados, objetivo3);

if (indiceEncontrado3 !== -1) {
    console.log(`\n¡Éxito! El número ${objetivo3} se encuentra en el índice ${indiceEncontrado3}.`);
} else {
    console.log(`\nEl número ${objetivo3} no se encontró en el arreglo.`);
}

const indiceEncontrado4 = busquedaBinaria(numerosYaOrdenados, objetivo4);

if (indiceEncontrado4 !== -1) {
    console.log(`\n¡Éxito! El número ${objetivo4} se encuentra en el índice ${indiceEncontrado4}.`);
} else {
    console.log(`\nEl número ${objetivo4} no se encontró en el arreglo.`);
}

// hacer un array de los objetivos para no repetir código
const objetivos = [12, 5, 22, 100];
// crear bucle para recorrer el array
for (const objetivo of objetivos) {
    const indiceEncontrado = busquedaBinaria(numerosYaOrdenados, objetivo);
    if (indiceEncontrado !== -1) {
        console.log(`\n¡Éxito! El número ${objetivo} se encuentra en el índice ${indiceEncontrado} del array ordenado.`);
    } else {
        console.log(`\nEl número ${objetivo} no se encontró en el arreglo.`);
    }
}

// en la solución anterior se pierde la informacion de la posicion original de los elementos buscados
let list1 = [12, 3, 5, 7, 1, 22, 47, 100];
// mapeo de indices

// 1. Mapear valores a objetos con su índice original
const listConIndices = list1.map((valor, indice) => {
    return { valor: valor, indiceOriginal: indice };
})

console.log(listConIndices);

// ordenar por valor
listConIndices.sort((a, b) => a.valor - b.valor)
console.log(listConIndices);

// busqueda binaria con objetos 
const busquedaBinariaObjetos = (array, objetivo) => {
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        let valorMedio = array[medio].valor; // <-- La única diferencia es aquí

        if (valorMedio === objetivo) {
            return array[medio]; // Devolvemos el objeto completo
        } else if (objetivo > valorMedio) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }
    return null; // No se encontró
}

const objetivos1 = [12, 5, 22, 100];
// crear bucle para recorrer el array
for (const objetivo of objetivos1) {
    const resultado = busquedaBinariaObjetos(listConIndices, objetivo);
    if (resultado !== null) {
        console.log(`El número ${objetivo} se encontró.`);
        console.log(`Su posición en el array ORDENADO es: ${listConIndices.indexOf(resultado)}`);
        console.log(`Su posición en el array ORIGINAL era: ${resultado.indiceOriginal}`);
    } else {
        console.log(`El número ${objetivo} no se encontró.`);
    }
}