# Actividades 📚💻

## Ejercicio 1 - Declarar dos variables
Nuestra tarea será declarar dos variables: una con el nombre `edad` y la otra con el nombre `peso`. Después deberás asignarle un valor.  
**Pista:** Recordemos que para crear una variable debemos utilizar la palabra reservada `let`, seguida del nombre con el cual luego le haremos referencia.

## Ejercicio 2 – Usando las variables
Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información.

**Desglosando el ejercicio:**
1. Pide al usuario que ingrese su nombre.
2. Pide al usuario que ingrese su edad.
3. Pide al usuario que ingrese su peso.
4. Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.

**Pista:** En el ejercicio anterior, declaramos valores en las variables. Ahora nos toca pedir datos al usuario, por lo que usaremos `prompt-sync` para solicitar esta información.

## Ejercicio 3 – Constantes / Validación de Edad
Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima.  
Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes (asignándoles los valores numéricos 18 y 99 respectivamente). Por último, deberás pedirle al usuario que ingrese su edad para validarla usando `parseInt`.

**Desglosando el ejercicio:**
1. Crea una constante llamada `EDAD_MINIMA` y otra llamada `EDAD_MAXIMA`, a las cuales les asignarás los valores numéricos 18 y 99 respectivamente.
2. Pide al usuario que ingrese su edad.
3. Usa `parseInt` para convertir la entrada del usuario a un número entero.
4. Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.

**Pista:** Las constantes se declaran con la palabra reservada `const` y es buena práctica que sus nombres sean declarados siempre con letras mayúsculas. Utiliza `parseInt` para convertir la entrada del usuario a un número entero.

## Ejercicio 4 – Tipo de Datos
Declarar 4 variables utilizando la palabra reservada `let` y asignarles valores según el tipo de dato que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

**Pasos a seguir:**

### Declaración de Variables:
1. Declara una variable llamada `verdadero` y asígnale un dato de tipo booleano (true o false).
2. Declara una variable llamada `texto` y asígnale un string de tu elección.
3. Declara una variable llamada `numero` y asígnale un dato numérico.
4. Declara una variable llamada `nada` y asígnale un valor que represente la ausencia de valor en JavaScript.

### Operaciones y Validaciones:
1. Realiza una operación matemática usando la variable `numero`.
2. Concatena el `string` de la variable `texto` con otro mensaje adicional.
3. Verifica si la variable `verdadero` es true o false y muestra un mensaje diferente según el resultado.
4. Implementa una condición para verificar si la variable `nada` es null y muestra un mensaje si es así.

## Ejercicio 5 – Operadores
Declarar y asignar un valor numérico a dos variables: `primerNumero` y `segundoNumero`.

### Operaciones Matemáticas:
1. Declara las siguientes variables: `resultadoSuma`, `resultadoResta`, `resultadoMultiplicacion`, `resultadoDivision`.
2. Asigna a cada una de estas variables el resultado de la suma, resta, multiplicación y división de las variables `primerNumero` y `segundoNumero`.

### Mostrar Resultados:
1. Utiliza `console.log(nombreDeLaVariable)` para imprimir cada uno de los resultados.

**Pistas:**
- Para crear una variable utilizamos la palabra `let`.
- Para asignar el valor a una variable utilizamos el operador `=`.

## Ejercicio 6 - Comparaciones y Operadores Lógicos
Declara dos variables con valores numéricos. Utiliza operadores de comparación y lógicos para verificar si ambos números son mayores que 10 y muestra el resultado en la consola.

### Pasos a seguir:
1. Declara dos variables y asígnales valores numéricos.
2. Utiliza los operadores `>` y `&&` para verificar si ambos números son mayores que 10.
3. Utiliza `console.log()` para mostrar el resultado.

**Pista:** Los operadores de comparación en JavaScript son `>`, `<`, `>=`, `<=`, `===`, `!==`. El operador lógico `&&` se usa para combinar condiciones.

## Ejercicio 7 - Intercambio de Valores
Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.  
**Pista:** Puedes usar una variable temporal, aritmética o asignación simultánea. Investiga cuál método usarás.

## Ejercicio 8 - Conversión de Temperaturas
Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit.  
Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
**Pistas:** Investiga qué es parseFloat.
**Fórmula:**  
```javascript
let fahrenheit = celsius * 9 / 5 + 32;
```

## Ejercicio 9 - Cálculo del IMC
Escribe un programa que calcule el Índice de Masa Corporal (IMC).
Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
**Pistas:** Investiga qué es parseFloat.
**Fórmula:**
```javascript
let imc = peso / (altura * altura);
```

## Ejercicio 10 - Cálculo de Descuento
Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
**Pista:** Investiga qué es parseFloat. 
**Fórmula:**
```javascript
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
```

