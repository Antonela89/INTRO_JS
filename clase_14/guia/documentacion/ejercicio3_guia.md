# Documentación del Código: Desafío Final - La Máquina de Tareas

## Descripción General

Este script de JavaScript se centra en la definición y transformación de una función simple que simula completar una tarea.
1.  Se presenta una función declarada `realizarTarea` que recibe el nombre de una tarea y muestra un mensaje indicando que ha sido completada.
2.  Luego, se pide transformar esta función a:
    *   Una función expresada.
    *   Una función flecha.
El script muestra ejemplos de llamada para cada una de las tres versiones de la función.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript y puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script se divide en tres partes, cada una definiendo y usando una versión de la función `realizarTarea`.

### 1️⃣ Función Declarada `realizarTarea`

```js
function realizarTarea(tarea) {
  console.log(`✅ Tarea completada: ${tarea}`);
}

realizarTarea('Estudiar funciones');
```

*   **Propósito**: Definir una función de la manera tradicional (declarada) que toma un argumento `tarea` y lo incluye en un mensaje de completitud.
*   **Detalle**:
    *   `function realizarTarea(tarea) { ... }`: Declara una función llamada `realizarTarea` que acepta un parámetro `tarea`.
    *   `console.log(\`✅ Tarea completada: ${tarea}\`);`: Utiliza una plantilla literal para imprimir un mensaje en la consola, indicando que la `tarea` proporcionada ha sido completada. El emoji ✅ se incluye para dar un feedback visual.
    *   `realizarTarea('Estudiar funciones');`: Llama a la función `realizarTarea` con la cadena "Estudiar funciones" como argumento.

### 2️⃣ Función Expresada `realizarTarea1`

```js
const realizarTarea1 = function(tarea) {
    console.log(`✅ Tarea completada: ${tarea}`);
}

realizarTarea1('Hacer los ejercicios');
```

*   **Propósito**: Convertir la función declarada original en una función expresada.
*   **Detalle**:
    *   `const realizarTarea1 = function(tarea) { ... }`: Define una función anónima y la asigna a la constante `realizarTarea1`. Esta es la sintaxis de una función expresada.
    *   El cuerpo de la función es idéntico al de la función declarada, tomando un parámetro `tarea` e imprimiendo el mensaje de completitud.
    *   `realizarTarea1('Hacer los ejercicios');`: Llama a la función expresada `realizarTarea1` con la cadena "Hacer los ejercicios" como argumento.

### 3️⃣ Función Flecha `realizarTarea2`

```js
const realizarTarea2 = tarea => console.log(`✅ Tarea completada: ${tarea}`);

realizarTarea2('Subir los cambios a GitHub');
```

*   **Propósito**: Convertir la función original en una función flecha, utilizando su sintaxis más concisa.
*   **Detalle**:
    *   `const realizarTarea2 = tarea => ...`: Define una función flecha y la asigna a la constante `realizarTarea2`.
    *   `tarea => ...`: Como la función tiene un solo parámetro (`tarea`), los paréntesis alrededor del parámetro son opcionales.
    *   `... => console.log(\`✅ Tarea completada: ${tarea}\`);`: Como el cuerpo de la función es una única sentencia (una llamada a `console.log`), las llaves `{}` no son estrictamente necesarias (aunque podrían usarse). En este caso, no hay un valor de retorno explícito, por lo que el `return` implícito de las funciones flecha de una sola línea no es relevante para el resultado (ya que `console.log` devuelve `undefined`).
    *   `realizarTarea2('Subir los cambios a GitHub');`: Llama a la función flecha `realizarTarea2` con la cadena "Subir los cambios a GitHub" como argumento.

## Salida Esperada en Consola

```
✅ Tarea completada: Estudiar funciones
✅ Tarea completada: Hacer los ejercicios
✅ Tarea completada: Subir los cambios a GitHub
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `maquinaTareas.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node maquinaTareas.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás los tres mensajes de tareas completadas impresos en la consola.

🏁 **Resumen**

Este desafío final refuerza la comprensión de las diferentes formas de definir funciones en JavaScript: declaradas, expresadas y flecha. Muestra cómo una misma lógica puede implementarse utilizando las distintas sintaxis, destacando la concisión que pueden ofrecer las funciones flecha para casos simples.