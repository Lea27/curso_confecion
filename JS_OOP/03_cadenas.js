'use strict'

let version = 'ES6'

let cadena = "Esto no es buena práctica"
let otraCadena = 'Es mejor usar comillas simples'
let nuevaCadena = `Nuevo en ${version}`  // Tamplate String

console.log(cadena, otraCadena, nuevaCadena)
console.log(cadena.toUpperCase()) // Los Stirngs transforman 'cadena' en objetos envolventes, y muestran como afectan al objeto

console.log(cadena.length)
console.log(cadena[100])

/*for (let index = 0; index < cadena.length; index++) {
    const item = cadena[index];
    console.log(item)
} */

/*function rest (...agrupador) {
    console.log(agrupador[5])
}

rest(1, 4, 6, 9, 12) // nos devuelve un array porque z no puede valer 1, 4, 6.... */
