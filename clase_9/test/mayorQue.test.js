const { mayorQue } = require('./mayorQue.js')

describe('mayorQue', () => {
    // Prueba 1
    test('debería funcionar para dos números positivos, donde numero2 es mayor ', () => {
        const numero1 = 1;
        const numero2 = 2;
        const resultadoEsperado = 'El número 2 es mayor que 1.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 2 
    test('debería funcionar para dos números positivos, donde numero1 es mayor ', () => {
        const numero1 = 9;
        const numero2 = 3;
        const resultadoEsperado = 'El número 9 es mayor que 3.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 3 
    test('debería funcionar para dos números negativos, donde numero2 es mayor ', () => {
        const numero1 = -9;
        const numero2 = -3;
        const resultadoEsperado = 'El número -3 es mayor que -9.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 4 
    test('debería funcionar para dos números negativos, donde numero1 es mayor ', () => {
        const numero1 = -15;
        const numero2 = -46;
        const resultadoEsperado = 'El número -15 es mayor que -46.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 5 
    test('debería funcionar para un numero negativo y otro positivo, el numero2 es mayor', () => {
        const numero1 = -15;
        const numero2 = 1;
        const resultadoEsperado = 'El número 1 es mayor que -15.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 6 
    test('debería funcionar para un numero negativo y otro positivo, el numero1 es mayor', () => {
        const numero1 = 5;
        const numero2 = -2;
        const resultadoEsperado = 'El número 5 es mayor que -2.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 6 
    test('debería funcionar para un numero negativo y el 0, numero2 es mayor', () => {
        const numero1 = -1;
        const numero2 = 0;
        const resultadoEsperado = 'El número 0 es mayor que -1.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 67
    test('debería funcionar para un numero negativo y el 0, numero1 es mayor', () => {
        const numero1 = 0;
        const numero2 = -7;
        const resultadoEsperado = 'El número 0 es mayor que -7.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 8 
    test('debería funcionar para un numero negativo y el 0, numero2 es mayor', () => {
        const numero1 = 0;
        const numero2 = 10;
        const resultadoEsperado = 'El número 10 es mayor que 0.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 9 
    test('debería funcionar para un numero negativo y el 0, numero1 es mayor', () => {
        const numero1 = 45;
        const numero2 = 0;
        const resultadoEsperado = 'El número 45 es mayor que 0.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });

    // Prueba 10
    test('debería funcionar para dos numeros iguales', () => {
        const numero1 = 67;
        const numero2 = 67;
        const resultadoEsperado = 'Los números son iguales.';

        expect(mayorQue(numero1,numero2)).toEqual(resultadoEsperado);
    });
});