# Documentación del Código: Ejercicio 1 - Comparar Dos Números

## Descripción General

Este script de JavaScript solicita al usuario que ingrese dos números. Luego, compara estos números para determinar cuál es mayor o si son iguales, y muestra el resultado de la comparación en la consola. Este ejercicio es fundamental para comprender la captura de múltiples entradas, la conversión de tipos y el uso de estructuras condicionales (`if`, `else if`, `else`) para la toma de decisiones.

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
    *   La función `require('prompt-sync')` carga el módulo.
    *   El `()` al final lo instancia, permitiendo que la variable `prompt` se use como una función para capturar la entrada del usuario.

2️⃣ **Solicitud del Primer Número**

    ```js
    let numero1 = parseFloat(prompt("Ingrese el primer número:"));
    ```

*   **Propósito**: Se pide al usuario que ingrese el primer número.
*   **Detalle**:
    *   `let numero1 = parseFloat(prompt("Ingrese el primer número:"));`
    *   `prompt("Ingrese el primer número:")`: Muestra el mensaje en la consola y espera la entrada del usuario.
    *   `parseFloat(...)`: Convierte la cadena de texto ingresada a un número de punto flotante.
    *   `let numero1 = ...`: El número convertido se almacena en la variable `numero1`.

3️⃣ **Solicitud del Segundo Número**

    ```js
    let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    ```

*   **Propósito**: Se pide al usuario que ingrese el segundo número.
*   **Detalle**:
    *   `let numero2 = parseFloat(prompt("Ingrese el segundo número:"));`
    *   `prompt("Ingrese el segundo número:")`: Muestra el mensaje en la consola y espera la entrada del usuario.
    *   `parseFloat(...)`: Convierte la cadena de texto ingresada a un número de punto flotante.
    *   `let numero2 = ...`: El número convertido se almacena en la variable `numero2`.

4️⃣ **Comparación de los Números**

    ```js
    if (numero1 > numero2) {
        console.log(`El número ${numero1} es mayor que ${numero2}.`);
    } else if (numero1 < numero2) {
        console.log(`El número ${numero2} es mayor que ${numero1}.`);
    } else {
        console.log(`Los números ${numero1} y ${numero2} son iguales.`);
    }
    ```

*   **Propósito**: Se utiliza una estructura condicional para comparar `numero1` y `numero2`.
*   **Detalle**:
    *   `if (numero1 > numero2)`:
        *   Comprueba si `numero1` es estrictamente mayor que `numero2`.
        *   Si es verdadero, se prepara para mostrar que `numero1` es mayor.
    *   `else if (numero1 < numero2)`:
        *   Si la condición anterior es falsa, comprueba si `numero1` es estrictamente menor que `numero2`.
        *   Si es verdadero, se prepara para mostrar que `numero2` es mayor.
    *   `else`:
        *   Si ninguna de las condiciones anteriores es verdadera, significa que `numero1` y `numero2` son iguales.
        *   Se prepara para mostrar que los números son iguales.
    *   Este bloque también maneja implícitamente casos donde una o ambas entradas no son números válidos (resultando en `NaN`), aunque los mensajes de salida podrían no ser ideales para `NaN`.

5️⃣ **Visualización del Resultado**

   ```node
    El número 2 es mayor que 1.
   ```

*   **Propósito**: Se muestra en la consola el resultado de la comparación.
*   **Detalle**:
    *   Dependiendo de la condición que se cumpla en el paso anterior, se utiliza `console.log()` con una plantilla de cadena para imprimir el mensaje adecuado:
        *   `console.log(\`El número ${numero1} es mayor que ${numero2}.\`);`
        *   `console.log(\`El número ${numero2} es mayor que ${numero1}.\`);`
        *   `console.log(\`Los números ${numero1} y ${numero2} son iguales.\`);`

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `compararNumeros.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Abre una terminal o línea de comandos.
4.  Navega hasta el directorio donde guardaste el archivo.
5.  Ejecuta el script con el comando:

    ```bash
    node compararNumeros.js
    ```
6.  El programa te solicitará que ingreses el primer número, luego el segundo. Escríbelos y presiona Enter después de cada uno.
7.  Verás el resultado de la comparación impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo solicitar múltiples entradas numéricas al usuario, realizar comparaciones lógicas y presentar diferentes resultados basados en esas comparaciones utilizando estructuras `if-else if-else`.







