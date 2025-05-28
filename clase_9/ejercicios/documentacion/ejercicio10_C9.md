# Documentación del Código: Ejercicio 10 - Mostrar Día de la Semana

## Descripción General

Este script de JavaScript solicita al usuario que ingrese un número del 1 al 7. Luego, utilizando una estructura condicional `if-else if-else`, asocia ese número con el día de la semana correspondiente (1 para Lunes, 2 para Martes, etc.). Si el número ingresado está fuera del rango 1-7, muestra un mensaje de error. El día correspondiente o el mensaje de error se muestra en la consola.

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

<!-- ![Diagrama de la inicialización de prompt-sync](../imagenes/diasemana-1-prompt-sync.png) -->
*   **Propósito**: Importa e inicializa el módulo `prompt-sync`.
*   **Detalle**: `const prompt = require('prompt-sync')();`

2️⃣ **Solicitud del Número del Día**

<!-- ![Captura de pantalla de la solicitud de un número del 1 al 7 al usuario](../imagenes/diasemana-2-entrada.png) -->
*   **Propósito**: Se pide al usuario que ingrese un número que representará un día de la semana.
*   **Detalle**:
    *   `let numero = parseInt(prompt("Introduce un número del 1 al 7: "));`
    *   `prompt(...)`: Muestra el mensaje y espera la entrada.
    *   `parseInt(...)`: Convierte la entrada a un número entero.
    *   `let numero = ...`: El número ingresado se almacena en la variable `numero`.

3️⃣ **Determinación del Día de la Semana o Error**

<!-- ![Diagrama de flujo de la estructura if-else if para determinar el día de la semana](../imagenes/diasemana-3-determinacion.png) -->
*   **Propósito**: Se utiliza una cadena de `if-else if-else` para mapear el número al día de la semana o identificar una entrada inválida.
*   **Detalle**:
    *   `if (numero === 1)`: Si el número es 1, se imprime "Lunes".
    *   `else if (numero === 2)`: Si no es 1 pero es 2, se imprime "Martes".
    *   ...y así sucesivamente hasta `numero === 7` para "Domingo".
    *   `else`: Si ninguna de las condiciones anteriores es verdadera (es decir, el número no está entre 1 y 7, o es `NaN` si `parseInt` falló), se imprime un mensaje de error: `"Error: El número debe estar entre 1 y 7."`.
    *   El código también menciona `switch` como una alternativa ideal, lo cual es cierto para este tipo de mapeo de múltiples valores discretos.

4️⃣ **Visualización del Resultado**

<!-- ![Muestra de la visualización del día de la semana o mensaje de error en consola](../imagenes/diasemana-4-visualizacion.png) -->
*   **Propósito**: Se muestra el día de la semana correspondiente o un mensaje de error en la consola.
*   **Detalle**:
    *   Cada bloque `if` o `else if` que coincide ejecuta un `console.log()` con el nombre del día.
    *   El bloque `else` final ejecuta un `console.log()` con el mensaje de error.

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `diaSemana.js`).
2.  Asegúrate de tener Node.js instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:

    <!-- ![Comando de ejecución del script diaSemana.js en la terminal](../imagenes/diasemana-5-ejecucion.png) -->
    ```bash
    node diaSemana.js
    ```
5.  Ingresa un número del 1 al 7 cuando se te solicite y presiona Enter.
6.  El día de la semana o un mensaje de error se mostrará en la consola.

🏁 **Resumen**

Este script demuestra cómo utilizar una larga cadena de `if-else if-else` para manejar múltiples casos discretos basados en una entrada numérica. También introduce la idea del manejo de errores para entradas que no cumplen con los criterios esperados. Aunque funcional, este tipo de estructura puede volverse extensa, y para muchos casos similares, una sentencia `switch` podría ser más clara y eficiente.
