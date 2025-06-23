# Documentación del Código: Ejercicio 3 - Agregar y Eliminar a la Fila de Mascotas

## Descripción General

Este script de JavaScript simula la gestión de una fila de espera en una clínica veterinaria. Inicializa un array `fila` con algunas mascotas. Luego, un "Hámster" llega y se agrega al inicio de la fila (indicando que tiene prioridad o es el siguiente en ser atendido). El script muestra quién es el primer paciente en la fila (después de agregar al Hámster) y luego la lista completa de pacientes en espera.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente métodos de arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización del Array `fila`**

```js
let fila = ['Perro', 'Gato', 'Conejo'];
```

*   **Propósito**: Crear una lista inicial de mascotas en la fila de espera.
*   **Detalle**:
    *   `let fila = [...]`: Declara una variable `fila` y le asigna un array con tres tipos de mascotas.

2️⃣ **Adición de "Hámster" al Inicio de la Fila con `unshift()`**

```js
fila.unshift('Hamster');
```

*   **Propósito**: Agregar una nueva mascota ("Hámster") al principio del array `fila`.
*   **Detalle**:
    *   `fila.unshift('Hamster')`: El método `unshift()` se llama sobre el array `fila`.
        *   Este método modifica el array original añadiendo el argumento proporcionado ("Hamster") como nuevo elemento al inicio del array.
        *   Todos los elementos existentes se desplazan una posición hacia la derecha.
        *   Después de esta línea, el array `fila` será `['Hamster', 'Perro', 'Gato', 'Conejo']`.

3️⃣ **Visualización de Resultados**

```js
console.log(`El primer paciente de la fila es: ${fila[0]}`);
console.log(`Los pacientes de la fila son: ${fila}`);
```

*   **Propósito**: Mostrar quién es el primer paciente en la fila actualizada y la lista completa de pacientes.
*   **Detalle**:
    *   `console.log(\`El primer paciente de la fila es: ${fila[0]}\`);`:
        *   `fila[0]` accede al primer elemento del array `fila` (que ahora es "Hamster").
        *   Se imprime un mensaje indicando quién es el primer paciente.
    *   `console.log(\`Los pacientes de la fila son: ${fila}\`);`:
        *   Se imprime un mensaje mostrando el array `fila` completo y actualizado.

## Salida Esperada en Consola

```
El primer paciente de la fila es: Hamster
Los pacientes de la fila son: Hamster,Perro,Gato,Conejo
```
*(Nota: La forma en que `console.log` muestra el array cuando se interpola en una plantilla literal puede variar ligeramente entre entornos, pero comúnmente será una lista separada por comas.)*

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `clinicaMascotas.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la salida en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `unshift()` de los arrays, que es útil para agregar uno o más elementos al principio de un array, modificando el array original. Es una operación común para simular colas donde los nuevos elementos se añaden al frente o para insertar elementos con prioridad.