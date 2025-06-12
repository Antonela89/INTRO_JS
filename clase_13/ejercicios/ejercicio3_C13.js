// Ejercicio 3: Mensaje global y local
// Declara una variable global llamada `saludoGlobal` con el valor "Hola desde el scope global". Luego, crea una función llamada `mostrarMensaje` que declare una variable local llamada `saludoLocal` con el valor "Hola desde el scope local" y que imprima ambos mensajes.

const saludoGlobal = 'Hola desde el scope global';

function mostrarMensaje(){
    const saludoLocal = 'Hola desde el scope local';

    console.log(`saludo Global: ${saludoGlobal} y saludo local: ${saludoLocal}`);
};

mostrarMensaje();

