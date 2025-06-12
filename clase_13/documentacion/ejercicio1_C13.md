# Documentación del Código: Ejercicio 1 - Área de un Triángulo (Función Declarada)

## Descripción General

Este script de JavaScript define una función declarada llamada `calcularAreaTriangulo`. Esta función recibe dos parámetros, la base y la altura de un triángulo, y calcula su área utilizando la fórmula estándar: Área = (base × altura) / 2. El script luego llama a esta función con valores de ejemplo y muestra el área calculada en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas como `prompt-sync`, ya que los valores de entrada para la función se proporcionan directamente en el código. Utiliza funcionalidades básicas de JavaScript y puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Definición de la Función `calcularAreaTriangulo`**

```js
function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}
```

*   **Propósito**: Crear una función reutilizable que calcule el área de un triángulo dados su base y altura.
*   **Detalle**:
    *   `function calcularAreaTriangulo(base, altura)`: Declara una función llamada `calcularAreaTriangulo` que acepta dos parámetros: `base` y `altura`.
    *   `let area = (base * altura) / 2;`: Dentro de la función, se calcula el área multiplicando la `base` por la `altura` y dividiendo el resultado entre 2. El valor calculado se almacena en una variable local llamada `area`.
    *   `return area;`: La función devuelve el valor calculado de `area`.

2️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(`El área del triángulo es: ${calcularAreaTriangulo(1,2)}`);
```

*   **Propósito**: Ejecutar la función `calcularAreaTriangulo` con valores específicos y mostrar el resultado devuelto en la consola.
*   **Detalle**:
    *   `calcularAreaTriangulo(1,2)`: Se llama a la función `calcularAreaTriangulo` pasándole `1` como argumento para la `base` y `2` como argumento para la `altura`. La función ejecutará el cálculo (1 * 2) / 2 = 1 y devolverá `1`.
    *   `console.log(\`El área del triángulo es: ${...}\`);`: Imprime un mensaje en la consola. La expresión `${calcularAreaTriangulo(1,2)}` se evalúa, y su resultado (que es `1`) se inserta en la cadena de la plantilla literal.

## Salida Esperada en Consola

```
El área del triángulo es: 1
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `areaTriangulo.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node areaTriangulo.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás el área calculada impresa en la consola.

🏁 **Resumen**

Este script es un ejemplo fundamental de cómo definir y utilizar funciones declaradas en JavaScript para encapsular una lógica específica (en este caso, un cálculo matemático). Muestra cómo pasar argumentos a una función y cómo utilizar el valor que esta devuelve.