# Documentación del Código: Ejercicio 4 - Comparar Nombre con un Valor Predefinido

## Descripción General

Este script de JavaScript define un nombre específico ("antonela") como referencia. Luego, solicita al usuario que ingrese su propio nombre. Compara el nombre ingresado (convertido a minúsculas) con el nombre de referencia y muestra un mensaje personalizado en la consola, indicando si los nombres coinciden o no.

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

<!-- ![Diagrama de la inicialización de prompt-sync](../imagenes/nombre-1-prompt-sync.png) -->
*   **Propósito**: Esta línea importa e inicializa el módulo `prompt-sync`.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`

2️⃣ **Definición del Nombre de Referencia**

<!-- ![Definición de la constante miNombre](../imagenes/nombre-2-constante.png) -->
*   **Propósito**: Se establece el nombre con el cual se comparará la entrada del usuario.
*   **Detalle**:
    *   `const miNombre = "antonela";`
    *   Se utiliza una constante (`const`) ya que este nombre de referencia no cambiará. Está en minúsculas para facilitar la comparación.

3️⃣ **Solicitud del Nombre del Usuario**

<!-- ![Captura de pantalla de la solicitud del nombre al usuario](../imagenes/nombre-3-entrada.png) -->
*   **Propósito**: Se pide al usuario que ingrese su nombre.
*   **Detalle**:
    *   `let nombre = prompt("Por favor, introduce tu nombre: ").toLowerCase();`
    *   `prompt("Por favor, introduce tu nombre: ")`: Muestra el mensaje y espera la entrada de texto.
    *   `.toLowerCase()`: Convierte el nombre ingresado por el usuario a minúsculas. Esto asegura que la comparación con `miNombre` (que también está en minúsculas) sea insensible a las mayúsculas/minúsculas (ej., "Antonela" o "ANTONELA" coincidirán con "antonela").
    *   `let nombre = ...`: El nombre convertido se almacena en la variable `nombre`.

4️⃣ **Comparación de Nombres**

<!-- ![Diagrama de flujo de la condición para comparar los nombres](../imagenes/nombre-4-comparacion.png) -->
*   **Propósito**: Se compara el nombre ingresado por el usuario con el nombre de referencia.
*   **Detalle**:
    *   `if (nombre === miNombre)`:
        *   Comprueba si el valor de la variable `nombre` (ya en minúsculas) es estrictamente igual al valor de la constante `miNombre`.
    *   Si la condición es verdadera (los nombres coinciden), se prepara un mensaje de saludo especial.
    *   `else`: Si la condición es falsa (los nombres no coinciden), se prepara un mensaje diferente.

5️⃣ **Visualización del Resultado**

<!-- ![Muestra de la visualización del mensaje personalizado en consola](../imagenes/nombre-5-visualizacion.png) -->
*   **Propósito**: Se muestra un mensaje en la consola basado en el resultado de la comparación.
*   **Detalle**:
    *   Si los nombres coinciden:
        *   `console.log("¡Hola, tocayo, tu nombre es igual al mío! ¡Qué bueno verte!");`
    *   Si los nombres no coinciden:
        *   `console.log("¡Lamentablemente, tu nombre no es igual al mío!");`

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `compararNombre.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Abre una terminal o línea de comandos.
4.  Navega hasta el directorio donde guardaste el archivo.
5.  Ejecuta el script con el comando:

    <!-- ![Comando de ejecución del script compararNombre.js en la terminal](../imagenes/nombre-6-ejecucion.png) -->
    ```bash
    node compararNombre.js
    ```
6.  El programa te solicitará que ingreses tu nombre. Escríbelo y presiona Enter.
7.  Verás el mensaje correspondiente impreso en la consola.

🏁 **Resumen**

Este script ilustra cómo comparar cadenas de texto, la importancia de normalizar las cadenas (ej., convirtiéndolas a minúsculas) para comparaciones insensibles a mayúsculas/minúsculas, y cómo usar condicionales `if-else` para proporcionar respuestas personalizadas basadas en la entrada del usuario.