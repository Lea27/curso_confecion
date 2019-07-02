{
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
    let aNumbersOriginal = aNumbers.slice(0) // la funcion slice, clona el array creando otro identico 
    aNumbers.sort((a,b) => b-a) // ordena del mas grande al mas pequeño (si se cambia b-a por b+a el orden se invierte)
    console.log(aNumbers)
    console.log(aNumbersOriginal.reverse()) // revierte el array:[ 9, 5, 56, 21, 2, 3, 32 ] 
       //esta funcion es mutables, modifica es array al que afecta d forma a que el originql se pierde 
    


}