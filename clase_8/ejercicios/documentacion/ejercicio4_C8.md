## Documentación del Código: Ejercicio 4 - Determinar si un Número es Par o Impar

# Descripción General

Este script de JavaScript solicita al usuario que ingrese un número entero y luego determina si ese número es par o impar. Para ello, utiliza el operador módulo (%) y una estructura condicional (if-else). El resultado se muestra en la consola. Este ejercicio es útil para practicar el uso de operadores aritméticos específicos y la lógica condicional.

# Requisitos Previos

Para ejecutar este código en un entorno Node.js, es necesario contar con el paquete prompt-sync. Este módulo permite utilizar la función prompt(), similar a como funciona en los navegadores web, para solicitar información al usuario directamente desde la consola.

Si no tienes instalado prompt-sync, puedes añadirlo a tu proyecto ejecutando el siguiente comando en tu terminal:

npm install prompt-sync

# Funcionamiento del Código

El script sigue una secuencia lógica de cuatro pasos principales:

1️⃣ Inicialización de prompt-sync

![alt text](../imagenes/1-prompt-sync.png)

Propósito: Esta línea importa e inicializa el módulo prompt-sync.

Detalle:

const prompt = require('prompt-sync')();

La función require('prompt-sync') carga el módulo.

El () al final lo instancia, permitiendo que la variable prompt se use como una función para capturar la entrada del usuario.

2️⃣ Solicitud de Entrada del Usuario

<!-- ![alt text](../imagenes/ej4-2-entrada.png) -->

Propósito: Se pide al usuario que ingrese un número entero.

Detalle:

const numero = parseInt(prompt('Ingrese un número entero: '));

prompt('Ingrese un número entero: '): Muestra el mensaje en la consola y espera la entrada del usuario.

parseInt(...): Convierte la cadena de texto ingresada a un número entero. Si la entrada no puede convertirse a un entero (o es un decimal), se trunca la parte decimal o devuelve NaN si no es un número válido al inicio.

const numero = ...: El número entero convertido (o NaN) se almacena en la variable numero.

3️⃣ Verificación de Paridad

<!-- ![alt text](../imagenes/ej4-3-verificacion.png) -->

Propósito: Se determina si el número ingresado es par o impar utilizando el operador módulo.

Detalle:

if (numero % 2 === 0):

numero % 2: El operador módulo (%) calcula el residuo de la división de numero entre 2.

Si el residuo es 0, significa que el número es divisible por 2 y, por lo tanto, es par.

Si esta condición es verdadera, se ejecuta el bloque dentro del if.

else:

Si la condición numero % 2 === 0 es falsa (es decir, el residuo no es 0), el número es impar.

Se ejecuta el bloque dentro del else.

Nota: Si numero es NaN (porque parseInt falló), NaN % 2 da como resultado NaN, y NaN === 0 es falso, por lo que se ejecutaría el bloque else. Una validación más robusta podría verificar isNaN(numero) primero.

4️⃣ Visualización del Resultado

<!-- ![alt text](../imagenes/ej4-4-visualizacion.png) -->

Propósito: Se muestra en la consola un mensaje indicando si el número es par o impar.

Detalle:

Si la condición del if es verdadera (número par):

console.log(\El número ${numero} es par.`);`

Si la condición del if es falsa (número impar o entrada no válida que resulta en NaN):

console.log(\El número ${numero} es impar.`);`

Se utiliza una plantilla de cadena para mostrar un mensaje claro, incluyendo el número ingresado.

🚀 Ejecución del Script

Para ejecutar este script:

Guarda el código en un archivo con extensión .js (por ejemplo, parImpar.js).

Asegúrate de tener Node.js instalado en tu sistema.

Abre una terminal o línea de comandos.

Navega hasta el directorio donde guardaste el archivo.

Ejecuta el script con el comando:

<!-- ![alt text](../imagenes/ej4-5-ejecucion.png) -->

node ejercicio4_C8.md

El programa te solicitará que ingreses un número entero. Escríbelo y presiona Enter.

Verás el mensaje indicando si es par o impar impreso en la consola.

🏁 Resumen

Este script ilustra el uso del operador módulo para resolver un problema común de clasificación numérica (par/impar) y cómo emplear estructuras if-else para presentar diferentes resultados basados en una condición. También destaca la diferencia entre parseInt y parseFloat según el tipo de número esperado.

