# Documentación del Código: Ejercicio 4 - Registro de Notas con Array (Ciclo For)

## Descripción General

Este script de JavaScript permite registrar las notas de varios estudiantes. Primero, solicita al usuario la cantidad de estudiantes cuyas notas se van a ingresar. Luego, utiliza un ciclo `for` para pedir la nota de cada estudiante una por una y las almacena en un array llamado `notas`. Finalmente, imprime el array completo de notas en la consola.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js**, es necesario contar con el paquete `prompt-sync`. Este módulo permite utilizar la función `prompt()`, similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Declaración del Array**

```js
const prompt = require('prompt-sync')();

let notas = [];
```

*   **Propósito**: Importar el módulo para la entrada del usuario y crear un array vacío para almacenar las notas.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let notas = [];`: Declara una variable `notas` y la inicializa como un array vacío. Este array contendrá las notas de los estudiantes.

2️⃣ **Solicitud de la Cantidad de Estudiantes**

```js
const estudiantes = parseInt(prompt('Ingrese la cantidad de estudiantes: '));
```

*   **Propósito**: Obtener del usuario el número total de estudiantes para los cuales se registrarán notas.
*   **Detalle**:
    *   `prompt('Ingrese la cantidad de estudiantes: ')`: Muestra el mensaje y espera la entrada del usuario.
    *   `parseInt(...)`: Convierte la entrada a un número entero.
    *   `const estudiantes = ...`: El número de estudiantes se almacena en la constante `estudiantes`. Este valor determinará cuántas veces se ejecutará el ciclo `for`.

3️⃣ **Ciclo `for` para Ingresar y Almacenar Notas**

```js
for (let i = 0; i < estudiantes; i++) {
    let notaEstudiante = parseInt(prompt('Ingresa la nota del estudiante: '));
    notas[i] = notaEstudiante;
}
```

*   **Propósito**: Solicitar la nota de cada estudiante y almacenarla en el array `notas`.
*   **Detalle**:
    *   `for (let i = 0; i < estudiantes; i++)`: Inicia un ciclo `for` que se ejecutará tantas veces como el valor de `estudiantes`. La variable `i` actúa como índice.
    *   `let notaEstudiante = parseInt(prompt('Ingresa la nota del estudiante: '));`: Dentro del ciclo, se solicita la nota para el estudiante actual y se convierte a un entero.
    *   `notas[i] = notaEstudiante;`: La `notaEstudiante` ingresada se asigna al elemento en la posición `i` del array `notas`. Si `notas` no tenía un elemento en esa posición, se crea uno.

4️⃣ **Impresión del Array de Notas**

```js
console.log(notas);
```

*   **Propósito**: Mostrar en la consola todas las notas que fueron ingresadas y almacenadas en el array.
*   **Detalle**:
    *   `console.log(notas)`: Imprime el contenido completo del array `notas`. JavaScript mostrará el array en un formato legible, típicamente `[nota1, nota2, nota3, ...]`.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa 3 estudiantes:**
```
Ingrese la cantidad de estudiantes: 3
Ingresa la nota del estudiante: 85
Ingresa la nota del estudiante: 92
Ingresa la nota del estudiante: 78
[ 85, 92, 78 ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `registroNotas.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node registroNotas.js
    ```
7.  El programa te solicitará primero la cantidad de estudiantes y luego la nota para cada uno.
8.  Verás el array de notas impreso en la consola.

🏁 **Resumen**

Este script demuestra cómo utilizar arrays para almacenar una colección de datos (notas) y cómo usar un ciclo `for` para poblar dinámicamente ese array con entradas del usuario. Es un ejercicio fundamental para trabajar con colecciones de datos.