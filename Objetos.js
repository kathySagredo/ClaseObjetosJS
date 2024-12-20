// Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor.
// La sintaxis para definir un objeto es => const = {clave: "Valor"};
// Una propiedad en programación es una característica o atributo de un objeto que describe su estado.
// Un método en programación es una función asociada a un objeto que realiza alguna acción específica con el objeto.

// Ejemplo de objeto: 
let persona1 = {
    nombre: 'Juan',
    edad: 30,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
};

persona1.saludar();

// Dato curioso console es un objeto propio de JS => console.log => el log es el metodo y se accede por notación de punto.
// Math tambien es un objeto => Math.PI; Math.E; Math.SQRT2; Son propiedades, las propiedades estan asociada a un valor
// Math.trunc(1.2) => 1, los metodos estan asociadas a funciones
console.log(Math.trunc(Math.PI))

// Se accede a cada propiedad o metodo mediante notación de puntos al metodo o propiedad
persona1.saludar() // Llama la función y devuelve valor
console.log(persona1.nombre) // Valor de la propiedad
// object.method // Define la definición de función
console.log(persona1["edad"]) // No es notación de punto pero igual funciona para acceder a valores

// This => es una palabra reservada.
// nos permite referenciar al objeto donde se encuentra. 
// si no quieren usar this tendrian que poner el nombre del objeto, notación de punto para acceder al valor y poder ejecutar el metodo
// Pero evitamos eso y usamos simplemente this => para referenciar a las propiedades independiente del nombre del objeto, es muy util al trabajar con plantillas, lo veremos más adelante. 
// Con this accedemos a las propiedades segun el contexto donde nos encontramos. 

// Al trabajar con variable let puedo volver a nombrar la variable y reasignar otros valores en la propiedad.
// Intenta cambiar a const y saldrá error por que es constante
persona1 = {
    nombre: 'Maria',
    edad: 12,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
};

// Se puede cambiar la propiedad si trabajamos con const, pero no reasignar o nombrar nuevamente la variable si no, buscar la propiedad y cambiarlo
persona1.nombre = "Diego"
persona1.rut = 121313132 // Crear una nueva propiedad con const
delete persona1.rut; // Borrarla con const
//console.log(persona1)

// Si lo piensan bien, ya sabemos como crear objetos, pero creamos objetos unicos con un conjunto especifico de propiedades y metodos
// si yo quisiera hacer otro objeto quiza una persona2 que tenga las mismas propiedades y metodos tendria que escribirla otra vez. 

// Por eso usamos constructores:

// Constructores =>  es una función que construye objetos desde un "molde" y recibe parametros relacionada a las propiedades que quiero que varien
// La función constructora se expresa así:
/* function Object(p1){
    this.property = p1
}
let obj = new Object(arg) */

// Ejemplo de plantilla Person sintaxis: 
function Person(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.saludar = function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
};

// Se crea rapidamente dos objetos con los valores para cada propiedad sin tener que escribir el detalle del objeto, mucho más optimizado
let person1 = new Person("Kasim", "chaundry") // Usamos la palabra reservada new para crear una nueva instancia
let person2 = new Person("Eva", "Malinova")

console.log(person1)
person1.saludar()

// Esquema de trabajo enfocado en la reutilización de codigo, si todos tienen la misma propiedades y metodos igual esa es la finalidad.
// Por ejemplo lista de usuarios o de jugadores o superheroes, personajes, cursos.