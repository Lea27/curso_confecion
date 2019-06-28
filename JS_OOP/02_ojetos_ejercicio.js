

function prepararMeses (id1, id2) {

   /*  const m = require('./01_ojetosejercicio.js/index.js') */
    let {aMeses, aMesesItaliano, aMesesIngles} = require('./01_ojetosejercicio.js')
    let meses1 = elegirArray(id1)
    let meses2 = elegirArray(id2)
    
}

function elegirArray(params) {
    switch (key) {
        case 'es':
            r = 'aMeses'
            break;
         case 'it':
             r = 'aMesesItaliano'
             break;
         case 'in':
             r = 'aMesesIngles'
             break;    
        default:
            throw new Error('Código de idioma icorrecto')
 }    
}          
function elegirArray(params) {
            switch (key) {
                case 'es':
                    r = 'aMeses'
                    break;
                 case 'it':
                     r = 'aMesesItaliano'
                     break;
                 case 'in':
                     r = 'aMesesIngles'
                     break;    
                default:
                    throw new Error('Código de idioma icorrecto')
                } 
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
    let oMeses = prepararMeses()
    let texto = ``

    for (const mes in oMeses) {
        const trad = oMeses[mes];
        texto += `El mes $(mes) en $(id1), en $(id2) se dice $(trad) `
    }
}





console.log(prepararMeses())