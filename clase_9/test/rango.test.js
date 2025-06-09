const { rango } = require('./rango.js');

describe('', () => {
    //Prueba 1 - numero, minimo y maximo: números positivos / número dentro del rango
    test('deberia funcionar para números positivos, número dentro del rango ', () => {
        const numero = 10
        const minimo = 1;
        const maximo = 10;
        const resultadoEsperado = 'El número ingresado está dentro del rango definido.';

        expect(rango(numero, minimo, maximo)).toEqual(resultadoEsperado);
    });

    //Prueba 2 - numero, minimo y maximo: números positivos / número fuera del rango
    test('deberia funcionar para números positivos, número fuera del rango ', () => {
        const numero = 100;
        const minimo = 5;
        const maximo = 25;
        const resultadoEsperado = 'El número ingresado NO ESTÁ dentro del rango definido.';

        expect(rango(numero, minimo, maximo)).toEqual(resultadoEsperado);
    });

    //Prueba 3 - numero, minimo y maximo: números negativos / número dentro del rango
    test('deberia funcionar para números negativos, número dentro del rango ', () => {
        const numero = -6;
        const minimo = -6;
        const maximo = -2;
        const resultadoEsperado = 'El número ingresado está dentro del rango definido.';

        expect(rango(numero, minimo, maximo)).toEqual(resultadoEsperado);
    });

    //Prueba 4 - numero, minimo y maximo: números positivos / número fuera del rango
    test('deberia funcionar para números negativos, número fuera del rango ', () => {
        const numero = -87;
        const minimo = -75;
        const maximo = -7;
        const resultadoEsperado = 'El número ingresado NO ESTÁ dentro del rango definido.';

        expect(rango(numero, minimo, maximo)).toEqual(resultadoEsperado);
    });

    //Prueba 5 - numero, minimo y maximo: maximo y minimo invertidos
    test('deberia funcionar para maximo y minimo invertidos', () => {
        const numero = 5;
        const minimo = 8
        const maximo = 1;
        const resultadoEsperado = 'El número ingresado está dentro del rango definido.';

        expect(rango(numero, minimo, maximo)).toEqual(resultadoEsperado);
    });

    //Prueba 6 - numero, minimo y maximo: maximo y minimo iguales
    test('deberia funcionar para maximo y minimo iguales', () => {
        const numero = 5;
        const minimo = 2
        const maximo = 2;
        const resultadoEsperado = 'Máximo y mínimo son iguales, corrija máximo y mínimo';

        expect(rango(numero, minimo, maximo)).toEqual(resultadoEsperado);
    });

});