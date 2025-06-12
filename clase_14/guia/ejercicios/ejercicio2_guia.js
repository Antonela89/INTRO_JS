// 🧪 ACTIVIDAD 2: Transformá funciones
// Transformá esta función tradicional en flecha:

// function doble(num) {
//   return num * 2;
// }

const doble = num => num * 2;
// se asigna a una variable
// como hay un solo parametro se eliminan los parentesis
// como es código de una sola línea se eliminar las llaves y por lo tanto el return queda implicito.


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