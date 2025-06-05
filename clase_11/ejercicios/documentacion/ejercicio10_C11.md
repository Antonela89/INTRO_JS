# Documentación del Código: Ejercicio 10 - Adivina el número

## Descripción General

Este script de JavaScript implementa un juego simple de adivinar un número. La computadora selecciona un número al azar entre 1 y 10. Luego, se le pide al usuario que intente adivinar ese número, dándole un máximo de 3 intentos. Si el usuario acierta, se muestra un mensaje de felicitación y el juego termina. Si el usuario no acierta después de los 3 intentos, se revela el número secreto. Se utiliza un ciclo `for` para controlar los intentos.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```
El script también utiliza `Math.random()` y `Math.floor()`, que son funciones incorporadas de JavaScript y no requieren instalación adicional.

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Generación del Número Secreto**

```js
const prompt = require('prompt-sync')();

let numeroSecreto = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// console.log(numeroSecreto); // Línea de depuración comentada
let acertado = false;
```

*   **Propósito**: Configurar el entorno para la entrada del usuario, generar el número aleatorio que el usuario debe adivinar y preparar una variable de estado.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `Math.random()`: Genera un número de punto flotante pseudoaleatorio entre 0 (inclusive) y 1 (exclusive).
    *   `Math.random() * (10 - 1 + 1)`: Multiplica el aleatorio por 10 (rango máximo - rango mínimo + 1) para obtener un número entre 0 y casi 10.
    *   `Math.floor(...)`: Redondea el resultado hacia abajo al entero más cercano, obteniendo un número entre 0 y 9.
    *   `... + 1`: Suma 1 para ajustar el rango a 1-10. El `numeroSecreto` se almacena.
    *   `let acertado = false;`: Inicializa una variable booleana `acertado` en `false`. Esta variable se usará para rastrear si el usuario ha adivinado correctamente.

2️⃣ **Ciclo de Intentos para Adivinar**

```js
for (let intentos = 1; intentos <= 3; intentos++) {
   let numero = parseInt(prompt('Ingrese un número entre 1 y 10: '));
   if( numeroSecreto === numero) {
    acertado = true;
    console.log('Acertaste...');
    break;
    } else if (intentos < 3) {
        console.log('Incorrecto. Inténtalo nuevamente...');
    }
}
```

*   **Propósito**: Permitir al usuario hasta 3 intentos para adivinar el `numeroSecreto`.
*   **Detalle**:
    *   `for (let intentos = 1; intentos <= 3; intentos++)`: Inicia un ciclo `for` que se ejecutará un máximo de 3 veces.
    *   `let numero = parseInt(prompt('Ingrese un número entre 1 y 10: '))`: Solicita al usuario que ingrese un número y lo convierte a entero.
    *   `if( numeroSecreto === numero)`: Comprueba si el número ingresado por el usuario es igual al `numeroSecreto`.
        *   `acertado = true;`: Si acierta, se establece `acertado` en `true`.
        *   `console.log('Acertaste...');`: Se muestra un mensaje de felicitación.
        *   `break;`: Se sale inmediatamente del ciclo `for`, ya que no son necesarios más intentos.
    *   `else if (intentos < 3)`: Si no acierta Y todavía quedan intentos (es decir, `intentos` es 1 o 2), se ejecuta este bloque.
        *   `console.log('Incorrecto. Inténtalo nuevamente...');`: Se informa al usuario que su intento fue incorrecto y que puede volver a intentarlo. No se muestra este mensaje en el último intento fallido.

3️⃣ **Verificación Final y Revelación del Número (si no acertó)**

```js
if (!acertado){
     console.log(`Lo siento, perdiste. El número secreto era: ${numeroSecreto}`);
}
```

*   **Propósito**: Después de que el ciclo de intentos haya terminado (ya sea por acertar o por agotar los intentos), verificar si el usuario no acertó y, en ese caso, revelar el número secreto.
*   **Detalle**:
    *   `if (!acertado)`: Comprueba si la variable `acertado` sigue siendo `false`. Esto significa que el usuario no adivinó el número en ninguno de los intentos.
    *   `console.log(\`Lo siento, perdiste. El número secreto era: ${numeroSecreto}\`);`: Se muestra un mensaje indicando que el usuario perdió y se revela cuál era el `numeroSecreto`.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Acierta en el primer intento (ej. número secreto es 7)**
```
Ingrese un número entre 1 y 10: 7
Acertaste...
```

**Caso 2: Acierta en el tercer intento (ej. número secreto es 3)**
```
Ingrese un número entre 1 y 10: 5
Incorrecto. Inténtalo nuevamente...
Ingrese un número entre 1 y 10: 1
Incorrecto. Inténtalo nuevamente...
Ingrese un número entre 1 y 10: 3
Acertaste...
```

**Caso 3: No acierta en 3 intentos (ej. número secreto es 8)**
```
Ingrese un número entre 1 y 10: 2
Incorrecto. Inténtalo nuevamente...
Ingrese un número entre 1 y 10: 5
Incorrecto. Inténtalo nuevamente...
Ingrese un número entre 1 y 10: 9
Lo siento, perdiste. El número secreto era: 8
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `adivinaNumero.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node adivinaNumero.js
    ```
7.  El programa te pedirá que ingreses números para adivinar.

🏁 **Resumen**

Este script es un ejemplo entretenido que combina la generación de números aleatorios, la interacción con el usuario a través de múltiples intentos controlados por un ciclo `for`, y la lógica condicional para determinar el resultado del juego. Introduce conceptos como el uso de una variable de estado (`acertado`) y la instrucción `break` para salir de un ciclo prematuramente.