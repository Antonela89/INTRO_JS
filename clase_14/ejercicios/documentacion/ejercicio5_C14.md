# Documentación del Código: Ejercicio 5 - Verificar Origen del Auto (Función Flecha)

## Descripción General

Este script de JavaScript solicita al usuario que ingrese la marca de un automóvil. Luego, utiliza una función flecha para determinar si el auto es de origen nacional o importado, basándose en una lista predefinida de marcas nacionales ("chevrolet", "ford", "fiat"). El script muestra un mensaje en la consola indicando el origen del auto.

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

2️⃣ **Solicitud de la Marca del Auto y Normalización**

```js
let marcaAuto = prompt('Ingrese una marca de auto: ').toLowerCase();
```

*   **Propósito**: Pedir al usuario que ingrese la marca del auto y convertir la entrada a minúsculas para una comparación insensible a mayúsculas/minúsculas.
*   **Detalle**:
    *   `prompt('Ingrese una marca de auto: ')`: Muestra el mensaje y espera la entrada del usuario.
    *   `.toLowerCase()`: Convierte la cadena de texto ingresada a minúsculas. Esto asegura que "Chevrolet", "CHEVROLET", etc., sean tratados igual que "chevrolet".
    *   La marca normalizada se almacena en la variable `marcaAuto`.

3️⃣ **Definición de la Función Flecha `determinarNacionalidad`**

```js
const determinarNacionalidad = marca => {
    // La función original tenía un error: el operador ternario no estaba devolviendo el valor.
    // Se corrige para que devuelva la cadena.
    return marca === 'chevrolet' || marca === 'ford' || marca === 'fiat'
        ? 'El auto es de origen nacional'
        : 'El auto es de origen importado';
}
```

*   **Propósito**: Crear una función que tome una marca de auto como parámetro y devuelva una cadena indicando si es de origen nacional o importado.
*   **Detalle**:
    *   `const determinarNacionalidad = marca => { ... }`: Define una función flecha con un solo parámetro `marca`.
    *   `marca === 'chevrolet' || marca === 'ford' || marca === 'fiat'`: Esta es la condición. Comprueba si la `marca` ingresada es igual a "chevrolet" O igual a "ford" O igual a "fiat".
    *   `? 'El auto es de origen nacional'`: Si la condición es verdadera (la marca es una de las nacionales), la expresión ternaria (y por ende la función) devuelve la cadena "El auto es de origen nacional".
    *   `: 'El auto es de origen importado'`: Si la condición es falsa, devuelve la cadena "El auto es de origen importado".
    *   **Corrección Importante**: La función original en el código provisto no tenía un `return` explícito para el resultado del operador ternario. Para que la función devuelva el string, se debe añadir `return` o, si es una sola expresión, se puede usar la sintaxis concisa de función flecha sin llaves. La versión corregida aquí incluye el `return`.

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(determinarNacionalidad(marcaAuto));
```

*   **Propósito**: Ejecutar la función `determinarNacionalidad` con la marca ingresada por el usuario y mostrar el mensaje devuelto en la consola.
*   **Detalle**:
    *   `determinarNacionalidad(marcaAuto)`: Llama a la función `determinarNacionalidad` pasándole la variable `marcaAuto` como argumento.
    *   `console.log(...)`: Imprime el valor de retorno de la función (la cadena que indica el origen) en la consola.

## Ejemplo de Interacción y Salida en Consola

**Caso 1: Marca nacional**
```
Ingrese una marca de auto: Ford
El auto es de origen nacional
```

**Caso 2: Marca importada**
```
Ingrese una marca de auto: Toyota
El auto es de origen importado
```

**Caso 3: Marca nacional con diferentes mayúsculas/minúsculas**
```
Ingrese una marca de auto: fIaT
El auto es de origen nacional
```

🚀 **Ejecución del Script**

1.  Guarda el código (con la corrección en la función `determinarNacionalidad`) en un archivo con extensión `.js` (por ejemplo, `origenAuto.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto.
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node origenAuto.js
    ```
7.  El programa te solicitará que ingreses una marca de auto.
8.  Verás el origen del auto impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo de cómo utilizar funciones flecha y el operador ternario para una toma de decisiones simple basada en la comparación de cadenas. También destaca la importancia de normalizar la entrada del usuario (con `.toLowerCase()`) para asegurar comparaciones correctas.