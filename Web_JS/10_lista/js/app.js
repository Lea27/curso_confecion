export function app(){

    //Existe un input #in-animal
    //Existe un elemento #output

    
    //Nodo

    let inAnimal = document.querySelector('#in-new')
    let outAnimal = document.querySelector('#out-lista')

    //Asignar manejador de eventos

    inAnimal.addEventListener('change', addAnimal)

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
                <span class="dialog" data-id="${i}">Esta seguro de querer eliminar este elemento</span>
            </li>`)
        html += '</ul>'
        outAnimal.innerHTML = html

        let aBtnBorrar = document.querySelectorAll('.btn-borrar')
        let aBtnEditar = document.querySelectorAll('.btn-editar')
        let aTextos = document.querySelectorAll('.texto')
        let btnCancelar = documetn.querySelector('#btn-cancelar')
        let dlgCancelar = document.querySelector('#dlg-cancelar')
        let handlerBorrar

        aBtnBorrar.forEach(btn => btn.addEventListener('click', onBorrar))
        aBtnEditar.forEach(btn => btn.addEventListener('click', onEditar))
        aTextos.forEach(txt => txt.addEventListener('blur', onChange))
        btnCancelar.forEach(btn => btn.addEventListener('click', onCancelar))
        
        handlerBorrar = setTimeout(() => onBorrar(),       4800)
            dlgCancelar.showModal()
            dlgTime.value = 5
            handlerInterval = setInterval( () => {
                dlgTime.value -= 1
            }, 1000)

    }

    function onBorrar(event) {
        console.log(event.target.dataset.id)
        let borrar = animales.splice(event.target.dataset.id, 1)
        localStorage.setItem('zoo', JSON.stringify(animales))   
        
        save()
        render()
    }

    function onEditar(event) {
        console.log(event.target.dataset.id)
        event.target.previousElementSibling.contentEditable = true
    }

    function onChange(event) {
        event.target.contentEditable = false
        console.log(event.target.textContent)
        animales.splice(event.target.dataset.id, 1, event.target.textContent)
        localStorage.setItem('zoo', JSON.stringify(animales))
        save()
        render()
    }
    
    function onCancelar(event) {
        clearTimeout(handlerSalir)
        clearInterval(handlerInterval)
        dlgCancelar.close()
    
    }
    
}
