# Documentación del Código: Ejercicio 9 - Calcular Área y Perímetro de un Círculo

## Descripción General

Este script de JavaScript define el valor de PI como una constante. Luego, solicita al usuario que ingrese el radio de un círculo. Utilizando este radio y el valor de PI, calcula el área y el perímetro (circunferencia) del círculo. Finalmente, muestra ambos resultados en la consola.

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

*   **Propósito**: Importa e inicializa el módulo `prompt-sync`.
*   **Detalle**: `const prompt = require('prompt-sync')();`

2️⃣ **Definición de la Constante PI**
    
    ```js
    const PI = 3.14159;
    ```

*   **Propósito**: Se establece el valor de la constante matemática PI.
*   **Detalle**:
    *   `const PI = 3.14159;`
    *   Se utiliza una aproximación común de PI.

3️⃣ **Solicitud del Radio del Círculo**

    ```js
    let radio = parseFloat(prompt("Introduce el radio del círculo: "));
    ```

*   **Propósito**: Se pide al usuario que ingrese el radio del círculo.
*   **Detalle**:
    *   `let radio = parseFloat(prompt("Introduce el radio del círculo: "));`
    *   `prompt(...)`: Muestra el mensaje y espera la entrada.
    *   `parseFloat(...)`: Convierte la entrada a un número de punto flotante.
    *   `let radio = ...`: El radio se almacena en la variable `radio`.

4️⃣ **Cálculo del Área y Perímetro**

    ```js
    let area = PI*(radio**2);
    let perimetro = 2*PI*radio;
    ```

*   **Propósito**: Se calculan el área y el perímetro del círculo utilizando las fórmulas matemáticas correspondientes.
*   **Detalle**:
    *   **Área**: `let area = PI * (radio ** 2);`
        *   Fórmula del área: A = π * r²
        *   `radio ** 2` calcula el radio elevado al cuadrado (también se podría usar `Math.pow(radio, 2)` o `radio * radio`).
    *   **Perímetro (Circunferencia)**: `let perimetro = 2 * PI * radio;`
        *   Fórmula del perímetro: P = 2 * π * r
    *   Los resultados se almacenan en las variables `area` y `perimetro`.

5️⃣ **Visualización de los Resultados**

    ```js
    console.log(`Para un círculo de radio: ${radio}:
    - El área del círculo es: ${area}
    - El perímetro del círculo es: ${perimetro}`);
    ```

*   **Propósito**: Se muestran el área y el perímetro calculados en la consola.
*   **Detalle**:
    *   `console.log(\`Para un círculo de radio: ${radio}: ...\`);`
    *   Se utiliza una plantilla de cadena multilínea para presentar los resultados de forma clara:
        *   `\n    - El área del círculo es: ${area}`
        *   `\n    - El perímetro del círculo es: ${perimetro}\`);`
    *   Los valores de `radio`, `area` y `perimetro` se insertan en el mensaje.

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `calculosCirculo.js`).
2.  Asegúrate de tener Node.js instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:

    ```bash
    node calculosCirculo.js
    ```
5.  Ingresa el radio del círculo cuando se te solicite y presiona Enter.
6.  El área y el perímetro calculados se mostrarán en la consola.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo aplicar fórmulas matemáticas en programación. Demuestra el uso de constantes, la toma de entradas numéricas, la realización de cálculos aritméticos (incluyendo exponenciación) y la presentación formateada de múltiples resultados.
