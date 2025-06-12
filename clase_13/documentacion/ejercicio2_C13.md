# Documentación del Código: Ejercicio 2 - Encontrar el Número Mayor (Función Expresada)

## Descripción General

Este script de JavaScript define una función expresada llamada `encontrarMayor`. Esta función solicita al usuario que ingrese dos números, los compara y devuelve un mensaje indicando cuál de los números es mayor o si son iguales. El script luego llama a esta función con los números ingresados por el usuario y muestra el mensaje resultante en la consola.

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

2️⃣ **Solicitud de Números al Usuario**

```js
let num1 = parseInt(prompt('Ingresa el primer número: '));
let num2 = parseInt(prompt('Ingresa el segundo número: '));
```

*   **Propósito**: Pedir al usuario que ingrese dos números y convertirlos a enteros.
*   **Detalle**:
    *   Se utiliza `prompt()` para solicitar cada número.
    *   `parseInt()` convierte las cadenas de texto ingresadas a números enteros.
    *   Los números se almacenan en las variables `num1` y `num2`.

3️⃣ **Definición de la Función Expresada `encontrarMayor`**

```js
let encontrarMayor = function(num1,num2) {
    if (num1 === num2) {
        return `Los dos números ingresados son iguales`;
    } else if (num1 > num2) {
        return `El número ${num1} es mayor que ${num2}`;
    } else {
        return `El número ${num2} es mayor que ${num1}`;
    }
}
```

*   **Propósito**: Crear una función que compare dos números y devuelva un mensaje descriptivo del resultado de la comparación.
*   **Detalle**:
    *   `let encontrarMayor = function(num1,num2) { ... }`: Define una función expresada y la asigna a la variable `encontrarMayor`. La función acepta dos parámetros, `num1` y `num2`.
    *   `if (num1 === num2)`: Comprueba si los dos números son iguales. Si es así, devuelve un mensaje indicándolo.
    *   `else if (num1 > num2)`: Si no son iguales, comprueba si `num1` es mayor que `num2`. Si es así, devuelve un mensaje indicando que `num1` es mayor.
    *   `else`: Si ninguna de las condiciones anteriores es verdadera, significa que `num2` debe ser mayor que `num1`. Devuelve un mensaje indicándolo.
    *   La función devuelve una cadena de texto en cada caso.

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(encontrarMayor(num1,num2));
```

*   **Propósito**: Ejecutar la función `encontrarMayor` con los números ingresados por el usuario y mostrar el mensaje devuelto en la consola.
*   **Detalle**:
    *   `encontrarMayor(num1,num2)`: Se llama a la función `encontrarMayor` pasándole las variables `num1` y `num2` (que contienen los valores ingresados por el usuario) como argumentos.
    *   `console.log(...)`: Imprime el valor de retorno de la función (el mensaje de comparación) en la consola.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: num1 > num2**
```
Ingresa el primer número: 10
Ingresa el segundo número: 5
El número 10 es mayor que 5
```

**Caso 2: num2 > num1**
```
Ingresa el primer número: 3
Ingresa el segundo número: 8
El número 8 es mayor que 3
```

**Caso 3: num1 === num2**
```
Ingresa el primer número: 7
Ingresa el segundo número: 7
Los dos números ingresados son iguales
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `numeroMayor.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node numeroMayor.js
    ```
7.  El programa te solicitará que ingreses dos números.
8.  Verás el resultado de la comparación impreso en la consola.

🏁 **Resumen**

Este script ilustra el uso de funciones expresadas en JavaScript, la toma de decisiones con estructuras `if-else if-else` dentro de una función, y cómo las funciones pueden devolver valores (en este caso, cadenas de texto) para ser utilizados en otras partes del programa.