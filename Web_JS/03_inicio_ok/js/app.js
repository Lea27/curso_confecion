export function app() {

    console.log('Cargada app')

    //Nodos de1 DOM

    const aBtns = document.querySelectorAll('.btn')
    const inNombre = document.querySelector('#in-nombre')
    const outSaludo = document.querySelector('#out-saludo')
    const inNombre2 = document.querySelector('#in-nombre2')
    const outSaludo2 = document.querySelector('#out-saludo2')

    // Manejos de eventos

    aBtns.forEach( (btn)=> btn.addEventListener('click', onBtnClick))
    inNombre2.addEventListener('input', escribirContinuo)

    function onBtnClick(event) {
        console.dir(event.target.id)
        let message
        switch (event.target.id) {
            case 'btn-normal':
                message =  `Hola ${inNombre.value}`
                break;
            case 'btn-super':
                message = 'Te dije que no tocaras'
                break;
            default: 
                message = 'Boton sin funcionalidad'
        }

        outSaludo.value = message
    }

    function escribirContinuo() {
        outSaludo2.value = inNombre2.value
    }

}

