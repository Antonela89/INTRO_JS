// Ejercicio 7: Verificar si una lista contiene un elemento
// Tienes una lista de comidas `["Pizza", "Hamburguesa", "Tacos"]`. Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.

const comidas = ['Pizza', 'Hamburguesa', 'Tacos'];

if (comidas.includes('Sushi')) {
    console.log('Sushi se encuentra en la lista de comidas');
} else {
    console.log('Sushi NO se encuentra en la lista de comidas');
}