const saludo = (nombre) => {
    return `Hola, ${nombre} Bienvenido/a al programa!`;
}

if (require.main === module) {
    saludo();
}

module.exports = { saludo };