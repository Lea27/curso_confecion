

let hander = setTimeout( () => {
    console.log('Hola')
},4000 )
setTimeout( () => {
    clearTimeout(hander)
}, 2000 )                          // si setTimeout se ejecuta antes de(menos segundos que hander) borra el anterior