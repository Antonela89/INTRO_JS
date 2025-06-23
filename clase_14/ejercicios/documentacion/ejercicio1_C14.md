# Documentación del Código: Ejercicio 1 - Calcular Precio Final con IVA (Función Flecha)

## Descripción General

Este script de JavaScript solicita al usuario el precio de un producto y el porcentaje de IVA aplicable. Luego, utiliza una función flecha para calcular el precio final del producto, incluyendo el IVA. El resultado se muestra en la consola.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync`**

```js
const prompt = require('prompt-sync')();
```

*   **Propósito**: Importar e inicializar el módulo `prompt-sync` para permitir la entrada de datos del usuario desde la consola.
*   **Detalle**:
    *   `require('prompt-sync')()`: Carga y crea una instancia del módulo.

2️⃣ **Solicitud del Precio y Porcentaje de IVA al Usuario**

```js
let precio = parseFloat(prompt('Ingrese el precio de el producto: $'));
let iva = parseFloat(prompt('Ingrese el porcentaje de IVA, solo números: %'));
```

*   **Propósito**: Pedir al usuario el precio base del producto y el porcentaje de IVA, convirtiendo ambas entradas a números de punto flotante.
*   **Detalle**:
    *   Se utiliza `prompt()` para solicitar el precio y el IVA.
    *   `parseFloat()` convierte las cadenas de texto ingresadas a números de punto flotante, permitiendo valores decimales.
    *   Los valores se almacenan en las variables `precio` e `iva`.

3️⃣ **Definición de la Función Flecha `precioFinal`**

```js
let precioFinal = (precio, iva) => {
    let porcentaje = iva / 100;
    let precioConIva = (precio * porcentaje) + precio;
    return `El precio del producto con IVA es: $${precioConIva}`;
}
```

*   **Propósito**: Crear una función que calcule el precio total de un producto después de sumarle el IVA.
*   **Detalle**:
    *   `let precioFinal = (precio, iva) => { ... }`: Define una función flecha y la asigna a la variable `precioFinal`. La función acepta dos parámetros: `precio` e `iva`.
    *   `let porcentaje = iva / 100;`: Convierte el porcentaje de IVA ingresado (ej. 21) a su forma decimal (ej. 0.21).
    *   `let precioConIva = (precio * porcentaje) + precio;`: Calcula el monto del IVA (`precio * porcentaje`) y lo suma al `precio` original.
    *   `return \`El precio del producto con IVA es: $${precioConIva}\`;`: Devuelve una cadena de texto formateada que incluye el precio final con IVA.

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(precioFinal(precio, iva));
```

*   **Propósito**: Ejecutar la función `precioFinal` con los valores ingresados por el usuario y mostrar el mensaje devuelto en la consola.
*   **Detalle**:
    *   `precioFinal(precio, iva)`: Se llama a la función `precioFinal` pasándole las variables `precio` e `iva` (que contienen las entradas del usuario) como argumentos.
    *   `console.log(...)`: Imprime el valor de retorno de la función (el mensaje con el precio final) en la consola.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa precio 100 e IVA 21:**
```
Ingrese el precio de el producto: $100
Ingrese el porcentaje de IVA, solo números: %21
El precio del producto con IVA es: $121
```

**Si el usuario ingresa precio 50.5 e IVA 10:**
```
Ingrese el precio de el producto: $50.5
Ingrese el porcentaje de IVA, solo números: %10
El precio del producto con IVA es: $55.55
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `calculoIVA.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node calculoIVA.js
    ```
7.  El programa te solicitará que ingreses el precio y el porcentaje de IVA.
8.  Verás el precio final con IVA impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo utilizar funciones flecha para realizar cálculos basados en la entrada del usuario. Demuestra la conversión de porcentajes, el cálculo de un valor incrementado y la presentación de un resultado formateado.