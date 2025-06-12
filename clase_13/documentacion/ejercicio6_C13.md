# Documentación del Código: Ejercicio 6 - Convertir Horas a Minutos (Función Declarada)

## Descripción General

Este script de JavaScript define una función declarada llamada `convertirHorasAMinutos`. Esta función solicita al usuario que ingrese un número de horas, lo convierte a minutos (multiplicando por 60) y devuelve el total de minutos. El script luego llama a esta función con la entrada del usuario y muestra el resultado en la consola.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Solicitud del Número de Horas**

```js
const prompt = require('prompt-sync')();

let numeroHoras = parseInt(prompt('Ingrese el número de horas: '));
```

*   **Propósito**: Importar el módulo para la entrada del usuario y solicitar un número de horas al usuario, convirtiéndolo a entero.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let numeroHoras = parseInt(prompt('Ingrese el número de horas: '));`: Solicita al usuario que ingrese el número de horas, lo convierte a un entero usando `parseInt()`, y lo almacena en la variable `numeroHoras`.

2️⃣ **Definición de la Función Declarada `convertirHorasAMinutos`**

```js
function convertirHorasAMinutos(horas) {
    let minutos = horas * 60;
    return minutos;
}
```

*   **Propósito**: Crear una función que tome un número de horas como parámetro y devuelva el equivalente en minutos.
*   **Detalle**:
    *   `function convertirHorasAMinutos(horas)`: Declara una función llamada `convertirHorasAMinutos` que acepta un parámetro `horas`.
    *   `let minutos = horas * 60;`: Dentro de la función, se calcula el total de minutos multiplicando el valor del parámetro `horas` por 60. El resultado se almacena en una variable local `minutos`.
    *   `return minutos;`: La función devuelve el valor calculado de `minutos`.

3️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(convertirHorasAMinutos(numeroHoras));
```

*   **Propósito**: Ejecutar la función `convertirHorasAMinutos` con el número de horas ingresado por el usuario y mostrar el total de minutos devuelto en la consola.
*   **Detalle**:
    *   `convertirHorasAMinutos(numeroHoras)`: Llama a la función `convertirHorasAMinutos` y le pasa el valor de la variable `numeroHoras` (que contiene la entrada del usuario) como argumento.
    *   `console.log(...)`: Imprime el valor de retorno de la función (el total de minutos) en la consola.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa 2 horas:**
```
Ingrese el número de horas: 2
120
```

**Si el usuario ingresa 0.5 horas (y se usa parseFloat en lugar de parseInt para la entrada):**
*(Nota: El código actual usa `parseInt`, por lo que 0.5 se trataría como 0. Si se quisiera manejar decimales, se debería usar `parseFloat` para la entrada.)*
Asumiendo que se usara `parseFloat` y el usuario ingresa 0.5:
```
Ingrese el número de horas: 0.5
30
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `horasAMinutos.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node horasAMinutos.js
    ```
7.  El programa te solicitará que ingreses el número de horas.
8.  Verás el total de minutos impreso en la consola.

🏁 **Resumen**

Este script demuestra cómo crear una función declarada para realizar una conversión de unidades simple. Muestra cómo las funciones pueden tomar datos de entrada (parámetros) y devolver un resultado procesado.