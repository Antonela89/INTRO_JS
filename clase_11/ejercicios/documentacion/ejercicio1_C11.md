# Documentación del Código: Ejercicio 1 - ¿Positivo, negativo o cero?

## Descripción General

Este script de JavaScript solicita al usuario que ingrese un número. Luego, el programa analiza si el número ingresado es positivo, negativo o igual a cero. Utiliza una estructura condicional `if-else if-else` para realizar esta clasificación y muestra un mensaje explicativo en la consola para cada caso.

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
let numero = parseInt(prompt('Ingresa un número: '));
```

*   **Propósito**: Pedir al usuario que ingrese un número y convertir la entrada a un número entero.
*   **Detalle**:
    *   `prompt('Ingresa un número: ')`: Muestra el mensaje en la consola y espera a que el usuario escriba algo y presione Enter.
    *   `parseInt(...)`: Convierte la cadena de texto ingresada por el usuario a un tipo de dato numérico entero. Si la entrada no puede convertirse a un número entero válido, `parseInt` devuelve `NaN` (Not a Number).
    *   `let numero = ...`: El número convertido (o `NaN`) se almacena en la variable `numero`.

3️⃣ **Clasificación del Número y Visualización del Mensaje**

```js
if (numero === 0) {
    console.log('El número ingresado es 0');
} else if (numero > 0) {
    console.log('El número ingresado es positivo');
} else {
    console.log('El número ingresado es negativo');
}
```

*   **Propósito**: Determinar si el número es cero, positivo o negativo, y mostrar el mensaje correspondiente.
*   **Detalle**:
    *   `if (numero === 0)`: Comprueba si el valor de `numero` es estrictamente igual a `0`. Si es verdadero, se ejecuta el primer `console.log`.
    *   `else if (numero > 0)`: Si la condición anterior es falsa, comprueba si `numero` es mayor que `0`. Si es verdadero, se ejecuta el segundo `console.log`.
    *   `else`: Si ninguna de las condiciones anteriores es verdadera (lo que implica que el número es menor que cero, o es `NaN`), se ejecuta el tercer `console.log`. Si `numero` es `NaN`, el mensaje "El número ingresado es negativo" podría no ser el más preciso, pero es el comportamiento de esta estructura.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Número positivo**
```
Ingresa un número: 5
El número ingresado es positivo
```

**Caso 2: Número negativo**
```
Ingresa un número: -3
El número ingresado es negativo
```

**Caso 3: Número cero**
```
Ingresa un número: 0
El número ingresado es 0
```

**Caso 4: Entrada no numérica**
```
Ingresa un número: hola
El número ingresado es negativo
```
*(Nota: `parseInt('hola')` devuelve `NaN`. En la lógica `if-else if-else`, `NaN === 0` es falso, `NaN > 0` es falso, por lo que cae en el último `else`.)*

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `clasificarNumero.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node clasificarNumero.js
    ```
7.  El programa te solicitará que ingreses un número. Escríbelo y presiona Enter.
8.  Verás el mensaje de clasificación impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo fundamental del uso de estructuras condicionales `if-else if-else` para tomar decisiones basadas en el valor de una variable numérica. Demuestra cómo clasificar números y proporcionar retroalimentación específica al usuario.
