# Documentación del Código: Ejercicio 8 - Encuentra los múltiplos de un número

## Descripción General

Este script de JavaScript solicita al usuario que ingrese un número entero positivo. Luego, el programa utiliza un ciclo `for` para encontrar y mostrar todos los múltiplos de ese número que se encuentren entre 1 y 100 (inclusive).

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
let numero = parseInt(prompt('Ingrese un número entero positivo: '));
```

*   **Propósito**: Pedir al usuario el número base para encontrar sus múltiplos y convertir la entrada a un entero.
*   **Detalle**:
    *   `prompt('Ingrese un número entero positivo: ')`: Muestra el mensaje en la consola y espera la entrada del usuario.
    *   `parseInt(...)`: Convierte la cadena de texto ingresada a un número entero.
    *   `let numero = ...`: El número entero se almacena en la variable `numero`. Se espera que el usuario ingrese un número positivo; si no, el comportamiento para encontrar múltiplos podría no ser el esperado o el ciclo podría no ejecutarse.

3️⃣ **Búsqueda e Impresión de Múltiplos**

```js
// se itera el numero que multiplica al numero ingresado por el usuario
for (let i = 1; ;i++) {
    // se obtiene el multiplo
    let multiplo = numero * i;
    // si multiplo es mayor a 100 se detiene la iteración
    if (multiplo > 100) {
        break;
    }
    // impresion de los resultados
    console.log(`${numero} x ${i} = ${multiplo}`);
}
```

*   **Propósito**: Iterar y calcular múltiplos del `numero` ingresado, imprimiéndolos si están dentro del rango de 1 a 100.
*   **Detalle**:
    *   `for (let i = 1; ;i++)`: Inicia un ciclo `for`.
        *   `let i = 1`: Inicializa un contador `i` en 1. Este `i` actuará como el multiplicador.
        *   La condición de continuación del ciclo está implícita y se maneja con un `break` interno.
        *   `i++`: Incrementa `i` en 1 después de cada iteración.
    *   `let multiplo = numero * i;`: Calcula el múltiplo actual multiplicando el `numero` del usuario por el contador `i`.
    *   `if (multiplo > 100)`: Comprueba si el `multiplo` calculado excede 100.
        *   `break;`: Si `multiplo` es mayor que 100, se sale del ciclo `for` inmediatamente.
    *   `console.log(\`${numero} x ${i} = ${multiplo}\`);`: Si el `multiplo` no es mayor que 100 (y por lo tanto, es un múltiplo válido dentro del rango), se imprime en la consola.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa el número 15:**
```
Ingrese un número entero positivo: 15
15 x 1 = 15
15 x 2 = 30
15 x 3 = 45
15 x 4 = 60
15 x 5 = 75
15 x 6 = 90
```

**Si el usuario ingresa el número 30:**
```
Ingrese un número entero positivo: 30
30 x 1 = 30
30 x 2 = 60
30 x 3 = 90
```

**Si el usuario ingresa un número mayor a 100 (ej. 101):**
El ciclo no imprimirá nada porque el primer múltiplo (`101 * 1`) ya será mayor que 100.
```
Ingrese un número entero positivo: 101
(No se imprime nada)
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `encontrarMultiplos.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node encontrarMultiplos.js
    ```
7.  El programa te solicitará que ingreses un número. Escríbelo y presiona Enter.
8.  Verás los múltiplos de ese número (entre 1 y 100) impresos en la consola.

🏁 **Resumen**

Este script demuestra una forma eficiente de generar múltiplos de un número hasta un límite específico utilizando un ciclo `for` con una condición de salida (`break`). Es un buen ejemplo de cómo controlar la duración de un ciclo basado en un valor calculado dentro del mismo.