/**
 * @description: funcion que nos permita saber si un valor nombre ,pertenece al array de los nombres de reyes
 * @param {nombre}
 * @return {string} true 
 */


function isNombreRey(nombre) {
    const aReyes = [
        'Fernando','Isabel','Juana','Carlos','Felipe','Luis','Jose',"Amadeo",'Alfonso','Juan Carlos']
    for (let i = 0; i < aReyes.length; i++) {
        const item = aReyes[i];
        if ( nombre.toUpperCase() == item.toUpperCase()) {
            return [true, i]
            }
        
    }
    return [false]
}

function mostrarIsRey(nombre) {
    let [isRey, position] = isNombreRey(nombre)

    const mensajes = [
        `El nombre ${nombre.toUpperCase()}, no ha sido usado por ningun rey de España`,
        `El nombre ${nombre.toUpperCase()}, ha sido usado por algun rey de España
        y es el número ${++position} de la lista`

    ]
    console.log( mensajes[+isRey])
    
}

mostrarIsRey('Fernando')
mostrarIsRey('Federico')
mostrarIsRey('Amadeo')
