

// Objeto JSON o literal



const p1 = {
    nombre: 'Luis',
    edad: 23,
    altura: 178,
    pais: 'España'
}

function Persona(nombre, edad, altura, pais, profesion ) {  // los únicos elementos que llevan mayúscula al principio son las constructuras
    this.cerebro = true     
    this.nombre = nombre
    this.edad = edad
    this.altura = altura
    this.pais = pais
    this.profesion = ''
    this.saludar = function (otro = 'amig@') {
        let msg = `Hola,  ${otro}, soy ${this.nombre}`
        console.log(msg) 
    }

}
 
Object.freeze() // sirve para congelar un objeto  

const p2 = new Persona('Pepe', 23, 180, 'Bulgaria') // new permite a la funcion constructora 
const p3 = new Persona('Pepa', 27, 179, 'Italia')   //asociar las variable con this. a la constantep2
/*delete p2.cerebro 
p2.ia = true*/

console.log(p1)
console.log(p2)
console.log(p3)

p2.saludar()
p3.saludar()

const x = [] // new Array()
