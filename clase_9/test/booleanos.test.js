const { booleanos } = require('./booleanos.js');

describe('booleanos', () => {
    //Prueba 1 - true
    test('debería funcionar para dos condiciones true', () => {
        const condicion1 = true;
        const condicion2 = true;

        //ejecucipón de la función
        const resultadoReal = booleanos(condicion1,condicion2);

        //comparaciones pequeñas y específicas
        expect(resultadoReal).toContain('true && true = true');
        expect(resultadoReal).toContain('true || true = true');
        expect(resultadoReal).toContain('!true = false');
        expect(resultadoReal).toContain('!true = false');
        expect(resultadoReal).toContain('!(true && true) = false');
        expect(resultadoReal).toContain('!(true || true) = false');
    });

    // Prueba 2 - false
    test('debería funcionar para dos condiciones false', () => {
        const condicion1 = false;
        const condicion2 = false;

        const resultadoReal = booleanos(condicion1,condicion2);

        expect(resultadoReal).toContain('false && false = false');
        expect(resultadoReal).toContain('false || false = false');
        expect(resultadoReal).toContain('!false = true');
        expect(resultadoReal).toContain('!false = true');
        expect(resultadoReal).toContain('!(false && false) = true');
        expect(resultadoReal).toContain('!(false || false) = true');
    });

    // Prueba 3 - condicion1: false / condicion2: true
    test('debería funcionar para dos condiciones distintas', () => {
        const condicion1 = false;
        const condicion2 = true;

        const resultadoReal = booleanos(condicion1,condicion2);

        expect(resultadoReal).toContain('false && true = false');
        expect(resultadoReal).toContain('false || true = true');
        expect(resultadoReal).toContain('!false = true');
        expect(resultadoReal).toContain('!true = false');
        expect(resultadoReal).toContain('!(false && true) = true');
        expect(resultadoReal).toContain('!(false || true) = false');
    });

    // Prueba 4 - condicion1: true / condicion2: false
    test('debería funcionar para dos condiciones distintas', () => {
        const condicion1 = true;
        const condicion2 = false;

        const resultadoReal = booleanos(condicion1,condicion2);

        expect(resultadoReal).toContain('true && false = false');
        expect(resultadoReal).toContain('true || false = true');
        expect(resultadoReal).toContain('!true = false');
        expect(resultadoReal).toContain('!false = true');
        expect(resultadoReal).toContain('!(true && false) = true');
        expect(resultadoReal).toContain('!(true || false) = false');
    });
});
