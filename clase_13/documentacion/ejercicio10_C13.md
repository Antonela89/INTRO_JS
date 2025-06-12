# Documentación del Código: Ejercicio 10 - Factorial de un Número (Función Expresada)

## Descripción General

Este script de JavaScript define una función expresada llamada `calcularFactorial`. Esta función solicita al usuario que ingrese un número y calcula su factorial. El factorial de un número no negativo `n` (denotado como `n!`) es el producto de todos los enteros positivos menores o iguales a `n`. Por convención, 0! = 1. La función devuelve un objeto que contiene tanto el resultado del factorial como un array con los números que se multiplicaron. El script luego muestra estos resultados en la consola.

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

2️⃣ **Solicitud del Número al Usuario**

```js
let numero = parseInt(prompt('Ingrese un número: '));
```

*   **Propósito**: Pedir al usuario que ingrese el número para el cual se calculará el factorial y convertirlo a un entero.
*   **Detalle**:
    *   `prompt('Ingrese un número: ')`: Muestra el mensaje y espera la entrada del usuario.
    *   `parseInt()`: Convierte la cadena de texto ingresada a un número entero.
    *   La entrada del usuario se almacena en la variable `numero`.

3️⃣ **Definición de la Función Expresada `calcularFactorial`**

```js
let calcularFactorial = function(numero) {
    let arrayFactorial = [];
    let multiplicacionFactorial = 1;

    // Caso especial para cuando el número es 0
    if (numero === 0) {
        return {
            arrayFactorial: [0], // O podría ser un array vacío, según preferencia
            factorial: 1
        };
    }
    // Caso para números negativos (factorial no definido tradicionalmente)
    if (numero < 0) {
        return {
            arrayFactorial: [numero],
            factorial: "No definido para números negativos"
        };
    }

    for (let n = numero; n >= 1; n--){
       arrayFactorial.push(n);
    }

    for (let i = 0; i < arrayFactorial.length; i++) {
        multiplicacionFactorial *= arrayFactorial[i];
    }

    return {
        arrayFactorial: arrayFactorial,
        factorial: multiplicacionFactorial
    };
}
```

*   **Propósito**: Crear una función que calcule el factorial de un número dado y devuelva el resultado junto con los números multiplicados.
*   **Detalle**:
    *   `let calcularFactorial = function(numero) { ... }`: Define una función expresada.
    *   `let arrayFactorial = []; let multiplicacionFactorial = 1;`: Inicializa un array para guardar los números de la secuencia factorial y una variable para acumular el producto (inicializada en 1 porque es el elemento neutro de la multiplicación).
    *   **Manejo de Casos Especiales**:
        *   `if (numero === 0)`: Si el número es 0, devuelve directamente el factorial como 1.
        *   `if (numero < 0)`: Si el número es negativo, devuelve un mensaje indicando que el factorial no está definido (opcional, pero buena práctica).
    *   `for (let n = numero; n >= 1; n--)`: El primer ciclo `for` construye el `arrayFactorial` en orden descendente desde `numero` hasta 1.
    *   `for (let i = 0; i < arrayFactorial.length; i++)`: El segundo ciclo `for` itera sobre `arrayFactorial` y multiplica cada elemento por `multiplicacionFactorial`.
    *   `return { arrayFactorial: arrayFactorial, factorial: multiplicacionFactorial };`: Devuelve un objeto con dos propiedades: `arrayFactorial` (el array de números) y `factorial` (el resultado del cálculo).

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
const resultado = calcularFactorial(numero);
console.log(`El !${numero} es: ${resultado.factorial}, los números multiplicados son: ${resultado.arrayFactorial.join(' x ')}`);
```

*   **Propósito**: Ejecutar la función `calcularFactorial` con el número ingresado por el usuario y mostrar el factorial y la secuencia de multiplicación.
*   **Detalle**:
    *   `const resultado = calcularFactorial(numero);`: Llama a la función y almacena el objeto devuelto en la constante `resultado`.
    *   `console.log(\`...\`);`: Imprime el mensaje formateado.
        *   `resultado.factorial`: Accede al valor del factorial desde el objeto `resultado`.
        *   `resultado.arrayFactorial.join(' x ')`: Accede al array de números y usa el método `join(' x ')` para crear una cadena que muestre los números separados por " x ".

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa 5:**
```
Ingrese un número: 5
El !5 es: 120, los números multiplicados son: 5 x 4 x 3 x 2 x 1
```

**Si el usuario ingresa 0:**
```
Ingrese un número: 0
El !0 es: 1, los números multiplicados son: 0
```

**Si el usuario ingresa un número negativo (con la mejora sugerida):**
```
Ingrese un número: -3
El !-3 es: No definido para números negativos, los números multiplicados son: -3
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `factorial.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node factorial.js
    ```
7.  El programa te solicitará que ingreses un número.
8.  Verás el cálculo del factorial impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo interesante de cómo implementar un cálculo matemático recursivo (aunque aquí se hace iterativamente) como el factorial. Muestra cómo una función puede devolver múltiples piezas de información relacionadas empaquetándolas en un objeto y cómo manejar casos especiales (como 0! o factoriales de números negativos).