# Documentación del Código: Ejercicio 3 - Clasificación de Edades (Función Flecha)

## Descripción General

Este script de JavaScript solicita al usuario que ingrese una edad. Luego, utiliza una función flecha para clasificar esa edad en una de cuatro categorías: "Niño" (0-11 años), "Adolescente" (12-18 años), "Adulto" (19-60 años), o "Adulto mayor" (más de 60 años). El script imprime la clasificación resultante en la consola.

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

2️⃣ **Solicitud de la Edad al Usuario**

```js
let edad = parseInt(prompt('Ingresa una edad: '));
```

*   **Propósito**: Pedir al usuario que ingrese una edad y convertirla a un número entero.
*   **Detalle**:
    *   `prompt('Ingresa una edad: ')`: Muestra el mensaje y espera la entrada del usuario.
    *   `parseInt()`: Convierte la cadena de texto ingresada a un número entero.
    *   La edad ingresada se almacena en la variable `edad`.

3️⃣ **Definición de la Función Flecha `clasificacionPorEdad`**

```js
let clasificacionPorEdad = edad => {
    if (edad >= 0 && edad <= 11) {
        return 'Es un niño';
    } else if  (edad > 11 && edad <= 18) { // Podría ser edad >= 12
        return 'Es un adolescente';
    } else if (edad > 18 && edad <= 60) { // Podría ser edad >= 19
        return 'Es un adulto';
    } else { // Asume edad > 60 o entradas no válidas como NaN
        return 'Es un adulto mayor';
    }
}
```

*   **Propósito**: Crear una función que tome una edad como parámetro y devuelva una cadena de texto que representa su clasificación.
*   **Detalle**:
    *   `let clasificacionPorEdad = edad => { ... }`: Define una función flecha con un solo parámetro `edad` y la asigna a la variable `clasificacionPorEdad`.
    *   La función utiliza una estructura `if-else if-else` para determinar la categoría de edad:
        *   `if (edad >= 0 && edad <= 11)`: Si la edad está entre 0 y 11 (inclusive), devuelve "Es un niño".
        *   `else if (edad > 11 && edad <= 18)`: Si la edad está entre 12 y 18 (inclusive), devuelve "Es un adolescente". (Nota: `edad >= 12` sería más preciso para incluir el 12).
        *   `else if (edad > 18 && edad <= 60)`: Si la edad está entre 19 y 60 (inclusive), devuelve "Es un adulto". (Nota: `edad >= 19` sería más preciso).
        *   `else`: Para cualquier otra edad (mayor de 60, o si `edad` es `NaN` debido a una entrada no numérica), devuelve "Es un adulto mayor". Se podría añadir un manejo más específico para `NaN` o edades negativas si se desea.

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(clasificacionPorEdad(edad));
```

*   **Propósito**: Ejecutar la función `clasificacionPorEdad` con la edad ingresada por el usuario y mostrar la clasificación devuelta en la consola.
*   **Detalle**:
    *   `clasificacionPorEdad(edad)`: Llama a la función `clasificacionPorEdad` pasándole la variable `edad` (que contiene la entrada del usuario) como argumento.
    *   `console.log(...)`: Imprime el valor de retorno de la función (la cadena de clasificación) en la consola.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa 10:**
```
Ingresa una edad: 10
Es un niño
```

**Si el usuario ingresa 15:**
```
Ingresa una edad: 15
Es un adolescente
```

**Si el usuario ingresa 30:**
```
Ingresa una edad: 30
Es un adulto
```

**Si el usuario ingresa 70:**
```
Ingresa una edad: 70
Es un adulto mayor
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `clasificarEdad.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node clasificarEdad.js
    ```
7.  El programa te solicitará que ingreses una edad.
8.  Verás la clasificación de la edad impresa en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo utilizar funciones flecha y estructuras condicionales `if-else if-else` para implementar una lógica de clasificación basada en rangos numéricos.