// Ejercicio 3: Gestión Compleja de Arrays

// A partir del siguiente array de productos, escriba la función 'gestionarProductos' que realice las siguientes tareas:
// 1.  Añada un nuevo producto al array.
// 2.  Elimine el último producto del array.
// 3.  Encuentre el índice de un producto específico. En este punto pueden usar `forEach` o investigar el método `findIndex()`
// 4.  Verifique si existe un producto con precio mayor a 50. Para esto investigar el método `.some()`
// 5.  Devuelva una cadena de nombres de productos separados por comas.

const prompt = require('prompt-sync')();

//array de productos
const productos = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 19.99,
        categoria: "Ropa",
        disponible: true
    },
    {
        id: 2,
        nombre: "Auriculares Bluetooth",
        precio: 55,
        categoria: "Electrónica",
        disponible: false
    },
    {
        id: 3,
        nombre: "Taza de cerámica",
        precio: 9.5,
        categoria: "Hogar",
        disponible: true
    }
];

// prompt para interactuar con usuario
const nombreProducto = prompt("Ingresar nombre del producto: ");
const precioProducto = parseFloat(prompt("Ingresar precio del producto: "))
const cateogriaProducto = prompt("Ingresar categoria del producto: ");
const disponibilidad = prompt("Ingresar disponibilidad del producto (true/false): ");
const disponibilidadProducto = disponibilidad.toLowerCase() === 'true';

const gestionarProductos = (nombre, precio, categoria, disponible) => {

    //copia array original
    const copia = [...productos]

    // id autoincremental 
    // esta opción sirve porque los id están ordenados
    //const maxId = copia[copia.length - 1].id;

    // se usa este método si los elementos estan desordenados
    // se busca el id con mayor valor
    const maxId = Math.max(...productos.map(producto => producto.id), 0);

    const nuevoProducto = {
        id: maxId + 1,
        nombre,
        precio,
        categoria,
        disponible
    }

    copia.push(nuevoProducto);

    const productosSinUltimo = [...copia];
    const productoEliminado = productosSinUltimo.pop();
    let encontrarIndice = nombre => productosSinUltimo.findIndex(producto => producto.nombre === nombre);
    let mayorA = () => productosSinUltimo.some(producto => producto.precio > 50);
    let nombres = productosSinUltimo.map(producto => producto.nombre).join(', ');

    return {
        "Paso 1: Array con nuevo producto": productoConUltimo,
        "Paso 2: Producto eliminado": productoEliminado,
        "Resultado: Array final": productosSinUltimo,
        "Paso 3: Índice de 'Taza de cerámica'": encontrarIndice("Taza de cerámica"),
        "Paso 4: ¿Hay productos con precio > 50?": mayorA(),
        "Paso 5: Nombres de los productos": nombres
    }
}


const producto = gestionarProductos(nombreProducto, precioProducto, cateogriaProducto, disponibilidadProducto)

console.log(producto);
