const {esPar} = require('./esPar');

describe('esPar', () => {
    //Prueba 1 - número positivo par
    test('Debería funcionar para un número positivo par', () => {
        const numero = 10;
        const resultadoEsperado = 'El número es par';

        expect(esPar(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 2 - número positivo impar
    test('Debería funcionar para un número positivo impar', () => {
        const numero = 15;
        const resultadoEsperado = 'El número es impar';

        expect(esPar(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 3 - número negstivo par 
    test('Debería funcionar para un número negativo par', () => {
        const numero = -20;
        const resultadoEsperado = 'El número es par';

        expect(esPar(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 4 - número negativo impar
    test('Debería funcionar para un número negativo impar', () => {
        const numero = -7;
        const resultadoEsperado = 'El número es impar';

        expect(esPar(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 5 - 0
    test('Debería funcionar para 0', () => {
        const numero = 0;
        const resultadoEsperado = 'El número es par';

        expect(esPar(numero)).toEqual(resultadoEsperado);
    });

})