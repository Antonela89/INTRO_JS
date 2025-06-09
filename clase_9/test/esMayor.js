const esMayor = (edad) => {
    if (isNaN(edad)) {
        return 'Ingrese un número válido.';
    }

    return edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad."
}
    

if (require.main === module) {
    esMayor();
};

module.exports = { esMayor }