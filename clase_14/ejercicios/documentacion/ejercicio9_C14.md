# Documentación del Código: Ejercicio 9 - Última Aparición de un Modelo de Auto

## Descripción General

Este script de JavaScript define un array preexistente de modelos de autos, algunos de los cuales pueden estar repetidos. Solicita al usuario que ingrese un modelo de auto específico. Luego, utiliza una función flecha llamada `ultimaAparicionModeloAuto` para buscar la última aparición de ese modelo en el array. La función imprime un mensaje indicando la posición (índice + 1, considerando numeración de 1 a N) de la última aparición o un mensaje si el modelo no se encuentra.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Definición del Array de Modelos**

```js
const prompt = require('prompt-sync')();

const modelosAutos = ['corolla', 'civic', 'golf', 'mustang', 'corolla', 'jetta', 'golf'];
```

*   **Propósito**: Importar el módulo para la entrada del usuario y definir la lista de modelos de autos con la que se trabajará.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `const modelosAutos = [...]`: Define un array constante `modelosAutos` con varios nombres de modelos, algunos repetidos.

2️⃣ **Solicitud del Modelo a Buscar al Usuario**

```js
let modelo = prompt('Ingrese un modelo de auto: ').toLowerCase();
```

*   **Propósito**: Pedir al usuario el modelo de auto que desea buscar en la lista y normalizar la entrada a minúsculas.
*   **Detalle**:
    *   `prompt('Ingrese un modelo de auto: ')`: Muestra el mensaje y espera la entrada del usuario.
    *   `.toLowerCase()`: Convierte la entrada a minúsculas para asegurar que la búsqueda sea insensible a mayúsculas/minúsculas (ej. "Corolla" coincidirá con "corolla").
    *   El modelo a buscar se almacena en la variable `modelo`.

3️⃣ **Definición de la Función Flecha `ultimaAparicionModeloAuto`**

```js
const ultimaAparicionModeloAuto = modelo => {
    for (let i = modelosAutos.length - 1; i >= 0; i--) {
        if (modelosAutos[i] === modelo) {
            return `El modelo '${modelo}' se encontró por última vez en la posición ${i + 1}.`;
        }
    }
    return `El modelo '${modelo}' no está en la lista.`;
}
```

*   **Propósito**: Crear una función que busque la última aparición de un `modelo` específico dentro del array global `modelosAutos`.
*   **Detalle**:
    *   `const ultimaAparicionModeloAuto = modelo => { ... }`: Define una función flecha que acepta un parámetro `modelo` (el modelo a buscar).
    *   `for (let i = modelosAutos.length - 1; i >= 0; i--)`: Inicia un ciclo `for` que recorre el array `modelosAutos` **en orden inverso**, desde el último elemento (`modelosAutos.length - 1`) hasta el primero (`i >= 0`). Esto es clave para encontrar la *última* aparición.
    *   `if (modelosAutos[i] === modelo)`: Compara el elemento actual del array (`modelosAutos[i]`) con el `modelo` buscado.
        *   Si son iguales, se ha encontrado la última aparición (porque se está recorriendo desde el final).
        *   `return \`El modelo '${modelo}' se encontró por última vez en la posición ${i + 1}.\`;`: La función devuelve inmediatamente un mensaje indicando la posición (se suma 1 al índice `i` para una numeración basada en 1).
    *   `return \`El modelo '${modelo}' no está en la lista.\`;`: Si el ciclo `for` termina sin encontrar el modelo (es decir, el `return` dentro del `if` nunca se ejecutó), significa que el modelo no está en la lista. La función devuelve un mensaje indicándolo.

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(ultimaAparicionModeloAuto(modelo));
```

*   **Propósito**: Ejecutar la función `ultimaAparicionModeloAuto` con el modelo ingresado por el usuario y mostrar el mensaje devuelto en la consola.
*   **Detalle**:
    *   `ultimaAparicionModeloAuto(modelo)`: Llama a la función pasándole la variable `modelo` (que contiene la entrada del usuario) como argumento.
    *   `console.log(...)`: Imprime el valor de retorno de la función.

## Ejemplo de Interacción y Salida en Consola

**Array `modelosAutos`: `['corolla', 'civic', 'golf', 'mustang', 'corolla', 'jetta', 'golf']`**

**Caso 1: Modelo "corolla"**
```
Ingrese un modelo de auto: corolla
El modelo 'corolla' se encontró por última vez en la posición 5.
```

**Caso 2: Modelo "golf"**
```
Ingrese un modelo de auto: GOLF
El modelo 'golf' se encontró por última vez en la posición 7.
```

**Caso 3: Modelo "focus" (no está en la lista)**
```
Ingrese un modelo de auto: focus
El modelo 'focus' no está en la lista.
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `buscarUltimoAuto.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto.
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node buscarUltimoAuto.js
    ```
7.  El programa te solicitará que ingreses un modelo de auto.
8.  Verás el resultado de la búsqueda impreso en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo buscar elementos en un array y, específicamente, cómo encontrar la última ocurrencia de un elemento recorriendo el array en orden inverso. También refuerza la normalización de la entrada del usuario para búsquedas efectivas.