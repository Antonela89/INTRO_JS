const pesoEnLibras = (pesoKg) => {
    const libras = 2.20462;
    let peso = parseFloat(pesoKg);
    let pesoLibras = (peso * libras).toFixed(2); //toFixed siempre devuelve string
    return parseFloat(pesoLibras); //también se puede usar el operador unario + delante de la variable para pasar a numero -> +pesoEnLibras
}

if ( require.main === module) {
    pesoEnLibras();
};

module.exports = { pesoEnLibras };