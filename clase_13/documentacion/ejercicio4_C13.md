# Documentación del Código: Ejercicio 4 - Número Par o Impar (Función Declarada)

## Descripción General

Este script de JavaScript define una función declarada llamada `esPar`. Esta función solicita al usuario que ingrese un número, determina si ese número es par o impar utilizando el operador módulo (`%`) y un operador ternario, y luego muestra el resultado ("Es par" o "Es impar") en la consola.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Solicitud del Número**

```js
const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Ingresa un número: '));
```

*   **Propósito**: Importar el módulo para la entrada del usuario y solicitar un número al usuario, convirtiéndolo a entero.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let numero = parseInt(prompt('Ingresa un número: '));`: Solicita un número al usuario, lo convierte a un entero usando `parseInt()`, y lo almacena en la variable `numero`. Esta variable `numero` es global en este script.

2️⃣ **Definición de la Función Declarada `esPar`**

```js
function esPar(numero) {
    let parOImpar = (numero % 2) === 0 ? 'Es par' : 'Es impar';
    console.log(parOImpar);
}
```

*   **Propósito**: Crear una función que tome un número como parámetro, determine si es par o impar, y muestre el resultado.
*   **Detalle**:
    *   `function esPar(numero)`: Declara una función llamada `esPar` que acepta un parámetro `numero`. *Nota: Este parámetro `numero` dentro de la función es local a la función y sombreará (ocultará) la variable global `numero` si se llama a la función pasándole un argumento. Si se llama sin argumento, podría intentar usar la global, pero es mejor práctica pasar el valor explícitamente.*
    *   `let parOImpar = (numero % 2) === 0 ? 'Es par' : 'Es impar';`:
        *   `(numero % 2) === 0`: Condición que verifica si el residuo de la división del `numero` (parámetro de la función) entre 2 es cero.
        *   `? 'Es par' : 'Es impar'`: Operador ternario que asigna "Es par" a `parOImpar` si la condición es verdadera, o "Es impar" si es falsa.
    *   `console.log(parOImpar);`: Imprime el resultado ("Es par" o "Es impar") en la consola.

3️⃣ **Llamada a la Función `esPar`**

```js
esPar(numero);
```

*   **Propósito**: Ejecutar la función `esPar`, pasándole el número que el usuario ingresó.
*   **Detalle**:
    *   `esPar(numero)`: Llama a la función `esPar` y le pasa el valor de la variable global `numero` (que contiene la entrada del usuario) como argumento. Este valor será recibido por el parámetro `numero` dentro de la función.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Número par**
```
Ingresa un número: 8
Es par
```

**Caso 2: Número impar**
```
Ingresa un número: 5
Es impar
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `verificarParidad.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node verificarParidad.js
    ```
7.  El programa te solicitará que ingreses un número.
8.  Verás si el número es par o impar impreso en la consola.

🏁 **Resumen**

Este script demuestra cómo definir una función declarada que realiza una tarea específica (verificar paridad) y cómo llamarla con datos obtenidos del usuario. Utiliza el operador ternario para una asignación condicional concisa.