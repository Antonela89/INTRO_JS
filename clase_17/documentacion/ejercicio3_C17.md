# 🛒 Documentación del Código: Ejercicio 3 - Gestión Compleja de Arrays

## Descripción General

Este script simula la gestión de un inventario de productos. Comienza con un array predefinido de objetos, donde cada objeto representa un producto. Solicita al usuario los datos de un nuevo producto para agregar. Luego, una función `gestionarProductos` realiza una serie de operaciones sobre este inventario:
1.  Añade el nuevo producto con un ID autoincremental.
2.  Elimina el último producto del array resultante.
3.  Encuentra el índice de un producto específico ("Taza de cerámica").
4.  Verifica si existe algún producto con un precio mayor a 50.
5.  Genera una cadena con los nombres de todos los productos finales.
La función devuelve un objeto con los resultados de cada paso, que se imprime en la consola.

---

## Requisitos Previos

Este script requiere el paquete `prompt-sync` para solicitar la entrada del usuario en un entorno Node.js.

```bash
npm install prompt-sync
```

## Funcionamiento del Código

### 1️⃣ Inicialización y Entrada de Datos
```js
const prompt = require('prompt-sync')();

const productos = [ /* ... array de productos inicial ... */ ];

const nombreProducto = prompt("Ingresar nombre del producto: ");
const precioProducto = parseFloat(prompt("Ingresar precio del producto: "));
const cateogriaProducto = prompt("Ingresar categoria del producto: ");
const disponibilidad = prompt("Ingresar disponibilidad del producto (true/false): ");
const disponibilidadProducto = disponibilidad.toLowerCase() === 'true';
```
*   **Propósito**: Definir el inventario inicial y recopilar los datos de un nuevo producto del usuario.
*   **Lógica**: Se define el array `productos`. Se utiliza `prompt` para obtener los datos del nuevo producto, convirtiendo el precio a un número y la disponibilidad a un booleano.

### 2️⃣ Función de Gestión `gestionarProductos`
```js
const gestionarProductos = (nombre, precio, categoria, disponible) => {
    const copia = [...productos];
    const maxId = Math.max(...productos.map(producto => producto.id), 0);
    const nuevoProducto = {
        id: maxId + 1,
        nombre,
        precio,
        categoria,
        disponible
    };
    copia.push(nuevoProducto);

    const productosSinUltimo = [...copia];
    const productoEliminado = productosSinUltimo.pop();
    let encontrarIndice = nombre => productosSinUltimo.findIndex(producto => producto.nombre === nombre);
    let mayorA = () => productosSinUltimo.some(producto => producto.precio > 50);
    let nombres = productosSinUltimo.map(producto => producto.nombre).join(', ');

    return {
        "Paso 1: Array con nuevo producto": copia,
        "Paso 2: Producto eliminado": productoEliminado,
        "Resultado: Array final": productosSinUltimo,
        "Paso 3: Índice de 'Taza de cerámica'": encontrarIndice("Taza de cerámica"),
        "Paso 4: ¿Hay productos con precio > 50?": mayorA(),
        "Paso 5: Nombres de los productos": nombres
    };
};
```
*   **Propósito**: Encapsular todas las operaciones de gestión del inventario.
*   **Lógica**:
    1.  **Copia y Adición**: Se crea una copia del array `productos` para no modificar el original. Se calcula un nuevo ID y se agrega el `nuevoProducto`.
    2.  **Eliminación**: Se crea otra copia del array aumentado y se usa `pop()` para eliminar y capturar el último producto.
    3.  **Búsqueda de Índice**: Se define una función interna `encontrarIndice` que usa `findIndex()` para buscar "Taza de cerámica".
    4.  **Verificación de Precio**: Se define `mayorA` que usa `some()` para comprobar si algún producto cuesta más de 50.
    5.  **Lista de Nombres**: Se usa `map()` y `join()` para crear la cadena de nombres.
    6.  **Retorno**: Devuelve un objeto que contiene los resultados intermedios y finales de cada paso.

### 3️⃣ Ejecución y Visualización
```js
const producto = gestionarProductos(nombreProducto, precioProducto, cateogriaProducto, disponibilidadProducto);
console.log(producto);
```
*   **Propósito**: Llamar a la función de gestión y mostrar el objeto de resultados.
*   **Lógica**: Se invoca a `gestionarProductos` y el objeto devuelto se imprime en la consola.

---

## Salida Esperada por Consola

A continuación se muestra una interacción donde el usuario agrega "Libro" con precio 15.

**Interacción en consola:**
```
Ingresar nombre del producto: Libro
Ingresar precio del producto: 15
Ingresar categoria del producto: Papelería
Ingresar disponibilidad del producto (true/false): true
```

**Resultado en consola:**
```
{
  'Paso 1: Array con nuevo producto': [
    { id: 1, nombre: 'Camiseta', ... },
    { id: 2, nombre: 'Auriculares Bluetooth', ... },
    { id: 3, nombre: 'Taza de cerámica', ... },
    { id: 4, nombre: 'Libro', precio: 15, categoria: 'Papelería', disponible: true }
  ],
  'Paso 2: Producto eliminado': {
    id: 4, nombre: 'Libro', precio: 15, categoria: 'Papelería', disponible: true
  },
  'Resultado: Array final': [
    { id: 1, nombre: 'Camiseta', ... },
    { id: 2, nombre: 'Auriculares Bluetooth', ... },
    { id: 3, nombre: 'Taza de cerámica', ... }
  ],
  "Paso 3: Índice de 'Taza de cerámica'": 2,
  'Paso 4: ¿Hay productos con precio > 50?': true,
  'Paso 5: Nombres de los productos': 'Camiseta, Auriculares Bluetooth, Taza de cerámica'
}
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `gestionarInventario.js`).
2.  Asegúrate de tener Node.js y `prompt-sync` instalado.
3.  Abre una terminal y ejecuta:
    ```bash
    node gestionarInventario.js
    ```

---

## 🏁 Resumen

Este script es un ejercicio robusto que demuestra el manejo de una colección de objetos. Combina la creación de copias de arrays para evitar mutaciones no deseadas, la generación de IDs, y el uso de métodos de array de alto orden como `findIndex`, `some`, y `map` para realizar tareas complejas de análisis y transformación de datos.