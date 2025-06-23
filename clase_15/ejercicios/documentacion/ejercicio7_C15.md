# Documentación del Código: Ejercicio 7 - Verificar si una Lista Contiene un Elemento

## Descripción General

Este script de JavaScript inicializa un array de comidas llamado `comidas`. Luego, utiliza el método `includes()` para verificar si la cadena de texto "Sushi" está presente en este array. Finalmente, muestra un mensaje en la consola que confirma si "Sushi" se encuentra o no en la lista.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, específicamente el método `includes()` de los arrays. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Inicialización del Array `comidas`**

```js
const comidas = ['Pizza', 'Hamburguesa', 'Tacos'];
```

*   **Propósito**: Crear un array que contenga una lista de diferentes tipos de comida.
*   **Detalle**:
    *   `const comidas = [...]`: Declara una constante `comidas` y le asigna un array con tres cadenas de texto.

2️⃣ **Verificación de la Inclusión de "Sushi" con `includes()` y Visualización**

```js
if (comidas.includes('Sushi')) {
    console.log('Sushi se encuentra en la lista de comidas');
} else {
    console.log('Sushi NO se encuentra en la lista de comidas');
}
```

*   **Propósito**: Determinar si el elemento "Sushi" existe en el array `comidas` y mostrar un mensaje apropiado.
*   **Detalle**:
    *   `comidas.includes('Sushi')`: El método `includes()` se llama sobre el array `comidas`.
        *   Este método comprueba si el array contiene el elemento especificado ("Sushi").
        *   Devuelve `true` si el elemento se encuentra en el array, y `false` en caso contrario. La comparación es sensible a mayúsculas y minúsculas.
    *   `if (...)`: Se utiliza una estructura `if-else` para actuar según el valor booleano devuelto por `includes()`.
        *   Si `comidas.includes('Sushi')` es `true`, se ejecuta el primer `console.log`.
        *   Si es `false` (como en este caso, ya que "Sushi" no está en la lista), se ejecuta el `console.log` dentro del bloque `else`.

## Salida Esperada en Consola

```
Sushi NO se encuentra en la lista de comidas
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `verificarComida.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa el mensaje de confirmación impreso en la consola.

🏁 **Resumen**

Este script demuestra el uso del método `includes()` de los arrays, que proporciona una forma sencilla y legible de verificar la presencia de un elemento específico dentro de un array, devolviendo un valor booleano.