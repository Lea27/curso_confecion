import { setCookie, getCookie } from "./cookies"

export function app() {
    console.log('Cargada app')
    

    //Nodos
    let aBotones = document.querySelectorAll('button')
    let output = document.querySelector(output)

    //MAnejadores
    aBotones.forEach(btn => {
        btn.addEventListener('click', onClick)
    });

    let visitas= getCookie('visitas');
    console.log(numVisitas)
    if(visitas !== '') { 
        setCookie("visitas", ++numVisitas, 5)
    }
    
    ____________________________________________________

    //Funciones manejadores
    function onClick(event) {
        switch (event.target.textContent) {
            case 'Iniciar':
                localStorage.setItem('visitas', 0)
                location.reload()
                break;
            case 'Eliminar':
                localStorage.removeItem('visitas')
                location.reload()
                break;
            case 'Mostrar':
                console.log('Mostrar', numVisitas)
                output.value = numVisitas
                break;
            case 'Recargar':
                location.reload()
                break;
        }
    }

  
    
}
