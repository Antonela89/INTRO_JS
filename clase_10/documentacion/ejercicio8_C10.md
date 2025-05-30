# Documentación del Código: Ejercicio 8 - Conversión de Temperaturas (Celsius a Fahrenheit)

## Descripción General

Este script de JavaScript convierte una temperatura dada en grados Celsius a grados Fahrenheit. Para ello, solicita al usuario que ingrese la temperatura en Celsius, realiza el cálculo utilizando la fórmula estándar de conversión y luego muestra el resultado en grados Fahrenheit en la consola. Este ejercicio es un ejemplo práctico de entrada de usuario, manipulación de datos numéricos y aplicación de fórmulas matemáticas.

---

## Requisitos Previos

Para la entrada de datos por consola en un entorno **Node.js**, este script requiere el paquete `prompt-sync`.

Si no lo tienes instalado, ejecuta:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue estos pasos:

1️⃣ **Inicialización de `prompt-sync`**

```js
const prompt = require('prompt-sync')();
```

*   **Propósito**: Habilitar la capacidad de solicitar entradas al usuario desde la consola.
*   **Detalle**: Importa y crea una instancia del módulo `prompt-sync`.

2️⃣ **Solicitud de Temperatura en Celsius y Conversión a Número**

```js
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
```

*   **Propósito**: Obtener del usuario la temperatura en grados Celsius.
*   **Detalle**:
    *   `prompt("Ingrese la temperatura en grados Celsius: ")`: Muestra el mensaje y espera la entrada del usuario.
    *   `parseFloat(...)`: Convierte la entrada del usuario (que es una cadena) a un número de punto flotante, permitiendo valores decimales para la temperatura.
    *   `let celsius = ...`: Almacena el valor numérico en la variable `celsius`.

3️⃣ **Cálculo de la Temperatura en Fahrenheit**

```js
let fahrenheit = celsius * 9 / 5 + 32;
```

*   **Propósito**: Aplicar la fórmula de conversión de Celsius a Fahrenheit.
*   **Detalle**:
    *   La fórmula F = C × (9/5) + 32 se implementa directamente.
    *   `celsius * 9 / 5`: Multiplica la temperatura en Celsius por 9/5 (o 1.8).
    *   `... + 32`: Suma 32 al resultado anterior.
    *   El valor calculado se almacena en la variable `fahrenheit`.

4️⃣ **Visualización del Resultado**

```js
console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
```

*   **Propósito**: Mostrar la temperatura convertida al usuario.
*   **Detalle**:
    *   `console.log()`: Imprime el mensaje en la consola.
    *   `` `La temperatura en grados Fahrenheit es: ${fahrenheit.toFixed(2)}°F` ``: Plantilla literal para formatear el mensaje.
        *   `${fahrenheit.toFixed(2)}`: Inserta el valor de `fahrenheit`, formateado a dos decimales usando el método `toFixed(2)`.
        *   `°F`: Añade el símbolo de grados Fahrenheit.

## Ejemplo de Interacción y Salida en Consola

```
Ingrese la temperatura en grados Celsius: 25
La temperatura en grados Fahrenheit es: 77.00°F
```

Otro ejemplo:

```
Ingrese la temperatura en grados Celsius: 0
La temperatura en grados Fahrenheit es: 32.00°F
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo `.js` (por ejemplo, `convertirTemperatura.js`).
2.  Asegúrate de tener Node.js y `prompt-sync` instalado.
3.  Abre una terminal, navega al directorio del archivo.
4.  Ejecuta:
    ```bash
    node convertirTemperatura.js
    ```
5.  Ingresa la temperatura en Celsius cuando se te solicite y presiona Enter.

🏁 **Resumen**

Este script es un ejercicio práctico que combina la entrada de datos del usuario, la conversión de tipos, la aplicación de una fórmula matemática específica y la presentación formateada de resultados. Es un buen ejemplo de cómo se pueden resolver problemas de conversión de unidades mediante programación.