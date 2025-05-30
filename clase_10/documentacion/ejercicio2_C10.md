# Documentación del Código: Ejercicio 2 – Usando las Variables (Entrada de Usuario)

## Descripción General

Este script de JavaScript demuestra cómo interactuar con el usuario para obtener datos (nombre, edad y peso). Una vez recopilada esta información, el programa la utiliza para mostrar un mensaje personalizado en la consola. Este ejercicio es clave para entender la captura de entradas del usuario en un entorno Node.js, la conversión de tipos de datos (de cadena a número) y la construcción de salidas dinámicas.

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

2️⃣ **Solicitud del Nombre del Usuario**

```js
let nombre = prompt("Por favor, ingresa tu nombre: ");
```

*   **Propósito**: Pedir al usuario que ingrese su nombre y almacenar la entrada.
*   **Detalle**:
    *   `prompt("Por favor, ingresa tu nombre: ")`: Muestra el mensaje "Por favor, ingresa tu nombre: " en la consola y espera a que el usuario escriba algo y presione Enter. La entrada se recibe como una cadena de texto.
    *   `let nombre = ...`: El texto ingresado por el usuario se almacena en la variable `nombre`.

3️⃣ **Solicitud de la Edad del Usuario y Conversión**

```js
let edad = parseInt(prompt("Por favor, ingresa tu edad: "));
```

*   **Propósito**: Pedir al usuario su edad y convertir la entrada a un número entero.
*   **Detalle**:
    *   `prompt("Por favor, ingresa tu edad: ")`: Solicita la edad al usuario.
    *   `parseInt(...)`: Convierte la cadena de texto ingresada por el usuario (que representa la edad) a un tipo de dato numérico entero. Si la entrada no puede convertirse a un número entero válido, `parseInt` devuelve `NaN` (Not a Number).
    *   `let edad = ...`: El número convertido se almacena en la variable `edad`.

4️⃣ **Solicitud del Peso del Usuario y Conversión**

```js
let peso = parseFloat(prompt("Por favor, ingresa tu peso: "));
```

*   **Propósito**: Pedir al usuario su peso y convertir la entrada a un número de punto flotante.
*   **Detalle**:
    *   `prompt("Por favor, ingresa tu peso: ")`: Solicita el peso al usuario.
    *   `parseFloat(...)`: Convierte la cadena de texto ingresada a un número de punto flotante (un número que puede tener decimales). Si la entrada no es un número válido, devuelve `NaN`.
    *   `let peso = ...`: El número convertido se almacena en la variable `peso`.

5️⃣ **Visualización del Mensaje Personalizado**

```js
console.log(`Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.`);
```

*   **Propósito**: Mostrar un mensaje de saludo en la consola que incluye el nombre, la edad y el peso ingresados por el usuario.
*   **Detalle**:
    *   `console.log()`: Función para imprimir en consola.
    *   `` `Hola ${nombre}, tienes ${edad} años y pesas ${peso} kg.` ``: Plantilla literal que construye el mensaje. `${nombre}`, `${edad}` y `${peso}` se reemplazan por los valores de las respectivas variables.

## Ejemplo de Interacción y Salida en Consola

```
Por favor, ingresa tu nombre: Carlos
Por favor, ingresa tu edad: 30
Por favor, ingresa tu peso: 75.5
Hola Carlos, tienes 30 años y pesas 75.5 kg.
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `infoUsuario.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:

    ```bash
    node infoUsuario.js
    ```
7.  El programa te solicitará que ingreses tu nombre, luego tu edad y finalmente tu peso. Escríbelos y presiona Enter después de cada uno.
8.  Verás el mensaje personalizado impreso en la consola.

🏁 **Resumen**

Este script ilustra un caso de uso práctico para la entrada de datos del usuario en Node.js, la conversión de tipos (parsing) de cadenas a números (`parseInt`, `parseFloat`), y la creación de mensajes dinámicos utilizando plantillas literales. Es un ejercicio fundamental para construir aplicaciones interactivas de consola.
