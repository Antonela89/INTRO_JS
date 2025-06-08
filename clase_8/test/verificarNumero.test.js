const {verificarNumero} = require('./verificarNumero.js');

describe('verificarNumero', () => {
    // Prueba 1 - número positivo
    test('debería funcionar para verificar si un número es positivo', () => {
        const numero = 2;
        const resultadoEsperado = 'El número es positivo.'
        
        expect(verificarNumero(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 2 - número negativo 
    test('debería funcionar para verificar si un número es negativo', () => {
        const numero = -5;
        const resultadoEsperado = 'El número es negativo.'
        
        expect(verificarNumero(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 3 - cero
    test('debería funcionar para verificar si un número es cero', () => {
        const numero = 0;
        const resultadoEsperado = 'El número es cero.';

        expect(verificarNumero(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 4 - dato inválido
    test('debería funcionar para verificar el ingreso de un número', () => {
        const numero = 'cero';
        const resultadoEsperado = 'Entrada no válida. Por favor, ingrese un número.'

        expect(verificarNumero(numero)).toEqual(resultadoEsperado);
    })

})
