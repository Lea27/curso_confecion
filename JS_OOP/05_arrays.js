
let ob = {} // new object
let aDatos = [2, 8, 9, 76] // new Array()
//un array es un objeto indexado que guarda valores asociados a una posicion : la posicion 0 vale 2, la posicion 1 vale 8 ...
// array js es diferente de otros : no admite tipos, [2, 8, 9, 76, 'pepe']/no se puede limitar la longitud de un array,  son potencialmante infinitos
aDatos[aDatos.length] = 87 // se añade este valor al array y crece
aDatos[aDatos.length] = 56 // se añade otro valor sumandolo al anterior 

aDatos[0] = 9 //sustituye el 2 por un 0
aDatos[100] = 9
console.log(aDatos[0])