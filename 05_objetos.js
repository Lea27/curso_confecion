// Si estamos en Java, C## , PHP ....
// Los objetos dependen de clases 

// class Persona {}
// p1 = new persona ()
// p2 = new Persona ()

// En JS tenemos objetos literales
// basados en la notacion JSON

let p1 = {
    nombre: 'pepe',
    edad: 35,
    direccion: {
        calle: 'c/ Pez',
        numero: '24',
        ciudad: 'Cádiz',
        pais: 'españa',
    },
    aficiones :['pintar', 'musica'],
    isAlumno: true 
}

let p2 = {
    nombre: 'Rosa',
    edad: 35,
    isAlumno: true
}
p1.altura = 179
p2.colorPelo = "rubio"

console.log(p1)
console.log(p2)


console.log(p1.nombre)
console.log(p1.edad)

let prop = 'profesion' 
p2[prop] = 'escritora'
console.log(p2[prop])

for (const key in p2) {
    const value = p2[key];
    console.log('La propiedad ${prop} vale $(value}')
}

for (const key in p1) {
    const value = p1[key];
    console.log('la propiedad ${key} vale $(value)')

}
