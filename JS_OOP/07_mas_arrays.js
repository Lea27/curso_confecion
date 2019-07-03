{//Tipos de datosNumber,  String(Comillas dobles y simples/Template strings (ES6)), Boolean, Observable, Undefined y null */
    let aDatos = ['perro', 'gato']
    aDatos.length // devuelve la longitud del array, la longitud es el número de elementos del array
    
    // Implementadas como imutables   (estas funciones no cambian el array)
    aDatos.concat(['leon', 'tigre'])

    // Implementadas como mutables    (estas funciones cambian el array completo)
    aDatos.sort()     //sort = reordona el array, la version original es irrecuperable
    console.log(aDatos)

    /*let aNumbers = [32, 3, 2, 21, 56, 5, 9]
    aNumbers.sort()
    console.log(aNumbers)  // orden alfabetico, ordena los numeros de la misma forma: [2, 21, 3, 32, 5, 56, 9]*/

    let aNumbers = [32, 3, 2, 21, 56, 5, 9]
    let aNumbersOriginal = aNumbers.slice(0) // la funcion slice, clona el array creando otro identico sin no se introducen parametros entre la parentesis
    aNumbers.sort((a,b) => b-a) // ordena del mas grande al mas pequeño (si se cambia b-a por b+a el orden se invierte)
    console.log(aNumbers)
    console.log(aNumbersOriginal.reverse()) // revierte el array:[ 9, 5, 56, 21, 2, 3, 32 ] 
       //esta funcion es mutables, modifica es array al que afecta d forma a que el originql se pierde 
    

    let nombres = ['Luis', 'Ramon', 'Juan', 'Rosa', 'Julia', 'Maria']
    // fraccionar array de froma imutable
    let eliminados = nombres.splice(1, 3, 'pedro', 'ernesto') // la funcion splice elimina porciones del array a partir de una posicion indicada
    //sirve también para añadir elementos
    console.log(eliminados)
    console.log(nombres)
    
    
    // fraccionar array de forma mutable 
   
    // splice para añadir

    let paises = ['francia', 'italia', 'hungria', 'holanda']
    paises.splice(2, 0, 'españa')  // para añadir: primero la posicion, despues cuantos elemento se eliminan, y por terminar elemento añadido 
    console.log(paises)

    // Pilas y colas

    // PILA -> stack FILO  (retirar elementes por orden empezando desde el ultimo añadido)

    console.log(paises.push('portugal', 'alemania'))
                 //añadir nuevos elementos al final
    paises.pop( )    //suprimir elemntos del final
    console.log(paises)
   

    // COLA -> heap FIFO

    paises.unshift('croacia')
    console.log(paises)
}