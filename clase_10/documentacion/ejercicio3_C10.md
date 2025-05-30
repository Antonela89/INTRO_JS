# Documentación del Código: Ejercicio 3 – Constantes / Validación de Edad

## Descripción General

Este script de JavaScript define un rango de edad permitido utilizando constantes para la edad mínima y máxima (18 y 99 años, respectivamente). Solicita al usuario que ingrese su edad, convierte esta entrada a un número entero y luego valida si la edad ingresada se encuentra dentro del rango establecido. Finalmente, muestra un mensaje en la consola indicando si la edad es válida o no, y en caso de no serlo, informa sobre el rango permitido.

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

*   **Propósito**: Esta línea importa e inicializa el módulo `prompt-sync`.
*   **Detalle**:
    *   `require('prompt-sync')`: Carga el módulo `prompt-sync`.
    *   `()`: Al final, instancia el módulo, permitiendo que la variable `prompt` se use como una función para capturar la entrada del usuario.

2️⃣ **Declaración de Constantes de Rango de Edad**

```js
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;
```

*   **Propósito**: Definir los límites inferior y superior para la validación de la edad. Estos valores no cambiarán durante la ejecución del programa.
*   **Detalle**:
    *   `const EDAD_MINIMA = 18;`: Declara una constante llamada `EDAD_MINIMA` y le asigna el valor numérico 18.
    *   `const EDAD_MAXIMA = 99;`: Declara una constante llamada `EDAD_MAXIMA` y le asigna el valor numérico 99.
    *   Se utiliza `const` porque estos valores son fijos. Es una buena práctica nombrar las constantes en mayúsculas.

3️⃣ **Solicitud de la Edad del Usuario y Conversión**

```js
let edad = parseInt(prompt("Por favor, ingresa tu edad: "));
```

*   **Propósito**: Pedir al usuario que ingrese su edad y convertir la entrada a un número entero.
*   **Detalle**:
    *   `prompt("Por favor, ingresa tu edad: ")`: Muestra el mensaje en la consola y espera a que el usuario escriba algo y presione Enter.
    *   `parseInt(...)`: Convierte la cadena de texto ingresada por el usuario a un tipo de dato numérico entero. Si la entrada no puede convertirse a un número entero válido (por ejemplo, si el usuario escribe "treinta"), `parseInt` devuelve `NaN` (Not a Number).
    *   `let edad = ...`: El número convertido (o `NaN`) se almacena en la variable `edad`.

4️⃣ **Validación de la Edad Ingresada**

```js
(edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) ? /* acción si es válido */ : /* acción si no es válido */ ;
```

*   **Propósito**: Verificar si la edad ingresada por el usuario está dentro del rango permitido por `EDAD_MINIMA` y `EDAD_MAXIMA`.
*   **Detalle**:
    *   Se utiliza un operador condicional ternario (`condicion ? expresionSiVerdadero : expresionSiFalso`).
    *   `edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA`: Esta es la condición principal.
        *   `edad >= EDAD_MINIMA`: Comprueba si la edad ingresada es mayor o igual a la edad mínima permitida.
        *   `edad <= EDAD_MAXIMA`: Comprueba si la edad ingresada es menor o igual a la edad máxima permitida.
        *   `&&` (Operador Lógico AND): Ambas condiciones deben ser verdaderas para que la edad se considere válida. Si `edad` es `NaN`, ambas comparaciones darán `false`, por lo que la condición general será `false`.

5️⃣ **Visualización del Mensaje de Validación**

```js
// ... continuación del operador ternario del paso anterior
console.log(`La edad ingresada (${edad}) es válida.`) : console.log(`La edad ingresada (${edad}) no es válida. Debe estar entre ${EDAD_MINIMA} y ${EDAD_MAXIMA} años.`);
```

*   **Propósito**: Mostrar un mensaje en la consola informando al usuario si la edad ingresada es válida o no.
*   **Detalle**:
    *   Si la condición del paso 4 es `true` (la edad es válida):
        *   `console.log(\`La edad ingresada (${edad}) es válida.\`)`: Se muestra un mensaje de confirmación.
    *   Si la condición del paso 4 es `false` (la edad no es válida o es `NaN`):
        *   `console.log(\`La edad ingresada (${edad}) no es válida. Debe estar entre ${EDAD_MINIMA} y ${EDAD_MAXIMA} años.\`)`: Se muestra un mensaje indicando el error y el rango correcto.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Edad válida**
```
Por favor, ingresa tu edad: 25
La edad ingresada (25) es válida.
```

**Caso 2: Edad inválida (menor)**
```
Por favor, ingresa tu edad: 17
La edad ingresada (17) no es válida. Debe estar entre 18 y 99 años.
```

**Caso 3: Edad inválida (mayor)**
```
Por favor, ingresa tu edad: 100
La edad ingresada (100) no es válida. Debe estar entre 18 y 99 años.
```

**Caso 4: Entrada no numérica**
```
Por favor, ingresa tu edad: treinta
La edad ingresada (NaN) no es válida. Debe estar entre 18 y 99 años.
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `validarEdad.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node validarEdad.js
    ```
7.  El programa te solicitará que ingreses tu edad. Escríbela y presiona Enter.
8.  Verás el mensaje de validación impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo utilizar constantes para definir reglas de negocio fijas (como rangos de edad), cómo capturar y convertir entradas del usuario, y cómo aplicar lógica condicional (en este caso, con un operador ternario y el operador `&&`) para validar datos y proporcionar retroalimentación al usuario.