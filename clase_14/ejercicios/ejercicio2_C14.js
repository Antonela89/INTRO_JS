// Ejercicio 2: Calcular promedio de calificaciones
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

const prompt = require('prompt-sync')();

let promedio = () => {
    let suma = 0; 
    for (let i = 0; i < 5; i++) {
        let calificacion = parseInt(prompt('Ingresa una calificación: '));
        suma += calificacion;
    }

    return `El promedio de las calificaciones ingresadas es: ${suma / 5}`;
}

console.log(promedio());


// let promedio = () => {
//     let suma = 0;
//     let calificaciones = [];

// for (let i = 0; i < 5; i++) {
//     let calificacion = parseInt(prompt('Ingresa una calificación: '));
//     calificaciones.push(calificacion);
//     suma += calificacion;
//     }

//    return {
//      promedio: suma / 5,
//      calificaciones
//     } 
// }

// const resultado = promedio();

// console.log(resultado.promedio);
// console.log(resultado.calificaciones);






