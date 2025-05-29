# Documentación del Código: Ejercicio 2 - Verificar si un Número está en un Rango

## Descripción General

Este script de JavaScript define un rango numérico mediante dos constantes (`RANGO_MINIMO` y `RANGO_MAXIMO`). Luego, solicita al usuario que ingrese un número entero y verifica si este número se encuentra dentro del rango definido (excluyendo los límites). Finalmente, muestra un mensaje en la consola indicando si el número está o no dentro del rango.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

    ```bash
    npm install prompt-sync
    ```

## Funcionamiento del Código

El script sigue una secuencia lógica de cinco pasos principales:

1️⃣ **Inicialización de `prompt-sync`**

    ```js
    const prompt = require('prompt-sync')();
    ```

*   **Propósito**: Esta línea importa e inicializa el módulo `prompt-sync`.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`

2️⃣ **Definición de Constantes de Rango**

    ```js
    const RANGO_MINIMO = 1;
    const RANGO_MAXIMO = 10;
    ```

*   **Propósito**: Se establecen los límites inferior y superior del rango.
*   **Detalle**:
    *   `const RANGO_MINIMO = 1;`
    *   `const RANGO_MAXIMO = 10;`
    *   Se utilizan constantes (`const`) porque estos valores no cambiarán durante la ejecución del script.

3️⃣ **Solicitud de Entrada del Usuario**

     ```js
    const numero = parseInt(prompt('Introduce un número entero: '));
    ```

*   **Propósito**: Se pide al usuario que ingrese un número entero.
*   **Detalle**:
    *   `const numero = parseInt(prompt('Introduce un número entero: '));`
    *   `prompt('Introduce un número entero: ')`: Muestra el mensaje y espera la entrada.
    *   `parseInt(...)`: Convierte la entrada a un número entero.
    *   `const numero = ...`: El número ingresado se almacena en la variable `numero`.

4️⃣ **Verificación del Rango**

    ```js
    if (numero > RANGO_MINIMO && numero < RANGO_MAXIMO) {
        console.log('El número ingresado está dentro del rango definido.');
    } else {
        console.log('El número ingresado NO ESTÁ dentro del rango definido.')
    }
    ```

*   **Propósito**: Se comprueba si el número ingresado está dentro del rango definido (mayor que `RANGO_MINIMO` y menor que `RANGO_MAXIMO`).
*   **Detalle**:
    *   `if (numero > RANGO_MINIMO && numero < RANGO_MAXIMO)`:
        *   `numero > RANGO_MINIMO`: Verifica si el número es mayor que el límite inferior.
        *   `numero < RANGO_MAXIMO`: Verifica si el número es menor que el límite superior.
        *   `&&` (AND lógico): Ambas condiciones deben ser verdaderas para que el número esté dentro del rango (excluyendo los límites).
    *   Si la condición es verdadera, el número está en el rango.
    *   `else`: Si la condición es falsa, el número no está en el rango.

5️⃣ **Visualización del Resultado**

*   **Propósito**: Se muestra un mensaje en la consola indicando si el número está o no dentro del rango.
*   **Detalle**:
    *   Si el número está en el rango:
        *   `console.log('El número ingresado está dentro del rango definido.');`
    *   Si el número no está en el rango:
        *   `console.log('El número ingresado NO ESTÁ dentro del rango definido.');`

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `verificarRango.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Abre una terminal o línea de comandos.
4.  Navega hasta el directorio donde guardaste el archivo.
5.  Ejecuta el script con el comando:

    ```bash
    node verificarRango.js
    ```
    
6.  El programa te solicitará que ingreses un número entero. Escríbelo y presiona Enter.
7.  Verás el mensaje correspondiente impreso en la consola.

🏁 **Resumen**

Este script demuestra cómo definir y utilizar constantes para establecer parámetros fijos, cómo solicitar entradas numéricas y cómo utilizar operadores lógicos (`&&`) dentro de una estructura condicional `if-else` para verificar si un valor cumple múltiples condiciones simultáneamente.