// Logica - Caja negra para testear -> Función
const calcularDoble = (numero) => {
    let doble = numero *2
    return `El doble de ${numero} es ${doble}`
}

// Para que el archivo se pueda ejecutar directamente, verificamos si es el módulo principal.
if (require.main === module) {
    calcularDoble();
}

// Exportación de la función
module.exports = {calcularDoble};