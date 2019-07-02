// convertir en funcion que devuelve un array de n números aleatorios enteros y positivos menores o iguales a 100


/** function randomArray
 * @description: funcion que devuelve un array de n números aleatorios enteros y positivos menores o iguales a 100
 * @param { number } n 
 * @return { array }
 * 
 */

// despues de definir la función, se implementa
/*
function randomArray(n=0) {
    const r = [] 
        for (let i = 0; i < n; i++) {
        r[i] = parseInt(Math.random() * 100)
        }
    
    return r
console.log(String(randomArray))
}*/


/** function formatoDNI
 * @description: dar formato número al DNI
 * @param { number | String} dni
 * @return { number }
 * 
 */

function formatoDNI(dni) {
    if (typeof dni === 'number') {
        return dni
    }
    let r = 0
    let cadenaDNI = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i]; 
            if(caracter != ' ' && !isNaN(caracter)) {
                cadenaDNI += caracter 
            }
    }
    return r
}


/** function letraDNI
 * @description: calcular letra DNI
 * @param { number | String} dni
 * @return {string}
 * 
 */


function letraDNI(dni) {
    const aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
    return aLetras[dni%23]
}

console.log(letraDNI('51540572'))
console.log(letraDNI('51.540.572'))
console.log(letraDNI('51 54 05 72'))
console.log(letraDNI('0051540572'))


