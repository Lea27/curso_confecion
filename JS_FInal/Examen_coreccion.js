/*Un programa capaz de analizar una frase
número de palabras
longitud media de las palabras
veces cada letra
frecuencia cada letra
Incorporar un interface Web de entrada y salida*/


function numPalabras(frase = '') {
    
   return frase.split(' ').length
}

function logMedia(frase) {
    return frase.split(' ').join('').length / frase.split(' ').length
    
    /* let i = 0
    array.forEach(item => {           // item = un elemento del array
        i += item.length
    });
    return i / array.length */

    /* return array.map(item => item.length).reduce(a,b => a+b) / array.length*/
}

const cadena = 'Hola amigos como estais'

console.log(numPalabras(cadena))
console.log(logMedia(cadena))

function vecesCadaLetra (frase) {
    const Letras = {
    A: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, ñ: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
}
//
    for (const item of frase.split(' ').join('').toUpperCase()) {
        console.log(frase)
        r += item
    
}
}
const cadena2 =

function  frecuencia(frase = '') {
    let num = numLetras(frase)    
    let r = vecesCadaLetra(frase)
    for (const key in r) {
        if (r.hasOwnProperty(key)) {
            r[key] /= num
        }
    }
    console.log(r)
}
vecesCadaLetra(cadena)
frecuencia(cadena)

