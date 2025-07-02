// Ejercicio 8: Lugar y números

// Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con un ejemplo simple. Quiero que se familiaricen con la sintaxis del mismo, por lo que no haré énfasis en los datos, sino en la solución.

// Dada la siguiente lista:
// ```javascript
// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// ```
// Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
// *   ¿Cuál es la posición del número 1?
// *   ¿Cuál es la posición del número 5?
// *   ¿Cuál es la posición del número 6?
// *   ¿Cuál es la posición del número 9?
// *   ¿Cuál es la posición del número 11?

// Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el array, y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta que les hago es que codeen un algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el 6, y nos indique por consola la posición del mismo.

// El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra.

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// "divide y venceras" => divide por la mitad la busqueda sucesivamente
// requisito para que funcione: El arreglo DEBE estar ordenado de menor a mayor. Si no lo está, la búsqueda binaria no funcionará.
// punteros o extremos => principio y fin de array
// medio => sumatoria de los extremos / 2
// comparación de elemento en la posicion medio con el objetivo
// objetivo === list[medio] => medio
// objetivo > list[medio] => cambias extremos, se descarta rango inicio - medio => ahora inicio = medio + 1
// objetivo  < list[medio] => cambias extremos, se descarta rango medio - fin => ahora fin = medio - 1
// en los 2 ultimos casos vuelves a buscar con los extremos nuevos

const objetivo1 = 1;
const objetivo2 = 5;
const objetivo3 = 6;
const objetivo4 = 9;
const objetivo5 = 11;

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
        } else if  (objetivo > valorMedio) {
             inicio = medio + 1;
             // tercer caso - El objetivo es menor
        } else {
            fin = medio - 1;
        }
    }

    return -1; // cuando no se encuentra el objetivo
}

const indiceEncontrado1 = busquedaBinaria(list, objetivo1);

if (indiceEncontrado1 !== -1) {
  console.log(`\n¡Éxito! El número ${objetivo1} se encuentra en el índice ${indiceEncontrado1}.`);
} else {
  console.log(`\nEl número ${objetivo1} no se encontró en el arreglo.`);
}

const indiceEncontrado2 = busquedaBinaria(list, objetivo2);

if (indiceEncontrado2 !== -1) {
  console.log(`\n¡Éxito! El número ${objetivo2} se encuentra en el índice ${indiceEncontrado2}.`);
} else {
  console.log(`\nEl número ${objetivo2} no se encontró en el arreglo.`);
}

const indiceEncontrado3 = busquedaBinaria(list, objetivo3);

if (indiceEncontrado3 !== -1) {
  console.log(`\n¡Éxito! El número ${objetivo3} se encuentra en el índice ${indiceEncontrado3}.`);
} else {
  console.log(`\nEl número ${objetivo3} no se encontró en el arreglo.`);
}

const indiceEncontrado4 = busquedaBinaria(list, objetivo4);

if (indiceEncontrado4 !== -1) {
  console.log(`\n¡Éxito! El número ${objetivo4} se encuentra en el índice ${indiceEncontrado4}.`);
} else {
  console.log(`\nEl número ${objetivo4} no se encontró en el arreglo.`);
}

const indiceEncontrado5 = busquedaBinaria(list, objetivo5);

if (indiceEncontrado5 !== -1) {
  console.log(`\n¡Éxito! El número ${objetivo5} se encuentra en el índice ${indiceEncontrado5}.`);
} else {
  console.log(`\nEl número ${objetivo5} no se encontró en el arreglo.`);
}