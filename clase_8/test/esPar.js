const esPar = (numero) => {
    return numero % 2 === 0 ? 'El número es par' : 'El número es impar';
}

if (require.main === module) {
    esPar();
}

module.exports = {esPar};