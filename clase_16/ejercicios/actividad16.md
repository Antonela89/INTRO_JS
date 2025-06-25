
Curso Introducción a Javascript
Profesor: Delgado Enrique

# Actividades Clase Número 16

¡Hola, chicas! ✨👩‍💻

¡Bienvenidas a la clase 16!
Hoy vamos a explorar temas súper interesantes que te ayudarán a escribir código más limpio y eficiente en JavaScript. ☀️

## Temas de hoy:

*   **Métodos avanzados en Arrays:**
    Exploraremos métodos esenciales que nos permiten trabajar con datos de forma más dinámica:
    *   `map()`: Ideal para transformar los elementos de un array en uno nuevo.
    *   `filter()`: Perfecto para seleccionar elementos que cumplen con una condición.
    *   `find()`: Para localizar el primer elemento que satisface un criterio específico.
    *   `reduce()`: Una poderosa herramienta para resumir o acumular datos en un único valor.
    *   `forEach()`: Útil para recorrer elementos sin modificar el array.

¡Prepárate para practicar, experimentar y disfrutar mientras aprendemos juntas! 💻✨

---

## Actividades:

*   **Ejercicio 1: Crea un nuevo array con los cuadrados de los números**
    Imagina que tienes una lista de números, como `[2, 4, 6, 8]`. Tu objetivo es crear una nueva lista donde cada número de la lista original se haya transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista.

*   **Ejercicio 2: Filtra los números pares de una lista**
    Tienes una lista con varios números: `[1, 2, 3, 4, 5, 6]`. Queremos separar y guardar únicamente los números pares en una nueva lista. Los números pares son aquellos que se pueden dividir entre 2 sin dejar residuo. Una vez que hayas creado la nueva lista, muéstrala en la consola.

*   **Ejercicio 3: Encuentra el primer número mayor a 10**
    Tienes una lista de números `[5, 8, 12, 20, 3]`. Queremos encontrar el primer número de la lista que sea mayor a 10. Recuerda que el resultado debe ser únicamente el primer número que cumpla esta condición, no todos los números que lo hagan.

*   **Ejercicio 4: Calcula la suma total de los números**
    Dada una lista de números `[1, 2, 3, 4]`, necesitamos calcular el resultado de sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.

*   **Ejercicio 5: Recorre una lista e imprime cada elemento**
    Tienes una lista de frutas `['manzana', 'banana', 'cereza']`. Tu tarea es recorrer la lista y mostrar el nombre de cada fruta en la consola, una por una.

*   **Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra**
    Supongamos que tienes una lista de palabras `['hola', 'mundo', 'javascript']`. Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".

*   **Ejercicio 7: Filtra nombres que empiecen con la letra 'A'**
    Dada una lista de nombres `['Ana', 'Luis', 'Andrea', 'María']`, queremos quedarnos solo con los nombres que comiencen con la letra 'A'. Por ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.

*   **Ejercicio 8: Busca un nombre específico**
    Tienes una lista de nombres `['Carlos', 'Daniel', 'Laura', 'Ana']`. Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.

*   **Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras**
    Imagina que tienes una lista de palabras `['sol', 'luna', 'estrella']`. Queremos saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería ser 15.

*   **Ejercicio 10: Construye una frase a partir de una lista de palabras**
    Dada la lista `['Me', 'gusta', 'aprender', 'JavaScript']`, queremos construir una frase completa concatenando cada palabra en orden, separadas por espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.

---

### Ejercicios Extra para seguir practicando:

*   **Encuentra los nombres más cortos y transforma su formato**
    Tienes una lista de nombres de personas: `['Lucía', 'Ana', 'María', 'Luis', 'José', 'Pablo']`. Queremos realizar varias tareas con esta lista:
    *   Primero, filtra los nombres que tengan menos de 5 letras.
    *   Luego, transforma los nombres resultantes para que estén en mayúsculas.
    *   Finalmente, construye una frase que diga: "Los nombres seleccionados son: [nombres]", donde `[nombres]` sea la lista resultante unida por comas.
    Al final, imprime la frase en la consola.

*   **Calcula el total de ventas de productos seleccionados**
    Supón que tienes una lista de productos con sus precios en formato de objeto:
    ```javascript
    const products = [
        { name: 'Laptop', price: 1000 },
        { name: 'Mouse', price: 25 },
        { name: 'Teclado', price: 50 },
        { name: 'Monitor', price: 200 },
        { name: 'Audífonos', price: 75 }
    ];
    ```
    Queremos:
    *   Seleccionar los productos cuyo precio sea mayor o igual a 50.
    *   Obtener solo los nombres de esos productos.
    *   Calcular el precio total sumando los precios de los productos seleccionados.
    *   Imprime el total y los nombres de los productos seleccionados en la consola.

*   **Encuentra la película más corta y analiza los títulos largos**
    Supón que tienes una lista de películas con su duración en minutos:
    ```javascript
    const movies = [
        { title: 'El Señor de los Anillos', duration: 200 },
        { title: 'Inception', duration: 148 },
        { title: 'Matrix', duration: 136 },
        { title: 'Toy Story', duration: 81 },
        { title: 'Coco', duration: 105 }
    ];
    ```
    Queremos:
    *   Encontrar la película más corta en duración.
    *   De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
    *   Crear una lista de los títulos largos en minúsculas.
    *   Imprime en la consola:
        *   El título de la película más corta.
        *   La lista de títulos largos en minúsculas.