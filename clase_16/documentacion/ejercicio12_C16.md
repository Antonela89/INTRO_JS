# Documentación del Código: Desafío - Calcular Total de Ventas de Productos Seleccionados

## Descripción General

Este script de JavaScript trabaja con una lista de productos, donde cada producto es un objeto con propiedades `name` y `price`. El objetivo es realizar las siguientes operaciones:
1.  Seleccionar (filtrar) los productos cuyo precio sea mayor o igual a 50.
2.  Obtener solo los nombres de estos productos seleccionados.
3.  Calcular el precio total sumando los precios de todos los productos seleccionados.
Finalmente, imprime en la consola los productos seleccionados (objetos completos), los nombres de estos productos unidos por comas, y el precio total.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, incluyendo los métodos de array `filter()`, `map()`, `reduce()` y `join()`. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de varios pasos:

1️⃣ **Definición del Array `products`**

```js
const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 25 },
    { name: 'Teclado', price: 50 },
    { name: 'Monitor', price: 200 },
    { name: 'Audífonos', price: 75 }
];
```

*   **Propósito**: Establecer la lista inicial de productos, cada uno con su nombre y precio.
*   **Detalle**: `products` es un array de objetos.

2️⃣ **Filtrar Productos con Precio >= 50 (`filter`)**

```js
let productosSeleccionados = products.filter(producto => producto.price >= 50);
console.log(productosSeleccionados);
```

*   **Propósito**: Crear un nuevo array que contenga solo los productos cuyo precio es de 50 o más.
*   **Detalle**:
    *   `products.filter(producto => producto.price >= 50)`:
        *   Se aplica `filter` al array `products`.
        *   La función de callback `producto => producto.price >= 50` se ejecuta para cada objeto `producto`.
        *   Devuelve `true` si `producto.price` es 50 o más, incluyendo ese producto en `productosSeleccionados`.
    *   `productosSeleccionados` contendrá:
        ```
        [
          { name: 'Laptop', price: 1000 },
          { name: 'Teclado', price: 50 },
          { name: 'Monitor', price: 200 },
          { name: 'Audífonos', price: 75 }
        ]
        ```
    *   Se imprime este array de objetos.

3️⃣ **Obtener Nombres de Productos Seleccionados (`map`)**

```js
let nombresProductos = productosSeleccionados.map(producto => producto.name);
console.log(nombresProductos.join(', '));
```

*   **Propósito**: Crear un nuevo array que contenga solo los nombres de los `productosSeleccionados`.
*   **Detalle**:
    *   `productosSeleccionados.map(producto => producto.name)`:
        *   Se aplica `map` al array `productosSeleccionados`.
        *   La función de callback `producto => producto.name` extrae la propiedad `name` de cada objeto `producto`.
    *   `nombresProductos` contendrá: `['Laptop', 'Teclado', 'Monitor', 'Audífonos']`.
    *   `console.log(nombresProductos.join(', '));`: Imprime los nombres unidos por ", ".

4️⃣ **Calcular el Precio Total de Productos Seleccionados (`reduce`)**

```js
let totalPrecio = productosSeleccionados.reduce((acumulador, producto) => {
    return acumulador + producto.price;
}, 0);
console.log(totalPrecio);
```

*   **Propósito**: Sumar los precios de todos los productos en el array `productosSeleccionados`.
*   **Detalle**:
    *   `productosSeleccionados.reduce((acumulador, producto) => { ... }, 0)`:
        *   Se aplica `reduce` al array `productosSeleccionados`.
        *   La función de callback `(acumulador, producto) => acumulador + producto.price` suma el `price` del `producto` actual al `acumulador`.
        *   `0` es el valor inicial para el `acumulador`.
    *   `totalPrecio` contendrá la suma: 1000 + 50 + 200 + 75 = 1325.
    *   Se imprime este total.

## Salida Esperada en Consola

```
[
  { name: 'Laptop', price: 1000 },
  { name: 'Teclado', price: 50 },
  { name: 'Monitor', price: 200 },
  { name: 'Audífonos', price: 75 }
]
Laptop, Teclado, Monitor, Audífonos
1325
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `analisisProductos.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa las diferentes salidas en la consola.

🏁 **Resumen**

Este desafío es un excelente ejemplo de cómo se pueden encadenar (o usar secuencialmente) los métodos de array `filter`, `map`, y `reduce` para realizar un análisis de datos más complejo. Se parte de una colección de datos, se filtra según un criterio, se transforman los datos filtrados para extraer información específica, y finalmente se realiza una agregación (suma) sobre los datos transformados. Esta es una pauta muy común en el procesamiento de datos.