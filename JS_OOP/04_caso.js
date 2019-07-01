'use strict'

/** function comprobarCaso()
 * @description: comprobar si la cadena tiene: 
 * solo mayúsculas (0)
 * solo minúsculas (1)
 * mayúsculas y minúsculas (2)
 * @param {string} cadena 
 * @returns {number} 
*/

function comprobarCaso(cadena = '') {
    let r = 2
    if (cadena == cadena.toUpperCase) { // eres solo mayúsculas
        r = 0
    } else if (cadena === cadena.toLocaleLowerCase() ) { // eres solo minúsculas
        r = 1   
    }
     return r
}

function mostrarComprobacionCaso(cadena = '') {
    const msg = [ 
        'solo mayúsculas',
        'solo minúsculas',
        'mayúsculas y minúsculas'
    ]
    console.log(msg[comprobarCaso])
    
}

module.exports = {}
module.exports.comprobarCaso = comprobarCaso
module.exports.mostrarComprobacionCaso = mostrarComprobacionCaso