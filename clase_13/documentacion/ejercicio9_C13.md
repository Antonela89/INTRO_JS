# Documentación del Código: Ejercicio 9 - Contar Hasta un Número (Función Declarada)

## Descripción General

Este script de JavaScript define una función declarada llamada `contarHasta`. Esta función solicita al usuario que ingrese un número y luego utiliza un ciclo `for` para imprimir en la consola todos los números desde 1 hasta el número ingresado por el usuario (inclusive).

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Solicitud del Número Límite**

```js
const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingrese un número: '));
```

*   **Propósito**: Importar el módulo para la entrada del usuario y solicitar un número al usuario, que servirá como límite superior para el conteo.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let numero = parseInt(prompt('Ingrese un número: '));`: Solicita al usuario que ingrese un número, lo convierte a un entero usando `parseInt()`, y lo almacena en la variable `numero`. Esta variable `numero` es global en este script.

2️⃣ **Definición de la Función Declarada `contarHasta`**

```js
function contarHasta(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}
```

*   **Propósito**: Crear una función que tome un número como parámetro y utilice un ciclo `for` para imprimir todos los números desde 1 hasta ese número.
*   **Detalle**:
    *   `function contarHasta(numero)`: Declara una función llamada `contarHasta` que acepta un parámetro `numero`.
    *   `for (let i = 1; i <= numero; i++)`: Inicia un ciclo `for`.
        *   `let i = 1`: Inicializa una variable contador `i` en 1.
        *   `i <= numero`: El ciclo continuará mientras `i` sea menor o igual al valor del parámetro `numero`.
        *   `i++`: Después de cada iteración, incrementa `i` en 1.
    *   `console.log(i);`: Dentro del ciclo, imprime el valor actual de `i` en la consola.

3️⃣ **Llamada a la Función `contarHasta`**

```js
contarHasta(numero);
```

*   **Propósito**: Ejecutar la función `contarHasta`, pasándole el número que el usuario ingresó como límite para el conteo.
*   **Detalle**:
    *   `contarHasta(numero)`: Llama a la función `contarHasta` y le pasa el valor de la variable global `numero` (que contiene la entrada del usuario) como argumento. Este valor será recibido por el parámetro `numero` dentro de la función.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa 5:**
```
Ingrese un número: 5
1
2
3
4
5
```

**Si el usuario ingresa 1:**
```
Ingrese un número: 1
1
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `contarConFuncion.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node contarConFuncion.js
    ```
7.  El programa te solicitará que ingreses un número.
8.  Verás el conteo desde 1 hasta ese número impreso en la consola.

🏁 **Resumen**

Este script demuestra cómo encapsular una lógica de iteración (un conteo) dentro de una función declarada. La función toma un parámetro que controla el límite del ciclo, haciendo el código más modular y reutilizable.