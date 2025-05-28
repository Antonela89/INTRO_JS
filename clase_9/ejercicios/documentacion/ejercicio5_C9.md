# Documentación del Código: Ejercicio 5 - Determinar el Mayor de Tres Números

## Descripción General

Este script de JavaScript solicita al usuario que ingrese tres números. Luego, utiliza una serie de estructuras condicionales (`if`, `else if`) para determinar cuál de los tres números es el mayor, o si todos son iguales. El resultado se muestra en la consola.

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

<!-- ![Diagrama de la inicialización de prompt-sync](../imagenes/mayortres-1-prompt-sync.png) -->
*   **Propósito**: Importa e inicializa el módulo `prompt-sync`.
*   **Detalle**: `const prompt = require('prompt-sync')();`

2️⃣ **Solicitud de los Tres Números**

<!-- ![Captura de pantalla de la solicitud de los tres números al usuario](../imagenes/mayortres-2-entradas.png) -->
*   **Propósito**: Se pide al usuario que ingrese tres números.
*   **Detalle**:
    *   `let num1 = parseFloat(prompt("Introduce el primer número: "));`
    *   `let num2 = parseFloat(prompt("Introduce el segundo número: "));`
    *   `let num3 = parseFloat(prompt("Introduce el tercer número: "));`
    *   Para cada número, `prompt` muestra un mensaje y `parseFloat` convierte la entrada a un número de punto flotante. Los números se almacenan en `num1`, `num2` y `num3`.

3️⃣ **Determinación del Número Mayor (o Igualdad)**

<!-- ![Diagrama de flujo de la estructura condicional para encontrar el mayor de tres números](../imagenes/mayortres-3-comparacion.png) -->
*   **Propósito**: Se utiliza una estructura `if-else if-else` para comparar los números y encontrar el mayor, o determinar si son todos iguales.
*   **Detalle**:
    *   `if (num1 > num2 && num1 > num3)`:
        *   Verifica si `num1` es mayor que `num2` Y `num1` es mayor que `num3`. Si ambas son verdaderas, `num1` es el mayor.
    *   `else if (num2 > num1 && num2 > num3)`:
        *   Si la condición anterior es falsa, verifica si `num2` es mayor que `num1` Y `num2` es mayor que `num3`. Si ambas son verdaderas, `num2` es el mayor.
    *   `else if (num3 > num1 && num3 > num2)`:
        *   Si las condiciones anteriores son falsas, verifica si `num3` es mayor que `num1` Y `num3` es mayor que `num2`. Si ambas son verdaderas, `num3` es el mayor.
    *   `else if (num1 === num2 && num2 === num3)`:
        *   Si ninguna de las condiciones anteriores de "mayor que" es verdadera, esta condición verifica si los tres números son iguales entre sí.
    *   *Nota*: Si hay dos números mayores e iguales (ej. 5, 5, 3), esta lógica identificará uno de ellos como el mayor (el primero que cumpla la condición en el `if-else if`). Si se desea un manejo específico para "dos números son los mayores e iguales", la lógica necesitaría más ramas. El caso de "todos iguales" se maneja explícitamente. Si no se cumple ninguna de estas condiciones (por ejemplo, si hay dos números iguales y uno menor, o entradas `NaN`), ningún mensaje se imprimirá con la lógica actual, lo cual podría mejorarse con un `else` final.

4️⃣ **Visualización del Resultado**

<!-- ![Muestra de la visualización del resultado (número mayor o igualdad) en consola](../imagenes/mayortres-4-visualizacion.png) -->
*   **Propósito**: Se muestra en la consola el resultado de la determinación.
*   **Detalle**:
    *   Dependiendo de la condición que se cumpla, se utiliza `console.log()` con plantillas de cadena:
        *   `console.log(\`El primer número: ${num1} es el mayor.\`);`
        *   `console.log(\`El segundo número: ${num2} es el mayor.\`);`
        *   `console.log(\`El tercer número: ${num3} es el mayor.\`);`
        *   `console.log("Los tres números son iguales.");`

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `mayorDeTres.js`).
2.  Asegúrate de tener Node.js instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:

    <!-- ![Comando de ejecución del script mayorDeTres.js en la terminal](../imagenes/mayortres-5-ejecucion.png) -->
    ```bash
    node mayorDeTres.js
    ```
5.  Ingresa los tres números cuando se te solicite.
6.  El resultado se mostrará en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo extender la lógica condicional para manejar múltiples comparaciones y diferentes resultados posibles. Demuestra el uso de operadores lógicos (`&&`) para combinar condiciones y la estructura `if-else if` para evaluar una secuencia de escenarios mutuamente excluyentes.