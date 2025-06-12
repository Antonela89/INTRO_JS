// Ejercicio 7: Mensaje según la hora
// Declara una variable global llamada `horaActual` (puedes asignarle un valor fijo). Crea una función declarada llamada `mostrarSaludo` que imprima "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o "Buenas noches" en cualquier otro caso.

const horaActual = new Date(); //hora actual

const inicioMañana = new Date();
inicioMañana.setHours(6,0,0); //Establece la hora en 6:00

const inicioTarde = new Date();
inicioTarde.setHours(12,0,0); // Establece la hora en 12:00

const inicioNoche = new Date(); 
inicioNoche.setHours(18,0,0); // Establece la hora en 18:00

function mostrarSaludo(hora) {
    if (hora >= inicioMañana && hora < inicioTarde ) {
        console.log('Buenas días');
    } else if (hora >= inicioTarde && hora < inicioNoche) {
        console.log('Buenas tardes');
    } else {
        console.log('Buenas noches');
    }
}

mostrarSaludo(horaActual);

