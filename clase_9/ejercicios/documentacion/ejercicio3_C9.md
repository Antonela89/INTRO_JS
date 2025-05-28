# Documentación del Código: Ejercicio 3 - Combinaciones de Valores Booleanos

## Descripción General

Este script de JavaScript solicita al usuario que ingrese dos valores booleanos (interpretados a partir de las cadenas "true" o "false"). Luego, calcula y muestra en la consola diversas combinaciones lógicas (AND, OR, NOT) de estos dos valores booleanos. Este ejercicio es útil para entender cómo se manejan las entradas de texto para representar booleanos y cómo funcionan los operadores lógicos básicos.

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

<!-- ![Diagrama de la inicialización de prompt-sync](../imagenes/bool-1-prompt-sync.png) -->
*   **Propósito**: Esta línea importa e inicializa el módulo `prompt-sync`.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`

2️⃣ **Solicitud del Primer Valor Booleano**

<!-- ![Captura de pantalla de la solicitud del primer valor booleano](../imagenes/bool-2-entrada1.png) -->
*   **Propósito**: Se pide al usuario que ingrese el primer valor booleano.
*   **Detalle**:
    *   `let condicion1 = prompt("Introduce el primer valor booleano (true/false): ").toLowerCase() === 'true';`
    *   `prompt(...)`: Muestra el mensaje y espera la entrada de texto.
    *   `.toLowerCase()`: Convierte la entrada a minúsculas para hacer la comparación insensible a mayúsculas/minúsculas (ej., "True", "TRUE" serán tratados igual que "true").
    *   `=== 'true'`: Compara la cadena en minúsculas con "true". Si son iguales, `condicion1` se establece en el valor booleano `true`; de lo contrario (si el usuario ingresa "false" o cualquier otra cosa), `condicion1` será `false`.

3️⃣ **Solicitud del Segundo Valor Booleano**

<!-- ![Captura de pantalla de la solicitud del segundo valor booleano](../imagenes/bool-3-entrada2.png) -->
*   **Propósito**: Se pide al usuario que ingrese el segundo valor booleano.
*   **Detalle**:
    *   `let condicion2 = prompt("Introduce el segundo valor booleano (true/false): ").toLowerCase() === 'true';`
    *   El proceso es idéntico al de `condicion1`, pero para la variable `condicion2`.

4️⃣ **Cálculo y Visualización de Combinaciones Lógicas**

<!-- ![Muestra de las combinaciones lógicas calculadas y mostradas en consola](../imagenes/bool-4-visualizacion.png) -->
*   **Propósito**: Se calculan y muestran varias operaciones lógicas utilizando los valores booleanos `condicion1` y `condicion2`.
*   **Detalle**:
    *   `console.log(\`Combinaciones de las condiciones ... \`);`
    *   Se utiliza una plantilla de cadena multilínea para mostrar los resultados de forma organizada.
    *   `condicion1 && condicion2`: Operador AND lógico. Verdadero solo si ambas condiciones son verdaderas.
    *   `condicion1 || condicion2`: Operador OR lógico. Verdadero si al menos una de las condiciones es verdadera. (Nota: el código original tiene un error aquí, muestra `condicion1 && condicion2` de nuevo, debería ser `condicion1 || condicion2` para el OR). *Corregiré esto en la explicación y asumiré la intención correcta.*
        *   **Corrección asumida para la documentación:** `console.log(\`... ${condicion1} || ${condicion2} = ${condicion1 || condicion2} ...\`);`
    *   `!condicion1`: Operador NOT lógico. Invierte el valor booleano de `condicion1`.
    *   `!condicion2`: Operador NOT lógico. Invierte el valor booleano de `condicion2`.
    *   `!(condicion1 && condicion2)`: Negación del resultado de AND (NAND).
    *   `!(condicion1 || condicion2)`: Negación del resultado de OR (NOR).

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `combinacionesBooleanas.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Abre una terminal o línea de comandos.
4.  Navega hasta el directorio donde guardaste el archivo.
5.  Ejecuta el script con el comando:

    <!-- ![Comando de ejecución del script combinacionesBooleanas.js en la terminal](../imagenes/bool-5-ejecucion.png) -->
    ```bash
    node combinacionesBooleanas.js
    ```
6.  El programa te solicitará que ingreses "true" o "false" para cada condición. Escríbelos y presiona Enter.
7.  Verás las diferentes combinaciones lógicas impresas en la consola.

🏁 **Resumen**

Este script es una excelente manera de practicar cómo se procesan las entradas de texto para obtener valores booleanos y cómo se aplican los operadores lógicos fundamentales (`&&`, `||`, `!`) en JavaScript. También destaca la importancia de la conversión de cadenas (ej. `.toLowerCase()`) para un manejo robusto de la entrada del usuario.