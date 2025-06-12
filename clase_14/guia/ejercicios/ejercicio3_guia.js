// Desafío: convertí esta función a flecha. ¿Funciona igual?
let persona = {
  nombre: "Ana",
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

persona.saludar(); // Hola, soy Ana

let persona1 = {
    nombre: 'Ana',
    saludar: () => console.log( 'Hola, soy', persona1.nombre)
};

persona1.saludar();

//No funcionan igual. 
//https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221WUV5ZtgKgkcXaeQi25PPyIlee2AEyuGg%22%5D,%22action%22:%22open%22,%22userId%22:%22106612250880264518974%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing