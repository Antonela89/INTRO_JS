## 🌟 GUÍA INTERACTIVA: FUNCIONES EN JAVASCRIPT

### 📌 1. ¿Qué es una función?
Una función es **una receta** 🛌. Le decís a JavaScript qué pasos seguir para lograr algo.

📦 **Definición básica**:
```js
function saludar() {
  console.log("¡Hola, mundo!");
}
```

🚀 **Invocar la función** (o ejecutar la receta):
```js
saludar(); // ¡Hola, mundo!
```

---

### 🧐 2. Tipos de funciones

#### 🕦 Función Declarada:
📍 Se "carga" cuando comienza a interpretarse el código. JavaScript las recuerda antes de ejecutar cualquier instrucción.

```js
function sumar(a, b) {
  return a + b;
}
```

#### 🟨 Función Expresada:
📍 Se asigna a una variable. Solo existe cuando JavaScript ejecuta esa línea.

```js
let restar = function(a, b) {
  return a - b;
};
```

### 📌 Diferencia Clave:
- **Función Declarada:** 🏃‍♀️ *Podés usarla antes de escribirla* en el código.
  ```js
  saludar(); // ¡Hola!
  function saludar() {
    console.log("Hola");
  }
  ```

- **Función Expresada:** ⛔️ *No podés usarla antes de declararla.* Provoca error.
  ```js
  saludar(); // ❌ Error: Cannot access 'saludar' before initialization
  let saludar = function() {
    console.log("Hola");
  }
  ```

➡️ Esto se debe a cómo JavaScript "eleva" (hoisting) las funciones declaradas pero **no** eleva funciones expresadas.

---

### 🌍 3. Scope (Alcance)

#### 📦 Scope Global:
Disponible **en todo el programa**.

```js
let nombre = "Luna";

function saludar() {
  console.log("Hola " + nombre);
}
saludar(); // Hola Luna
```

#### 🏰 Scope Local:
Solo vive **dentro de la función**.

```js
function mostrarAnimal() {
  let animal = "Gato";
  console.log(animal);
}

mostrarAnimal(); // Gato
console.log(animal); // ❌ Error
```

---

### 🧪 ACTIVIDAD 1: Detective del Scope
```js
let fruta = "Manzana";

function elegirFruta() {
  let fruta = "Banana";
  console.log(fruta);
}

elegirFruta();
console.log(fruta);
```

👀 ¿Cuál fruta se muestra primero? ¿Y cuál después? (Pista: hay dos "frutas" distintas con el mismo nombre)

---

### 🌿 4. Funciones Flecha (Arrow Functions)

Forma moderna y compacta:
```js
const saludar = () => {
  console.log("¡Hola desde una función flecha!");
};
```

Para funciones simples:
```js
const cuadrado = x => x * x;
console.log(cuadrado(5)); // 25
```

---

### 🧪 ACTIVIDAD 2: Transformá funciones
Transformá esta función tradicional en flecha:
```js
function doble(num) {
  return num * 2;
}
```
✅ Resultado esperado:
```js
const doble = num => num * 2;
```

---

### 📆 5. Objetos con funciones

Podés tener funciones dentro de objetos:
```js
let persona = {
  nombre: "Ana",
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

persona.saludar(); // Hola, soy Ana
```

⚡ Desafío: convertí esa función a flecha. ¿Funciona igual?

---

### 🌟 DESAFÍO FINAL: La Máquina de Tareas

Crea una función que reciba una tarea y diga que fue completada:
```js
function realizarTarea(tarea) {
  console.log("✅ Tarea completada: " + tarea);
}

realizarTarea("Estudiar funciones");
```

Luego convertíla en:
- Función expresada
- Función flecha

---

### 🎤 PREGUNTA CIERRE
> Si tuvieras que explicarle a alguien qué es una función, ¿qué analogía usarías? 🤖 Una receta, un botón, una app...

---

✨ Esta guía puede ser usada como presentación, clase en vivo o actividad para completar en grupo. ¡Podés pedir la versión editable si la necesitás!
