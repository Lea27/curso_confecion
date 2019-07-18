export class App {


    constructor() {
        console.log('Cargada app')

        //Nodos de1 DOM
        this.aBtns = document.querySelectorAll('.btn')
        this.inNombre = document.querySelector('#in-nombre')
        this.outSaludo = document.querySelector('#out-saludo')
        this.inNombre2 = document.querySelector('#in-nombre2')
        this.outSaludo2 = document.querySelector('#out-saludo2')
        // Manejos de eventos
        this.aBtns.forEach( (btn)=> btn.addEventListener('click', 
            this.onBtnClick.bind(this)))
        this.inNombre2.addEventListener('input', 
            this.escribirContinuo.bind(this))
        console.log(this)
    }
    

    onBtnClick(event) {
        console.dir(event.target.id)
        let message
        switch (event.target.id) {
            case 'btn-normal':
                message =  `Hola ${this.inNombre.value}`
                break;
            case 'btn-super':
                message = 'Te dije que no tocaras'
                break;
            default: 
                message = 'Boton sin funcionalidad'
        }
        console.log(this)

        this.outSaludo.value = message
    }

    escribirContinuo() {
        this.outSaludo2.value = this.inNombre2.value
    }

}

