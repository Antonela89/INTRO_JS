// Ejercicio 3: Frase con admiración (función arrow con cuerpo)
// Crea una función arrow llamada `agregarAdmiracion` que reciba un string como parámetro. La función debe agregar signos de admiración al principio y al final del string (ej: `¡Hola, mundo!`) y convertir toda la frase a mayúsculas. Como requiere más de un paso, deberás usar llaves `{}` y la palabra `return`.

const prompt = require('prompt-sync')();

let string = prompt('Ingrese un mensaje: ');

const agregarAdmiracion = (string) => {
    const mayusculas = string.toUpperCase();
    return `¡${mayusculas}!`;
}

const mensaje = agregarAdmiracion(string);
console.log(mensaje);
