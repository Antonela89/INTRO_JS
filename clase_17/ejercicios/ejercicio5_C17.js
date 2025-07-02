// Ejercicio 5: Manipulación de Arrays y Cadenas

// A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:

// ```javascript
// let frases = [
//     "El clima es MALO hoy",
//     "Este libro es muy MALO",
//     "El servicio aquí es MALO"
// ];
// ```

// 1.  Convierta cada frase a minúsculas. Investigar el método `.toLowerCase()` para este punto.
// 2.  Divida cada frase en palabras.
// 3.  Reemplace las palabras "malo" por "bueno".
// 4.  Combine las palabras de cada frase en una nueva cadena separada por espacios.
// 5.  Devuelva un nuevo array con las frases modificadas.


let frases = [
    "El clima es MALO hoy",
    "Este libro es muy MALO",
    "El servicio aquí es MALO"
];


const procesarFrases = (array) => {
    const frasesModificadas = array.map(element => {
        const palabras = element.toLowerCase().split(' ');
        const reemplazo = palabras.map(palabra => palabra === 'malo' ? 'bueno' : palabra);
        const union = reemplazo.join(' ');

        return union;
    });

    return frasesModificadas;
}

const resultados = procesarFrases(frases);
console.log(resultados);


// versión encadenado de métodos:
const encadenado = array => {
    return array.map(frase => frase
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra === 'malo' ? 'bueno' : palabra)
        .join(' ')
    )
};

const resultados2 = encadenado(frases);
console.log(resultados2);



