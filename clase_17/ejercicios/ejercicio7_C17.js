// Ejercicio 7: “La Floreria”

// Escribe una función "gestionarFloreria" que realice las siguientes tareas con una lista predefinida de nombres de flores:

// ```javascript
// let entrada = "Rosa, Tulipán, Orquídea, Lirio";
// ```

// 1.  Quite los espacios en blanco alrededor de cada flor.
// 2.  Verifique si existe la flor "Margarita" y, si está presente, agregue "Azucena" al final de la lista.
// 3.  Reemplace todas las flores "Orquídea" por "Clavel".
// 4.  Encuentre el índice de la flor "Girasol" y, si no está presente, agregue "Girasol" al inicio de la lista.
// 5.  Devuelva una cadena de flores en orden alfabético separadas por puntos.


let entrada = "Rosa, Tulipán, Orquídea, Lirio"; // es un string

const gestionarFloreria = string => {
    // de string a array
    const arrayFlores = string.split(',').map(flor => flor.trim());
    
    if (arrayFlores.includes('Margarita')) {
        flores.push('Azucena');
    }

    const reemplazo = arrayFlores.map(flor => flor === 'Orquídea' ? 'Clavel' : flor);
    
    const estaGirasol = reemplazo.findIndex(flor => flor === 'Girasol');

    if (estaGirasol === -1) {
        reemplazo.unshift('Girasol');
    }
    
    const ordenadas = reemplazo.sort().join(' . ');

    return ordenadas
}

const resultado = gestionarFloreria(entrada);
console.log(resultado);
