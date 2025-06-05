// Ejercicio 10: Adivina el número
// Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un `for` para resolver este ejercicio.

const prompt = require('prompt-sync')();

let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1)) + 1

// console.log(numeroSecreto);

let acertado = false; 

for (let intentos = 1; intentos <= 3; intentos++) {
   let numero = parseInt(prompt('Ingrese un número entre 1 y 10: '))
   if( numeroSecreto === numero) {
    acertado = true;
    console.log('Acertaste...');
    break
    } else if (intentos < 3) {
        console.log('Incorrecto. Inténtalo nuevamente...');
    }
}

if (!acertado){
     console.log(`Lo siento, perdiste. El número secreto era: ${numeroSecreto}`);
}

