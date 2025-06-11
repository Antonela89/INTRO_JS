// Ejercicio 2: Do While
// Escribe un programa que solicite al usuario ingresar una contraseña. Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. La contraseña correcta es "1234".

const prompt = require('prompt-sync')();

const constrasenaCorrecta = '1234';
let contrasena;

do {
    contrasena = prompt('Ingrese contraseña de cuatro dígitos: ')  
} while (constrasenaCorrecta !== contrasena);


console.log('¡Contraseña correcta! Acceso concedido.');