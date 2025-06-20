Curso Introducción a Javascript
Profesor: Delgado Enrique

# Actividades Clase Numero 14

¡Hola, chicas! ✨👩‍💻

¡Bienvenidas a la clase 14!
Hoy vamos a explorar temas súper interesantes que te ayudarán a escribir código más limpio y eficiente en JavaScript. 🌟

## Temas de hoy:
*   **Arrow Functions:** Aprenderemos cómo las funciones flecha pueden hacer que nuestro código sea más conciso y fácil de leer, además de entender sus diferencias con las funciones tradicionales.
*   **Objetos literales:** Veremos cómo utilizar objetos para almacenar y organizar datos de manera eficiente. Nos enfocaremos en cómo crear y trabajar con ellos para que tu código sea más estructurado y práctico.

## Objetivo de la clase:
Comprender y aplicar el concepto de **Arrow Functions** y **Objetos Literales** en JavaScript para mejorar la organización de nuestros programas y hacerlos más legibles. 🚀

¡Prepárate para practicar, experimentar y disfrutar mientras aprendemos juntas! ✨💻

---

## Actividades:

### Ejercicios de Arrow Function:

*   **Ejercicio 1: Calcular el precio final con IVA**
    Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.

*   **Ejercicio 2: Calcular promedio de calificaciones**
    Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.

*   **Ejercicio 3: Clasificación de edades**
    Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.

*   **Ejercicio 4: Calcular descuento por cantidad**
    Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad.

*   **Ejercicio 5: Verificar origen del auto**
    Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y mostrar si el auto es de origen nacional o importado. Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional.
    *   ✔ Solicita al usuario que ingrese la marca de un auto.
    *   ✔ Utiliza una función flecha para determinar si la marca ingresada corresponde a un auto de origen nacional o importado.
    *   ✔ Muestra un mensaje indicando si el auto es de origen nacional o importado, basado en la marca ingresada por el usuario.

---

### Ejercicios de Objetos:

*   **Ejercicio 6: El deportista**
    Para este ejercicio deberán definir un objeto literal “deportista", con los siguientes atributos: nombre, energía, experiencia.
    Además queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
    La función `entrenarHoras` tiene las siguientes tres características:
    *   ✔ Recibe por parámetro la cantidad de horas.
    *   ✔ Resta a su energía (`this.energia`) la cantidad de horas x 5.
    *   ✔ Incrementa su experiencia (`this.experiencia`) la cantidad de horas x 2.
    Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

*   **Ejercicio 7: Libros**
    Define dos objetos `libro1` y `libro2` con las siguientes propiedades y valores:
    *   ✔ título: una cadena con el título del libro.
    *   ✔ autor: una cadena con el nombre del autor del libro.
    *   ✔ anioPublicacion: un número con el año de publicación del libro.
    Luego, crea una función llamada `mostrarLibro` que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.

*   **Ejercicio 8: Funcion backEnd()**
    Creá la función `backEnd()` que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
    *   ✔ Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string "Back” en lugar del número.
    *   ✔ Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
    *   ✔ Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.

*   **Ejercicio 9: Última aparición de un modelo de auto**
    En este ejercicio, trabajaremos con una lista de modelos de autos. Implementa una función llamada `ultimaAparicionModeloAuto(modelo)` que encuentre y muestre la última posición en la lista donde aparece el modelo específico de auto dado por `modelo`.

    **Datos Iniciales:**
    *   ✔ Utiliza un array llamado `modelosAutos` que contiene varios modelos de autos, algunos repetidos para demostrar la funcionalidad.

    **Funcionalidad:**
    *   ✔ Implementa la función `ultimaAparicionModeloAuto(modelo)`, que toma `modelo` como parámetro (un string).
    *   ✔ Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
    *   ✔ Si el modelo se encuentra en el array, la función debe imprimir por consola la posición (índice + 1) en la que aparece (considerando que la numeración es de 1 a N).
    *   ✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que el modelo no está presente.

*   **Ejercicio 10: Flores Favoritas**
    Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
    1.  Inicializa un array vacío para almacenar las flores favoritas.
    2.  Pregunta al usuario por sus tres flores favoritas utilizando `prompt` y agrega cada una al array manualmente (sin usar métodos como `push`).
    3.  Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
    4.  Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).