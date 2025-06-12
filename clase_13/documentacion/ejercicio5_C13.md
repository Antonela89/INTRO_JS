# Documentación del Código: Ejercicio 5 - Concatenar Nombres (Función Expresada)

## Descripción General

Este script de JavaScript define una función expresada llamada `concatenarNombres`. Esta función solicita al usuario que ingrese un nombre y un apellido, y luego devuelve una cadena de texto con el nombre completo (nombre y apellido concatenados con un espacio). El script llama a esta función con las entradas del usuario y muestra el nombre completo resultante en la consola.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

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

*   **Propósito**: Importar e inicializar el módulo `prompt-sync` para permitir la entrada de datos del usuario desde la consola.
*   **Detalle**:
    *   `require('prompt-sync')()`: Carga y crea una instancia del módulo.

2️⃣ **Solicitud del Nombre y Apellido al Usuario**

```js
let nombre = prompt('Ingrese su nombre: ');
let apellido = prompt('Ingrese su apellido: ');
```

*   **Propósito**: Pedir al usuario que ingrese su nombre y su apellido.
*   **Detalle**:
    *   Se utiliza `prompt()` dos veces para solicitar el nombre y el apellido por separado.
    *   Las cadenas de texto ingresadas se almacenan en las variables `nombre` y `apellido`.

3️⃣ **Definición de la Función Expresada `concatenarNombres`**

```js
let concatenarNombres = function(nombre, apellido) {
    return `${nombre} ${apellido}`;
}
```

*   **Propósito**: Crear una función que tome un nombre y un apellido como parámetros y los una en una sola cadena de texto, representando el nombre completo.
*   **Detalle**:
    *   `let concatenarNombres = function(nombre, apellido) { ... }`: Define una función expresada y la asigna a la variable `concatenarNombres`. La función acepta dos parámetros: `nombre` y `apellido`.
    *   `return \`${nombre} ${apellido}\`;`: Utiliza una plantilla literal para crear una nueva cadena. Inserta el valor del parámetro `nombre`, seguido de un espacio, seguido del valor del parámetro `apellido`. Esta cadena resultante es devuelta por la función.

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(concatenarNombres(nombre, apellido));
```

*   **Propósito**: Ejecutar la función `concatenarNombres` con el nombre y apellido ingresados por el usuario y mostrar el nombre completo devuelto en la consola.
*   **Detalle**:
    *   `concatenarNombres(nombre, apellido)`: Se llama a la función `concatenarNombres` pasándole las variables `nombre` y `apellido` (que contienen las entradas del usuario) como argumentos.
    *   `console.log(...)`: Imprime el valor de retorno de la función (el nombre completo) en la consola.

## Ejemplo de Interacción y Salida en Consola

```
Ingrese su nombre: Ana
Ingrese su apellido: Perez
Ana Perez
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `nombreCompleto.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node nombreCompleto.js
    ```
7.  El programa te solicitará que ingreses un nombre y luego un apellido.
8.  Verás el nombre completo impreso en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo usar funciones expresadas para realizar operaciones con cadenas de texto, como la concatenación. Muestra cómo las funciones pueden tomar múltiples parámetros y devolver un resultado combinado.