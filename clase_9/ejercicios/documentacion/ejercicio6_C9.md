# Documentación del Código: Ejercicio 6 - Verificar Mayoría de Edad

## Descripción General

Este script de JavaScript solicita al usuario que ingrese su edad como un número entero. Luego, verifica si la edad ingresada es mayor o igual a 18 años. Finalmente, muestra un mensaje en la consola indicando si la persona es mayor o menor de edad según este criterio.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync`**

<!-- ![Diagrama de la inicialización de prompt-sync](../imagenes/edad-1-prompt-sync.png) -->
*   **Propósito**: Importa e inicializa el módulo `prompt-sync`.
*   **Detalle**: `const prompt = require('prompt-sync')();`

2️⃣ **Solicitud de la Edad del Usuario**

<!-- ![Captura de pantalla de la solicitud de la edad al usuario](../imagenes/edad-2-entrada.png) -->
*   **Propósito**: Se pide al usuario que ingrese su edad.
*   **Detalle**:
    *   `let edad = parseInt(prompt("Introduce tu edad: "));`
    *   `prompt("Introduce tu edad: ")`: Muestra el mensaje y espera la entrada.
    *   `parseInt(...)`: Convierte la entrada de texto a un número entero.
    *   `let edad = ...`: La edad convertida se almacena en la variable `edad`.

3️⃣ **Verificación de la Mayoría de Edad**

<!-- ![Diagrama de flujo de la condición para verificar la mayoría de edad](../imagenes/edad-3-verificacion.png) -->
*   **Propósito**: Se comprueba si la edad ingresada es mayor o igual a 18.
*   **Detalle**:
    *   `if (edad >= 18)`:
        *   Compara el valor de `edad` con `18`. Si `edad` es mayor o igual a `18`, la condición es verdadera.
    *   Si la condición es verdadera, la persona es considerada mayor de edad.
    *   `else`: Si la condición es falsa (es decir, `edad` es menor que 18), la persona es considerada menor de edad.

4️⃣ **Visualización del Resultado**

<!-- ![Muestra de la visualización del resultado (mayor o menor de edad) en consola](../imagenes/edad-4-visualizacion.png) -->
*   **Propósito**: Se muestra un mensaje en la consola indicando si el usuario es mayor o menor de edad.
*   **Detalle**:
    *   Si es mayor de edad:
        *   `console.log("Eres mayor de edad.");`
    *   Si es menor de edad:
        *   `console.log("Eres menor de edad.");`

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `verificarEdad.js`).
2.  Asegúrate de tener Node.js instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:
<!-- 
    ![Comando de ejecución del script verificarEdad.js en la terminal](../imagenes/edad-5-ejecucion.png) -->
    ```bash
    node verificarEdad.js
    ```
5.  Ingresa tu edad cuando se te solicite y presiona Enter.
6.  El resultado se mostrará en la consola.

🏁 **Resumen**

Este script es un ejemplo simple pero efectivo del uso de condicionales `if-else` para tomar decisiones basadas en una entrada numérica. Es un caso de uso común para la validación o clasificación basada en la edad.