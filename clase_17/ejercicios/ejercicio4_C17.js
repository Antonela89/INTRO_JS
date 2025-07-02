// Ejercicio 4: Transformación y Análisis de Cadenas

// Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a ingresar deben ser "Julian”, “Maria”, “Malena”, “Andrea", "Pablo" y "Pedro”.

// Luego, escribe la función “transformarYAnalizarNombres” que realice las siguientes tareas:
// 1.  Quite los espacios en blanco alrededor de cada nombre.
// 2.  Verifique si existe el nombre "Juan".
// 3.  Reemplace todos los nombres "María" por "Ana".
// 4.  Encuentre el índice del nombre "Pedro".
// 5.  Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método `.sort()`

const prompt = require('prompt-sync')();

const crearListaNombres = () => {
    const nombres = [];
    let continuar = true;
    while (continuar) {
        let nombre = prompt('Ingresa un nombre o escriba salir para terminar: ').toLowerCase();

        if (nombre !== 'salir') {
            nombres.push(nombre);
        } else {
            continuar = false;
        }
    }

    return nombres;
}

const listaNombres = crearListaNombres()

console.log(listaNombres);

const transformarYAnalizarNombres = array => {
    const arrayCopiado = [...array];

    const transformacion = arrayCopiado.map(element => {
        const sinEspacios =  element.trim();
        const reemplazoDeMaria = element.replace('maria', 'ana');
        return reemplazoDeMaria
    })

    const estaJuan = arrayCopiado.some(element => element === 'juan');

    const indicePedro = arrayCopiado.findIndex(element => element === 'pedro');

    const ordenados = arrayCopiado.sort().join(' . ')

    return {

        estaJuan,
        transformacion,
        indicePedro,
        ordenados
    }
}

const resultado = transformarYAnalizarNombres(listaNombres);
console.log(resultado.estaJuan);
console.log(resultado.transformacion);
console.log(resultado.indicePedro);
console.log(resultado.ordenados);




