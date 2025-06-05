// Ejercicio 7: Calculadora simple
// Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa `switch` para resolverlo.

const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Ingresa el primer número: '));
let numero2 = parseInt(prompt('Ingresa el primer número: '));
let operacion = prompt('Ingresa la operación matemática a realizar (suma/resta/multiplicacion/division): ').toLowerCase();

switch (operacion) {
    case 'suma':
        let calculoSuma = numero1 + numero2;
        console.log(`La suma de los números ingresados es: 
            ${numero1} + ${numero2} = ${calculoSuma} `);
        break;

    case 'resta':
        // if (numero1 < numero2) {
        //     [numero1, numero2] = [numero2, numero1]
        // }

        let calculoResta = numero1 - numero2;
        console.log(`La resta de los números ingresados es: 
            ${numero1} - ${numero2} = ${calculoResta} `);
        break;

    case 'multiplicacion':
        let calculoMultiplicacion = numero1 * numero2;
        console.log(`La suma de los números ingresados es: 
            ${numero1} * ${numero2} = ${calculoMultiplicacion} `);
        break;

    case 'division':
        let calculoDivision = numero1 / numero2;
        console.log(`La suma de los números ingresados es: 
            ${numero1} / ${numero2} = ${calculoDivision} `);
        break;

    default:
        console.log('La operación ingresada no es válida');
        break;
}

