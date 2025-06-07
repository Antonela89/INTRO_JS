// 1. Importamos la función que queremos probar
const { definirDesfile } = require('./desfile.js');

// 2. Usamos `describe` para agrupar pruebas relacionadas
describe('definirDesfile', () => {

    // 3. Usamos `test` (o `it`) para definir una prueba individual.
    // Le damos un nombre descriptivo.

    // Prueba 1: El "camino feliz" o caso de uso normal.
    test('debería generar correctamente el desfile para 3 personajes', () => {
        const cantidad = 3;
        const emoji = '😀';
        const resultadoEsperado = [
            '1 - 😀',
            '2 - 😀',
            '3 - 😀'
        ];

        const resultadoReal = definirDesfile(cantidad, emoji);

        // 4. Usamos `expect` para hacer la afirmación (assertion).
        // "Espero que el resultado real sea igual al resultado esperado".
        expect(resultadoReal).toEqual(resultadoEsperado);
    });

    // Prueba 2: Un "caso límite" (edge case). ¿Qué pasa si la cantidad es 1?
    test('debería funcionar para un solo personaje', () => {
        const cantidad = 1;
        const emoji = '🚀';
        const resultadoEsperado = ['1 - 🚀'];

        expect(definirDesfile(cantidad, emoji)).toEqual(resultadoEsperado);
    });

    // Prueba 3: Otro caso límite. ¿Qué pasa si la cantidad es 0?
    test('debería devolver un array vacío si la cantidad es 0', () => {
        const cantidad = 0;
        const emoji = '😂';
        const resultadoEsperado = [];

        expect(definirDesfile(cantidad, emoji)).toEqual(resultadoEsperado);
    });
    
    // Prueba 4: Un caso inválido. ¿Qué pasa si la cantidad es negativa?
    test('debería devolver un array vacío si la cantidad es negativa', () => {
        const cantidad = -5;
        const emoji = '😂';
        
        expect(definirDesfile(cantidad, emoji)).toEqual([]);
    });
});