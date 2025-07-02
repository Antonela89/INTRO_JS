# ✍️ Documentación del Código: Ejercicio 2 - Análisis y Modificación de Cadenas de Texto

## Descripción General

Este script de JavaScript solicita al usuario que ingrese una oración. Luego, una función `procesarOracion` realiza una serie de transformaciones y análisis sobre esa oración:
1.  Elimina los espacios en blanco de los extremos.
2.  Divide la oración en un array de palabras.
3.  Reemplaza todas las vocales 'a' por '@'.
4.  Encuentra la posición (índice) de la primera aparición de la palabra "javascript".
5.  Crea una nueva cadena con las palabras unidas por guiones.
La función devuelve un objeto con todos estos resultados, que luego se imprime en la consola.

---

## Requisitos Previos

Este script requiere el paquete `prompt-sync` para solicitar la entrada del usuario en un entorno Node.js.

```bash
npm install prompt-sync
```

## Funcionamiento del Código

### 1️⃣ Solicitud de la Oración al Usuario
```js
const prompt = require('prompt-sync')();
const oracion = prompt('Ingresa una oración: ');
```
*   **Propósito**: Obtener la oración que será procesada.
*   **Lógica**: Se utiliza `prompt` para capturar la entrada del usuario y almacenarla en la variable `oracion`.

### 2️⃣ Función de Procesamiento `procesarOracion`
```js
const procesarOracion = (oracion) => {
    const sinEspacios = oracion.trim();
    const palabras = sinEspacios.split(' ');
    const reemplazo = sinEspacios.replace(/a/g, '@');
    const posicionJavascript = palabras.findIndex(palabra => palabra.toLowerCase() === 'javascript');
    const cadenaConGuiones = palabras.join(' - ');

    return {
        palabras,
        reemplazo,
        posicionJavascript,
        cadenaConGuiones
    };
};
```
*   **Propósito**: Encapsular todas las operaciones de manipulación de la cadena de texto.
*   **Lógica**:
    1.  `trim()`: Elimina los espacios en blanco al inicio y al final.
    2.  `split(' ')`: Divide la cadena limpia en un array de palabras.
    3.  `replace(/a/g, '@')`: Utiliza una expresión regular para reemplazar todas las 'a' (globalmente) por '@'.
    4.  `findIndex()`: Busca en el array de palabras la primera que sea "javascript" (insensible a mayúsculas) y devuelve su índice. Si no la encuentra, devuelve -1.
    5.  `join(' - ')`: Une las palabras del array en una sola cadena, separándolas con " - ".
    6.  **Retorno**: Devuelve un objeto que contiene todos los resultados de las operaciones.

### 3️⃣ Ejecución y Visualización
```js
const oracionModificada = procesarOracion(oracion);
console.log(oracionModificada);
```
*   **Propósito**: Llamar a la función de procesamiento y mostrar el objeto con los resultados.
*   **Lógica**: Se invoca a `procesarOracion` y el objeto devuelto se imprime en la consola.

---

## Salida Esperada por Consola

A continuación se muestra una interacción de ejemplo donde el usuario ingresa la oración "  esta es una fantastica oracion sobre javascript  ".

**Interacción en consola:**
```
Ingresa una oración:   esta es una fantastica oracion sobre javascript  
```

**Resultado en consola:**
```
{
  palabras: [
    'esta',       'es',
    'una',        'fantastica',
    'oracion',    'sobre',
    'javascript'
  ],
  reemplazo: 'est@ es un@ f@nt@stic@ or@cion sobre j@v@script',
  posicionJavascript: 6,
  cadenaConGuiones: 'esta - es - una - fantastica - oracion - sobre - javascript'
}
```
---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `procesarOracion.js`).
2.  Asegúrate de tener Node.js y `prompt-sync` instalado.
3.  Abre una terminal y navega al directorio del archivo.
4.  Ejecuta con el comando:
    ```bash
    node procesarOracion.js
    ```

---

## 🏁 Resumen

Este script es un excelente ejercicio que combina múltiples métodos de manipulación de cadenas (`trim`, `split`, `replace`, `join`) y arrays (`findIndex`). Demuestra cómo una función puede realizar un flujo de trabajo de procesamiento de texto y devolver un conjunto de resultados estructurados en un objeto.