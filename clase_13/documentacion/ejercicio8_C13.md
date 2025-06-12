# Documentación del Código: Ejercicio 8 - Convertir Grados Celsius a Fahrenheit (Función Expresada)

## Descripción General

Este script de JavaScript define una función expresada llamada `convertirCelsiusAFahrenheit`. Esta función solicita al usuario que ingrese una temperatura en grados Celsius, la convierte a grados Fahrenheit utilizando la fórmula estándar: Fahrenheit = (Celsius × 9/5) + 32, y devuelve la temperatura convertida. El script luego llama a esta función con la entrada del usuario y muestra un mensaje con ambas temperaturas en la consola.

---

## Requisitos Previos

Para ejecutar este código en un entorno **Node.js** y solicitar la entrada del usuario, es necesario contar con el paquete `prompt-sync`.

Si no tienes instalado `prompt-sync`, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

```bash
npm install prompt-sync
```

## Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ **Inicialización de `prompt-sync`**

```js
const prompt = require('prompt-sync')();
```

*   **Propósito**: Importar e inicializar el módulo `prompt-sync` para permitir la entrada de datos del usuario desde la consola.
*   **Detalle**:
    *   `require('prompt-sync')()`: Carga y crea una instancia del módulo.

2️⃣ **Solicitud de la Temperatura al Usuario**

```js
let temperatura = parseFloat(prompt('Ingresa la temperatura: '));
```

*   **Propósito**: Pedir al usuario que ingrese la temperatura en grados Celsius y convertirla a un número de punto flotante.
*   **Detalle**:
    *   `prompt('Ingresa la temperatura: ')`: Muestra el mensaje y espera la entrada del usuario.
    *   `parseFloat()`: Convierte la cadena de texto ingresada a un número de punto flotante, permitiendo temperaturas decimales.
    *   La temperatura ingresada se almacena en la variable `temperatura`.

3️⃣ **Definición de la Función Expresada `convertirCelsiusAFahrenheit`**

```js
let convertirCelsiusAFahrenheit = function(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
```

*   **Propósito**: Crear una función que tome una temperatura en Celsius como parámetro y devuelva su equivalente en Fahrenheit.
*   **Detalle**:
    *   `let convertirCelsiusAFahrenheit = function(celsius) { ... }`: Define una función expresada y la asigna a la variable `convertirCelsiusAFahrenheit`. La función acepta un parámetro `celsius`.
    *   `let fahrenheit = (celsius * 9/5) + 32;`: Aplica la fórmula de conversión. Multiplica `celsius` por 9/5 (o 1.8) y luego suma 32. El resultado se almacena en la variable local `fahrenheit`.
    *   `return fahrenheit;`: La función devuelve el valor calculado de `fahrenheit`.

4️⃣ **Llamada a la Función y Visualización del Resultado**

```js
console.log(`${temperatura}°C es igual a ${convertirCelsiusAFahrenheit(temperatura)}°F`);
```

*   **Propósito**: Ejecutar la función `convertirCelsiusAFahrenheit` con la temperatura ingresada por el usuario y mostrar un mensaje con la temperatura original en Celsius y la convertida en Fahrenheit.
*   **Detalle**:
    *   `convertirCelsiusAFahrenheit(temperatura)`: Llama a la función `convertirCelsiusAFahrenheit` pasándole la variable `temperatura` (que contiene la entrada del usuario en Celsius) como argumento.
    *   `console.log(\`...\`);`: Imprime el mensaje formateado en la consola. La plantilla literal incluye la `temperatura` original y el resultado de la función.

## Ejemplo de Interacción y Salida en Consola

**Si el usuario ingresa 25:**
```
Ingresa la temperatura: 25
25°C es igual a 77°F
```

**Si el usuario ingresa 0:**
```
Ingresa la temperatura: 0
0°C es igual a 32°F
```

🚀 **Ejecución del Script**

1.  Guarda el código en un archivo con extensión `.js` (por ejemplo, `celsiusAFahrenheit.js`).
2.  Asegúrate de tener Node.js instalado en tu sistema.
3.  Si aún no lo has hecho, instala `prompt-sync` en el directorio de tu proyecto:
    ```bash
    npm install prompt-sync
    ```
4.  Abre una terminal o línea de comandos.
5.  Navega hasta el directorio donde guardaste el archivo.
6.  Ejecuta el script con el comando:
    ```bash
    node celsiusAFahrenheit.js
    ```
7.  El programa te solicitará que ingreses la temperatura en Celsius.
8.  Verás la conversión a Fahrenheit impresa en la consola.

🏁 **Resumen**

Este script es un ejemplo práctico de cómo definir una función expresada para realizar una conversión de unidades común. Muestra cómo integrar la entrada del usuario con la lógica de la función para producir un resultado útil.