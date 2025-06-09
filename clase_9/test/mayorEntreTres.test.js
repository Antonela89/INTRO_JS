const  { mayorEntreTres } = require('./mayorEntreTres.js');

describe('mayorEntreTres', () => {
    // Prueba 1 - 3 números positivos - todos iguales
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = 10;
        const num2 = 10;
        const num3 = 10;
        const resultadoEsperado = 'Los tres números son iguales.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 2 - 3 números positivos - num1 es mayor
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = 10;
        const num2 = 5;
        const num3 = 6;
        const resultadoEsperado = 'El primer número: 10 es el mayor.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 3 - 3 números positivos - num2 es mayor
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = 8;
        const num2 = 50;
        const num3 = 9;
        const resultadoEsperado = 'El segundo número: 50 es el mayor.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 4 - 3 números positivos - num3 es mayor
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = 7;
        const num2 = 8;
        const num3 = 20;
        const resultadoEsperado = 'El tercer número: 20 es el mayor.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 5 - 3 números negativos - los tres iguales
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = -4;
        const num2 = -4;
        const num3 = -4;
        const resultadoEsperado = 'Los tres números son iguales.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 6 - 3 números negativos - num1 es mayor
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = -4;
        const num2 = -8;
        const num3 = -9;
        const resultadoEsperado = 'El primer número: -4 es el mayor.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 7 - 3 números negativos - num2 es mayor
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = -3;
        const num2 = -1;
        const num3 = -9;
        const resultadoEsperado = 'El segundo número: -1 es el mayor.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 8 - 3 números negativos - num3 es mayor
    test('debería funcionar correctamente para 3 números positivos', () => {
        const num1 = -3;
        const num2 = -4;
        const num3 = -2;
        const resultadoEsperado = 'El tercer número: -2 es el mayor.';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 9 - num1 es NaN
    test('debería funcionar correctamente para un número NaN', () => {
        const num1 = NaN;
        const num2 = 0;
        const num3 = 3;
        const resultadoEsperado = 'El primer número no es válido, corrígelo';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 10 - num2 es NaN
    test('debería funcionar correctamente para un número NaN', () => {
        const num1 = -9;
        const num2 = NaN;
        const num3 = 3;
        const resultadoEsperado = 'El segundo número no es válido, corrígelo';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });

    // Prueba 11 - num3 es NaN
    test('debería funcionar correctamente para un número NaN', () => {
        const num1 = -9;
        const num2 = 2;
        const num3 = NaN;
        const resultadoEsperado = 'El tercer número no es válido, corrígelo';

        expect(mayorEntreTres(num1,num2,num3)).toEqual(resultadoEsperado);
    });
});