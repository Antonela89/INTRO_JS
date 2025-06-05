# Documentación del Código: Ejercicio 7 - Calculadora simple

## Descripción General

Este script de JavaScript simula una calculadora simple. Solicita al usuario que ingrese dos números y luego una operación matemática a realizar (suma, resta, multiplicación o división). Utiliza una estructura `switch` para determinar qué operación ejecutar, realiza el cálculo y muestra el resultado en la consola. Si el usuario ingresa una operación no válida, se muestra un mensaje de error.

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

*   **Propósito**: Esta línea importa e inicializa el módulo `prompt-sync`.
*   **Detalle**:
    *   `require('prompt-sync')`: Carga el módulo `prompt-sync`.
    *   `()`: Al final, instancia el módulo, permitiendo que la variable `prompt` se use como una función para capturar la entrada del usuario.

2️⃣ **Solicitud de Números y Operación al Usuario**

```js
let numero1 = parseInt(prompt('Ingresa el primer número: '));
let numero2 = parseInt(prompt('Ingresa el segundo número: ')); // Corregido el mensaje del prompt
let operacion = prompt('Ingresa la operación matemática a realizar (suma/resta/multiplicacion/division): ').toLowerCase();
```

*   **Propósito**: Obtener los dos operandos numéricos y la operación deseada del usuario.
*   **Detalle**:
    *   Se utiliza `prompt()` para solicitar el primer número, el segundo número y la operación.
    *   `parseInt(...)` convierte las entradas numéricas a enteros.
    *   `.toLowerCase()` se aplica a la cadena de la operación para hacer la comparación en el `switch` insensible a mayúsculas/minúsculas.
    *   Los valores se almacenan en `numero1`, `numero2` y `operacion`.

3️⃣ **Realización del Cálculo y Visualización usando `switch`**

```js
switch (operacion) {
    case 'suma':
        let calculoSuma = numero1 + numero2;
        console.log(`La suma de los números ingresados es: \n            ${numero1} + ${numero2} = ${calculoSuma} `);
        break;
    case 'resta':
        let calculoResta = numero1 - numero2;
        console.log(`La resta de los números ingresados es: \n            ${numero1} - ${numero2} = ${calculoResta} `);
        break;
    case 'multiplicacion':
        let calculoMultiplicacion = numero1 * numero2;
        console.log(`La multiplicación de los números ingresados es: \n            ${numero1} * ${numero2} = ${calculoMultiplicacion} `); // Corregido "La suma" por "La multiplicación"
        break;
    case 'division':
        if (numero2 === 0) {
            console.log("Error: No se puede dividir por cero.");
        } else {
            let calculoDivision = numero1 / numero2;
            console.log(`La división de los números ingresados es: \n            ${numero1} / ${numero2} = ${calculoDivision} `); // Corregido "La suma" por "La división"
        }
        break;
    default:
        console.log('La operación ingresada no es válida');
        break;
}
```

*   **Propósito**: Ejecutar la operación matemática seleccionada y mostrar el resultado, o un error si la operación es inválida o se intenta dividir por cero.
*   **Detalle**:
    *   `switch (operacion)`: Evalúa la variable `operacion`.
    *   `case 'suma'`: Si `operacion` es "suma", calcula `numero1 + numero2` y lo muestra.
    *   `case 'resta'`: Si `operacion` es "resta", calcula `numero1 - numero2` y lo muestra.
    *   `case 'multiplicacion'`: Si `operacion` es "multiplicacion", calcula `numero1 * numero2` y lo muestra.
    *   `case 'division'`: Si `operacion` es "division", primero verifica si `numero2` es cero.
        *   Si `numero2` es cero, muestra un mensaje de error específico.
        *   Si `numero2` no es cero, calcula `numero1 / numero2` y lo muestra.
    *   `default`: Si `operacion` no coincide con ningún `case`, muestra un mensaje de operación inválida.
    *   `break`: Se usa para salir del `switch` después de ejecutar un `case`.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Suma**
```
Ingresa el primer número: 10
Ingresa el segundo número: 5
Ingresa la operación matemática a realizar (suma/resta/multiplicacion/division): suma
La suma de los números ingresados es: 
            10 + 5 = 15 
```

**Caso 2: División por cero**
```
Ingresa el primer número: 10
Ingresa el segundo número: 0
Ingresa la operación matemática a realizar (suma/resta/multiplicacion/division): division
Error: No se puede dividir por cero.
```

**Caso 3: Operación inválida**
```
Ingresa el primer número: 10
Ingresa el segundo número: 5
Ingresa la operación matemática a realizar (suma/resta/multiplicacion/division): potencia
La operación ingresada no es válida
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `calculadora.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node calculadora.js
    ```
7.  El programa te solicitará los dos números y la operación. Ingresa los valores y presiona Enter después de cada uno.
8.  Verás el resultado o un mensaje de error impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo construir una aplicación interactiva simple que toma múltiples entradas del usuario y utiliza una estructura `switch` para realizar diferentes acciones basadas en una de esas entradas. También incluye un manejo básico de errores para la división por cero.