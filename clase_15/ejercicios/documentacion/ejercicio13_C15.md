# Documentación del Código: Ejercicio 13 - Simulador de Cola de Atención al Cliente

## Descripción General

Este script de JavaScript simula una cola de atención al cliente. Comienza con una lista inicial de clientes en espera. Utiliza un ciclo `while` para atender a los clientes uno por uno, eliminándolos del frente de la cola. Si un cliente es "VIP", se muestra un mensaje de atención prioritaria. El script informa sobre el cliente que está siendo atendido, los clientes restantes en la cola después de cada atención, y finalmente, el total de clientes atendidos cuando la cola está vacía.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, incluyendo arrays, el método `shift()` de los arrays, ciclos `while` y condicionales. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script sigue una secuencia lógica de varios pasos:

1️⃣ **Inicialización de la Cola y Variables**

```js
const colaInicial = ['Ana', 'Carlos', 'VIP', 'Sofía', 'Juan'];
let clientesAtendidos = 0;

console.log("Inicia la atención de clientes...");
console.log("Clientes en espera:", colaInicial.join(', '));
console.log("------------------------------------");
```

*   **Propósito**: Establecer la lista inicial de clientes en espera, inicializar un contador para los clientes atendidos y mostrar un mensaje de inicio.
*   **Detalle**:
    *   `const colaInicial = [...]`: Define un array `colaInicial` con los nombres de los clientes.
    *   `let clientesAtendidos = 0;`: Inicializa un contador para llevar la cuenta de cuántos clientes han sido atendidos.
    *   Los `console.log` iniciales informan sobre el comienzo del proceso y el estado inicial de la cola.

2️⃣ **Procesamiento de la Cola con un Ciclo `while`**

```js
while (colaInicial.length > 0) {
    // ... cuerpo del ciclo ...
}
```

*   **Propósito**: Continuar atendiendo clientes mientras haya alguno en la `colaInicial`.
*   **Detalle**:
    *   `while (colaInicial.length > 0)`: El ciclo se ejecuta mientras la longitud del array `colaInicial` sea mayor que cero (es decir, mientras haya clientes en la cola).

3️⃣ **Atención al Cliente Dentro del Ciclo**

```js
    const clienteActual = colaInicial.shift();

    if (clienteActual === 'VIP') {
        console.log(`¡Atención prioritaria! Atendiendo a cliente: ${clienteActual}`);
    } else {
        console.log(`Atendiendo a cliente: ${clienteActual}`);
    }

    clientesAtendidos++;

    console.log(`Clientes restantes en la cola: ${colaInicial.join(', ')}`);
    console.log("------------------------------------");
```

*   **Propósito**: Tomar al siguiente cliente de la cola, atenderlo (mostrando un mensaje), incrementar el contador de atendidos y mostrar el estado actualizado de la cola.
*   **Detalle**:
    *   `const clienteActual = colaInicial.shift();`:
        *   El método `shift()` elimina el primer elemento del array `colaInicial` (simulando que el primer cliente de la fila es atendido) y devuelve ese elemento.
        *   El cliente eliminado se almacena en `clienteActual`.
    *   `if (clienteActual === 'VIP')`: Comprueba si el `clienteActual` es "VIP".
        *   Si es "VIP", se muestra un mensaje de atención prioritaria.
        *   Si no, se muestra un mensaje de atención estándar.
    *   `clientesAtendidos++;`: Incrementa el contador de clientes atendidos.
    *   Los siguientes `console.log` muestran los clientes que quedan en la cola y una línea separadora.

4️⃣ **Mensaje Final y Total de Atendidos**

```js
console.log("¡La cola está vacía!");
console.log(`Total de clientes atendidos: ${clientesAtendidos}`);
```

*   **Propósito**: Informar que todos los clientes han sido atendidos y mostrar el número total de atenciones.
*   **Detalle**:
    *   Estas líneas se ejecutan una vez que el ciclo `while` ha terminado (cuando `colaInicial.length` es 0).
    *   Se imprime un mensaje indicando que la cola está vacía.
    *   Se imprime el valor final de `clientesAtendidos`.

## Salida Esperada en Consola

```
Inicia la atención de clientes...
Clientes en espera: Ana, Carlos, VIP, Sofía, Juan
------------------------------------
Atendiendo a cliente: Ana
Clientes restantes en la cola: Carlos, VIP, Sofía, Juan
------------------------------------
Atendiendo a cliente: Carlos
Clientes restantes en la cola: VIP, Sofía, Juan
------------------------------------
¡Atención prioritaria! Atendiendo a cliente: VIP
Clientes restantes en la cola: Sofía, Juan
------------------------------------
Atendiendo a cliente: Sofía
Clientes restantes en la cola: Juan
------------------------------------
Atendiendo a cliente: Juan
Clientes restantes en la cola: 
------------------------------------
¡La cola está vacía!
Total de clientes atendidos: 5
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `colaAtencion.js`).
2.  Ejecuta el script en un entorno Node.js o en la consola de un navegador.
3.  Observa la simulación de la atención al cliente impresa en la consola.

🏁 **Resumen**

Este script es una simulación efectiva de una estructura de datos tipo cola (FIFO - First In, First Out) utilizando un array y el método `shift()`. Demuestra cómo procesar elementos de una colección uno por uno hasta que la colección esté vacía, y cómo manejar casos especiales dentro del procesamiento.