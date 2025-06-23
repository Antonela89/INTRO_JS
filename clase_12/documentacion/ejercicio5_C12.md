# Documentación del Código: Ejercicio 5 - Búsqueda de Nombre en Array

## Descripción General

Este script de JavaScript primero solicita al usuario que ingrese 5 nombres, los cuales se almacenan en un array (convertidos a minúsculas). Luego, pide al usuario que ingrese un nombre adicional para verificar si este se encuentra dentro del array previamente llenado. El programa informa si el nombre buscado fue encontrado o no, y muestra el array completo de nombres.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cinco pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Declaración de Variables**

```js
const prompt = require('prompt-sync')();

let arrayNombres = [];
let encontrado = false;
```

*   **Propósito**: Importar el módulo para la entrada del usuario, crear un array vacío para los nombres y una variable booleana para rastrear si se encuentra el nombre buscado.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let arrayNombres = [];`: Declara un array vacío `arrayNombres` donde se almacenarán los nombres ingresados.
    *   `let encontrado = false;`: Declara una variable booleana `encontrado` y la inicializa en `false`. Se usará para indicar si el nombre a verificar fue hallado.

2️⃣ **Ciclo `for` para Ingresar 5 Nombres**

```js
for (let i = 0; i < 5; i++) {
   let nombre = prompt('Ingresa un nombre: ').toLowerCase();
    arrayNombres[i] = nombre;
}
```

*   **Propósito**: Solicitar al usuario que ingrese 5 nombres y almacenarlos en `arrayNombres`, convirtiéndolos a minúsculas.
*   **Detalle**:
    *   `for (let i = 0; i < 5; i++)`: Un ciclo `for` que se ejecuta 5 veces.
    *   `let nombre = prompt('Ingresa un nombre: ').toLowerCase();`: Solicita un nombre, lo convierte a minúsculas con `.toLowerCase()` (para búsquedas insensibles a mayúsculas/minúsculas) y lo almacena temporalmente en `nombre`.
    *   `arrayNombres[i] = nombre;`: Asigna el `nombre` ingresado a la posición `i` del `arrayNombres`.

3️⃣ **Solicitud del Nombre a Verificar**

```js
let verificarNombre = (prompt('Ingresa el nombre a verificar: ')).toLowerCase();
```

*   **Propósito**: Pedir al usuario el nombre que desea buscar dentro del array.
*   **Detalle**:
    *   `prompt('Ingresa el nombre a verificar: ')`: Muestra el mensaje y espera la entrada.
    *   `.toLowerCase()`: Convierte el nombre a verificar a minúsculas, para que la búsqueda sea consistente con los nombres almacenados.
    *   `let verificarNombre = ...`: El nombre a buscar se almacena en `verificarNombre`.

4️⃣ **Ciclo `for` para Buscar el Nombre en el Array**

```js
for (let i = 0; i < arrayNombres.length; i++) {
    if (arrayNombres[i] === verificarNombre) {
        console.log(`El nombre ingresado: ${verificarNombre}, se encuentra en la lista de nombres.`);
        console.log(arrayNombres);
        encontrado = true;
        break;
    }
}
```

*   **Propósito**: Recorrer `arrayNombres` para ver si `verificarNombre` existe en él.
*   **Detalle**:
    *   `for (let i = 0; i < arrayNombres.length; i++)`: Un ciclo `for` que itera sobre cada elemento de `arrayNombres`.
    *   `if (arrayNombres[i] === verificarNombre)`: Compara el elemento actual del array (`arrayNombres[i]`) con `verificarNombre`.
        *   Si son iguales, se encontró el nombre.
        *   `console.log(...)`: Se imprime un mensaje indicando que el nombre fue encontrado y se muestra el array.
        *   `encontrado = true;`: Se actualiza la variable `encontrado` a `true`.
        *   `break;`: Se sale del ciclo `for` inmediatamente, ya que no es necesario seguir buscando.

5️⃣ **Mensaje Final si el Nombre no fue Encontrado**

```js
if (!encontrado) {
    console.log(`El nombre ingresado: ${verificarNombre}, no se encuentra en la lista de nombres.`);
    console.log(arrayNombres);
}
```

*   **Propósito**: Si después de recorrer todo el array el nombre no se encontró (es decir, `encontrado` sigue siendo `false`), informar al usuario.
*   **Detalle**:
    *   `if (!encontrado)`: Comprueba si la variable `encontrado` es `false`.
    *   `console.log(...)`: Se imprime un mensaje indicando que el nombre no fue encontrado y se muestra el array.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Nombre encontrado**
```
Ingresa un nombre: Ana
Ingresa un nombre: Luis
Ingresa un nombre: CARLOS
Ingresa un nombre: Sofia
Ingresa un nombre: Pedro
Ingresa el nombre a verificar: carlos
El nombre ingresado: carlos, se encuentra en la lista de nombres.
[ 'ana', 'luis', 'carlos', 'sofia', 'pedro' ]
```

**Caso 2: Nombre no encontrado**
```
Ingresa un nombre: Maria
Ingresa un nombre: Juan
Ingresa un nombre: Laura
Ingresa un nombre: David
Ingresa un nombre: Elena
Ingresa el nombre a verificar: Lucas
El nombre ingresado: lucas, no se encuentra en la lista de nombres.
[ 'maria', 'juan', 'laura', 'david', 'elena' ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `buscarNombre.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node buscarNombre.js
    ```
7.  Sigue las instrucciones para ingresar los nombres.

🏁 **Resumen**

Este script ilustra cómo trabajar con arrays para almacenar y buscar datos de tipo cadena. Demuestra la importancia de normalizar las entradas (usando `.toLowerCase()`) para búsquedas efectivas y cómo usar una variable de bandera (`encontrado`) junto con `break` para optimizar el proceso de búsqueda.