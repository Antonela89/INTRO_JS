# Documentación del Código: Ejercicio 8 - Determinar el Tipo de Triángulo

## Descripción General

Este script de JavaScript solicita al usuario que ingrese las longitudes de los tres lados de un triángulo. Basándose en estas longitudes, determina si el triángulo es equilátero (todos los lados iguales), isósceles (dos lados iguales) o escaleno (todos los lados diferentes). El tipo de triángulo determinado se muestra en la consola.

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

    ```js
    const prompt = require('prompt-sync')();
    ```

*   **Propósito**: Importa e inicializa el módulo `prompt-sync`.
*   **Detalle**: `const prompt = require('prompt-sync')();`

2️⃣ **Solicitud de las Longitudes de los Lados**

    ```js
    let lado1 = parseFloat(prompt("Introduce la longitud del primer lado: "));
    let lado2 = parseFloat(prompt("Introduce la longitud del segundo lado: "));
    let lado3 = parseFloat(prompt("Introduce la longitud del tercer lado: "));
    ```

*   **Propósito**: Se pide al usuario que ingrese la longitud de cada uno de los tres lados del triángulo.
*   **Detalle**:
    *   `let lado1 = parseFloat(prompt("Introduce la longitud del primer lado: "));`
    *   `let lado2 = parseFloat(prompt("Introduce la longitud del segundo lado: "));`
    *   `let lado3 = parseFloat(prompt("Introduce la longitud del tercer lado: "));`
    *   Para cada lado, `prompt` muestra un mensaje y `parseFloat` convierte la entrada a un número. Las longitudes se almacenan en `lado1`, `lado2` y `lado3`.

3️⃣ **Determinación del Tipo de Triángulo**

    ```js
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es equilátero.");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log("El triángulo es isósceles.");
    } else  {
        console.log("El triángulo es escaleno.");
    }
    ```

*   **Propósito**: Se utiliza una estructura `if-else if-else` para clasificar el triángulo.
*   **Detalle**:
    *   `if (lado1 === lado2 && lado2 === lado3)`:
        *   Verifica si `lado1` es igual a `lado2` Y `lado2` es igual a `lado3`. Si todas las longitudes son iguales, el triángulo es equilátero.
    *   `else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3)`:
        *   Si no es equilátero, verifica si al menos un par de lados son iguales: `lado1` igual a `lado2` OR `lado2` igual a `lado3` OR `lado1` igual a `lado3`. Si alguna de estas condiciones es verdadera, el triángulo es isósceles.
    *   `else`:
        *   Si no es ni equilátero ni isósceles, significa que todos los lados son diferentes, por lo tanto, el triángulo es escaleno.
    *   *Nota*: Esta lógica asume que las longitudes ingresadas pueden formar un triángulo válido. No incluye la validación de la desigualdad triangular (la suma de dos lados cualesquiera debe ser mayor que el tercer lado).

4️⃣ **Visualización del Resultado**

*   **Propósito**: Se muestra el tipo de triángulo en la consola.
*   **Detalle**:
    *   Dependiendo de la condición cumplida:
        *   `console.log("El triángulo es equilátero.");`
        *   `console.log("El triángulo es isósceles.");`
        *   `console.log("El triángulo es escaleno.");`

🚀 **Ejecución del Script**

Para ejecutar este script:

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `tipoTriangulo.js`).
2.  Asegúrate de tener Node.js instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:

    ```bash
    node tipoTriangulo.js
    ```
5.  Ingresa las longitudes de los tres lados cuando se te solicite.
6.  El tipo de triángulo se mostrará en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo aplicar lógica condicional con múltiples condiciones (usando `&&` y `||`) para clasificar una entrada basada en diferentes criterios. Ilustra la resolución de un problema geométrico simple mediante programación.
