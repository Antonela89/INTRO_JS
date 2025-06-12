// 🧪 ACTIVIDAD 1: Detective del Scope
// 
// let fruta = "Manzana";

// function elegirFruta() {
//   let fruta = "Banana";
//   console.log(fruta);
// }

// elegirFruta();
// console.log(fruta);

// 👀 ¿Cuál fruta se muestra primero? ¿Y cuál después? (Pista: hay dos "frutas" distintas con el mismo nombre)

let fruta = "Manzana";

function elegirFruta() {
  let fruta = "Banana";
  console.log(fruta);
}

elegirFruta();
console.log(fruta);

//resultado esperodo: 'Banana' - 'Manzana'