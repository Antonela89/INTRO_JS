# Documentación del Código: Ejercicio 1 - Declarar Dos Variables

## Descripción General

Este script de JavaScript se enfoca en la declaración y asignación de valores a dos variables, `edad` y `peso`. Posteriormente, imprime los valores de estas variables en la consola. Este ejercicio es fundamental para comprender los conceptos básicos de creación de variables en JavaScript utilizando la palabra reservada `let` y la visualización de sus contenidos mediante `console.log`.

---

## Requisitos Previos

No se requieren bibliotecas externas ni configuraciones especiales para este ejercicio, ya que utiliza funcionalidades básicas de JavaScript que pueden ejecutarse en cualquier entorno de JavaScript (como un navegador web o Node.js).

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Declaración y Asignación de Variables**

```js
// Declaración y asignación de variables
let edad = 35;
let peso = 80;
```

*   **Propósito**: Crear dos espacios en memoria (variables) para almacenar datos numéricos y asignarles valores iniciales.
*   **Detalle**:
    *   `let edad = 35;`:
        *   `let`: Palabra reservada que declara una variable cuyo alcance es el bloque actual.
        *   `edad`: Nombre identificador de la variable.
        *   `=`: Operador de asignación.
        *   `35`: Valor numérico asignado a la variable `edad`.
    *   `let peso = 80;`:
        *   Declara una variable llamada `peso` y le asigna el valor numérico `80`.

2️⃣ **Impresión por Consola de las Variables**

```js
// Impresión por consola de las variables
console.log(`Edad: ${edad}, Peso: ${peso}`);
```

*   **Propósito**: Mostrar los valores almacenados en las variables `edad` y `peso` en la consola del sistema.
*   **Detalle**:
    *   `console.log()`: Función estándar de JavaScript para imprimir datos en la consola.
    *   `` `Edad: ${edad}, Peso: ${peso}` ``: Es una plantilla literal (template literal).
        *   Permite incrustar expresiones (en este caso, los valores de las variables `edad` y `peso`) dentro de una cadena de texto.
        *   `${edad}` y `${peso}` son marcadores de posición que se reemplazan por los valores actuales de las variables.

## Salida Esperada en Consola

```
Edad: 35, Peso: 80
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `declararVariables.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node declararVariables.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico (por ejemplo, `index.html`) y enlaza el archivo JavaScript:
        ```html
        <!DOCTYPE html>
        <html>
        <head>
            <title>Ejercicio 1</title>
        </head>
        <body>
            <script src="declararVariables.js"></script>
        </body>
        </html>
        ```
    *   Abre el archivo `index.html` en tu navegador web.
    *   Abre la consola de desarrollador (usualmente con F12) para ver la salida.
4.  Verás el resultado impreso en la consola.

🏁 **Resumen**

Este script es una introducción elemental a la declaración de variables con `let`, la asignación de valores numéricos y la visualización de estos valores. Es un pilar para entender cómo se almacenan y se accede a los datos en JavaScript.