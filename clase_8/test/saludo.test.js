const {saludo} = require('./saludo.js');

describe('saludo', () => {
    //Prueba 1 - texto
    test('Debería funcionar para texto', () => {
        const nombre = 'María';
        const resultadoEsperado = 'Hola, María Bienvenido/a al programa!'

        expect(saludo(nombre)).toEqual(resultadoEsperado);
    });
})