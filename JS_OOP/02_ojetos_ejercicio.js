let {aMeses, aMesesItaliano, aMesesIngles} = require('./02_data.js')

function elegirArray(params) {
    let r
    switch (key) {
        case 'es':
            r = 'aMeses'
            break;
         case 'it':
             r = 'aMesesItaliano'
             break;
         case 'en':
             r = 'aMesesIngles'
             break;    
        default:
            throw new Error('Código de idioma icorrecto')
 }    
}          
function elegirIdioma(params) {
            switch (key) {
                case 'es':
                    r = 'aMeses'
                    break;
                 case 'it':
                     r = 'aMesesItaliano'
                     break;
                 case 'en':
                     r = 'aMesesIngles'
                     break;    
                default:
                    throw new Error('Código de idioma icorrecto')
                } 
            } 


function prepararMeses (id1, id2) {

   /*  const m = require('./01_ojetosejercicio.js/index.js') */
    let {aMeses, aMesesItaliano, aMesesIngles} = require('./01_ojetosejercicio.js')
    let meses1 = elegirArray(id1)
    let meses2 = elegirArray(id2)
    
}
function name(params) {
    
    if (meses1.length !== meses2.length ) {
        throw new Error('Error de entrada de datos')}
    

    let oMeses = {}
    for (let i = 0; i < aMeses.length; i++) {
        const item = aMeses[i];
        oMeses[item] = aMesesItaliano[i]
    }
    return oMeses
}



function mostrarParesMeses(id1, id2) {

    let oMeses = prepararMeses(id1, id2)
    let texto = ``
    let ids = [elegirIdioma(id1), elegirIdioma(id2)]
    for (const mes in oMeses) {
        const trad = oMeses[mes];
        texto += `El mes ${mes} en ${id1}, en ${id2} se dice ${trad} en ${ids[1]}\n `
    }
    console.log(texto)
}

try {
    // Eleige dos entre 'es', 'it', 'en'
    let idioma1 = 'italiano'
    mostrarParesMeses('italiano', 'en')

} catch (e) {
    console.error('Lo sentimos')
    console.error(e.message)
}
console.log('Gracias por venir')

console.log(prepararMeses())