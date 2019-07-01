

function media(...otra) {                   
    let r = 0
    return r
}


function mediaArray(otra = []) {
    let r = 0
    for (let i = 0; i < otra.length; i++) { 
        const item = otra[i];
        r += item                             
    } 

    return r / otra.length
}

console.log(mediaArray([2, 4, 0, 6, 8]))

function mediaTotal(...aDatos) {
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        if( Array.isArray(item)) {
            r += mediaTotal(item)
        } else {
            r += item
        }

    }
    return r /aDatos.length

}

console.log(mediaTotal([2, 4], 7, 2, 4, [7, 2, 4, 4], 2, 4, 4))


function mediaTotal(...aDatos) { // rest operator crea
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        if( Array.isArray(item)) {
            console.log(item)
            r += mediaTotal(...item) // spread operator etale les donnees 
        } else {
            r += item
        }

    }
    return r / aDatos.length

}