# Documentación del Código: Ejercicio 5 – Operadores Aritméticos

## Descripción General

Este script de JavaScript se centra en el uso de operadores aritméticos básicos. Declara dos variables numéricas y luego realiza operaciones de suma, resta, multiplicación y división entre ellas. Los resultados de cada operación se almacenan en variables separadas y finalmente se muestran en la consola. Este ejercicio es fundamental para entender cómo realizar cálculos matemáticos en JavaScript.

---

## Requisitos Previos

No se requieren bibliotecas externas. Este script utiliza funcionalidades aritméticas básicas de JavaScript.

## Funcionamiento del Código

El script se desarrolla en tres pasos principales:

1️⃣ **Declaración y Asignación de Números**

```js
let primerNumero = 76; // Puedes cambiar este valor
let segundoNumero = 101; // Puedes cambiar este valor
```

*   **Propósito**: Definir los dos operandos numéricos que se utilizarán en las operaciones aritméticas.
*   **Detalle**:
    *   `let primerNumero = 76;`: Declara la variable `primerNumero` y le asigna el valor 76.
    *   `let segundoNumero = 101;`: Declara la variable `segundoNumero` y le asigna el valor 101.
    *   Los comentarios sugieren que estos valores pueden ser modificados para probar con diferentes números.

2️⃣ **Realización de Operaciones Matemáticas**

```js
let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = (primerNumero / segundoNumero).toFixed(2);
```

*   **Propósito**: Calcular la suma, resta, multiplicación y división de `primerNumero` y `segundoNumero`.
*   **Detalle**:
    *   `let resultadoSuma = primerNumero + segundoNumero;`:
        *   Utiliza el operador de suma (`+`). Resultado: 76+101=177.
    *   `let resultadoResta = primerNumero - segundoNumero;`:
        *   Utiliza el operador de resta (`-`). Resultado: 76−101=−25.
    *   `let resultadoMultiplicacion = primerNumero * segundoNumero;`:
        *   Utiliza el operador de multiplicación (`*`). Resultado: 76×101=7676.
    *   `let resultadoDivision = (primerNumero / segundoNumero).toFixed(2);`:
        *   Utiliza el operador de división (`/`). Resultado: 76/101≈0.752475....
        *   `.toFixed(2)`: Es un método de los números que formatea el número usando notación de punto fijo y lo redondea a una cantidad específica de decimales (en este caso, 2). El resultado de `toFixed()` es una cadena. Para 76/101, esto sería "0.75".

3️⃣ **Visualización de Resultados**

```js
console.log(`
    Resultado de la suma: ${resultadoSuma}
    Resultado de la resta: ${resultadoResta}
    Resultado de la multiplicación: ${resultadoMultiplicacion}
    Resultado de la división: ${resultadoDivision}
    `);
```

*   **Propósito**: Mostrar en la consola los resultados de todas las operaciones aritméticas realizadas.
*   **Detalle**:
    *   `console.log()`: Imprime el contenido en la consola.
    *   Se utiliza una plantilla literal multilínea para presentar los resultados de forma clara y ordenada. Cada `${variable}` se sustituye por su valor correspondiente.

## Salida Esperada en Consola

```
    Resultado de la suma: 177
    Resultado de la resta: -25
    Resultado de la multiplicación: 7676
    Resultado de la división: 0.75
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo `.js` (por ejemplo, `operacionesAritmeticas.js`).
2.  Ejecuta el script en un entorno JavaScript (Node.js o consola del navegador) como se describió en el Ejercicio 1 (C10).

🏁 **Resumen**

Este script proporciona un ejemplo claro de cómo utilizar los operadores aritméticos básicos (`+`, `-`, `*`, `/`) en JavaScript. También introduce el método `toFixed()` para formatear números decimales, una técnica común al presentar resultados numéricos.
