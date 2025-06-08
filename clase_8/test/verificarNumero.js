// Lógica 
const verificarNumero = (numero) => {
    if (numero === 0) { 
        return 'El número es cero.';
    } else if (numero > 0) {
        return 'El número es positivo.';
    } else if (numero < 0) {   
        return 'El número es negativo.';
    } else {
        return 'Entrada no válida. Por favor, ingrese un número.';
    }
}

if (require.main === module) {
    verificarNumero();
}

module.exports = {verificarNumero};