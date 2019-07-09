
function Direccion(calle, numero, ciudad, pais) { // clase 'b'
    this.calle = calle
    this.numero = numero
    this.ciudad = ciudad
    this.pais = pais
}

function Persona(nombre, edad, direccion) { // clase 'a'
    this.nombre = nombre
    this.edad = edad
    this.direccion = direccion
    this.mascota = []
}

Persona.prototype.adoptarMascota = function (mascota) {
    this.mascota.push(mascota)
} // Dependencia (metodo) // relacion de dependencia a nivel de metodos

function Mascota(nombre, especie) {
    this.nombre = nombre
    this.especie = especie

}

function Alumno(nombre, edad, direccion, curso) {
    this.curso = curso
    Persona.prototype.constructor.call(this, nombre, edad, direccion) // para que un alumno nuevo se inscriva en la clase persona 
}

Alumno.prototype.inscribirse = function (curso) {
    this.curso.push(curso)
}
Alumno.prototype = new Persona() // de esta forma ALumno no apunta a la clase Object sino a la clase persona (persona=intermediario)
Alumno.prototype.constructor = Alumno

//----------------------------------------------------------------------------------------

const a1 = new Alumno(
    'Pepe', 
    34, 
    new Direccion('c/ Pez', 7, 'Cadiz', 'España'),
    'Páginas Web')
    
console.log(a1)

console.log(a1 instanceof Alumno)
console.log(a1 instanceof Persona)
console.log(a1 instanceof Object)

const p1 = new Persona(
    'Pepe', 
    34, 
    new Direccion('c/ Pez', 7, 'Cadiz', 'España') ) // la clase 'a' tiene como atributo un objeto de la clase 'b' // Asociación: se establece con los atributos 

const m1 = new Mascota('Amedio', 'mono')
const m2 = new Mascota('Perry', 'ornitorrinco')

a1.inscribirse(`Páginas Web`)
p1.adoptarMascota(m2) // Inyeccion de dependencia (darle a Pepe una mascota) // a partir de aqui perry depende de pepe
a1.adoptarMascota(m1)

console.log(a1)
console.log(p1)
console.log(m2.nombre)
console.log(p1.mascota[0].nombre)

// otra forma de relacion: herencia // la hija hereda propiedades del las clases madres
// posibilidad de especializar cualquiera de nuestras clases 
// hacer ejercicio 27a