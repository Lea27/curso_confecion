

// Como se haría SI existieran ambitos privados / publico

const dado = {
    _valor:null,//_:representa una propiedad privada
    set: function () {
        this._valor = parseInt(Math.random()*6) +1
        
    },
    get: function () { return this._valor }
}

for (let i = 0; i < 20; i++) {
    dado.set()
    // dado._valor = 6 No debo
    console.log(dado.get())
}

// get = leer un valor privado
// set = establecer un valor privado


/*

function Dado () {
    let _valor = null
    this.lanzar = function () {
        _valor = parseInt(Math.random()*6) +1
        console.log(_valor)
    }
}

const dado = new Dado()

for (let i = 0; i < 20; i++) {
    dado.lanzar()
    console.log(dado._valor)
}*/

// ESS (2005) JavaScript Accessors (Getters and Setters)

const persona = {
    nombre: 'Pepe',
    apellido: 'perez',
    edad: 23,
    _curso: '',
    get curso() {return this._curso},
    set curso(curso) { this._curso = curso},
    get nombreCompleto () {
        return `${this.nombre} ${this.apellido}`
     }
}

persona.curso = 'Angular'
console.log(persona.curso)
console.log(persona.nombreCompleto)