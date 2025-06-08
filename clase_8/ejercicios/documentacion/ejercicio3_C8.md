
## Documentación del Código: Ejercicio 3 - Suma de Dos Números

# Descripción General

Este script de JavaScript está diseñado para solicitar al usuario dos números, calcular su suma y luego mostrar el resultado en la consola. Este ejercicio se enfoca en la captura de múltiples entradas del usuario, la conversión de tipos de datos y la realización de operaciones aritméticas básicas.

# Requisitos Previos

Para ejecutar este código en un entorno Node.js, es necesario contar con el paquete prompt-sync. Este módulo permite utilizar la función prompt(), similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado prompt-sync, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

    ```bash
    npm install prompt-sync
    ```

# Funcionamiento del Código

El script sigue una secuencia lógica de cinco pasos principales:

1️⃣ **Inicialización de prompt-sync**

    ```js
    const prompt = require('prompt-sync')();
    ```

*   **Propósito:** Esta línea importa e inicializa el módulo prompt-sync.
*   **Detalle:**
    *   `const prompt = require('prompt-sync')();`
    *   La función `require('prompt-sync')` carga el módulo.
    *   El `()` al final lo instancia, permitiendo que la variable `prompt` se use como una función para capturar la entrada del usuario.

2️⃣ **Solicitud del Primer Número**

    ```js
    const numero1 = parseFloat(prompt('Ingrese el primer número: '));
    ```

*   **Propósito:** Se pide al usuario que ingrese el primer número.
*   **Detalle:**
    *   const numero1 = parseFloat(prompt('Ingrese el primer número: '));
    *   prompt('Ingrese el primer número: '): Muestra el mensaje en la consola y espera la entrada del usuario.
    *   parseFloat(...): Convierte la cadena de texto ingresada a un número de punto flotante.
    *   const numero1 = ...: El número convertido se almacena en la variable numero1.

3️⃣ **Solicitud del Segundo Número**

    ```js
    const numero2 = parseFloat(prompt('Ingrese el primer número: '));
    ```

*   **Propósito:** Se pide al usuario que ingrese el segundo número.
*   **Detalle:**
    *   const numero2 = parseFloat(prompt('Ingrese el segundo número: '));
    *   prompt('Ingrese el segundo número: '): Muestra el mensaje en la consola y espera la entrada del usuario.
    *   parseFloat(...): Convierte la cadena de texto ingresada a un número de punto flotante.
    *   const numero2 = ...: El número convertido se almacena en la variable numero2.

4️⃣ **Cálculo de la Suma**
    
    ```js
    const suma = numero1 + numero2;
    ```

*   **Propósito:** Se suman los dos números ingresados por el usuario.
*   **Detalle:**
    *   const suma = numero1 + numero2;
    *   Se utiliza el operador aritmético de adición (+) para sumar los valores almacenados en numero1 y numero2.
    *   const suma = ...: El resultado de la suma se almacena en la variable suma.

5️⃣ **Visualización del Resultado**

    ```js
    console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
    ```

*   **Propósito:** Se muestra el resultado de la suma en la consola.
*   **Detalle:**
    *   console.log(\La suma de ${numero1} y ${numero2} es: ${suma}`);`
    *   console.log(): Imprime el mensaje en la consola.
    *   Se utiliza una plantilla de cadena (template literal) para construir un mensaje formateado, insertando los valores de numero1, numero2 y suma.

🚀 Ejecución del Script

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión .js (por ejemplo, sumarNumeros.js).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Abre una terminal o línea de comandos.
4.  Navega hasta el directorio donde guardaste el archivo.
5.  Ejeuta el script con el comando:

    ```bash
    node sumarNumeros.js
    ```

6.  El programa te solicitará que ingreses el primer número, luego el segundo. Escríbelos y presiona Enter después de cada uno.
7.  Verás el resultado de la suma impreso en la consola.

🏁 Resumen

Este script es un ejemplo claro de cómo capturar múltiples entradas del usuario, realizar conversiones de tipo de dato necesarias para operaciones numéricas y presentar un resultado calculado. Es fundamental para comprender el flujo básico de entrada, procesamiento y salida de datos.