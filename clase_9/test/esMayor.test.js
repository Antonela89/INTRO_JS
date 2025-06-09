const { esMayor } = require('./esMayor.js');

describe('esMayor', () => {
    // Prueba 1 - número mayor a 18
    test('debería funcionar correctamente para un número mayor que 18', () => {
        const edad = 20;
        const resultadoEsperado = "Eres mayor de edad."

        expect(esMayor(edad)).toEqual(resultadoEsperado);
    });


    // Prueba 2 - número menor a 18
    test('debería funcionar correctamente para un número menor que 18', () => {
        const edad = 15;
        const resultadoEsperado = "Eres menor de edad."

        expect(esMayor(edad)).toEqual(resultadoEsperado);
    });

    // Prueba 3 - número 18
    test('debería funcionar correctamente para el número 18', () => {
        const edad = 18;
        const resultadoEsperado = "Eres mayor de edad."

        expect(esMayor(edad)).toEqual(resultadoEsperado);
    });

    // Prueba 4 - número NaN
    test('debería funcionar correctamente para un número NaN', () => {
        const edad = NaN;
        const resultadoEsperado = 'Ingrese un número válido.'

        expect(esMayor(edad)).toEqual(resultadoEsperado);
    });
});