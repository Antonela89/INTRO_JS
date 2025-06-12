### **Actividades Adicionales: Funciones Arrow y Objetos Literales**

¡Excelente! Sigamos practicando con las herramientas más modernas de JavaScript que vimos en clase. Ahora nos enfocaremos en la sintaxis concisa de las funciones arrow y en cómo modelar elementos del mundo real con objetos literales. 🚀

---

### **Funciones Arrow**

*   **Ejercicio 1: Convertir pulgadas a centímetros (función arrow)**
    Crea una función arrow llamada `pulgadasACentimetros` que reciba un valor en pulgadas como parámetro y devuelva su equivalente en centímetros. La función debe tener un retorno implícito (sin usar la palabra `return`).
    **Pista:** 1 pulgada = 2.54 centímetros.

*   **Ejercicio 2: Generar URL (función arrow)**
    Crea una función arrow llamada `generarUrl` que reciba un nombre de dominio (ej: "google") y devuelva la URL completa (ej: "http://www.google.com"). Usa un retorno implícito.

*   **Ejercicio 3: Frase con admiración (función arrow con cuerpo)**
    Crea una función arrow llamada `agregarAdmiracion` que reciba un string como parámetro. La función debe agregar signos de admiración al principio y al final del string (ej: `¡Hola, mundo!`) y convertir toda la frase a mayúsculas. Como requiere más de un paso, deberás usar llaves `{}` y la palabra `return`.

---

### **Objetos Literales**

*   **Ejercicio 4: Objeto Coche**
    Crea un objeto literal llamado `coche` que contenga las siguientes propiedades:
    *   `marca` (string)
    *   `modelo` (string)
    *   `año` (número)
    *   Un método llamado `describir` que no reciba parámetros y devuelva un string describiendo el coche, usando las propiedades del objeto. Ejemplo: "Coche Ford Focus del año 2018".
    **Pista:** ¡Recuerda usar `this` para acceder a las propiedades del propio objeto!

*   **Ejercicio 5: Objeto Producto (Ejercicio entrevista)**
    Crea un objeto literal llamado `producto` con las siguientes propiedades:
    *   `nombre` (string)
    *   `precio` (número)
    *   `stock` (número)
    Y los siguientes métodos:
    *   `calcularIva()`: Devuelve el 21% del precio del producto.
    *   `vender(cantidad)`: Resta la `cantidad` indicada del `stock`. Debe verificar si hay stock suficiente antes de realizar la venta. Si no hay stock, puede devolver un mensaje como "Stock insuficiente".

*   **Ejercicio 6: Calculadora como Objeto**
    Crea un objeto literal llamado `calculadora` que tenga los siguientes métodos, todos recibiendo dos números como parámetros:
    *   `sumar(a, b)`
    *   `restar(a, b)`
    *   `multiplicar(a, b)`
    *   `dividir(a, b)`: Este método debe verificar que el segundo número (`b`) no sea cero antes de realizar la operación.

¡Sigan así, programadoras! Cada ejercicio las acerca más a dominar JavaScript. ✨💻