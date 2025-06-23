# Documentación del Código: Ejercicio 10 - Reemplazar una Palabra en una Frase

## Descripción General

Este script de JavaScript inicializa una cadena de texto (una frase). Primero, muestra la frase original en la consola. Luego, utiliza el método `replace()` de las cadenas para cambiar una palabra específica ("invierno") dentro de la frase por otra ("verano"). Finalmente, muestra la frase actualizada con la palabra reemplazada en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `replace()` de las cadenas de texto. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Inicialización de la Cadena `frase` y Visualización Inicial**

```js
let frase = 'Me gusta el invierno';
console.log(frase);
```

*   **Propósito**: Definir la frase original y mostrarla al usuario antes de cualquier modificación.
*   **Detalle**:
    *   `let frase = 'Me gusta el invierno';`: Declara una variable `frase` y le asigna la cadena de texto especificada.
    *   `console.log(frase);`: Imprime la frase original en la consola.

2️⃣ **Reemplazo de la Palabra con `replace()`**

```js
let nuevaFrase = frase.replace('invierno', 'verano');
```

*   **Propósito**: Crear una nueva frase donde la palabra "invierno" de la frase original sea sustituida por "verano".
*   **Detalle**:
    *   `frase.replace('invierno', 'verano')`: El método `replace()` se llama sobre la cadena `frase`.
        *   Este método busca la primera ocurrencia del primer argumento ('invierno') en la cadena y la reemplaza con el segundo argumento ('verano').
        *   `replace()` devuelve una nueva cadena con el reemplazo realizado. No modifica la cadena original (`frase`).
        *   Si se quisiera reemplazar todas las ocurrencias (en caso de que "invierno" apareciera varias veces), se podría usar una expresión regular con el flag global (`/invierno/g`).
    *   `let nuevaFrase = ...`: La nueva cadena con la palabra reemplazada ("Me gusta el verano") se almacena en la variable `nuevaFrase`.

3️⃣ **Visualización de la Frase Actualizada**

```js
console.log(nuevaFrase);
```

*   **Propósito**: Mostrar la frase después de que se ha realizado el reemplazo.
*   **Detalle**:
    *   `console.log(nuevaFrase);`: Imprime el contenido de la variable `nuevaFrase` en la consola.

## Salida Esperada en Consola

```
Me gusta el invierno
Me gusta el verano
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `cambiarPalabra.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la frase original y la frase modificada impresas en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `replace()` de las cadenas de texto, una herramienta fundamental para buscar y reemplazar subcadenas dentro de una cadena. Es importante notar que `replace()` por defecto solo reemplaza la primera ocurrencia si se usa una cadena como primer argumento.