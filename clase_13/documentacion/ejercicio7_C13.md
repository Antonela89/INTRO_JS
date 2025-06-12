# Documentación del Código: Ejercicio 7 - Mensaje Según la Hora

## Descripción General

Este script de JavaScript determina y muestra un saludo apropiado ("Buenos días", "Buenas tardes" o "Buenas noches") basado en la hora actual del sistema. Utiliza el objeto `Date` para obtener la hora actual y define umbrales para mañana, tarde y noche. Una función declarada `mostrarSaludo` se encarga de la lógica de comparación y de imprimir el saludo.

---

## Requisitos Previos

Este script no requiere bibliotecas externas como `prompt-sync`, ya que obtiene la hora directamente del sistema. Utiliza el objeto `Date` incorporado en JavaScript.

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Obtención de la Hora Actual y Definición de Umbrales Horarios**

```js
const horaActual = new Date(); //hora actual

const inicioMañana = new Date();
inicioMañana.setHours(6,0,0); //Establece la hora en 6:00

const inicioTarde = new Date();
inicioTarde.setHours(12,0,0); // Establece la hora en 12:00

const inicioNoche = new Date();
inicioNoche.setHours(18,0,0); // Establece la hora en 18:00
```

*   **Propósito**: Establecer la hora actual y los puntos de tiempo que definen los periodos de mañana, tarde y noche.
*   **Detalle**:
    *   `const horaActual = new Date();`: Crea un nuevo objeto `Date` que, por defecto, se inicializa con la fecha y hora actuales del sistema donde se ejecuta el script.
    *   `const inicioMañana = new Date(); inicioMañana.setHours(6,0,0);`: Crea un objeto `Date` y luego usa `setHours(6,0,0)` para establecer su hora a las 6:00:00 AM del día actual.
    *   `const inicioTarde = new Date(); inicioTarde.setHours(12,0,0);`: Similarmente, establece `inicioTarde` a las 12:00:00 PM (mediodía).
    *   `const inicioNoche = new Date(); inicioNoche.setHours(18,0,0);`: Establece `inicioNoche` a las 6:00:00 PM.

2️⃣ **Definición de la Función `mostrarSaludo`**

```js
function mostrarSaludo(hora) {
    if (hora >= inicioMañana && hora < inicioTarde ) {
        console.log('Buenos días');
    } else if (hora >= inicioTarde && hora < inicioNoche) {
        console.log('Buenas tardes');
    } else {
        console.log('Buenas noches');
    }
}
```

*   **Propósito**: Crear una función que compare una hora dada con los umbrales definidos y muestre el saludo correspondiente.
*   **Detalle**:
    *   `function mostrarSaludo(hora)`: Declara una función `mostrarSaludo` que acepta un objeto `Date` (representando una hora) como parámetro.
    *   `if (hora >= inicioMañana && hora < inicioTarde )`: Comprueba si la `hora` proporcionada es igual o posterior a `inicioMañana` (6 AM) Y estrictamente anterior a `inicioTarde` (12 PM). Si es así, imprime "Buenos días".
    *   `else if (hora >= inicioTarde && hora < inicioNoche)`: Si la condición anterior es falsa, comprueba si la `hora` es igual o posterior a `inicioTarde` (12 PM) Y estrictamente anterior a `inicioNoche` (6 PM). Si es así, imprime "Buenas tardes".
    *   `else`: Si ninguna de las condiciones anteriores es verdadera (es decir, la hora es 6 PM o posterior, o anterior a las 6 AM), imprime "Buenas noches".

3️⃣ **Llamada a la Función `mostrarSaludo`**

```js
mostrarSaludo(horaActual);
```

*   **Propósito**: Ejecutar la función `mostrarSaludo` pasándole la `horaActual` del sistema para obtener y mostrar el saludo apropiado.
*   **Detalle**:
    *   Se llama a la función `mostrarSaludo` con el objeto `Date` `horaActual` como argumento.

## Salida Esperada en Consola

La salida dependerá de la hora del sistema en el momento de la ejecución.
*   Si son las 10:00 AM: `Buenos días`
*   Si son las 3:00 PM: `Buenas tardes`
*   Si son las 9:00 PM: `Buenas noches`
*   Si son las 2:00 AM: `Buenas noches`

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `saludoHora.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node saludoHora.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás el saludo correspondiente a la hora actual impreso en la consola.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo trabajar con fechas y horas en JavaScript utilizando el objeto `Date`. Demuestra cómo realizar comparaciones entre objetos `Date` para implementar lógica condicional basada en el tiempo y cómo estructurar esta lógica dentro de una función.