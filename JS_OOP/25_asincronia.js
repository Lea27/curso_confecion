/**
 * ASINCRONIA
 * 
 * Procesos que consumen tiempo
 *          - bloqueante
 *          - no bloqueante
 * 
 * Bucle con una Cola de eventos (en los procesos no bloqueantes)
 */


 // proceso bloqueante de 1 seg
 // siguiente proceso 

 
 // proceso no bloqueante de 1 seg
 // siguientes procesos            

setTimeout( () => console.log('Mensaje 1'), 0)
 console.log('Mensaje 2') 
 console.log('Mensaje 3')
 setTimeout( () => console.log('Mensaje 4'), 2000) 
 console.log('Mensaje 5')
 setTimeout( () => console.log('Mensaje 6'), 1000)
 console.log('Mensaje 7')