# Documentación del Código: Ejercicio 2 - Validación de Contraseña (Do While)

## Descripción General

Este script de JavaScript solicita al usuario que ingrese una contraseña. Utiliza un ciclo `do...while` para repetir la solicitud hasta que el usuario ingrese la contraseña correcta, que está predefinida como "1234". Una vez que se ingresa la contraseña correcta, se muestra un mensaje de acceso concedido.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Definición de Variables**

```js
const prompt = require('prompt-sync')();

const constrasenaCorrecta = '1234';
let contrasena;
```

*   **Propósito**: Importar el módulo para la entrada del usuario, definir la contraseña correcta y declarar una variable para almacenar la entrada del usuario.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `const constrasenaCorrecta = '1234';`: Declara una constante `constrasenaCorrecta` y le asigna el valor "1234". Esta es la contraseña que el usuario debe adivinar.
    *   `let contrasena;`: Declara una variable `contrasena` sin inicializarla. Esta variable almacenará la contraseña ingresada por el usuario en cada intento.

2️⃣ **Ciclo `do...while` para Solicitar la Contraseña**

```js
do {
    contrasena = prompt('Ingrese contraseña de cuatro dígitos: ');
} while (constrasenaCorrecta !== contrasena);
```

*   **Propósito**: Solicitar repetidamente la contraseña al usuario hasta que la ingresada coincida con `constrasenaCorrecta`.
*   **Detalle**:
    *   `do { ... } while (condicion);`: Estructura de un ciclo `do...while`. El bloque de código dentro de `do { ... }` se ejecuta al menos una vez, y luego se evalúa la `condicion` del `while`. Si la condición es verdadera, el bloque se ejecuta de nuevo.
    *   `contrasena = prompt('Ingrese contraseña de cuatro dígitos: ');`: Dentro del bloque `do`, se solicita al usuario que ingrese la contraseña y el valor se almacena en la variable `contrasena`.
    *   `while (constrasenaCorrecta !== contrasena);`: Después de cada ejecución del bloque `do`, se evalúa esta condición. El ciclo continuará mientras la `contrasena` ingresada sea diferente (`!==`) a `constrasenaCorrecta`.

3️⃣ **Impresión del Mensaje de Acceso Concedido**

```js
console.log('¡Contraseña correcta! Acceso concedido.');
```

*   **Propósito**: Mostrar un mensaje de confirmación una vez que el usuario ha ingresado la contraseña correcta y el ciclo `do...while` ha terminado.
*   **Detalle**:
    *   `console.log(...)`: Imprime el mensaje en la consola.

## Ejemplo de Interacción y Salida en Consola

```
Ingrese contraseña de cuatro dígitos: abcd
Ingrese contraseña de cuatro dígitos: 0000
Ingrese contraseña de cuatro dígitos: 1234
¡Contraseña correcta! Acceso concedido.
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `validarContrasena.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node validarContrasena.js
    ```
7.  El programa te solicitará que ingreses la contraseña. Continúa ingresando contraseñas hasta que ingreses "1234".
8.  Verás el mensaje de acceso concedido impreso en la consola.

🏁 **Resumen**

Este script es un excelente ejemplo del uso de un ciclo `do...while`. Es particularmente útil cuando se necesita que un bloque de código se ejecute al menos una vez antes de verificar una condición, como en el caso de solicitar una entrada al usuario por primera vez.