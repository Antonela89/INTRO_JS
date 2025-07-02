// Ejercicio 6: Autos y más autos...

// Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos:

// ```javascript
// let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
// ```
// 1.  Quite los espacios en blanco alrededor de cada marca.
// 2.  Verifique si existe la marca "Tesla".
// 3.  Reemplace todas las marcas "Ford" por "BMW".
// 4.  Encuentre el índice de la marca "Chevrolet".
// 5.  Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar `.sort()`.

let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

const gestionarAutos = string => {   
    const arrayMarcas = string.split(',');
    console.log(arrayMarcas);

    const sinEspacios = arrayMarcas.map(marca => marca.trim());
    console.log(sinEspacios);
    
    const estaTesla = sinEspacios.includes('Tesla');
    
    const modificado = sinEspacios.map(marca => marca === 'Ford' ? 'BMW' : marca);
    
    const indiceChevrolet = modificado.findIndex(marca => marca === 'Chevrolet');
    const ordenado = [...modificado].sort();

    const stringFinal = ordenado.join(' . ')

    return {
        estaTesla,
        modificado,
        indiceChevrolet,
        ordenado,
        stringFinal
    }
}

const resultado = gestionarAutos(entrada);

console.log(resultado.estaTesla);
console.log(resultado.modificado);
console.log(resultado.indiceChevrolet);
console.log(resultado.ordenado);
console.log(resultado.stringFinal);

