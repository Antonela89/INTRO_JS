# Documentación del Código: Ejercicio 6 - El Deportista y su Entrenamiento

## Descripción General

Este script de JavaScript define un objeto literal llamado `deportista` que representa a un atleta con propiedades como `nombre`, `energia` y `experiencia`. El objeto también incluye un método llamado `entrenarHoras`. Este método permite simular el entrenamiento del deportista: recibe una cantidad de horas como parámetro, disminuye la energía del deportista y aumenta su experiencia según unas reglas definidas. El script luego realiza varias llamadas a este método y muestra cómo cambian los atributos del deportista.

---

## Requisitos Previos

Este script no requiere bibliotecas externas. Utiliza funcionalidades básicas de JavaScript, incluyendo la definición de objetos literales y métodos. Puede ejecutarse directamente en un entorno Node.js o en la consola de un navegador.

## Funcionamiento del Código

El script se desarrolla en los siguientes pasos:

1️⃣ **Definición del Objeto Literal `deportista`**

```js
let deportista = {
    nombre: 'Carlos',
    energia: 100,
    experiencia: 0,
    entrenarHoras: function(horas) {
        this.energia -= horas * 5;
        this.experiencia += horas * 2;
    }
}
```

*   **Propósito**: Crear un objeto que encapsule los datos y el comportamiento de un deportista.
*   **Detalle**:
    *   `let deportista = { ... }`: Declara una variable `deportista` y le asigna un objeto literal.
    *   `nombre: 'Carlos'`: Propiedad que almacena el nombre del deportista.
    *   `energia: 100`: Propiedad que almacena el nivel de energía inicial del deportista.
    *   `experiencia: 0`: Propiedad que almacena el nivel de experiencia inicial del deportista.
    *   `entrenarHoras: function(horas) { ... }`: Define un método (una función como propiedad de un objeto) llamado `entrenarHoras`.
        *   Este método acepta un parámetro `horas`, que representa la cantidad de horas de entrenamiento.
        *   `this.energia -= horas * 5;`: Dentro del método, `this` se refiere al objeto `deportista`. Esta línea disminuye la `energia` del deportista. Por cada hora de entrenamiento, la energía disminuye en 5 unidades.
        *   `this.experiencia += horas * 2;`: Esta línea aumenta la `experiencia` del deportista. Por cada hora de entrenamiento, la experiencia aumenta en 2 unidades.

2️⃣ **Simulación de Entrenamientos y Visualización de Atributos**

```js
deportista.entrenarHoras(1);
console.log(deportista.energia);    // Esperado: 100 - (1*5) = 95
console.log(deportista.experiencia); // Esperado: 0 + (1*2) = 2

deportista.entrenarHoras(2);
console.log(deportista.energia);    // Esperado: 95 - (2*5) = 85
console.log(deportista.experiencia); // Esperado: 2 + (2*2) = 6

deportista.entrenarHoras(3);
console.log(deportista.energia);    // Esperado: 85 - (3*5) = 70
console.log(deportista.experiencia); // Esperado: 6 + (3*2) = 12
```

*   **Propósito**: Demostrar el uso del método `entrenarHoras` y observar cómo afecta las propiedades `energia` y `experiencia` del objeto `deportista`.
*   **Detalle**:
    *   `deportista.entrenarHoras(1);`: Se llama al método `entrenarHoras` del objeto `deportista`, pasándole `1` como argumento. Esto simula 1 hora de entrenamiento.
    *   `console.log(deportista.energia);` y `console.log(deportista.experiencia);`: Después de cada sesión de entrenamiento, se imprimen los valores actualizados de `energia` y `experiencia` para ver los cambios.
    *   Este proceso se repite para 2 horas y luego para 3 horas de entrenamiento.

## Salida Esperada en Consola

```
95
2
85
6
70
12
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `entrenamientoDeportista.js`).
2.  **Opción A: Usando Node.js**
    *   Abre una terminal o línea de comandos.
    *   Navega hasta el directorio donde guardaste el archivo.
    *   Ejecuta el script con el comando:
        ```bash
        node entrenamientoDeportista.js
        ```
3.  **Opción B: Usando un Navegador Web**
    *   Crea un archivo HTML básico y enlaza el archivo JavaScript.
    *   Abre el HTML en un navegador y revisa la consola de desarrollador.
4.  Verás los valores de energía y experiencia del deportista impresos en la consola después de cada sesión de entrenamiento.

🏁 **Resumen**

Este script es un excelente ejemplo de cómo los objetos en JavaScript pueden agrupar datos (propiedades) y funcionalidades (métodos) relacionadas. Demuestra el uso de `this` dentro de un método para referirse a las propiedades del propio objeto, permitiendo que el objeto modifique su propio estado.