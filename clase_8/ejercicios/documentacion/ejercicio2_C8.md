## Documentación del Código: Ejercicio 2 - Verificar si un Número es Positivo, Negativo o Cero

# Descripción General

Este script de JavaScript solicita al usuario que ingrese un número y luego determina si dicho número es positivo, negativo o igual a cero. Utiliza estructuras condicionales (if, else if, else) para realizar la verificación y muestra un mensaje apropiado en la consola. Este ejercicio es fundamental para entender la toma de decisiones en la programación.

# Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete prompt-sync. Este módulo permite utilizar la función prompt(), similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado prompt-sync, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

    ```bash
    npm install prompt-sync
    ```

# Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de prompt-sync**

    ```js
    const prompt = require('prompt-sync')();
    ```

*   **Propósito:** Esta línea importa e inicializa el módulo prompt-sync.
*   **Detalle:**
    *   `const prompt = require('prompt-sync')();`
    *   La función `require('prompt-sync')` carga el módulo.
    *   El `()` al final lo instancia, permitiendo que la variable `prompt` se use como una función para capturar la entrada del usuario.

2️⃣ **Solicitud de Entrada del Usuario**

    ```js
   const numero = parseFloat(prompt('Ingrese un número: '));
    ```

*   **Propósito:** Se pide al usuario que ingrese un número.
*   **Detalle:**
    *   const numero = parseFloat(prompt('Ingrese un número: '));
    *   prompt('Ingrese un número: '): Muestra el mensaje "Ingrese un número: " en la consola y espera a que el usuario escriba algo y presione Enter.
    *   parseFloat(...): Convierte la cadena de texto ingresada por el usuario a un número de punto flotante. Esto es crucial para las comparaciones numéricas.
    *   Si el usuario ingresa un texto que no puede convertirse a número (ej: "hola"), parseFloat devolverá NaN (Not a Number).
    *   const numero = ...: El número convertido (o NaN) se almacena en la variable numero.

3️⃣ **Verificación del Número**

    ```js
        if (numero === 0) { 
            console.log('El número es cero.');
        } else if (numero > 0) {
            console.log('El número es positivo.');
        } else if (numero < 0) {   
            console.log('El número es negativo.');
        } else {
            console.log('Entrada no válida. Por favor, ingrese un número.');
        }
    ```

*   **Propósito:** Se utiliza una estructura condicional para determinar si el número es cero, positivo, negativo, o si la entrada no fue un número válido.
*   **Detalle:**
    *   if (numero === 0): Comprueba si el valor de numero es estrictamente igual a 0. Si es verdadero, se ejecuta console.log('El número es cero.');.
    *   else if (numero > 0): Si la condición anterior es falsa, comprueba si numero es mayor que 0. Si es verdadero, se ejecuta console.log('El número es positivo.');.
    *   else if (numero < 0): Si las condiciones anteriores son falsas, comprueba si numero es menor que 0. Si es verdadero, se ejecuta console.log('El número es negativo.');.
    *   else: Si ninguna de las condiciones anteriores es verdadera (lo que ocurre si numero es NaN porque parseFloat no pudo convertir la entrada), se ejecuta este bloque.
    *   console.log('Entrada no válida. Por favor, ingrese un número.'); informa al usuario sobre el error.

4️⃣ **Visualización del Resultado**

  ```node
    El número es positivo.
   ```

   ```node
    El número es cero.
   ```

    ```node
    El número es negativo.
   ```

   ```node
    Entrada no válida. Por favor, ingrese un número.
   ```

*   **Propósito:** Se muestra en la consola el mensaje correspondiente a la categoría del número ingresado o un mensaje de error si la entrada no fue válida.
*   **Detalle:**
    *   Dependiendo de la condición que se cumpla en el paso anterior, se utiliza console.log() para imprimir el mensaje adecuado. Por ejemplo, si el usuario ingresa 5, se mostrará "El número es positivo.". Si ingresa abc, se mostrará "Entrada no válida. Por favor, ingrese un número.".

🚀 Ejecución del Script

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión .js (por ejemplo, verificarNumero.js).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Abre una terminal o línea de comandos.
4.  Navega hasta el directorio donde guardaste el archivo.
5.  Ejecuta el script con el comando:

    ```bash
    node verificarNumero.js
    ```
6.  El programa te solicitará que ingreses un número. Escríbelo y presiona Enter.
7.  Verás el mensaje correspondiente impreso en la consola.

🏁 Resumen

Este script demuestra eficazmente el uso de estructuras condicionales (if-else if-else) para manejar diferentes escenarios basados en la entrada del usuario. También refuerza la importancia de la conversión de tipos de datos y el manejo básico de entradas no válidas.