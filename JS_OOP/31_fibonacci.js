/**calcularFbncci
 * @description: funcion que calcula lq serie de fibonacci y fuccion que muestra la serie de fibonacci
 * @param: {number}
 * @method: 
 * 
 */

function calcularFbncci(limite){
    if (limite  < 1) {
        throw new Error(' Límite no valido ')

    }
    let i = 0
    let j = 1
    let aFibo = [i, j]
        do {
            aFibo.push(i+j)
            i = j
            j = aFibo[aFibo.length-1] // asignacion a j de la ultima posición dentro de aFibo
        } while ((i+j) <= limite);

        //while (condition) {}
            //cosas
        
    return aFibo
    }



    let limite= 10000
try {
    console.log(calcularFbncci(limite))
}
catch (error) {
        console.log(error.message)
    }


    /*
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  */