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