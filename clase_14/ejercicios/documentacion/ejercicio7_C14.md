# Documentación del Código: Ejercicio 7 - Mostrar Información de Libros

## Descripción General

Este script de JavaScript define dos objetos literales, `libro1` y `libro2`, cada uno representando un libro con propiedades como `titulo`, `autor` y `anioPublicacion`. Luego, estos objetos se almacenan en un array llamado `libros`. Finalmente, se define una función flecha `mostrarLibros` que toma este array de libros como parámetro y muestra la información de cada libro en la consola, formateada de manera legible.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, incluyendo la definición de objetos literales, arrays y funciones flecha. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script se desarrolla en los siguientes pasos:

1️⃣ **Definición de Objetos `libro1` y `libro2`**

```js
let libro1 = {
    titulo: 'Orgullo y Prejuicio',
    autor: 'Jane Austen',
    anioPublicacion: 1813
}

let libro2 = {
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes Saavedra',
    anioPublicacion: 1605
}
```

*   **Propósito**: Crear representaciones de datos para dos libros diferentes, cada uno con sus atributos específicos.
*   **Detalle**:
    *   Se declaran dos variables, `libro1` y `libro2`, y a cada una se le asigna un objeto literal.
    *   Cada objeto tiene tres propiedades: `titulo` (string), `autor` (string) y `anioPublicacion` (número).

2️⃣ **Creación del Array `libros`**

```js
const libros = [libro1, libro2];
```

*   **Propósito**: Agrupar los objetos libro en una colección (un array) para facilitar su procesamiento conjunto.
*   **Detalle**:
    *   Se declara una constante `libros` y se le asigna un array que contiene las referencias a los objetos `libro1` y `libro2`.

3️⃣ **Definición de la Función Flecha `mostrarLibros`**

```js
let mostrarLibros = listaLibros => {
    for (let i = 0; i < listaLibros.length; i++) {
        console.log(`
            Título: ${listaLibros[i].titulo},
            Autor: ${listaLibros[i].autor},
            Año de publicación: ${listaLibros[i].anioPublicacion}`);
    }
}
```

*   **Propósito**: Crear una función que pueda iterar sobre un array de objetos libro y mostrar la información de cada uno de forma formateada.
*   **Detalle**:
    *   `let mostrarLibros = listaLibros => { ... }`: Define una función flecha llamada `mostrarLibros` que acepta un parámetro `listaLibros` (que se espera sea un array de objetos libro).
    *   `for (let i = 0; i < listaLibros.length; i++)`: Un ciclo `for` que itera sobre cada elemento del array `listaLibros`.
    *   `listaLibros[i]`: En cada iteración, esto accede al objeto libro actual.
    *   `console.log(\`...\`);`: Utiliza una plantilla literal multilínea para imprimir la información del libro actual. Se accede a las propiedades `titulo`, `autor` y `anioPublicacion` del objeto `listaLibros[i]`.

4️⃣ **Llamada a la Función `mostrarLibros`**

```js
mostrarLibros(libros);
```

*   **Propósito**: Ejecutar la función `mostrarLibros`, pasándole el array `libros` que contiene los objetos `libro1` y `libro2`.
*   **Detalle**:
    *   Al llamar a `mostrarLibros(libros)`, la función iterará sobre el array e imprimirá la información de cada libro.

## Salida Esperada en Consola

```

            Título: Orgullo y Prejuicio,
            Autor: Jane Austen,
            Año de publicación: 1813

            Título: Don Quijote de la Mancha,
            Autor: Miguel de Cervantes Saavedra,
            Año de publicación: 1605
```
*(Nota: Las líneas en blanco iniciales en la salida son debidas al salto de línea al inicio de la plantilla literal multilínea en `console.log`)*

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `infoLibros.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node infoLibros.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás la información de cada libro impresa en la consola.

🏁 **Resumen**

Este script es un buen ejemplo de cómo trabajar con colecciones de objetos en JavaScript. Muestra cómo definir objetos con propiedades, agruparlos en arrays y luego procesar (en este caso, mostrar) cada objeto del array utilizando una función y un ciclo.