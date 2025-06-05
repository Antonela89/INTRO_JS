# Documentación del Código: Ejercicio 9 - Cuenta regresiva para el despegue

## Descripción General

Este script de JavaScript simula una cuenta regresiva para el lanzamiento de un cohete. El programa utiliza un ciclo `for` para contar desde 10 hacia abajo hasta 1, imprimiendo cada número en la consola. Al finalizar la cuenta, imprime el mensaje "¡Despegue!".

---

## Requisitos Previos

Este script no requiere bibliotecas externas como `prompt-sync`, ya que no solicita entrada del usuario. Utiliza funcionalidades básicas de JavaScript y puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de dos pasos principales:

1️⃣ **Realización de la Cuenta Regresiva con un Ciclo `for`**

```js
for (let i = 10; i > 0; i--) {
    console.log(i);
}
```

*   **Propósito**: Iterar desde 10 hacia abajo hasta 1, imprimiendo cada número.
*   **Detalle**:
    *   `for (let i = 10; i > 0; i--)`: Inicia un ciclo `for`.
        *   `let i = 10`: Inicializa una variable contador `i` en 10.
        *   `i > 0`: El ciclo continuará mientras `i` sea mayor que 0.
        *   `i--`: Después de cada iteración, decrementa `i` en 1.
    *   `console.log(i);`: Dentro del ciclo, imprime el valor actual de `i` en la consola.

2️⃣ **Impresión del Mensaje de Despegue**

```js
console.log('¡Despegue!');
```

*   **Propósito**: Mostrar el mensaje final una vez que la cuenta regresiva ha concluido.
*   **Detalle**:
    *   `console.log('¡Despegue!');`: Imprime la cadena de texto "¡Despegue!" en la consola. Esta línea se ejecuta después de que el ciclo `for` haya completado todas sus iteraciones.

## Salida Esperada en Consola

```
10
9
8
7
6
5
4
3
2
1
¡Despegue!
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `cuentaRegresiva.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node cuentaRegresiva.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico (por ejemplo, `index.html`) y enlaza el archivo JavaScript:
        ```html
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cuenta Regresiva</title>
        </head>
        <body>
            <script src="cuentaRegresiva.js"></script>
        </body>
        </html>
        ```
    *   Abre el archivo `index.html` en tu navegador web.
    *   Abre la consola de desarrollador (usualmente con F12) para ver la salida.
4.  Verás la cuenta regresiva y el mensaje de despegue impresos en la consola.

🏁 **Resumen**

Este script es un ejemplo simple y efectivo del uso de un ciclo `for` para realizar una cuenta descendente. Ilustra cómo controlar la iteración para producir una secuencia específica de salida.