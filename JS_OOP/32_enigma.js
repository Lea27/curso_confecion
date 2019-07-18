/** una funcion de desencritacion y encriptacion
 * @description:funcion que sustituye por la suma de su valor mas el de un numero de fijo
 * @param: {stream}
 * @return: {stream}
 * 
 */

 class Enigma {
     constructor(){
        this.clave = 0
        this.cadena = ''
        this.criptoCadena = ''
     }

     encriptar(cadena, clave){
         this.cadena = cadena
         this.clave = clave
         /*this.arrayCodificado = []
         this.cadena.split('').map(letra => {
            String.fromCharCode(letra.charCodeAt(0) + this.clave)
        }).join('')*/

        let aCadena = this.cadena.split('')

        for (const letra of aCadena) {
            const numletraCodificada = letra.charCodeAt(0) + this.clave
            const letraCodificada = String.fromCharCode(numletraCodificada)
            this.criptoCadena += letraCodificada
        }



        // for (const iterator of object) {} //Otra opcion de bucle for
       

        

     }
     desencriptar(cadena, clave){
         this.cadena = ''
         this.criptoCadena = cadena
         this.clave = clave
         let aCadena = this.cadena.split('')
         for (const letra of aCadena) {
            const numletraCodificada = letra.charCodeAt(0) + this.clave
            const letraCodificada = String.fromCharCode(numletraCodificada)
            this.Cadena += letraCodificada
        }
    
     }

     desencriptarBruto(cadena, clave){
        this.cadena = ''
        this.criptoCadena = cadena
        
        for (let i = 1; i < 10; i++) {
            this.desencriptar(cadena, i)
            console.log(i, this.cadena)
         
       }
   
    }
 }

 let cadena = 'Hola Pepe'
 enigma = new Enigma()
 enigma.encriptar(cadena, 3)
 console.log(enigma.criptoCadena)
 enigma.desencriptar(cadena, 3)
 console.log(enigma.criptoCadena)
 enigma.desencriptarBruto('Krod#Shsh')