# Documentación del Código: Ejercicio 2 - Semáforo inteligente

## Descripción General

Este script de JavaScript simula el funcionamiento de un semáforo. Solicita al usuario que ingrese un color (rojo, amarillo o verde). Dependiendo del color ingresado, el programa utiliza una estructura `switch` para determinar la acción correspondiente y la imprime en la consola. Si el usuario ingresa un color no reconocido, se muestra un mensaje de error.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización de `prompt-sync`**

```js
const prompt = require('prompt-sync')();
```

*   **Propósito**: Esta línea importa e inicializa el módulo `prompt-sync`.
*   **Detalle**:
    *   `require('prompt-sync')`: Carga el módulo `prompt-sync`.
    *   `()`: Al final, instancia el módulo, permitiendo que la variable `prompt` se use como una función para capturar la entrada del usuario.

2️⃣ **Solicitud del Color del Semáforo y Normalización**

```js
let color = prompt('Ingresa un color del semáforo (rojo/amarillo/verde)').toLowerCase();
```

*   **Propósito**: Pedir al usuario que ingrese un color y convertir la entrada a minúsculas para una comparación insensible a mayúsculas/minúsculas.
*   **Detalle**:
    *   `prompt('Ingresa un color del semáforo (rojo/amarillo/verde)')`: Muestra el mensaje en la consola y espera la entrada del usuario.
    *   `.toLowerCase()`: Convierte la cadena de texto ingresada por el usuario a minúsculas. Esto asegura que "Rojo", "ROJO" o "rOjO" sean tratados igual que "rojo".
    *   `let color = ...`: La cadena en minúsculas se almacena en la variable `color`.

3️⃣ **Determinación de la Acción y Visualización del Mensaje usando `switch`**

```js
switch (color) {
    case 'rojo':
        console.log('Alto, no puedes avanzar');
        break;
    case 'amarillo':
        console.log('Precaución, prepárate para avanzar.');
        break;
    case 'verde':
        console.log('Avanza con seguridad.');
        break;
    default:
        console.log('Color no reconocido, ingresa rojo, amarillo o verde.'); // Corregido error tipográfico "olor"
        break;
}
```

*   **Propósito**: Evaluar el color ingresado y mostrar el mensaje de acción correspondiente o un mensaje de error.
*   **Detalle**:
    *   `switch (color)`: Inicia una estructura `switch` que evaluará el valor de la variable `color`.
    *   `case 'rojo'`: Si `color` es igual a `'rojo'`, se ejecuta el `console.log` asociado y luego `break` sale de la estructura `switch`.
    *   `case 'amarillo'`: Si `color` es igual a `'amarillo'`, se ejecuta su `console.log` y `break`.
    *   `case 'verde'`: Si `color` es igual a `'verde'`, se ejecuta su `console.log` y `break`.
    *   `default`: Si `color` no coincide con ninguno de los `case` anteriores, se ejecuta el `console.log` dentro del bloque `default`. Esto maneja entradas inválidas.
    *   `break`: Es crucial después de cada `case` para evitar que la ejecución "caiga" al siguiente `case` si no se desea ese comportamiento.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Color rojo**
```
Ingresa un color del semáforo (rojo/amarillo/verde): rojo
Alto, no puedes avanzar
```

**Caso 2: Color amarillo**
```
Ingresa un color del semáforo (rojo/amarillo/verde): AMARILLO
Precaución, prepárate para avanzar.
```

**Caso 3: Color verde**
```
Ingresa un color del semáforo (rojo/amarillo/verde): verde
Avanza con seguridad.
```

**Caso 4: Color inválido**
```
Ingresa un color del semáforo (rojo/amarillo/verde): azul
Color no reconocido, ingresa rojo, amarillo o verde.
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `semaforo.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node semaforo.js
    ```
7.  El programa te solicitará que ingreses un color. Escríbelo y presiona Enter.
8.  Verás el mensaje correspondiente impreso en la consola.

🏁 **Resumen**

Este script es un excelente ejemplo del uso de la estructura `switch` para manejar múltiples casos basados en el valor de una cadena de texto. También demuestra la utilidad de normalizar la entrada del usuario (con `.toLowerCase()`) para hacer el programa más robusto.