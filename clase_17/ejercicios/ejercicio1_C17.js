// Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays

// Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).

// Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
// 1.  Agregar una nueva nota al array de notas.
// 2.  Eliminar la primera nota del array.
// 3.  Calcular el promedio de las notas restantes.
// 4.  Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método `toUpperCase()`
// 5.  Devolver un objeto con el nombre en mayúsculas y el promedio de las notas.

const prompt = require('prompt-sync')();

const nota = parseInt(prompt('Ingresa una nota: '))

const estudiante = {
    nombre: "Ana Pérez",
    edad: 20,
    notas: [8, 9, 7, 10, 8]
};

const procesarEstudiante = (estudiante, nuevaNota) => {

    const agregarNota = estudiante.notas.push(nuevaNota);
    const eliminaNota = estudiante.notas.shift();

    const promedio = () => {
        const suma = estudiante.notas.reduce((acum, nota) => {
            return acum += nota; 
        }, 0);

        return suma / estudiante.notas.length;
    }

    const nombreMayusculas = estudiante.nombre.toUpperCase();

    return {
        nombreMayusculas,
        promedio
    }
}

const estudianteModificado = procesarEstudiante(estudiante, nota);


console.log(estudianteModificado.nombreMayusculas);
console.log(estudianteModificado.promedio());