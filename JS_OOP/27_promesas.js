// una promesa tiene un valor pero no lo muestra hast pasado un tiempo
function asincrona() {
    return new Promise( (resolve, reject) => { 
        let i = Math.random()
        setTimeout( () => {
            if (i< 0.7) {  // okey
                resolve('¡¡ Exito !!' + i)  // no return
            } else {        // error
                reject(new Error('Error número' + i))
            }

        }, 2000 )
    })
}

for (let i = 0; i < 8; i++) {
   asincrona()
.then( ( response ) => { console.log(response )} )
.catch( ( error ) => { console.log( error.message )} )
    
}
//-------------------------------------------------------------------------//

function leerDatosAsinc(i, timer = 1000, callback) {
    setTimeout(() => {
        
            console.log(`lectura de datos número ${i}`)
            callback(respuestas[i])
        },timer)
} 

let i = 1 
leerDatosAsinc(i, 2000, (aDatos) => {
    console.log(aDatos[0])
    //i ++ //i = i + 1
    i = aDatos [1]
    leerDatosAsinc(i, 3000, (aDatos) => {
        console.log(aDatos[0])
        i = aDatos [1]
        leerDatosAsinc(i, 2000, (aDatos) =>{
            console.log(aDatos[0])
            i = aDatos [1]
            leerDatosAsinc(i, 1000, (aDatos) =>{
                console.log(aDatos[0])

            })
        })
    })
})
    

    console.log('Leyendo los datos')
   
