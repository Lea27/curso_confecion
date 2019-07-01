/**
 * @description: función que calcula la media de n numéros independientes
 * @param {...[]number} aDatos
 * @returns {number}
 */

 
function media(...aDatos) {                   
     let r = 0
     for (let i = 0; i < aDatos.length; i++) { 
        const item = aDatos[i];
        r += item                             
    } 

    return r / aDatos.length
}
console.log(media(2, 4, 7, 2, 4, 4))
//... es para hacer un array de objetos independientes


media(2, 4, 7, 2, 4, 4, 7, 4, 3)

function mediaArray(aDatos = []) {
    let r = 0
    for (let i = 0; i < aDatos.length; i++) { 
        const item = aDatos[i];
        r += item                             
    } 

    return r / aDatos.length
}
//esta funcion suma los objetos independientes de un array
//la funcion da vueltas hasta que i < a al valor de del array(numéro de objetos independientes)
// significa r = r + item

console.log(mediaArray([2, 4, 7, 2, 4, 4]))
//mediaArray nos devuelve la media de [2, 4, 7, 2, 4, 4]




function mediaTotal(...aDatos) {
    let r = 0
    let n = 0
    r += sumaTotal(...aDatos)
    console.log(n)
    return r / n

    function sumaTotal(...aDatos) {
        let s = 0
        for (let i = 0; i < aDatos.length; i++) {
            const item = aDatos[i];
            if( Array.isArray(item)) {
                s += sumaTotal(...item)
            } else {
                s += item
                n++
            }
        }
        return s
    }
}


console.clear()
console.log(media(2, 4, 7, 2, 4, 7, 2, 4, 4, 2, 4, 4))
console.log(mediaTotal([2, 4], 7, 2, 4, [7, 2, 4, 4], 2, 4, 4))
console.log(mediaTotal([2, 4], 7, 2, 4, [7, [2, 4], 4], 2, 4, 4))

