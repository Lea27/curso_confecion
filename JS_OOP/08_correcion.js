/**
 * @description: comprobar si un string(cadena) es palindromo
 * @param {string} cadena
 * @returns {boolean}
 */
const isPali = (cadena = '') => {
    let r = false
    let cadenaSinEspacios = cadena.split(' ').join('').toLocaleLowerCase()
    console.log(cadenaSinEspacios)
    const cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
    console.log(cadenaInversa)
    if (cadenaSinEspacios === cadenaInversa) {
        r = true
        
    }
    return r
}
const iPaliShort = (cadena = '') => {
    sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === sinEspacios.split('').reverse().join('')
}


isPali('En un lugar de la mancha')

module.exports = {}
module.exports.isPali = iPali
module.exports.iPaliShort = iPaliShort