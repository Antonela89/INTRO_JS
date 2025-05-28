## Documentación del Código: Ejercicio 5 - Saludo Personalizado

# Descripción General

Este script de JavaScript está diseñado para solicitar al usuario que ingrese su nombre y, posteriormente, mostrar un saludo personalizado en la consola utilizando el nombre proporcionado. Este ejercicio es una introducción básica a la interacción con el usuario para obtener datos de tipo cadena (texto) y a la manipulación de cadenas para la salida.

# Requisitos Previos

Para ejecutar este código en un entorno Node.js, es necesario contar con el paquete prompt-sync. Este módulo permite utilizar la función prompt(), similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado prompt-sync, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

npm install prompt-sync

# Funcionamiento del Código

El script sigue una secuencia lógica de tres pasos principales:

1️⃣ Inicialización de prompt-sync

![alt text](../imagenes/1-prompt-sync.png)

Propósito: Esta línea importa e inicializa el módulo prompt-sync.

Detalle:

const prompt = require('prompt-sync')();

La función require('prompt-sync') carga el módulo.

El () al final lo instancia, permitiendo que la variable prompt se use como una función para capturar la entrada del usuario.

2️⃣ Solicitud del Nombre del Usuario

<!-- ![alt text](../imagenes/ej5-2-entrada.png) -->

Propósito: Se pide al usuario que ingrese su nombre.

Detalle:

const nombre = prompt('Ingrese su nombre: ');

prompt('Ingrese su nombre: '): Muestra el mensaje "Ingrese su nombre: " en la consola y espera a que el usuario escriba su nombre y presione Enter.

La entrada recibida por prompt() es siempre una cadena de texto. No se necesita conversión en este caso, ya que se espera un nombre.

const nombre = ...: El nombre ingresado se almacena en la variable nombre.

3️⃣ Visualización del Saludo Personalizado

<!-- ![alt text](../imagenes/ej5-3-visualizacion.png) -->

Propósito: Se muestra un mensaje de saludo personalizado en la consola, incorporando el nombre del usuario.

Detalle:

El script original muestra dos formas de lograr esto, una activa y una comentada:

Concatenación de cadenas (método activo en el ejemplo):

console.log('Hola ' + nombre + ', ¡bienvenido/a!');

Se utiliza el operador + para concatenar (unir) las cadenas de texto literales con el valor de la variable nombre.

Plantillas de cadena (template literals - método comentado en el ejemplo):

<!-- //console.log(`Hola, ${nombre}! Bienvenido/a al programa!`); -->

Las plantillas de cadena, delimitadas por acentos graves (`), permiten incrustar expresiones (como variables) directamente dentro de la cadena usando la sintaxis ${expresion}. Este método suele ser más legible para cadenas complejas.

Ambos métodos logran el mismo resultado: mostrar un saludo personalizado.

🚀 Ejecución del Script

Para ejecutar este script:

Guarda el código en un archivo con extensión .js (por ejemplo, saludo.js).

Asegúrate de tener Node.js instalado en tu sistema.

Abre una terminal o línea de comandos.

Navega hasta el directorio donde guardaste el archivo.

Ejecuta el script con el comando:

<!-- ![alt text](../imagenes/ej5-4-ejecucion.png) -->


El programa te solicitará que ingreses tu nombre. Escríbelo y presiona Enter.

Verás el saludo personalizado impreso en la consola.

🏁 Resumen

Este script es un ejercicio introductorio excelente para comprender cómo obtener entradas de texto del usuario y cómo manipular cadenas para crear salidas dinámicas y personalizadas. Demuestra dos métodos comunes para la construcción de cadenas en JavaScript: la concatenación tradicional y las plantillas de cadena (template literals).

--- 