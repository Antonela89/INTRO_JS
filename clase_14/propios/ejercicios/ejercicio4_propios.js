// Ejercicio 4: Objeto Coche
// Crea un objeto literal llamado `coche` que contenga las siguientes propiedades:
// `marca` (string)
// `modelo` (string)
// `año` (número)
// Un método llamado `describir` que no reciba parámetros y devuelva un string describiendo el coche, usando las propiedades del objeto. Ejemplo: "Coche Ford Focus del año 2018".    Pista: ¡Recuerda usar `this` para acceder a las propiedades del propio objeto!

let coche = {
    marca: 'Ford',
    modelo: 'Focus',
    año: 2018,
    describir: function () {
        console.log(`Coche: ${this.marca} ${this.modelo} del año ${this.año}`);    
    }
}

coche.describir();