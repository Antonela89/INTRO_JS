# Documentación del Código: Actividad 1 - Detective del Scope

## Descripción General

Este script de JavaScript explora el concepto de alcance (scope) de variables. Define una variable global llamada `fruta` con el valor "Manzana". Luego, crea una función `elegirFruta` que declara otra variable también llamada `fruta` (con alcance local a la función) y le asigna el valor "Banana". La función imprime su variable `fruta` local. Después de llamar a la función, el script imprime la variable `fruta` global. El objetivo es observar qué valor de `fruta` se muestra en cada caso.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript y puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Declaración de la Variable Global `fruta`**

```js
let fruta = "Manzana";
```

*   **Propósito**: Crear una variable `fruta` en el alcance global del script.
*   **Detalle**:
    *   `let fruta = "Manzana";`: Declara la variable `fruta` y le asigna la cadena de texto "Manzana". Esta variable es accesible desde cualquier parte del script, incluyendo dentro de funciones (a menos que sea "sombreada" por una variable local con el mismo nombre).

2️⃣ **Definición de la Función `elegirFruta` con Variable Local `fruta`**

```js
function elegirFruta() {
  let fruta = "Banana";
  console.log(fruta);
}
```

*   **Propósito**: Crear una función que defina su propia variable `fruta` (local) y la imprima.
*   **Detalle**:
    *   `function elegirFruta() { ... }`: Declara una función llamada `elegirFruta`.
    *   `let fruta = "Banana";`: Dentro de la función, se declara una nueva variable también llamada `fruta` y se le asigna el valor "Banana". Esta variable `fruta` es local a la función `elegirFruta` y es distinta de la variable global `fruta`. "Sombrea" o "esconde" la variable global `fruta` dentro del alcance de esta función.
    *   `console.log(fruta);`: Imprime el valor de la variable `fruta` local (que es "Banana").

3️⃣ **Llamada a la Función `elegirFruta`**

```js
elegirFruta();
```

*   **Propósito**: Ejecutar la función `elegirFruta`.
*   **Detalle**:
    *   Al llamar a `elegirFruta()`, se ejecuta el código dentro de la función. Se declara la `fruta` local ("Banana") y se imprime.

4️⃣ **Impresión de la Variable Global `fruta`**

```js
console.log(fruta);
```

*   **Propósito**: Mostrar el valor de la variable `fruta` que existe en el alcance global, después de que la función `elegirFruta` haya terminado su ejecución.
*   **Detalle**:
    *   `console.log(fruta);`: Esta línea se ejecuta en el alcance global. La variable `fruta` a la que se refiere aquí es la global, que se inicializó con "Manzana". La variable `fruta` local de la función `elegirFruta` ya no existe una vez que la función ha terminado.

## Salida Esperada en Consola

```
Banana
Manzana
```

*   **¿Cuál fruta se muestra primero?** "Banana" (impresa desde dentro de la función `elegirFruta`, refiriéndose a su variable local).
*   **¿Y cuál después?** "Manzana" (impresa desde el alcance global, refiriéndose a la variable global).

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `scopeFruta.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node scopeFruta.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás los dos nombres de fruta impresos en la consola, en el orden indicado.

🏁 **Resumen**

Este script es un excelente ejemplo para ilustrar el concepto de "sombreado de variables" (variable shadowing) y la diferencia entre el alcance global y el alcance local (o de función). Demuestra que una variable declarada dentro de una función con el mismo nombre que una variable global tendrá precedencia dentro de esa función, sin afectar el valor de la variable global fuera de ella.