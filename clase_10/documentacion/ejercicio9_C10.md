# Documentación del Código: Ejercicio 9 - Cálculo del IMC (Índice de Masa Corporal)

## Descripción General

Este script de JavaScript calcula el Índice de Masa Corporal (IMC) de una persona. Solicita al usuario que ingrese su peso en kilogramos (kg) y su altura en metros (m). Luego, utiliza la fórmula estándar del IMC para realizar el cálculo y muestra el resultado en la consola, formateado a dos decimales. Este ejercicio es un ejemplo práctico de cómo recopilar múltiples entradas numéricas y aplicar una fórmula para obtener un indicador de salud.

---

## Requisitos Previos

Para la entrada de datos por consola en un entorno **Node.js**, este script requiere el paquete `prompt-sync`.

Si no lo tienes instalado, ejecuta:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue estos pasos lógicos:

1️⃣ **Inicialización de `prompt-sync`**

```js
const prompt = require('prompt-sync')();
```

*   **Propósito**: Permitir la solicitud de entradas al usuario a través de la consola.
*   **Detalle**: Importa e instancia el módulo `prompt-sync`.

2️⃣ **Solicitud del Peso y Conversión a Número**

```js
let peso = parseFloat(prompt("Ingrese su peso en kg: "));
```

*   **Propósito**: Obtener del usuario su peso en kilogramos.
*   **Detalle**:
    *   `prompt("Ingrese su peso en kg: ")`: Muestra el mensaje y espera la entrada del usuario.
    *   `parseFloat(...)`: Convierte la entrada (cadena) a un número de punto flotante.
    *   `let peso = ...`: Almacena el valor numérico en la variable `peso`.

3️⃣ **Solicitud de la Altura y Conversión a Número**

```js
let altura = parseFloat(prompt("Ingrese su altura en metros: "));
```

*   **Propósito**: Obtener del usuario su altura en metros.
*   **Detalle**:
    *   `prompt("Ingrese su altura en metros: ")`: Muestra el mensaje y espera la entrada.
    *   `parseFloat(...)`: Convierte la entrada a un número de punto flotante.
    *   `let altura = ...`: Almacena el valor numérico en la variable `altura`.

4️⃣ **Cálculo del IMC**

```js
let imc = peso / (altura * altura);
```

*   **Propósito**: Aplicar la fórmula del Índice de Masa Corporal.
*   **Detalle**:
    *   La fórmula del IMC es: IMC = peso(kg) / altura(m)²
    *   `altura * altura`: Calcula la altura al cuadrado.
    *   `peso / ...`: Divide el peso por la altura al cuadrado.
    *   El resultado se almacena en la variable `imc`.

5️⃣ **Visualización del Resultado del IMC**

```js
console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);
```

*   **Propósito**: Mostrar el IMC calculado al usuario.
*   **Detalle**:
    *   `console.log()`: Imprime el mensaje en la consola.
    *   `` `Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(2)}` ``: Plantilla literal.
        *   `${imc.toFixed(2)}`: Inserta el valor del IMC, formateado a dos decimales.

## Ejemplo de Interacción y Salida en Consola

```
Ingrese su peso en kg: 70
Ingrese su altura en metros: 1.75
Su Índice de Masa Corporal (IMC) es: 22.86
```

Otro ejemplo:

```
Ingrese su peso en kg: 85
Ingrese su altura en metros: 1.80
Su Índice de Masa Corporal (IMC) es: 26.23
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo `.js` (por ejemplo, `calcularIMC.js`).
2.  Asegúrate de tener Node.js y `prompt-sync` instalado.
3.  Abre una terminal, navega al directorio del archivo.
4.  Ejecuta:
    ```bash
    node calcularIMC.js
    ```
5.  Ingresa tu peso y altura cuando se te solicite, presionando Enter después de cada valor.

🏁 **Resumen**

Este script es un buen ejemplo de una aplicación de consola simple que resuelve un problema del mundo real. Combina la entrada de datos del usuario, la conversión de tipos, el cálculo matemático basado en una fórmula específica y la presentación de un resultado numérico formateado.