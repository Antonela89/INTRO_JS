# Documentación del Código: Ejercicio 7 - Filtrar Nombres que Empiecen con la Letra 'A' (`filter`)

## Descripción General

Este script de JavaScript inicializa un array de nombres. Luego, utiliza el método `filter()` para crear un nuevo array que contiene únicamente los nombres del array original que comienzan con la letra 'A'. Finalmente, imprime este nuevo array de nombres filtrados en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `filter()` de los arrays y el acceso a caracteres de una cadena por índice. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `nombres`**

```js
let nombres = ['Ana', 'Luis', 'Andrea', 'María'];
```

*   **Propósito**: Definir el array original de nombres que se filtrarán.
*   **Detalle**:
    *   `let nombres = ['Ana', 'Luis', 'Andrea', 'María'];`: Declara una variable `nombres` y le asigna un array con cuatro cadenas de texto.

2️⃣ **Creación del Array `nombresConA` usando `filter()` y Visualización**

```js
let nombresConA = nombres.filter(nombre => nombre[0] === 'A');
console.log(nombresConA);
```

*   **Propósito**: Generar un nuevo array que contenga solo los nombres del array `nombres` original que comiencen con 'A', y luego mostrar este nuevo array.
*   **Detalle**:
    *   `nombres.filter(nombre => nombre[0] === 'A')`: El método `filter()` se llama sobre el array `nombres`.
        *   `filter()` crea un **nuevo array** con todos los elementos que pasan la prueba implementada por la función proporcionada.
        *   `nombre => nombre[0] === 'A'`: Es una función flecha (función de callback o predicado) que se ejecuta para cada `nombre` en el array `nombres`.
            *   `nombre[0]`: Accede al primer carácter de la cadena `nombre`.
            *   `nombre[0] === 'A'`: Esta expresión evalúa si el primer carácter del `nombre` actual es estrictamente igual a 'A'. La comparación es sensible a mayúsculas y minúsculas.
        *   Solo los nombres para los cuales la función de callback devuelve `true` se incluyen en el nuevo array.
    *   `let nombresConA = ...`: El nuevo array resultante (que será `['Ana', 'Andrea']`) se almacena en la variable `nombresConA`.
    *   `console.log(nombresConA);`: Imprime el array `nombresConA` en la consola.

## Salida Esperada en Consola

```
[ 'Ana', 'Andrea' ]
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `filtrarNombresA.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el array de nombres que comienzan con 'A' impreso en la consola.

🏁 **Resumen**

Este script es otro ejemplo práctico del método `filter()`, esta vez aplicado a cadenas de texto para seleccionar elementos basados en una característica de la cadena (su primer carácter). Destaca cómo se pueden combinar métodos de array con operaciones de string para un filtrado de datos efectivo.