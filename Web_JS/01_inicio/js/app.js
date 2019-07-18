export function app() {
    console.log('Cargada app')

function saludar() {
    console.log('Hola, desde una funccion')
    
}


console.log(document)
console.dir(document) // permite ver los objts dom como java

console.log(querySelector)
document.querySelector('#btn-super').onclick = saludar // permite hacer seleciones de objts en funccion de selectores css
}