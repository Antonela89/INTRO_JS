const {suma} = require('./suma.js')

describe('suma', () => {
    //Prueba 1 - Dos números enteros positivos
    test('Deberia funcionar para sumar dos números enteros positivos', () => {
        const numero1 = 3;
        const numero2 = 6;
        const resultadoEsperado = 9;

        expect(suma(numero1,numero2)).toEqual(resultadoEsperado);
    });

    //Prueba 2 - Un número entero + 0
    test('Deberia funcionar para sumar un número entero + 0', () => {
        const numero1 = 5;
        const numero2 = 0;
        const resultadoEsperado = 5;

        expect(suma(numero1,numero2)).toEqual(resultadoEsperado);       
    });

    //Prueba 3 - Suma de dos números negativos
    test('Deberia funcionar para sumar dos números negativos', () => {
        const numero1 = -7;
        const numero2 = -8;
        const resultadoEsperado = -15;

        expect(suma(numero1,numero2)).toEqual(resultadoEsperado);
    });

    //Prueba 4 - un número positivo y un número negativo
    test('deberia funcionar para sumar un número positivo y un número negativo', () => {
        const numero1 = 4;
        const numero2 = -8;
        const resultadoEsperado = -4;

        expect(suma(numero1,numero2)).toEqual(resultadoEsperado);
    });

    //Prueba 5 - un número negativo + 0
    test('debería funcionar para sumar un número negativo + 0', () => {
        const numero1 = -9;
        const numero2 = 0;
        const resultadoEsperado = -9;

        expect(suma(numero1,numero2)).toEqual(resultadoEsperado);
    })
})