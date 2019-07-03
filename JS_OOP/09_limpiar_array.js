/**
 * @description: devuelve un array eliminando los nombres 
 * que empiecen por una letra determinada del array que recibe 
 * @param {string}: letra
 * @param {array}: aNombres
 * @returns {array}
 */

 function limpiarArray(letra = '', aNombres = []) {
     const r= aNombres.slice()

     for (let i = 0; i < aNombres.length; i++) {
         const item = aNombres[i];
         if (item[0].toLowerCase() === letra.toLowerCase()) {
             aNombres.splice(i, 1)
             i--                            // para no saltar elementos ya que el metodo es mutable
         }
     }
     return r
 }

 let l = 'r'
 let aUsuarios = ['rosa', 'raquel', 'elena','ramon', 'maria', 'roberto']
 limpiarArray(l, aUsuarios)
 console.log(aUsuarios)

 // PARÁMETROS

 
 function algo(h) { // h recibe el valor de z pero no estan vinculados. si se influye en "h","z" mantiene su valor
     h = h * h
     return h
 }
 let z = 4
 algo(z) 
 console.log(z)

 // PARÁMETROS y REFERENCIAS

 function cuadrados(a) {
     for (let i = 0; i < a.length; i++) {
         a[i] = a[i] * a[i]
         
     }
     return a //
 }
 let x = [1, 2, 3]
 cuadrados(x)
 console.log(x) // valor de x = [ 1, 4, 9 ] ya que x recibe la referencia de a, y por lo tanto es afectado por la funcion
 
 