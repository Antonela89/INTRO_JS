 Documentación del Código: Ejercicio 4 - Declaración de Variables y Operaciones Básicas

## Descripción General

Este script de JavaScript repasa la declaración de variables con diversos tipos de datos (booleano, string, número, null). Además, realiza operaciones fundamentales como una suma matemática, concatenación de cadenas de texto, y validaciones básicas para verificar el estado de una variable booleana y si una variable es `null`. Es un ejercicio comprensivo para afianzar el manejo de diferentes tipos de datos y operaciones comunes.

---

## Requisitos Previos

No se requieren bibliotecas externas ni configuraciones especiales para este ejercicio. Utiliza funcionalidades básicas de JavaScript.

## Funcionamiento del Código

El script se organiza en tres fases principales: declaración de variables, realización de operaciones/validaciones y visualización de resultados.

1️⃣ **Declaración de Variables con Diferentes Tipos de Datos**

```js
let verdadero = true; // Variable booleana
let texto = "Hola, este es un mensaje."; // Variable de tipo string
let numero = 42; // Variable numérica
let nada = null; // Variable que representa la ausencia de valor
```

*   **Propósito**: Ilustrar la creación de variables para almacenar distintos tipos de información.
*   **Detalle**:
    *   `let verdadero = true;`: Declara la variable `verdadero` y le asigna el valor booleano `true`. Los booleanos solo pueden ser `true` o `false`.
    *   `let texto = "Hola, este es un mensaje.";`: Declara la variable `texto` y le asigna una cadena de caracteres (string).
    *   `let numero = 42;`: Declara la variable `numero` y le asigna el valor numérico `42`.
    *   `let nada = null;`: Declara la variable `nada` y le asigna el valor especial `null`. `null` representa la ausencia intencional de cualquier valor de objeto o la indicación de que una variable no apunta a ningún objeto.

2️⃣ **Realización de Operaciones y Validaciones**

```js
let suma = numero + 10; // Operación matemática
let mensajeConcatenado = texto + " ¡Espero que estés teniendo un buen día!"; // Concatenación de strings
let mensajeBooleano = verdadero ? "La variable 'verdadero' es true." : "La variable 'verdadero' es false."; // Verificación de booleano
let mensajeNada = nada === null ? "La variable 'nada' es null." : "La variable 'nada' tiene un valor."; // Verificación de null
```

*   **Propósito**: Demostrar cómo operar con las variables declaradas y cómo verificar sus estados.
*   **Detalle**:
    *   `let suma = numero + 10;`:
        *   Realiza una operación de suma: el valor de `numero` (42) más 10.
        *   El resultado (52) se almacena en la nueva variable `suma`.
    *   `let mensajeConcatenado = texto + " ¡Espero que estés teniendo un buen día!";`:
        *   Concatena (une) el valor de la variable `texto` con la cadena literal " ¡Espero que estés teniendo un buen día!".
        *   El resultado de la concatenación se almacena en `mensajeConcatenado`.
    *   `let mensajeBooleano = verdadero ? "La variable 'verdadero' es true." : "La variable 'verdadero' es false.";`:
        *   Utiliza un operador ternario para asignar un mensaje a `mensajeBooleano` basado en el valor de `verdadero`.
        *   Si `verdadero` es `true`, `mensajeBooleano` será "La variable 'verdadero' es true.".
        *   Si `verdadero` fuera `false`, sería "La variable 'verdadero' es false.".
    *   `let mensajeNada = nada === null ? "La variable 'nada' es null." : "La variable 'nada' tiene un valor.";`:
        *   Utiliza un operador ternario y el operador de igualdad estricta (`===`) para verificar si la variable `nada` es exactamente `null`.
        *   Si `nada` es `null`, `mensajeNada` será "La variable 'nada' es null.".
        *   Si `nada` tuviera cualquier otro valor, el mensaje sería "La variable 'nada' tiene un valor.".

3️⃣ **Visualización de Resultados**

```js
console.log(`Resultado de la suma: ${suma}`);
console.log(`Mensaje concatenado: ${mensajeConcatenado}`);
console.log(mensajeBooleano);
console.log(mensajeNada);
```

*   **Propósito**: Mostrar en la consola los resultados de las operaciones y validaciones realizadas.
*   **Detalle**:
    *   Cada `console.log()` imprime el valor de la variable o expresión correspondiente.
    *   Las plantillas literales se usan para formatear las salidas de `suma` y `mensajeConcatenado`.

## Salida Esperada en Consola

```
Resultado de la suma: 52
Mensaje concatenado: Hola, este es un mensaje. ¡Espero que estés teniendo un buen día!
La variable 'verdadero' es true.
La variable 'nada' es null.
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo `.js` (por ejemplo, `tiposYOperaciones.js`).
2.  Ejecuta el script en un entorno JavaScript (Node.js o consola del navegador) como se describió en el Ejercicio 1 (C10).

🏁 **Resumen**

Este script consolida el conocimiento sobre la declaración de variables con `let` para diferentes tipos de datos (booleano, string, número, `null`). Además, ejemplifica operaciones comunes como la aritmética, la concatenación de cadenas y la evaluación condicional simple mediante el operador ternario, culminando con la presentación de los resultados.
