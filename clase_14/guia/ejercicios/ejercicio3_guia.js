// 🌟 DESAFÍO FINAL: La Máquina de Tareas

// Crea una función que reciba una tarea y diga que fue completada:

// function realizarTarea(tarea) {
//   console.log("✅ Tarea completada: " + tarea);
// }

// realizarTarea("Estudiar funciones");

// Luego convertíla en:
// - Función expresada
// - Función flecha


function realizarTarea(tarea) {
  console.log(`✅ Tarea completada: ${tarea}`);
}

realizarTarea('Estudiar funciones');

const realizarTarea1 = function(tarea) {
    console.log(`✅ Tarea completada: ${tarea}`);
}

realizarTarea1('Hacer los ejercicios');

const realizarTarea2 = tarea => console.log(`✅ Tarea completada: ${tarea}`);

realizarTarea2('Subir los cambios a GitHub')
