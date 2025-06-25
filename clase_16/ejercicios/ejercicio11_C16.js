// Encuentra los nombres más cortos y transforma su formato
// Tienes una lista de nombres de personas: `['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']`. Queremos realizar varias tareas con esta lista:
// Primero, filtra los nombres que tengan menos de 5 letras.
// Luego, transforma los nombres resultantes para que estén en mayúsculas.
// Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde `[nombres]` sea la lista resultante unida por comas.
// Al final, imprime la frase en la consola.

let personas = ['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo'];

let menorQueCinco = personas.filter(persona => persona.length < 5);

console.log(menorQueCinco);

let mayusculas = menorQueCinco.map(nombre => nombre.toUpperCase());

console.log(mayusculas);

let separadosPorComa = mayusculas.reduce((acumulador, palabra) => `${acumulador}, ${palabra}`);

console.log(`Los nombres seleccionados son: ${separadosPorComa}`);

// otra alternativa más legible y concisa:

// Versión encadenada
const nombresSeleccionados = personas
  .filter(nombre => nombre.length < 5)   // Filtra ['Ana', 'Luis', 'José']
  .map(nombre => nombre.toUpperCase())   // Transforma a ['ANA', 'LUIS', 'JOSÉ']
  .join(', ');                           // Une en "ANA, LUIS, JOSÉ"

const fraseFinal = `Los nombres seleccionados son: ${nombresSeleccionados}`;

console.log(fraseFinal);

