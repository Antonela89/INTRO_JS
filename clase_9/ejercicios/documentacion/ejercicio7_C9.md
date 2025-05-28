# Documentación del Código: Ejercicio 7 - Convertir Kilogramos a Libras

## Descripción General

Este script de JavaScript solicita al usuario que ingrese un peso en kilogramos. Luego, convierte este peso a libras utilizando un factor de conversión predefinido (1 kg = 2.20462 libras). Finalmente, muestra el peso original en kilogramos y el peso convertido en libras (formateado a dos decimales) en la consola.

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

<!-- ![Diagrama de la inicialización de prompt-sync](../imagenes/kglbs-1-prompt-sync.png) -->
*   **Propósito**: Importa e inicializa el módulo `prompt-sync`.
*   **Detalle**: `const prompt = require('prompt-sync')();`

2️⃣ **Solicitud del Peso en Kilogramos**

<!-- ![Captura de pantalla de la solicitud del peso en kg al usuario](../imagenes/kglbs-2-entrada.png) -->
*   **Propósito**: Se pide al usuario que ingrese un peso en kilogramos.
*   **Detalle**:
    *   `let pesoKg = parseFloat(prompt("Introduce el peso en kilogramos: "));`
    *   `prompt(...)`: Muestra el mensaje y espera la entrada.
    *   `parseFloat(...)`: Convierte la entrada a un número de punto flotante.
    *   `let pesoKg = ...`: El peso en kg se almacena en la variable `pesoKg`.

3️⃣ **Conversión a Libras**

<!-- ![Ilustración del cálculo de conversión de kg a libras](../imagenes/kglbs-3-calculo.png) -->
*   **Propósito**: Se calcula el peso equivalente en libras.
*   **Detalle**:
    *   `let pesoLibras = pesoKg * 2.20462;`
    *   Se multiplica el `pesoKg` por el factor de conversión `2.20462`.
    *   El resultado se almacena en la variable `pesoLibras`.

4️⃣ **Visualización del Resultado**

<!-- ![Muestra de la visualización del peso en kg y su conversión a libras en consola](../imagenes/kglbs-4-visualizacion.png) -->
*   **Propósito**: Se muestra el peso original y el convertido en la consola.
*   **Detalle**:
    *   `console.log(\`${pesoKg} kg son ${pesoLibras.toFixed(2)} libras.\`);`
    *   Se utiliza una plantilla de cadena para mostrar el mensaje.
    *   `${pesoKg}`: Muestra el peso original en kilogramos.
    *   `${pesoLibras.toFixed(2)}`: Muestra el peso convertido en libras. El método `.toFixed(2)` formatea el número `pesoLibras` para que tenga exactamente dos decimales.

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `convertirPeso.js`).
2.  Asegúrate de tener Node.js instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:

    <!-- ![Comando de ejecución del script convertirPeso.js en la terminal](../imagenes/kglbs-5-ejecucion.png) -->
    ```bash
    node convertirPeso.js
    ```
5.  Ingresa el peso en kilogramos cuando se te solicite y presiona Enter.
6.  El resultado de la conversión se mostrará en la consola.

🏁 **Resumen**

Este script demuestra cómo realizar cálculos aritméticos básicos (multiplicación) con entradas del usuario y cómo formatear la salida numérica utilizando el método `.toFixed()`. Es un ejemplo práctico de una conversión de unidades común.
