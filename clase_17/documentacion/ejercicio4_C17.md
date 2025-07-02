# 🔠 Documentación del Código: Ejercicio 4 - Transformación y Análisis de Cadenas

## Descripción General

Este script de JavaScript interactúa con el usuario para crear una lista de nombres. Luego, una función `transformarYAnalizarNombres` procesa esta lista para:
1.  Verificar si existe el nombre "juan".
2.  Crear una nueva lista reemplazando "maria" por "ana".
3.  Encontrar el índice del nombre "pedro".
4.  Crear una cadena de nombres ordenados alfabéticamente y separados por puntos.
La función devuelve un objeto con todos estos resultados, que se imprime en la consola.

---

## Requisitos Previos

Este script requiere el paquete `prompt-sync` para solicitar la entrada del usuario en un entorno Node.js.

```bash
npm install prompt-sync
```

## Funcionamiento del Código

### 1️⃣ Función `crearListaNombres` y Entrada de Usuario
```js
const prompt = require('prompt-sync')();

const crearListaNombres = () => {
    const nombres = [];
    let continuar = true;
    while (continuar) {
        let nombre = prompt('Ingresa un nombre o escriba salir para terminar: ').toLowerCase();
        if (nombre !== 'salir') {
            nombres.push(nombre);
        } else {
            continuar = false;
        }
    }
    return nombres;
};

const listaNombres = crearListaNombres();
console.log(listaNombres);
```
*   **Propósito**: Crear una función que permita al usuario ingresar nombres de forma continua hasta que escriba "salir".
*   **Lógica**: Utiliza un ciclo `while` para solicitar nombres. Cada nombre se convierte a minúsculas y se añade al array `nombres`. El ciclo termina cuando el usuario escribe "salir". Finalmente, se imprime la lista creada.

### 2️⃣ Función de Transformación `transformarYAnalizarNombres`
```js
const transformarYAnalizarNombres = array => {
    const arrayCopiado = [...array];
    const transformacion = arrayCopiado.map(element => {
        return element.replace('maria', 'ana').trim();
    });
    const estaJuan = arrayCopiado.some(element => element === 'juan');
    const indicePedro = arrayCopiado.findIndex(element => element === 'pedro');
    const ordenados = [...arrayCopiado].sort().join(' . ');

    return {
        estaJuan,
        transformacion,
        indicePedro,
        ordenados
    };
};
```
*   **Propósito**: Encapsular todas las operaciones de análisis y transformación sobre la lista de nombres.
*   **Lógica**:
    1.  **Copia**: Crea una copia del array para no modificar el original en algunas operaciones.
    2.  **Transformación**: Usa `map` para crear un nuevo array donde "maria" es reemplazado por "ana" y se eliminan espacios extra con `trim`.
    3.  **Verificación**: Usa `some` para verificar si "juan" está en la lista.
    4.  **Búsqueda de Índice**: Usa `findIndex` para encontrar la posición de "pedro".
    5.  **Ordenamiento y Unión**: Crea otra copia, la ordena alfabéticamente con `sort` y la une en una cadena con `join`.
    6.  **Retorno**: Devuelve un objeto con todos los resultados.

### 3️⃣ Ejecución y Visualización
```js
const resultado = transformarYAnalizarNombres(listaNombres);
console.log(resultado.estaJuan);
console.log(resultado.transformacion);
console.log(resultado.indicePedro);
console.log(resultado.ordenados);
```
*   **Propósito**: Llamar a la función de transformación y mostrar cada uno de los resultados.
*   **Lógica**: Se invoca a la función y luego se imprime cada propiedad del objeto resultante en una línea separada.

---

## Salida Esperada por Consola

A continuación se muestra una interacción donde el usuario ingresa "julian", "maria", "pedro", "andrea" y luego "salir".

**Interacción en consola:**
```
Ingresa un nombre o escriba salir para terminar: julian
Ingresa un nombre o escriba salir para terminar: maria
Ingresa un nombre o escriba salir para terminar: pedro
Ingresa un nombre o escriba salir para terminar: andrea
Ingresa un nombre o escriba salir para terminar: salir
```

**Resultado en consola:**
```
[ 'julian', 'maria', 'pedro', 'andrea' ]
false
[ 'julian', 'ana', 'pedro', 'andrea' ]
2
andrea . julian . maria . pedro
```

---

## 🚀 Ejecución del Script

1.  Guarda el código en un archivo con extensión `.js` (ej. `analizarNombres.js`).
2.  Asegúrate de tener Node.js y `prompt-sync` instalado.
3.  Abre una terminal y ejecuta:
    ```bash
    node analizarNombres.js
    ```

---

## 🏁 Resumen

Este script es un ejercicio completo que combina la entrada dinámica de datos del usuario con un conjunto de transformaciones y análisis de arrays de cadenas. Demuestra el uso de `map`, `some`, `findIndex`, `sort` y `join`, mostrando cómo se pueden encadenar o usar por separado para lograr diferentes objetivos.