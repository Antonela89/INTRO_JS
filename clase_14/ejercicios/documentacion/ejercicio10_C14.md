# Documentación del Código: Ejercicio 10 - Flores Favoritas

## Descripción General

Este script de JavaScript interactúa con el usuario para registrar sus tres flores favoritas y luego verificar si una flor específica, también ingresada por el usuario, se encuentra entre sus favoritas. Además, cuenta cuántas veces se mencionó la flor a verificar dentro de la lista de favoritas. Las flores se almacenan en un array y se manejan en minúsculas para comparaciones insensibles a mayúsculas/minúsculas.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de seis pasos principales:

1️⃣ **Inicialización de `prompt-sync` y Declaración del Array**

```js
const prompt = require('prompt-sync')();

let floresFavoritas = [];
```

*   **Propósito**: Importar el módulo para la entrada del usuario y crear un array vacío para almacenar las flores favoritas.
*   **Detalle**:
    *   `const prompt = require('prompt-sync')();`: Importa e inicializa `prompt-sync`.
    *   `let floresFavoritas = [];`: Declara un array vacío `floresFavoritas`.

2️⃣ **Ciclo `for` para Ingresar Tres Flores Favoritas**

```js
for (let i = 0; i < 3; i++) {
    let flor = prompt(`Ingresa la flor n° ${i + 1}: `).toLowerCase();
    floresFavoritas[i] = flor;
}
console.log(floresFavoritas); // Muestra el array de flores ingresadas
```

*   **Propósito**: Solicitar al usuario que ingrese sus tres flores favoritas y almacenarlas en el array `floresFavoritas`, convirtiéndolas a minúsculas.
*   **Detalle**:
    *   `for (let i = 0; i < 3; i++)`: Un ciclo `for` que se ejecuta 3 veces.
    *   `let flor = prompt(\`Ingresa la flor n° ${i + 1}: \`).toLowerCase();`: Solicita el nombre de una flor, lo convierte a minúsculas y lo almacena temporalmente.
    *   `floresFavoritas[i] = flor;`: Asigna la flor ingresada a la posición `i` del array `floresFavoritas` (asignación manual de elementos).
    *   `console.log(floresFavoritas);`: Imprime el array con las flores ingresadas.

3️⃣ **Solicitud de la Flor a Verificar**

```js
let florAVerificar = prompt('Ingresa la flor a verificar: ').toLowerCase();
```

*   **Propósito**: Pedir al usuario la flor específica que desea buscar en su lista de favoritas.
*   **Detalle**:
    *   `prompt(...)`: Muestra el mensaje y espera la entrada.
    *   `.toLowerCase()`: Convierte la entrada a minúsculas para una búsqueda consistente.
    *   La flor a buscar se almacena en `florAVerificar`.

4️⃣ **Definición de la Función `estaEnLista`**

```js
const estaEnLista = (florBuscada, lista) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === florBuscada) {
            return true; // La flor se encontró
        }
    }
    return false; // La flor no se encontró después de recorrer toda la lista
}
```

*   **Propósito**: Crear una función reutilizable para determinar si un elemento específico (`florBuscada`) existe dentro de un array dado (`lista`).
*   **Detalle**:
    *   Itera sobre `lista`. Si encuentra `florBuscada`, devuelve `true` inmediatamente.
    *   Si el ciclo termina sin encontrarla, devuelve `false`.

5️⃣ **Definición de la Función `cantidadVeces`**

```js
const cantidadVeces = (florBuscada, lista) => {
    let contador = 0;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === florBuscada) {
            contador++;
        }
    }
    return contador;
}
```

*   **Propósito**: Crear una función reutilizable para contar cuántas veces aparece un elemento específico (`florBuscada`) en un array dado (`lista`).
*   **Detalle**:
    *   Inicializa `contador` en 0.
    *   Itera sobre `lista`. Cada vez que `florBuscada` coincide con un elemento, incrementa `contador`.
    *   Devuelve el `contador` final.

6️⃣ **Verificación, Conteo y Visualización de Resultados**

```js
if (estaEnLista(florAVerificar, floresFavoritas)) {
    console.log(`✅ ¡Sí! La flor "${florAVerificar}" está en tu lista de favoritas.`);
} else {
    console.log(`❌ No, la flor "${florAVerificar}" NO está en tu lista de favoritas.`);
}

const cantidad = cantidadVeces(florAVerificar, floresFavoritas);
console.log(`La flor "${florAVerificar}" se mencionó ${cantidad} vez/veces.`);
```

*   **Propósito**: Utilizar las funciones definidas para verificar la presencia de la flor, contar sus ocurrencias y mostrar los resultados al usuario.
*   **Detalle**:
    *   Se llama a `estaEnLista` para determinar si `florAVerificar` está en `floresFavoritas` y se muestra un mensaje apropiado.
    *   Se llama a `cantidadVeces` para contar las ocurrencias de `florAVerificar`.
    *   Se imprime cuántas veces se mencionó la flor.

## Ejemplo de Interacción y Salida en Consola

```
Ingresa la flor n° 1: Rosa
Ingresa la flor n° 2: TulipAn
Ingresa la flor n° 3: rosa
[ 'rosa', 'tulipan', 'rosa' ]
Ingresa la flor a verificar: Rosa
✅ ¡Sí! La flor "rosa" está en tu lista de favoritas.
La flor "rosa" se mencionó 2 vez/veces.
```

```
Ingresa la flor n° 1: clavel
Ingresa la flor n° 2: margarita
Ingresa la flor n° 3: girasol
[ 'clavel', 'margarita', 'girasol' ]
Ingresa la flor a verificar: orquidea
❌ No, la flor "orquidea" NO está en tu lista de favoritas.
La flor "orquidea" se mencionó 0 vez/veces.
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `floresFavoritas.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto.
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node floresFavoritas.js
    ```
7.  Sigue las instrucciones para ingresar tus flores favoritas y la flor a verificar.

🏁 **Resumen**

Este script combina la manipulación de arrays (poblándolos manualmente y recorriéndolos), la entrada del usuario y la definición de funciones auxiliares para realizar tareas específicas como buscar un elemento y contar sus ocurrencias. Es un buen ejemplo de cómo estructurar un pequeño programa interactivo.