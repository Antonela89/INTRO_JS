# Documentación del Código: Ejercicio 4 - Calcular Descuento por Cantidad (Función Flecha)

## Descripción General

Este script de JavaScript solicita al usuario la cantidad de productos comprados y el precio unitario de dichos productos. Luego, utiliza una función flecha para calcular el precio total a pagar, aplicando un descuento progresivo basado en la cantidad de productos:
*   15% de descuento si se compran 10 o más productos.
*   10% de descuento si se compran 5 o más (pero menos de 10).
*   5% de descuento si se compran 3 o más (pero menos de 5).
*   Sin descuento si se compran menos de 3 productos.
El script incluye una validación básica de entrada y muestra el total a pagar formateado a dos decimales.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Solicitud de Entradas**

```js
const prompt = require('prompt-sync')();

let cantidadProductos = parseInt(prompt('Ingrese la cantidad de productos: '));
let precioUnitario = parseFloat(prompt('Ingrese el precio unitario: '));
```

*   **Propósito**: Importar el módulo para la entrada del usuario, y solicitar la cantidad de productos y el precio unitario.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let cantidadProductos = parseInt(...)`: Solicita la cantidad y la convierte a entero.
    *   `let precioUnitario = parseFloat(...)`: Solicita el precio unitario y lo convierte a número de punto flotante.

2️⃣ **Definición de la Función Flecha `descuentoPorCantidad`**

```js
const descuentoPorCantidad = (cantidad, precio) => {
    //validación de entrada de datos:
    if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio < 0) {
        console.error("Error: La cantidad y el precio deben ser números positivos.");
        return null; // O podría ser un valor que indique error, como -1 o undefined
    }

    let descuento = 0;

    if (cantidad >= 10) {
        descuento = 0.15; // 15% de descuento
    } else if (cantidad >= 5) {
        descuento = 0.10; // 10% de descuento
    } else if (cantidad >= 3) {
        descuento = 0.05; // 5% de descuento
    }
    // Si cantidad < 3, descuento permanece en 0

    let precioTotal = cantidad * precio;
    let precioFinal = precioTotal * (1 - descuento); // Aplica el descuento

    return precioFinal.toFixed(2); // Devuelve el precio final formateado
}
```

*   **Propósito**: Crear una función que calcule el precio final después de aplicar un descuento basado en la cantidad.
*   **Detalle**:
    *   `const descuentoPorCantidad = (cantidad, precio) => { ... }`: Define una función flecha.
    *   **Validación de Entrada**:
        *   `if (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio < 0)`: Comprueba si las entradas son números válidos y positivos.
        *   Si no son válidos, imprime un error y devuelve `null` (o se podría manejar el error de otra forma).
    *   `let descuento = 0;`: Inicializa la tasa de descuento en 0.
    *   **Lógica de Descuento**:
        *   Una serie de `if-else if` asigna el porcentaje de descuento apropiado a la variable `descuento` basado en la `cantidad`.
    *   `let precioTotal = cantidad * precio;`: Calcula el precio total sin descuento.
    *   `let precioFinal = precioTotal * (1 - descuento);`: Calcula el precio final restando el descuento. `(1 - descuento)` da el multiplicador para el precio con descuento (ej. si descuento es 0.10, `1 - 0.10 = 0.90`).
    *   `return precioFinal.toFixed(2);`: Devuelve el `precioFinal` formateado a dos decimales como una cadena de texto.

3️⃣ **Llamada a la Función**

```js
const totalAPagar = descuentoPorCantidad(cantidadProductos, precioUnitario);
```

*   **Propósito**: Ejecutar la función `descuentoPorCantidad` con las entradas del usuario y almacenar el resultado.
*   **Detalle**:
    *   Se llama a la función y el valor devuelto (el precio final formateado o `null` en caso de error) se guarda en `totalAPagar`.

4️⃣ **Visualización del Resultado (si es válido)**

```js
if (totalAPagar !== null) { // Comprobación más robusta que totalAPagar > 0
    console.log(`El total a pagar es: $${totalAPagar}`);
}
```

*   **Propósito**: Mostrar el total a pagar solo si el cálculo fue exitoso (es decir, `totalAPagar` no es `null`).
*   **Detalle**:
    *   `if (totalAPagar !== null)`: Verifica si `totalAPagar` no es `null`. Esto es importante porque la función devuelve `null` si hubo un error en la entrada.
    *   `console.log(\`El total a pagar es: $${totalAPagar}\`);`: Si el cálculo fue válido, se imprime el total a pagar.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: 12 productos a $10 cada uno (15% descuento)**
```
Ingrese la cantidad de productos: 12
Ingrese el precio unitario: 10
El total a pagar es: $102.00
```
*(Cálculo: 12 * 10 = 120. Descuento = 120 * 0.15 = 18. Final = 120 - 18 = 102)*

**Caso 2: 6 productos a $20 cada uno (10% descuento)**
```
Ingrese la cantidad de productos: 6
Ingrese el precio unitario: 20
El total a pagar es: $108.00
```
*(Cálculo: 6 * 20 = 120. Descuento = 120 * 0.10 = 12. Final = 120 - 12 = 108)*

**Caso 3: Entrada inválida**
```
Ingrese la cantidad de productos: -5
Ingrese el precio unitario: 10
Error: La cantidad y el precio deben ser números positivos.
```
*(No se imprime el total a pagar)*

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `calculoDescuentoCantidad.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto.
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node calculoDescuentoCantidad.js
    ```
7.  Sigue las instrucciones para ingresar la cantidad y el precio.
8.  Verás el total a pagar o un mensaje de error.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo implementar una lógica de precios con descuentos escalonados utilizando una función flecha. Incluye validación básica de entrada y formateo de salida, que son aspectos importantes en aplicaciones del mundo real.