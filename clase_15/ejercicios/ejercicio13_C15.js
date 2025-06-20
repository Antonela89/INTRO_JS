// Ejercicio 13: Simulador de una cola de atención al cliente
// Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
// 1.  Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
// 2.  Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
// 3.  Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: `["Ana", "Carlos", "VIP", "Sofía", "Juan"]`.

const colaInicial = ['Ana', 'Carlos', 'VIP', 'Sofía', 'Juan'];

let clientesAtendidos = 0;

console.log("Inicia la atención de clientes...");
console.log("Clientes en espera:", colaInicial.join(', '));
console.log("------------------------------------");

while (colaInicial.length > 0) {
    const clienteActual = colaInicial.shift();

    if (clienteActual === 'VIP') {
        console.log(`¡Atención prioritaria! Atendiendo a cliente: ${clienteActual}`);
    } else {
        console.log(`Atendiendo a cliente: ${clienteActual}`);
    }

    clientesAtendidos ++;

    console.log(`Clientes restantes en la cola: ${colaInicial.join(', ')}`);
    console.log("------------------------------------");
}

console.log("¡La cola está vacía!");
console.log(`Total de clientes atendidos: ${clientesAtendidos}`);