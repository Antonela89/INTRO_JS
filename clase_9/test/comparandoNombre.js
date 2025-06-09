const comparandoNombre = (miNombre,nombre) => {
    let miNombreMinuscula = miNombre.toLowerCase();
    let nombreMinuscula = nombre.toLowerCase();

    return miNombreMinuscula === nombreMinuscula
    ? '¡Hola, tocayo, tu nombre es igual al mío! ¡Qué bueno verte!'
    : '¡Lamentablemente, tu nombre no es igual al mío!'
}

if ( require.main === module) {
    comparandoNombre();
};

module.exports = { comparandoNombre };