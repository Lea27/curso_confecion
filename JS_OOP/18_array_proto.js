const aDatos = ['luis', 'juan', 'rosa', 'maria']
//aDatos = new Array()

console.log(aDatos.__proto__)
console.log(Array.prototype)

Array.prototype.saludar = function () {
    console.log(' Hola ,soy un array')
}
Array.prototype.push = function (nombre) {
    console.log('Hola, ' +nombre)
}

aDatos.push('ernesto')
aDatos.saludar('')
console.log(aDatos)
aOtros.saludar('perro')