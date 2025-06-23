# Documentación del Código: Ejercicio 2 - Calcular Promedio de Calificaciones (Función Flecha)

## Descripción General

Este script de JavaScript solicita al usuario que ingrese cinco calificaciones. Utiliza una función flecha para calcular el promedio de estas cinco calificaciones. Finalmente, el script imprime el promedio calculado en la consola. Se presenta también una versión alternativa comentada que devuelve un objeto con el promedio y el array de calificaciones.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código (Versión Principal)

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización de `prompt-sync`**

```js
const prompt = require('prompt-sync')();
```

*   **Propósito**: Importar e inicializar el módulo `prompt-sync` para permitir la entrada de datos del usuario desde la consola.
*   **Detalle**:
    *   `require('prompt-sync')()`: Carga y crea una instancia del módulo.

2️⃣ **Definición de la Función Flecha `promedio`**

```js
let promedio = () => {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let calificacion = parseInt(prompt('Ingresa una calificación: '));
        suma += calificacion;
    }
    return `El promedio de las calificaciones ingresadas es: ${suma / 5}`;
}
```

*   **Propósito**: Crear una función que solicite cinco calificaciones, calcule su suma y devuelva un mensaje con el promedio.
*   **Detalle**:
    *   `let promedio = () => { ... }`: Define una función flecha sin parámetros y la asigna a la variable `promedio`.
    *   `let suma = 0;`: Inicializa una variable `suma` para acumular el total de las calificaciones.
    *   `for (let i = 0; i < 5; i++)`: Un ciclo `for` que se ejecuta 5 veces para solicitar cada una de las cinco calificaciones.
        *   `let calificacion = parseInt(prompt('Ingresa una calificación: '));`: Solicita una calificación al usuario y la convierte a un entero.
        *   `suma += calificacion;`: Añade la `calificacion` ingresada a la `suma` acumulada.
    *   `return \`El promedio de las calificaciones ingresadas es: ${suma / 5}\`;`: Después de obtener las cinco calificaciones, calcula el promedio (`suma / 5`) y devuelve una cadena de texto formateada con el resultado.

3️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(promedio());
```

*   **Propósito**: Ejecutar la función `promedio` y mostrar el mensaje devuelto (que contiene el promedio) en la consola.
*   **Detalle**:
    *   `promedio()`: Llama a la función `promedio`. La función se encargará de solicitar las entradas.
    *   `console.log(...)`: Imprime el valor de retorno de la función.

## Funcionamiento del Código (Versión Alternativa Comentada)

```js
// let promedio = () => {
//     let suma = 0;
//     let calificaciones = [];
//
// for (let i = 0; i < 5; i++) {
//     let calificacion = parseInt(prompt('Ingresa una calificación: '));
//     calificaciones.push(calificacion);
//     suma += calificacion;
//     }
//
//    return {
//      promedio: suma / 5,
//      calificaciones
//     }
// }
//
// const resultado = promedio();
//
// console.log(resultado.promedio);
// console.log(resultado.calificaciones);
```

*   **Diferencias Clave**:
    *   Además de sumar, esta versión también almacena cada calificación en un array `calificaciones` usando `calificaciones.push(calificacion)`.
    *   La función devuelve un objeto con dos propiedades: `promedio` (el valor numérico del promedio) y `calificaciones` (el array con las notas ingresadas).
    *   Para usarla, se llamaría a la función, se guardaría el objeto resultante, y luego se accedería a sus propiedades para mostrar la información.

## Ejemplo de Interacción y Salida en Consola (Versión Principal)

```
Ingresa una calificación: 80
Ingresa una calificación: 90
Ingresa una calificación: 70
Ingresa una calificación: 100
Ingresa una calificación: 85
El promedio de las calificaciones ingresadas es: 85
```

🚀 **Ejecución del Script**

1.  Guarda el código (cualquiera de las versiones) en un archivo con extensión `.js` (por ejemplo, `calculoPromedio.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node calculoPromedio.js
    ```
7.  El programa te solicitará que ingreses cinco calificaciones.
8.  Verás el promedio (o la información detallada, si usas la versión alternativa) impreso en la consola.

🏁 **Resumen**

Este script demuestra cómo una función flecha puede encapsular un proceso de múltiples entradas de usuario y un cálculo. La versión principal se enfoca en devolver un resultado simple formateado, mientras que la versión alternativa muestra cómo una función puede devolver datos más estructurados (un objeto) para un uso más flexible posterior.