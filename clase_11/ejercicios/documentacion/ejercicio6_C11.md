# Documentación del Código: Ejercicio 6 - La tabla de multiplicar

## Descripción General

Este script de JavaScript solicita al usuario que ingrese un número. Luego, el programa utiliza un ciclo `for` para generar e imprimir la tabla de multiplicar de ese número, desde el 1 hasta el 10. Cada línea de la tabla muestra la multiplicación y su resultado.

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

2️⃣ **Solicitud del Número al Usuario y Conversión**

```js
let numero = parseInt(prompt('Ingresa un número para ver su tabla de multiplicar: '));
```

*   **Propósito**: Pedir al usuario el número para el cual se generará la tabla de multiplicar y convertir la entrada a un entero.
*   **Detalle**:
    *   `prompt(...)`: Muestra el mensaje en la consola y espera la entrada del usuario.
    *   `parseInt(...)`: Convierte la cadena de texto ingresada a un número entero.
    *   `let numero = ...`: El número entero se almacena en la variable `numero`.

3️⃣ **Generación e Impresión de la Tabla de Multiplicar**

```js
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
```

*   **Propósito**: Calcular cada producto de la tabla de multiplicar (del 1 al 10) y mostrarlo en la consola.
*   **Detalle**:
    *   `for (let i = 1; i <= 10; i++)`: Inicia un ciclo `for` que itera desde `i = 1` hasta `i = 10`. La variable `i` representa el multiplicador.
    *   `let resultado = numero * i;`: Dentro del ciclo, se calcula el producto del `numero` ingresado por el usuario y el multiplicador actual `i`. El resultado se almacena en la variable `resultado`.
    *   `console.log(\`${numero} x ${i} = ${resultado}\`);`: Se utiliza una plantilla literal para imprimir cada línea de la tabla de multiplicar en un formato claro (ej. "5 x 1 = 5").

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa el número 7:**
```
Ingresa un número para ver su tabla de multiplicar: 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `tablaMultiplicar.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node tablaMultiplicar.js
    ```
7.  El programa te solicitará que ingreses un número. Escríbelo y presiona Enter.
8.  Verás la tabla de multiplicar de ese número impresa en la consola.

🏁 **Resumen**

Este script es un ejemplo clásico del uso de ciclos `for` para generar datos secuenciales o repetitivos, como una tabla de multiplicar. Muestra cómo combinar la entrada del usuario con la lógica de iteración para producir una salida formateada.