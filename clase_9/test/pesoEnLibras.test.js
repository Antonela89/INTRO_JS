const { pesoEnLibras } = require('./pesoEnLibras.js');

describe('pesoEnLibras', () => {
    //Prueba 1 - número entero positivo
    test('debería funcionar para un número entero positivo', () => {
        const pesoKg = 60;
        const resultadoEsperado = 132.28;

        expect(pesoEnLibras(pesoKg)).toEqual(resultadoEsperado);
    });

    //Prueba 2 - número decimal positivo
    test('debería funcionar para un número entero positivo', () => {
        const pesoKg = 75.5;
        const resultadoEsperado = 166.45;

        expect(pesoEnLibras(pesoKg)).toEqual(resultadoEsperado);
    });
});