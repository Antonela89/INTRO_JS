# Documentación del Código: Ejercicio 10 - Cálculo de Descuento

## Descripción General

Este script de JavaScript calcula el precio final de un producto después de aplicar un porcentaje de descuento. Solicita al usuario que ingrese el precio original del producto y el porcentaje de descuento. Luego, calcula el monto del descuento, lo resta del precio original y muestra el precio final en la consola. Este ejercicio ilustra cómo manejar cálculos financieros básicos y la interacción con el usuario para obtener datos relevantes.

---

## Requisitos Previos

Para la entrada de datos por consola en un entorno **Node.js**, este script requiere el paquete `prompt-sync`.

Si no lo tienes instalado, ejecuta:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue estos pasos:

1️⃣ **Inicialización de `prompt-sync`**

```js
const prompt = require('prompt-sync')();
```

*   **Propósito**: Habilitar la solicitud de entradas al usuario desde la consola.
*   **Detalle**: Importa e instancia el módulo `prompt-sync`.

2️⃣ **Solicitud del Precio Original y Conversión a Número**

```js
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
```

*   **Propósito**: Obtener del usuario el precio base del producto.
*   **Detalle**:
    *   `prompt(...)`: Muestra el mensaje y espera la entrada.
    *   `parseFloat(...)`: Convierte la entrada a un número de punto flotante.
    *   `let precioOriginal = ...`: Almacena el valor en la variable `precioOriginal`.

3️⃣ **Solicitud del Porcentaje de Descuento y Conversión a Número**

```js
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));
```

*   **Propósito**: Obtener del usuario el porcentaje de descuento a aplicar.
*   **Detalle**:
    *   `prompt(...)`: Muestra el mensaje y espera la entrada.
    *   `parseFloat(...)`: Convierte la entrada a un número de punto flotante.
    *   `let porcentajeDescuento = ...`: Almacena el valor en la variable `porcentajeDescuento`.

4️⃣ **Cálculo del Monto del Descuento**

```js
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
```

*   **Propósito**: Calcular la cantidad exacta que se descontará del precio original.
*   **Detalle**:
    *   `porcentajeDescuento / 100`: Convierte el porcentaje a su forma decimal (e.g., 15% se convierte en 0.15).
    *   `precioOriginal * ...`: Multiplica el precio original por el porcentaje decimal para obtener el valor del descuento.
    *   El resultado se almacena en `montoDescuento`.

5️⃣ **Cálculo del Precio Final**

```js
let precioFinal = precioOriginal - montoDescuento;
```

*   **Propósito**: Determinar el costo del producto después de aplicar el descuento.
*   **Detalle**:
    *   Resta el `montoDescuento` del `precioOriginal`.
    *   El resultado se almacena en `precioFinal`.

6️⃣ **Visualización del Precio Final**

```js
console.log(`El precio final del producto después de aplicar el descuento es: $${precioFinal.toFixed(2)}`);
```

*   **Propósito**: Mostrar al usuario el precio final con el descuento aplicado.
*   **Detalle**:
    *   `console.log()`: Imprime el mensaje.
    *   `` `... $${precioFinal.toFixed(2)}` ``: Plantilla literal.
        *   `$`: Símbolo de moneda (puede variar según la región, aquí se usa como ejemplo).
        *   `${precioFinal.toFixed(2)}`: Inserta el precio final, formateado a dos decimales.

## Ejemplo de Interacción y Salida en Consola

```
Ingrese el precio original del producto: 200
Ingrese el porcentaje de descuento: 10
El precio final del producto después de aplicar el descuento es: $180.00
```

Otro ejemplo:

```
Ingrese el precio original del producto: 99.99
Ingrese el porcentaje de descuento: 25
El precio final del producto después de aplicar el descuento es: $74.99
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo `.js` (por ejemplo, `calcularDescuento.js`).
2.  Asegúrate de tener Node.js y `prompt-sync` instalado.
3.  Abre una terminal, navega al directorio del archivo.
4.  Ejecuta:
    ```bash
    node calcularDescuento.js
    ```
5.  Ingresa el precio original y el porcentaje de descuento cuando se te solicite.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo realizar cálculos porcentuales y aplicarlos a un valor base para determinar un resultado final. Refuerza los conceptos de entrada de usuario, conversión de tipos, operaciones aritméticas y formateo de salida, habilidades esenciales en muchos tipos de aplicaciones, especialmente aquellas relacionadas con finanzas o comercio.