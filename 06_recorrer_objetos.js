
/** Función sumar
 * @description recorre un objeto a tantos niveles como contenga 
 *              y crea un string con la información
 * @param {object} 
 * @returns {string}
 * 
 */

 function objectToString(obj) {
     let cadena = ''
     for (const key in obj) {
         if (object.hasOwnProperty(key)) {
             const value = obj[key];
            if(typeof value == 'object') {
                 cadena += '${key}: $'

             } else {
                 cadena +=`
                 ${key}: ${value}`
             }

             cadena += '${key}: ${value}'
         }
     }
     return cadena 
     
 }
 let p2 = {
    nombre: 'Rosa',
    edad: 35,
    isAlumno: true
}
let cadena = objectToString(p2)


