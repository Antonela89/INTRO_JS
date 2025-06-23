// 🎯 DESAFÍO FINAL (¡Nivel Pro!)
// 🧠 Creamos una función que limpie espacios ¡y separe por palabras!

function limpiarTexto(texto) {
  return texto.trim().split(" ");
}

console.log(limpiarTexto("  Bienvenidas al curso de JS  "));

let lista = ["a", "b", "c"];
//let resultado = lista.removerUltimo(); tendria que ser .pop()

let resultado = lista.pop()
console.log(resultado);
