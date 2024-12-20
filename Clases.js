
// Muy similar a la función contructora
// Crear una clase y a partir a la clase crear objetos que van a heredad todas las propiedades y metodos.

// Definición de clase
class Persona { // Class, no function
    constructor(nombre, edad) { // Permite construir las propiedades o caracteristicas del objeto, es una función constructora, pero es importante escribir constructor
      this.nombre = nombre;
      this.edad = edad;
      /* this.otrMetodo = function (){
        console.log("otro metodo")
      } */
    }
  
    // Método
    saludar() { // No se utiliza function
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
    // Otro metodo
    otroMetodo(){ 
        console.log("otro metodo")
    }

  }
  
   // Crear instancias
   const ana = new Persona("Ana", 25); // Usar new para crear instancias, instancias de la clase Persona, inscanciar o crear un nuevo objeto, new nombre de la clase y parametros correspondientes, estas instancias son objetos que heredan de la clase Persona
   const juan = new Persona("Juan", 30);

   ana.saludar(); // Hola, mi nombre es Ana y tengo 25 años.
   juan.saludar(); // Hola, mi nombre es Juan y tengo 30 años.


  /* ¿Cuándo usar clases en lugar de funciones constructoras?
Clases son preferibles para código nuevo, ya que su sintaxis es más clara y moderna.
Las funciones constructoras todavía funcionan y se usan en proyectos antiguos o por compatibilidad.
 */

// Una clase entonces tiene ciertas caracteristicas pero cuando definimos las caracteristicas como tal podemos hablar de objetos

// Date es una clase de JS donde tiene propiedades y metodo
const ahora = new Date(); // Crear una nueva instancia de Date
console.log(ahora); // Muestra la fecha y hora actual

const fechaEspecifica = new Date(2024, 11, 27); // Año, mes (0-11), día
console.log(fechaEspecifica); // Muestra la fecha 19 de diciembre de 2024

/* Características:
Métodos comunes:
getFullYear(), getMonth(), getDate() para obtener partes de la fecha.
setFullYear(), setMonth(), setDate() para modificarla. */

/* Math es un objeto estático
Math no es una clase, sino un objeto estático que proporciona funciones matemáticas y constantes.
No puedes instanciar Math con new. */
