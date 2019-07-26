export function app(){

    //Existe un input #in-animal
    //Existe un elemento #output

    
    //Nodo

    let inAnimal = document.querySelector('#in-new')
    let outAnimal = document.querySelector('#out-lista')
    let dlgConfirmar = document.querySelector('.confirmacion')
    let aDlgBotones = document.querySelectorAll('.confirmacion button')

    //Asignar manejador de eventos

    inAnimal.addEventListener('change', addAnimal)
    aDlgBotones.forEach(btn => 
        btn.addEventListener('click', onClickDlg))


    //Crear array

    let animales= []

   //¿Existe estorage? 
    if (localStorage.getItem('zoo')) {
        animales = JSON.parse(localStorage.getItem('zoo'))
        render()
    }

    //Funcion 

    function addAnimal() {
        animales.push(inAnimal.value)
        save()
        console.log(JSON.stringify(animales))
        inAnimal.value = ''
        render()
    }
    function save() {
        localStorage.setItem('zoo', JSON.stringify(animales))
    }

    function render() {
        let html = ''
        html += '<ul>'
        animales.forEach((item, i) => html += 
            `<li>
                <span class="texto" data-id="${i}">${item}</span>
                <span class="btn btn-editar" data-id="${i}">✍️</span> 
                <span class="btn btn-borrar" data-id="${i}">🗑️</span> 
            </li>`)
        html += '</ul>'
        outAnimal.innerHTML = html

        let aBtnBorrar = document.querySelectorAll('.btn-borrar')
        let aBtnEditar = document.querySelectorAll('.btn-editar')
        let aTextos = document.querySelectorAll('.texto')
      

        aBtnBorrar.forEach(btn => btn.addEventListener('click', onBorrar))
        aBtnEditar.forEach(btn => btn.addEventListener('click', onEditar))
        aTextos.forEach(txt => txt.addEventListener('blur', onChange))
        
        
        

    }

    function onBorrar(ev) {
        numBorrar = ev.target.dataset.id
        dlgConfirmar.showModal()
    }

   function onClickDlg (ev) {
       if (ev.target.textContent === 'SI') {
        animales.splice(numBorrar, 1)
        save()
        render()     
       }
       dlgConfirmar.close()
   }   

    function onChange(event) {
        event.target.contentEditable = false
        console.log(event.target.textContent)
        animales.splice(event.target.dataset.id, 1, event.target.textContent)
        localStorage.setItem('zoo', JSON.stringify(animales))
        save()
        render()
    }
    

    
}
