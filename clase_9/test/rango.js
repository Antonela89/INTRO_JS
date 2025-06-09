// modo 1 - 
// al usar las llaves const rango = (...) => { ... }, le indicaste a JavaScript que el cuerpo de la función era un bloque de código de varias líneas, lo cual desactiva el return implícito y te obliga a usar la palabra return explícitamente.
// const rango = (numero, minimo, maximo) => {
//     return numero >= minimo && numero <= maximo 
//     ? 'El número ingresado está dentro del rango definido.' 
//     : 'El número ingresado NO ESTÁ dentro del rango definido.'
// }

// modo 2 - sin llaves {} - return implícito
// const rango = (numero, minimo, maximo) => 
//     numero >= minimo && numero <= maximo 
//     ? 'El número ingresado está dentro del rango definido.' 
//     : 'El número ingresado NO ESTÁ dentro del rango definido.'



const rango = (numero, minimo, maximo) => {
    // tener en cuenta el cambio de valores
    if (minimo > maximo) {
        [minimo,maximo] = [maximo, minimo]
    }

    // tener en cuenta valores iguales
    if (minimo === maximo ) {
        return 'Máximo y mínimo son iguales, corrija máximo y mínimo';
    }

    return numero >= minimo && numero <= maximo 
    ? 'El número ingresado está dentro del rango definido.' 
    : 'El número ingresado NO ESTÁ dentro del rango definido.'
}

if (require.main === module) {
    rango();
};

module.exports = {rango};