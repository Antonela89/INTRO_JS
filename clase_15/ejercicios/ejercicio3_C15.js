// Ejercicio 3: Agregar y eliminar a la fila de mascotas
// Tienes una fila de mascotas en una clínica veterinaria `["Perro", "Gato", "Conejo"]`. Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.

let fila = ['Perro', 'Gato', 'Conejo']

fila.unshift('Hamster');

console.log(`El primer paciente de la fila es: ${fila[0]}`);
console.log(`Los pacientes de la fila son: ${fila}`);