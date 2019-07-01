/**
 * @description: función que calcula la media de n numéros independientes
 * @param {...[]number} aDatos
 * @returns {number}
 * 
 */

 function media(...aDatos) {                   //... es para hacer un array de objetos independientes
     let r = 0
     return r
 }


media(2, 4, 7, 2, 4, 4)
media(2, 4, 7, 2, 4, 4, 7, 4, 3)

function mediaArray(aDatos = []) {
    let r = 0
    for (let i = 0; i < aDatos.length; i++) { //la funcion da vueltas hasta que i < a al valor de del array(numéro de objetos independientes)
        const item = aDatos[i];
        r += item                             // significa r = r + item
    } 

    return r / aDatos.length
}

mediaArray([2, 4, 7, 2, 4, 4])


