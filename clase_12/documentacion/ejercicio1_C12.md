# Documentación del Código: Ejercicio 1 - Suma hasta Ingresar un Número Negativo (While)

## Descripción General

Este script de JavaScript solicita al usuario que ingrese números de forma continua. El programa acumula la suma de todos los números positivos o cero ingresados. El proceso de solicitud de números se detiene cuando el usuario ingresa un número negativo. Finalmente, el script imprime la suma total de los números no negativos ingresados.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Variables**

```js
const prompt = require('prompt-sync')();

let esNegativo = false;
let suma = 0;
```

*   **Propósito**: Importar el módulo para la entrada del usuario e inicializar las variables de control y acumulación.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let esNegativo = false;`: Declara una variable booleana `esNegativo` y la inicializa en `false`. Esta variable controlará la continuación del ciclo `while`.
    *   `let suma = 0;`: Declara una variable `suma` y la inicializa en `0`. Esta variable acumulará la suma de los números ingresados.

2️⃣ **Ciclo `while` para Solicitar Números**

```js
while (!esNegativo) {
    // ... cuerpo del ciclo ...
}
```

*   **Propósito**: Repetir la solicitud de números mientras no se haya ingresado un número negativo.
*   **Detalle**:
    *   `while (!esNegativo)`: El ciclo continuará ejecutándose mientras la condición `!esNegativo` (es decir, `esNegativo` sea `false`) sea verdadera.

3️⃣ **Procesamiento de la Entrada Dentro del Ciclo**

```js
    let numero = parseInt(prompt('Ingresa un número (número negativo para terminar): '));
    if (numero < 0) {
        esNegativo = true;
        break;
    }
    suma += numero;
```

*   **Propósito**: Obtener un número del usuario, verificar si es negativo para terminar el ciclo, o sumarlo al total.
*   **Detalle**:
    *   `let numero = parseInt(prompt('Ingresa un número (número negativo para terminar): '));`: Solicita un número al usuario y lo convierte a entero.
    *   `if (numero < 0)`: Comprueba si el `numero` ingresado es negativo.
        *   `esNegativo = true;`: Si es negativo, se establece `esNegativo` en `true`. Esto hará que la condición del `while` sea falsa en la próxima evaluación.
        *   `break;`: Sale inmediatamente del ciclo `while`, sin necesidad de esperar la próxima evaluación de la condición.
    *   `suma += numero;`: Si el número no es negativo (es decir, el `if` anterior fue falso), se añade el valor de `numero` a la variable `suma`.

4️⃣ **Impresión de la Suma Final**

```js
console.log(`La suma de los números ingresados es: ${suma}`);
```

*   **Propósito**: Mostrar la suma total de los números no negativos ingresados por el usuario.
*   **Detalle**:
    *   `console.log(...)`: Imprime el mensaje en la consola, utilizando una plantilla literal para incluir el valor de `suma`.

## Ejemplo de Interacción y Salida en Consola

```
Ingresa un número (número negativo para terminar): 5
Ingresa un número (número negativo para terminar): 10
Ingresa un número (número negativo para terminar): 3
Ingresa un número (número negativo para terminar): -1
La suma de los números ingresados es: 18
```

```
Ingresa un número (número negativo para terminar): -5
La suma de los números ingresados es: 0
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `sumaConWhile.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node sumaConWhile.js
    ```
7.  El programa te solicitará que ingreses números. Continúa ingresando números y presiona Enter. Para terminar, ingresa un número negativo.
8.  Verás la suma total impresa en la consola.

🏁 **Resumen**

Este script es un ejemplo claro del uso de un ciclo `while` para procesar entradas del usuario de forma indefinida hasta que se cumpla una condición de terminación. Demuestra cómo usar una variable de bandera (`esNegativo`) y la instrucción `break` para controlar el flujo del ciclo.