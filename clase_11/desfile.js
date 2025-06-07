// Refactorización de código para pruebas unitarias con Jest

// Lógica pura y testeable -> función (caja negra)
// Esta función recibe los datos y devuelve las lineas dentro de un array.

const definirDesfile = (cantidad, emoji) => {
    if (cantidad <= 0) {
        return []; // Si no hay personajes, devolvemos un array vacío.
    }
    const lineas = [];
    for (let i = 1; i <= cantidad; i++) {
        lineas.push(`${i} - ${emoji}`);
    }
    return lineas;
} 

// --- PARTE NO TESTEABLE (INTERACCIÓN CON EL USUARIO) ---
// Esta parte del código la ejecutamos, pero no la probamos unitariamente.
function ejecutarDesfile() {
    const prompt = require('prompt-sync')();

    let cantidadPersonajes = parseInt(prompt('Ingresa la cantidad de personajes que forman parte de tu equipo: '));
    let equipo = prompt('Ingresa un emoji para tu equipo (😀 😂): ');

    console.log('Bienvenidos al desfile');
    console.log(`Presentamos a los integrantes del equipo: ${equipo}`);

    const lineasDelDesfile = definirDesfile(cantidadPersonajes, equipo);

    lineasDelDesfile.forEach(linea => {
        console.log(linea);
    });
}

// Para poder probar la función, la exportamos.
// Para que el archivo se pueda ejecutar directamente, verificamos si es el módulo principal.
if (require.main === module) {
    definirDesfile();
}

module.exports = {definirDesfile}; // Exportamos la función para las pruebas
