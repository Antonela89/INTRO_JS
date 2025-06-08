const suma = (numero1, numero2) => {
    return numero1 + numero2;
}

if ( require.main === module ) {
    suma();
}

module.exports = {suma};