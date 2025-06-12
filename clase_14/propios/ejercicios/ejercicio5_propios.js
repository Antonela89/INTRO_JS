// Ejercicio 5: Objeto Producto (Ejercicio entrevista)
// Crea un objeto literal llamado `producto` con las siguientes propiedades:
// `nombre` (string)
// `precio` (número)
// `stock` (número)
// Y los siguientes métodos:
// `calcularIva()`: Devuelve el 21% del precio del producto.
// `vender(cantidad)`: Resta la `cantidad` indicada del `stock`. Debe verificar si hay stock suficiente antes de realizar la venta. Si no hay stock, puede devolver un mensaje como "Stock insuficiente".

let producto = {
    nombre: 'lámpara',
    precio: 1500,
    stock: 6,
    calcularIva: function () {
        let iva =  this.precio * 0.21;
        return iva;
    },
    vender: function (cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            return 'venta realizada con éxito';
        } else {
            return 'Stock insuficiente';
        }
    }
};

console.log(producto.calcularIva());
console.log(producto.vender(7));
console.log(producto.stock);


