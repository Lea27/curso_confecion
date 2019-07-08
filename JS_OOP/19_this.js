/** this es una caracteristica de las funciones de java script
no tiene un comportamiento consistente*/


// 4 formas de ejecutar una function
// patron de inovación
// cambian el significado de this

function algo() {
    console.log(this)
}

// Funcion

algo() // this es process (Node) o window (Browser)

// Método

const o = { nombre: 'Pepe', edad: 23} // o= objeto
o.algo = algo    //o.algo = metodo
                //this es el objeto al que pertenece el metodo
o.algo()

// Constructora

const nuevo = new algo() //this es el nuevo objeto construido

// Indirectamente (apply o call)

const otro = {
    tipo: 'perro',
    nombre: 'Rufo'
}

// algo.call()
algo.apply(otro) //this es el objeto que "toma prestada" la funcion

console.log('---------------------------------')

const persona = {nombre: 'Pepe'}
persona.saludar = function () {
    console.log(`Hola soy ${this.nombre}`)
    
}
persona.saludar()
setTimeout(persona.saludar , 1000)  // esto nos da 'Hola soy undefined' porque process esta procesando
                                            //  y this en process es preocess (algo() // this es process (Node) o window (Browser))

setTimeout(persona.saludar.bind(persona) , 2000) //bin(this) permite que this sea especifico (apply)

console.log('---------------------------------')

//en las funciones arrow this es consistente:
//SIEMPRE es la propia funsion // las funciones arrow no son las mas apropiadas para usar en metodos debido a la utilizacion del this

persona.saludarArrow = () => {    //cuando una funcion arrow contiene un this: this refiere a la propia funcion
    console.log(`Hola soy ${this.nombre}`)
}

persona.saludarArrow()

algoArrow = () => {
    console.log(this)
}
algoArrow()

setTimeout(persona.saludarArrow, 1000)
setTimeout(algoArrow, 2000)