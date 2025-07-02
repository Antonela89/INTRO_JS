# 👨‍🎓 Documentación del Código: Ejercicio 1 - Manipulación Completa de un Objeto Estudiante

## Descripción General

Este script de JavaScript simula el procesamiento de los datos de un estudiante. Comienza con un objeto literal que representa a un estudiante, con su nombre, edad y un array de notas. Solicita al usuario una nueva nota para agregar. Luego, una función `procesarEstudiante` realiza las siguientes tareas:
1.  Agrega la nueva nota al array.
2.  Elimina la primera nota del array.
3.  Calcula el promedio de las notas restantes.
4.  Convierte el nombre del estudiante a mayúsculas.
5.  Devuelve un objeto con el nombre en mayúsculas y una función para obtener el promedio.
Finalmente, el script muestra el nombre modificado y el promedio calculado en la consola.

---

## Requisitos Previos

Para ejecutar este código en un entorno Node.js, es necesario contar con el paquete `prompt-sync`.

```bash
npm install prompt-sync
```

## Funcionamiento del Código

### 1️⃣ Inicialización y Entrada de Datos
```js
const prompt = require('prompt-sync')();

const nota = parseInt(prompt('Ingresa una nota: '));

const estudiante = {
    nombre: "Ana Pérez",
    edad: 20,
    notas: [8, 9, 7, 10, 8]
};
```
*   **Propósito**: Configurar el entorno, definir el objeto `estudiante` inicial y solicitar una nueva nota al usuario.
*   **Lógica**: Se define el objeto `estudiante` con datos fijos. Se utiliza `prompt` para obtener una `nota` del usuario, que luego se pasará a la función de procesamiento.

### 2️⃣ Función de Procesamiento `procesarEstudiante`
```js
const procesarEstudiante = (estudiante, nuevaNota) => {
    estudiante.notas.push(nuevaNota);
    estudiante.notas.shift();

    const promedio = () => {
        const suma = estudiante.notas.reduce((acum, nota) => {
            return acum += nota;
        }, 0);
        return suma / estudiante.notas.length;
    };

    const nombreMayusculas = estudiante.nombre.toUpperCase();

    return {
        nombreMayusculas,
        promedio
    };
};
```
*   **Propósito**: Encapsular toda la lógica de manipulación de los datos del estudiante.
*   **Lógica**:
    1.  **Modificación de Notas**: `push(nuevaNota)` agrega la nueva nota al final y `shift()` elimina la primera. Ambas operaciones modifican el array `notas` del objeto `estudiante` original.
    2.  **Cálculo de Promedio**: Se define una función interna `promedio` que utiliza `reduce` para sumar las notas restantes y luego calcula el promedio.
    3.  **Transformación de Nombre**: `toUpperCase()` convierte el nombre del estudiante a mayúsculas.
    4.  **Retorno**: Devuelve un nuevo objeto que contiene el nombre en mayúsculas y la función `promedio`.

### 3️⃣ Ejecución y Visualización
```js
const estudianteModificado = procesarEstudiante(estudiante, nota);

console.log(estudianteModificado.nombreMayusculas);
console.log(estudianteModificado.promedio());
```
*   **Propósito**: Llamar a la función de procesamiento y mostrar los resultados obtenidos.
*   **Lógica**: Se invoca a `procesarEstudiante`, y se guarda el objeto resultante. Luego, se accede a sus propiedades para imprimir el nombre y ejecutar la función de promedio.

---

## Salida Esperada por Consola

A continuación se muestra una interacción de ejemplo donde el usuario ingresa la nota `6`.

**Interacción en consola:**
```
Ingresa una nota: 6
```

**Resultado en consola:**
```
ANA PÉREZ
8
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `procesarEstudiante.js`).
2.  Asegúrate de tener Node.js y `prompt-sync` instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:
    ```bash
    node procesarEstudiante.js
    ```
5.  Ingresa una nota cuando se te solicite.

---

## 🏁 Resumen

Este script es un ejemplo completo que integra la manipulación de objetos y arrays. Demuestra cómo modificar un objeto pasado como argumento a una función y cómo encapsular lógica de cálculo (como el promedio) dentro de una función anidada para devolverla como parte de un nuevo objeto.