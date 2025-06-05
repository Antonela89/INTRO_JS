# Documentación del Código: Ejercicio 4 - ¿Es par o impar?

## Descripción General

Este script de JavaScript solicita al usuario que ingrese un número. Luego, determina si el número es par o impar utilizando el operador módulo (`%`) y un operador ternario. Finalmente, muestra un mensaje en la consola indicando si el número es par o impar.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

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

*   **Propósito**: Esta línea importa e inicializa el módulo `prompt-sync`.
*   **Detalle**:
    *   `require('prompt-sync')`: Carga el módulo `prompt-sync`.
    *   `()`: Al final, instancia el módulo, permitiendo que la variable `prompt` se use como una función para capturar la entrada del usuario.

2️⃣ **Solicitud del Número al Usuario y Conversión**

```js
let numero = parseInt(prompt('Ingrese un número: '));
```

*   **Propósito**: Pedir al usuario que ingrese un número y convertir la entrada a un número entero.
*   **Detalle**:
    *   `prompt('Ingrese un número: ')`: Muestra el mensaje en la consola y espera la entrada del usuario.
    *   `parseInt(...)`: Convierte la cadena de texto ingresada a un número entero.
    *   `let numero = ...`: El número entero (o `NaN`) se almacena en la variable `numero`.

3️⃣ **Determinación de Paridad usando Operador Ternario**

```js
let esPar = numero % 2 === 0 ? 'El número ingresado es par.' : 'El número ingresado es impar.';
```

*   **Propósito**: Verificar si el número es par o impar y asignar el mensaje correspondiente a la variable `esPar`.
*   **Detalle**:
    *   `numero % 2`: El operador módulo calcula el residuo de la división de `numero` entre 2.
    *   `numero % 2 === 0`: Esta es la condición. Si el residuo es 0, el número es par.
    *   `? 'El número ingresado es par.'`: Si la condición es verdadera, la expresión ternaria devuelve la cadena "El número ingresado es par.".
    *   `: 'El número ingresado es impar.'`: Si la condición es falsa, la expresión ternaria devuelve la cadena "El número ingresado es impar.".
    *   `let esPar = ...`: El mensaje resultante se almacena en la variable `esPar`. Si `numero` es `NaN`, `NaN % 2` es `NaN`, y `NaN === 0` es falso, por lo que se considerará "impar".

4️⃣ **Visualización del Resultado**

```js
console.log(esPar);
```

*   **Propósito**: Mostrar en la consola el mensaje que indica si el número es par o impar.
*   **Detalle**:
    *   `console.log(esPar)`: Imprime el contenido de la variable `esPar`.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Número par**
```
Ingrese un número: 4
El número ingresado es par.
```

**Caso 2: Número impar**
```
Ingrese un número: 7
El número ingresado es impar.
```

**Caso 3: Número cero (considerado par)**
```
Ingrese un número: 0
El número ingresado es par.
```

**Caso 4: Entrada no numérica**
```
Ingrese un número: test
El número ingresado es impar.
```
*(Nota: `parseInt('test')` es `NaN`. `NaN % 2 === 0` es `false`, por lo que el ternario devuelve el mensaje de "impar".)*

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `parImpar.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node parImpar.js
    ```
7.  El programa te solicitará que ingreses un número. Escríbelo y presiona Enter.
8.  Verás el mensaje indicando si es par o impar impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo conciso de cómo utilizar el operador módulo para determinar la paridad de un número y cómo emplear el operador ternario para una asignación condicional simple.