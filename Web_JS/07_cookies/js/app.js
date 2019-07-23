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
                setCookie('visitas', 0, 5)
                location.reload()
                break;
            case 'Eliminar':
                setCookie('visitas', 0, -2)
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
