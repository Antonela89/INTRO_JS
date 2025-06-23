# Documentación del Código: Ejercicio 5 - Buscar la Posición de un Elemento

## Descripción General

Este script de JavaScript inicializa un array de colores llamado `colores`. Luego, utiliza el método `indexOf()` para encontrar la posición (índice) del color "Azul" dentro de este array. Finalmente, muestra el índice encontrado en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `indexOf()` de los arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `colores`**

```js
const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
```

*   **Propósito**: Crear un array que contenga una lista de colores.
*   **Detalle**:
    *   `const colores = [...]`: Declara una constante `colores` y le asigna un array con cuatro cadenas de texto, cada una representando un color.

2️⃣ **Búsqueda del Índice de "Azul" con `indexOf()` y Visualización**

```js
const indice = colores.indexOf('Azul');
console.log(`El indice del color azul es: ${indice}`);
```

*   **Propósito**: Encontrar la primera ocurrencia del elemento "Azul" en el array `colores` y mostrar su índice.
*   **Detalle**:
    *   `colores.indexOf('Azul')`: El método `indexOf()` se llama sobre el array `colores`.
        *   Este método busca el elemento especificado ("Azul") dentro del array.
        *   Devuelve el índice de la primera ocurrencia del elemento encontrado. Los índices de los arrays en JavaScript comienzan en 0.
        *   Si el elemento no se encuentra en el array, `indexOf()` devuelve `-1`.
    *   `const indice = ...`: El índice devuelto por `indexOf()` (en este caso, `2`, ya que "Azul" está en la tercera posición) se almacena en la constante `indice`.
    *   `console.log(\`El indice del color azul es: ${indice}\`);`: Imprime un mensaje en la consola que incluye el índice encontrado.

## Salida Esperada en Consola

```
El indice del color azul es: 2
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `buscarColor.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el índice del color "Azul" impreso en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `indexOf()` de los arrays, una herramienta fundamental para buscar la posición de un elemento específico dentro de un array. Es importante recordar que devuelve el índice de la *primera* aparición y `-1` si el elemento no existe.