// importar función para testear
const { calcularDoble } = require('./calcularDoble.js');

// 'describe' -> agrupación de pruebas relacionadas
describe('calcularDoble', () => {
    // ''test -> prueba individual
    // nombre descriptivo

    //Prueba 1: caso de uso normal
    test('debería devolver correctamente el doble de un número entero positivo', () => {
        const numero = 7;
        const resultadoEsperado = 'El doble de 7 es 14';

        const resultadoReal = calcularDoble(numero);

        //'expect' -> afirmación
        // espero que el resultado real sea igual al resultado esperado.
        expect(resultadoReal).toEqual(resultadoEsperado);
    });

    //Prueba 2: cero
    test('debería funcionar para la multiplicación por cero', () => {
        const numero = 0;
        const resultadoEsperado = 'El doble de 0 es 0';

        // combinación de lineas 15 y 19 del ejemplo anterior.
        expect(calcularDoble(numero)).toEqual(resultadoEsperado)
    });

    //Prueba 3: Número negativo
    test('debería funcionar para la multiplicación de un número negativo', () => {
        const numero = -2;
        const resultadoEsperado = 'El doble de -2 es -4';

        expect(calcularDoble(numero)).toEqual(resultadoEsperado);
    });

    //Prueba 4: Número decimales
    test('debería funcionar para la multiplicación de un número decimal', () => {
        const numero = 1.2;
        const resultadoEsperado = 'El doble de 1.2 es 2.4';

        expect(calcularDoble(numero)).toEqual(resultadoEsperado);
    });
});