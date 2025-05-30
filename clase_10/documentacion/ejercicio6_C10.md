# Documentación del Código: Ejercicio 6 - Comparaciones y Operadores Lógicos

## Descripción General

Este script de JavaScript demuestra el uso de operadores de comparación (en este caso, `>`) y el operador lógico AND (`&&`). Declara dos variables numéricas y luego verifica si ambas son simultáneamente mayores que 10. El resultado de esta verificación (un mensaje indicando si la condición se cumple o no) se muestra en la consola. Este ejercicio es fundamental para entender cómo evaluar y combinar múltiples condiciones lógicas.

---

## Requisitos Previos

No se requieren bibliotecas externas. Este script utiliza funcionalidades básicas de JavaScript.

## Funcionamiento del Código

El script se desarrolla en los siguientes pasos:

1️⃣ **Declaración y Asignación de Números**

```js
let numero1 = 15; // Primer número
let numero2 = 2;  // Segundo número
```

*   **Propósito**: Definir dos variables numéricas que serán objeto de la comparación.
*   **Detalle**:
    *   `let numero1 = 15;`: Declara la variable `numero1` y le asigna el valor 15.
    *   `let numero2 = 2;`: Declara la variable `numero2` y le asigna el valor 2.

2️⃣ **Verificación de Condiciones y Visualización del Resultado**

```js
(numero1 > 10 && numero2 > 10) ? console.log("Ambos números son mayores que 10") : console.log("Al menos uno de los números no es mayor que 10");
```

*   **Propósito**: Evaluar si tanto `numero1` como `numero2` son mayores que 10 y mostrar un mensaje correspondiente en la consola.
*   **Detalle**:
    *   Se utiliza un operador condicional ternario (`condicion ? expresionSiVerdadero : expresionSiFalso`).
    *   `numero1 > 10 && numero2 > 10`: Esta es la condición principal.
        *   `numero1 > 10`: Comprueba si `numero1` (15) es mayor que 10. (Resultado: `true`)
        *   `numero2 > 10`: Comprueba si `numero2` (2) es mayor que 10. (Resultado: `false`)
        *   `&&` (Operador Lógico AND): Devuelve `true` solo si ambas expresiones (izquierda y derecha) son `true`. En este caso, `true && false` evalúa a `false`.
    *   `console.log("Ambos números son mayores que 10")`: Esta parte se ejecutaría si la condición `numero1 > 10 && numero2 > 10` fuera `true`.
    *   `console.log("Al menos uno de los números no es mayor que 10")`: Esta parte se ejecuta porque la condición es `false`.

## Salida Esperada en Consola (con los valores proporcionados)

```
Al menos uno de los números no es mayor que 10
```

Si se modificaran los valores, por ejemplo `numero2 = 20`:

```js
let numero1 = 15;
let numero2 = 20; // Modificado

(numero1 > 10 && numero2 > 10) ? console.log("Ambos números son mayores que 10") : console.log("Al menos uno de los números no es mayor que 10");
```

La salida sería:

```
Ambos números son mayores que 10
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo `.js` (por ejemplo, `comparacionLogica.js`).
2.  Ejecuta el script en un entorno JavaScript (Node.js o consola del navegador) como se describió en el Ejercicio 1 (C10).
3.  Puedes modificar los valores de `numero1` y `numero2` en el código para observar diferentes resultados.

🏁 **Resumen**

Este script es un ejemplo conciso de cómo se utilizan los operadores de comparación (`>`) y los operadores lógicos (`&&`) para tomar decisiones basadas en múltiples criterios. El uso del operador ternario ofrece una forma compacta de expresar una lógica `if-else` simple.