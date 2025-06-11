# Documentación del Código: Ejercicio 3 - Contar Números Impares (Ciclo For)

## Descripción General

Este script de JavaScript solicita al usuario que ingrese un número X. Luego, el programa cuenta la cantidad de números impares que existen desde 0 hasta X (inclusive). Utiliza un ciclo `for` para recorrer los números y el operador módulo (`%`) para identificar los impares. Finalmente, imprime la cantidad total de números impares encontrados.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Variables**

```js
const prompt = require('prompt-sync')();

const final = parseInt(prompt('Ingrese un número: '));
let numerosImpares = 0;
```

*   **Propósito**: Importar el módulo para la entrada del usuario, solicitar el número límite (X) y preparar un contador para los números impares.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `const final = parseInt(prompt('Ingrese un número: '));`: Solicita al usuario que ingrese un número (el límite superior X) y lo convierte a un entero, almacenándolo en la constante `final`.
    *   `let numerosImpares = 0;`: Declara una variable `numerosImpares` y la inicializa en `0`. Esta variable se usará para contar cuántos números impares se encuentran.

2️⃣ **Ciclo `for` para Recorrer los Números**

```js
for (let i = 0; i <= final; i++) {
    // ... cuerpo del ciclo ...
}
```

*   **Propósito**: Iterar a través de todos los números desde 0 hasta el valor de `final` (inclusive).
*   **Detalle**:
    *   `for (let i = 0; i <= final; i++)`: Inicia un ciclo `for`.
        *   `let i = 0`: Inicializa una variable contador `i` en 0.
        *   `i <= final`: El ciclo continuará mientras `i` sea menor o igual al valor de `final`.
        *   `i++`: Después de cada iteración, incrementa `i` en 1.

3️⃣ **Verificación de Imparidad e Incremento del Contador Dentro del Ciclo**

```js
    if (i % 2 !== 0 ) {
        numerosImpares++;
    }
```

*   **Propósito**: Dentro de cada iteración del ciclo, determinar si el número actual (`i`) es impar y, si lo es, incrementar el contador `numerosImpares`.
*   **Detalle**:
    *   `if (i % 2 !== 0)`: Comprueba si el número `i` es impar.
        *   `i % 2`: El operador módulo calcula el residuo de la división de `i` entre 2.
        *   Si el residuo no es igual a 0 (`!== 0`), significa que el número es impar.
    *   `numerosImpares++;`: Si la condición es verdadera (el número es impar), se incrementa el valor de la variable `numerosImpares` en 1.

4️⃣ **Impresión del Resultado Final**

```js
console.log(`La cantidad de números impares desde 0 hasta ${final} (inclusive) es: ${numerosImpares}`);
```

*   **Propósito**: Mostrar la cantidad total de números impares encontrados en el rango especificado.
*   **Detalle**:
    *   `console.log(...)`: Imprime el mensaje en la consola, utilizando una plantilla literal para incluir el valor de `final` y `numerosImpares`.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa 10:**
```
Ingrese un número: 10
La cantidad de números impares desde 0 hasta 10 (inclusive) es: 5
```
*(Los números impares son 1, 3, 5, 7, 9)*

**Si el usuario ingresa 7:**
```
Ingrese un número: 7
La cantidad de números impares desde 0 hasta 7 (inclusive) es: 4
```
*(Los números impares son 1, 3, 5, 7)*

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `contarImpares.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node contarImpares.js
    ```
7.  El programa te solicitará que ingreses un número. Escríbelo y presiona Enter.
8.  Verás la cantidad de números impares impresa en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo utilizar un ciclo `for` para iterar sobre un rango de números y aplicar una condición (verificar imparidad usando el operador módulo) para contar elementos que cumplen con un criterio específico.