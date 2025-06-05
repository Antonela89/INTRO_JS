# Documentación del Código: Ejercicio 5 - Encuentra los números pares entre dos valores

## Descripción General

Este script de JavaScript solicita al usuario que ingrese dos números enteros, que representan el inicio y el fin de un rango. El programa luego muestra todos los números pares que se encuentran dentro de ese rango, incluyendo los límites si son pares. Si el número inicial ingresado es mayor que el final, el script los intercambia para asegurar que el rango sea válido para la iteración. Utiliza un ciclo `for` para recorrer los números y el operador módulo para identificar los pares.

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

2️⃣ **Solicitud de los Números de Inicio y Fin, y Conversión**

```js
let inicio = parseInt(prompt('Ingrese un número: '));
let fin = parseInt(prompt('Ingrese un número: '));
```

*   **Propósito**: Pedir al usuario los dos números que definirán el rango y convertirlos a enteros.
*   **Detalle**:
    *   Se utiliza `prompt()` dos veces para obtener el número de inicio y el número de fin.
    *   `parseInt(...)` convierte cada entrada a un número entero.
    *   Los valores se almacenan en las variables `inicio` y `fin`.

3️⃣ **Asegurar el Orden Correcto del Rango (Intercambio si es necesario)**

```js
if (inicio > fin ) {
    [inicio, fin] = [fin, inicio]
}
```

*   **Propósito**: Garantizar que la variable `inicio` contenga un valor menor o igual a `fin` para que el ciclo `for` funcione correctamente.
*   **Detalle**:
    *   `if (inicio > fin)`: Comprueba si el valor de `inicio` es mayor que el de `fin`.
    *   `[inicio, fin] = [fin, inicio]`: Si la condición es verdadera, se utiliza la asignación por desestructuración para intercambiar los valores de `inicio` y `fin`. Esto asegura que `inicio` siempre sea el límite inferior del rango.

4️⃣ **Iteración e Impresión de Números Pares**

```js
//console.log(`inicio: ${inicio}, fin: ${fin}`); // Línea de depuración comentada

for (let i = inicio; i <= fin; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
```

*   **Propósito**: Recorrer todos los números dentro del rango (desde `inicio` hasta `fin`, inclusive) e imprimir aquellos que sean pares.
*   **Detalle**:
    *   `for (let i = inicio; i <= fin; i++)`: Inicia un ciclo `for` que itera desde `inicio` hasta `fin`.
    *   `if (i % 2 === 0)`: Dentro del ciclo, para cada número `i`, se verifica si es par.
        *   `i % 2`: Calcula el residuo de la división de `i` entre 2.
        *   Si el residuo es `0`, el número `i` es par.
    *   `console.log(i);`: Si el número `i` es par, se imprime en la consola.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Inicio menor que fin**
```
Ingrese un número: 2
Ingrese un número: 10
2
4
6
8
10
```

**Caso 2: Inicio mayor que fin (se intercambian)**
```
Ingrese un número: 10
Ingrese un número: 2
2
4
6
8
10
```

**Caso 3: Rango con números impares en los límites**
```
Ingrese un número: 3
Ingrese un número: 7
4
6
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `numerosParesRango.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node numerosParesRango.js
    ```
7.  El programa te solicitará que ingreses dos números. Escríbelos y presiona Enter después de cada uno.
8.  Verás los números pares dentro del rango impresos en la consola.

🏁 **Resumen**

Este script combina la entrada del usuario, la manipulación de variables (incluyendo el intercambio de valores), la iteración con un ciclo `for`, y la lógica condicional con el operador módulo para resolver un problema práctico de filtrado de números.