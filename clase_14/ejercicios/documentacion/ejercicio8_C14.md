# Documentación del Código: Ejercicio 8 - Función `backEnd()` (Similar a FizzBuzz)

## Descripción General

Este script de JavaScript define una función flecha llamada `backEnd`. Esta función solicita al usuario que ingrese dos números. Luego, la función itera desde 1 hasta 100 e imprime lo siguiente para cada número en la secuencia:
*   "Back End" si el número es múltiplo de ambos números ingresados por el usuario.
*   "Back" si el número es múltiplo solo del primer número ingresado.
*   "End" si el número es múltiplo solo del segundo número ingresado.
*   El número mismo si no es múltiplo de ninguno de los dos.
Este es un problema clásico similar al "FizzBuzz".

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

2️⃣ **Solicitud de los Dos Números al Usuario**

```js
let numero1 = parseInt(prompt('Ingrese el primer número: ')); // Corregido error tipográfico "núnmero"
let numero2 = parseInt(prompt('Ingrese el segundo número: ')); // Corregido error tipográfico "núnmero"
```

*   **Propósito**: Pedir al usuario que ingrese los dos números que se utilizarán como divisores para las condiciones "Back" y "End".
*   **Detalle**:
    *   Se utiliza `prompt()` dos veces para solicitar cada número.
    *   `parseInt()` convierte las cadenas de texto ingresadas a números enteros.
    *   Los números se almacenan en las variables `numero1` y `numero2`.

3️⃣ **Definición de la Función Flecha `backEnd`**

```js
let backEnd = (numero1, numero2) => {
    for (let i = 1; i <= 100; i++) {
        let multiplo1 = (i % numero1) === 0;
        let multiplo2 = (i % numero2) === 0;

        if (multiplo1 && multiplo2) {
            console.log('Back End');
        } else if (multiplo1) {
            console.log('Back');
        } else if (multiplo2) {
            console.log('End');
        } else {
            console.log(`${i}`);
        }
    }
}
```

*   **Propósito**: Crear una función que itere del 1 al 100 y aplique la lógica "Back End" basada en la divisibilidad por `numero1` y `numero2`.
*   **Detalle**:
    *   `let backEnd = (numero1, numero2) => { ... }`: Define una función flecha que acepta `numero1` y `numero2` como parámetros.
    *   `for (let i = 1; i <= 100; i++)`: Un ciclo `for` que itera la variable `i` desde 1 hasta 100.
    *   `let multiplo1 = (i % numero1) === 0;`: Comprueba si `i` es múltiplo de `numero1`. El resultado (booleano) se guarda en `multiplo1`.
    *   `let multiplo2 = (i % numero2) === 0;`: Comprueba si `i` es múltiplo de `numero2`. El resultado se guarda en `multiplo2`.
    *   **Lógica Condicional**:
        *   `if (multiplo1 && multiplo2)`: Si `i` es múltiplo de ambos, imprime "Back End". Esta condición debe ir primero para tener precedencia.
        *   `else if (multiplo1)`: Si solo es múltiplo de `numero1`, imprime "Back".
        *   `else if (multiplo2)`: Si solo es múltiplo de `numero2`, imprime "End".
        *   `else`: Si no es múltiplo de ninguno, imprime el número `i`.

4️⃣ **Llamada a la Función `backEnd`**

```js
backEnd(numero1,numero2);
```

*   **Propósito**: Ejecutar la función `backEnd` con los números ingresados por el usuario.
*   **Detalle**:
    *   Se llama a la función `backEnd` pasándole las variables `numero1` y `numero2` (que contienen las entradas del usuario) como argumentos.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa numero1 = 3 y numero2 = 5:**
```
Ingrese el primer número: 3
Ingrese el segundo número: 5
1
2
Back
4
End
Back
7
8
Back
End
11
Back
13
14
Back End
16
... (hasta 100)
```

🚀 **Ejecución del Script**

1.  Guarda el código (con las correcciones tipográficas en los prompts) en un archivo con extensión `.js` (por ejemplo, `backEndFizzBuzz.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto.
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node backEndFizzBuzz.js
    ```
7.  El programa te solicitará que ingreses dos números.
8.  Verás la secuencia del 1 al 100 con las sustituciones "Back", "End" o "Back End" impresas en la consola.

🏁 **Resumen**

Este script es un ejercicio clásico que pone a prueba la comprensión de los ciclos, las condiciones y el operador módulo. La función `backEnd` implementa de manera efectiva la lógica requerida para producir la salida deseada.