# Documentación del Código: Ejercicio 7 - Intercambio de Valores

## Descripción General

Este script de JavaScript demuestra dos métodos comunes para intercambiar (o "swapear") los valores almacenados en dos variables. Muestra los valores de las variables antes y después de cada técnica de intercambio. Este ejercicio es útil para comprender la manipulación de variables y diferentes enfoques para resolver un problema común en programación.

---

## Requisitos Previos

No se requieren bibliotecas externas. Este script utiliza funcionalidades básicas de JavaScript.

## Funcionamiento del Código

El script presenta dos técnicas de intercambio:

### Técnica 1: Usando una Variable Temporal

1️⃣ **Declaración e Inicialización de Variables Originales**

```js
let primerValor = 10;
let segundoValor = 20;
```

*   **Propósito**: Definir las dos variables cuyos valores se intercambiarán.
*   **Detalle**: `primerValor` se inicializa en 10 y `segundoValor` en 20.

2️⃣ **Mostrar Valores Antes del Intercambio**

```js
console.log(`Antes del intercambio (variable temporal): primerValor = ${primerValor}, segundoValor = ${segundoValor}`);
```

*   **Propósito**: Registrar el estado inicial de las variables.
*   **Detalle**: Imprime "Antes del intercambio (variable temporal): primerValor = 10, segundoValor = 20".

3️⃣ **Intercambio Usando Variable Temporal**

```js
let valorTemporal = primerValor; // Guardamos el primer valor en una variable temporal
primerValor = segundoValor;       // Asignamos el segundo valor al primer valor
segundoValor = valorTemporal;     // Asignamos el valor temporal (original de primerValor) al segundo valor
```

*   **Propósito**: Realizar el intercambio de valores.
*   **Detalle**:
    *   `let valorTemporal = primerValor;`: El valor de `primerValor` (10) se copia en `valorTemporal`. Ahora `valorTemporal` es 10.
    *   `primerValor = segundoValor;`: El valor de `segundoValor` (20) se copia en `primerValor`. Ahora `primerValor` es 20.
    *   `segundoValor = valorTemporal;`: El valor de `valorTemporal` (10) se copia en `segundoValor`. Ahora `segundoValor` es 10.

4️⃣ **Mostrar Valores Después del Intercambio**

```js
console.log(`Después del intercambio (variable temporal): primerValor = ${primerValor}, segundoValor = ${segundoValor}`);
```

*   **Propósito**: Verificar que los valores se hayan intercambiado correctamente.
*   **Detalle**: Imprime "Después del intercambio (variable temporal): primerValor = 20, segundoValor = 10".

### Técnica 2: Usando Asignación por Desestructuración (Asignación Simultánea)

1️⃣ **Declaración e Inicialización de Otras Variables**

```js
let otroValor1 = 30;
let otroValor2 = 40;
```

*   **Propósito**: Definir un nuevo par de variables para demostrar el segundo método.
*   **Detalle**: `otroValor1` se inicializa en 30 y `otroValor2` en 40.

2️⃣ **Mostrar Valores Antes del Intercambio (Asignación Simultánea)**

```js
console.log(`Antes del intercambio (asignación simultánea): otroValor1 = ${otroValor1}, otroValor2 = ${otroValor2}`);
```

*   **Propósito**: Registrar el estado inicial de estas nuevas variables.
*   **Detalle**: Imprime "Antes del intercambio (asignación simultánea): otroValor1 = 30, otroValor2 = 40".

3️⃣ **Intercambio Usando Asignación por Desestructuración**

```js
[otroValor1, otroValor2] = [otroValor2, otroValor1];
```

*   **Propósito**: Realizar el intercambio de valores de una manera más concisa utilizando una característica de ES6.
*   **Detalle**:
    *   `[otroValor2, otroValor1]`: A la derecha del operador de asignación, se crea un array temporal con los valores de `otroValor2` y `otroValor1` en ese orden (es decir, `[40, 30]`).
    *   `[otroValor1, otroValor2] = ...`: Esta es la asignación por desestructuración. El primer elemento del array de la derecha (40) se asigna a `otroValor1`, y el segundo elemento (30) se asigna a `otroValor2`.

4️⃣ **Mostrar Valores Después del Intercambio (Asignación Simultánea)**
*(El código original tenía un pequeño error en el mensaje, se corrige aquí)*
```js
console.log(`Después del intercambio (asignación simultánea): otroValor1 = ${otroValor1}, otroValor2 = ${otroValor2}`);
```

*   **Propósito**: Verificar el intercambio con el segundo método.
*   **Detalle (con la corrección)**: Imprime "Después del intercambio (asignación simultánea): otroValor1 = 40, otroValor2 = 30".

## Salida Esperada en Consola (con la corrección)

```
Antes del intercambio (variable temporal): primerValor = 10, segundoValor = 20
Después del intercambio (variable temporal): primerValor = 20, segundoValor = 10
Antes del intercambio (asignación simultánea): otroValor1 = 30, otroValor2 = 40
Después del intercambio (asignación simultánea): otroValor1 = 40, otroValor2 = 30
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo `.js` (por ejemplo, `intercambioValores.js`).
2.  Ejecuta el script en un entorno JavaScript (Node.js o consola del navegador) como se describió en el Ejercicio 1 (C10).

🏁 **Resumen**

Este script ilustra dos métodos efectivos para intercambiar valores entre variables: el método clásico usando una variable temporal, que es fundamental y aplicable en muchos lenguajes, y el método moderno de asignación por desestructuración disponible en versiones más recientes de JavaScript (ES6+), que ofrece una sintaxis más elegante y concisa.