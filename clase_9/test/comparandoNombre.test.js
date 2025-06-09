const { comparandoNombre } = require('./comparandoNombre.js');

describe('compararNombre', () => {
    // Prueba 1
    test('debería funcionar para nombres iguales', () => {
        const miNombre = 'antonela';
        const nombre = 'antonela';
        const resultadoEsperado = '¡Hola, tocayo, tu nombre es igual al mío! ¡Qué bueno verte!'

        expect(comparandoNombre(miNombre, nombre)).toEqual(resultadoEsperado);
    });

    // Prueba 2
    test('debería funcionar para nombres distintos', () => {
        const miNombre = 'antonela';
        const nombre = 'daniel'; 
        const resultadoEsperado = '¡Lamentablemente, tu nombre no es igual al mío!'

        expect(comparandoNombre(miNombre, nombre)).toEqual(resultadoEsperado);
    });

    // Prueba 3
    test('debería funcionar para nombres distintos, Minombre con letra capital', () => {
        const miNombre = 'Antonela';
        const nombre =  'daniel'; 
        const resultadoEsperado = '¡Lamentablemente, tu nombre no es igual al mío!'

        expect(comparandoNombre(miNombre, nombre)).toEqual(resultadoEsperado);
    });

    // Prueba 4
    test('debería funcionar para nombres distintos, Minombre con mayúscula', () => {
        const miNombre = 'ESTEBAN';
        const nombre = 'daniel'; 
        const resultadoEsperado = '¡Lamentablemente, tu nombre no es igual al mío!'

        expect(comparandoNombre(miNombre, nombre)).toEqual(resultadoEsperado);
    });

    // Prueba 5
    test('debería funcionar para nombres distintos, nombre con letra capital', () => {
        const miNombre = 'jimena';
        const nombre = 'Martina'; 
        const resultadoEsperado = '¡Lamentablemente, tu nombre no es igual al mío!'

        expect(comparandoNombre(miNombre, nombre)).toEqual(resultadoEsperado);
    });

    // Prueba 6
    test('debería funcionar para nombres distintos, nombre con mayúscula', () => {
        const miNombre = 'diana';
        const nombre = 'ARYA'; 
        const resultadoEsperado = '¡Lamentablemente, tu nombre no es igual al mío!'

        expect(comparandoNombre(miNombre, nombre)).toEqual(resultadoEsperado);
    });

    // Prueba 7
    test('debería funcionar para un nombre y un string vacio', () => {
        const miNombre = '';
        const nombre = 'CARLOS'; 
        const resultadoEsperado = '¡Lamentablemente, tu nombre no es igual al mío!'

        expect(comparandoNombre(miNombre, nombre)).toEqual(resultadoEsperado);
    });
});