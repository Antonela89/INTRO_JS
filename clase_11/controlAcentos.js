function eliminarAcentos(cadena) {
  return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // borra también la tilde sobre la ñ...
}

// Ejemplo de uso
let cadenaConAcentos = "Hola, mundo! Ésta es una prueba.";
let cadenaSinAcentos = eliminarAcentos(cadenaConAcentos);
console.log(cadenaSinAcentos); // Output: Hola, mundo! Esta es una prueba.

cadenaConAcentos = "Hola, mundo! Ésta es una prueba. Y también pingüino y àçõñ.";
cadenaSinAcentos = eliminarAcentos(cadenaConAcentos)
console.log(cadenaSinAcentos); // Output: Hola, mundo! Esta es una prueba. Y tambien pinguino y acon.

