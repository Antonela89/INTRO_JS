// Calcula el total de ventas de productos seleccionados
// Supón que tienes una lista de productos con sus precios en formato de objeto:
//     const products = [
//         { name: 'Laptop', price: 1000 },
//         { name: 'Mouse', price: 25 },
//         { name: 'Teclado', price: 50 },
//         { name: 'Monitor', price: 200 },
//         { name: 'Audífonos', price: 75 }
//     ];
// Queremos:
//     *   Seleccionar los productos cuyo precio sea mayor o igual a 50.
//     *   Obtener solo los nombres de esos productos.
//     *   Calcular el precio total sumando los precios de los productos seleccionados.
//     *   Imprime el total y los nombres de los productos seleccionados en la consola.


const products = [
        { name: 'Laptop', price: 1000 },
        { name: 'Mouse', price: 25 },
        { name: 'Teclado', price: 50 },
        { name: 'Monitor', price: 200 },
        { name: 'Audífonos', price: 75 }
    ];

let productosSeleccionados = products.filter(producto => producto.price >= 50)
    
let nombresProductos = productosSeleccionados.map(producto => producto.name)

let totalPrecio = productosSeleccionados.reduce((acumulador,producto) => {
        return acumulador + producto.price
    },0)

console.log(productosSeleccionados);
console.log(nombresProductos.join(', '));
console.log(totalPrecio);
