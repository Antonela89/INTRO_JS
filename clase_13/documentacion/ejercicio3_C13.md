# Documentación del Código: Ejercicio 3 - Mensaje Global y Local (Scope)

## Descripción General

Este script de JavaScript demuestra el concepto de alcance (scope) de variables, específicamente el scope global y el scope local (o de función). Declara una variable global `saludoGlobal`. Luego, define una función `mostrarMensaje` que declara una variable local `saludoLocal` y procede a imprimir ambas variables (la global y la local) en la consola.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript y puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ **Declaración de la Variable Global**

```js
const saludoGlobal = 'Hola desde el scope global';
```

*   **Propósito**: Crear una variable que sea accesible desde cualquier parte del script, incluyendo dentro de las funciones.
*   **Detalle**:
    *   `const saludoGlobal = 'Hola desde el scope global';`: Declara una constante `saludoGlobal` y le asigna una cadena de texto. Al ser declarada fuera de cualquier función, esta variable tiene alcance global.

2️⃣ **Definición de la Función `mostrarMensaje` con Variable Local**

```js
function mostrarMensaje(){
    const saludoLocal = 'Hola desde el scope local';
    console.log(`saludo Global: ${saludoGlobal} y saludo local: ${saludoLocal}`);
}
```

*   **Propósito**: Crear una función que defina su propia variable (con alcance local) y que también acceda a la variable global.
*   **Detalle**:
    *   `function mostrarMensaje(){ ... }`: Declara una función llamada `mostrarMensaje`.
    *   `const saludoLocal = 'Hola desde el scope local';`: Dentro de la función, se declara una constante `saludoLocal`. Esta variable solo existe y es accesible dentro del cuerpo de la función `mostrarMensaje` (scope local).
    *   `console.log(\`saludo Global: ${saludoGlobal} y saludo local: ${saludoLocal}\`);`: Esta línea imprime ambos mensajes.
        *   Puede acceder a `saludoGlobal` porque las variables globales son visibles desde scopes internos (como el de una función).
        *   Puede acceder a `saludoLocal` porque está declarada dentro del mismo scope de la función.

3️⃣ **Llamada a la Función `mostrarMensaje`**

```js
mostrarMensaje();
```

*   **Propósito**: Ejecutar la función `mostrarMensaje` para que declare su variable local e imprima los mensajes.
*   **Detalle**:
    *   Al llamar a `mostrarMensaje()`, se ejecuta el código dentro de la función, lo que resulta en la impresión de los dos saludos en la consola.

## Salida Esperada en Consola

```
saludo Global: Hola desde el scope global y saludo local: Hola desde el scope local
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `scopeDemo.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node scopeDemo.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás ambos saludos impresos en la consola.

🏁 **Resumen**

Este script es un ejemplo claro y conciso para entender la diferencia entre el alcance global y el alcance local de las variables en JavaScript. Demuestra que las funciones pueden acceder a variables globales, pero las variables declaradas dentro de una función (locales) no son accesibles desde fuera de ella.