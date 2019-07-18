export function app() {
    
    // Nodos del Dom

    aBotones = document.querySelectorAll('.btn')
    aInputs = document.querySelectorAll('input')
    aOutouts = document.querySelectorAll('output')

    // Asignación de los manejadores

    aBotones.forEach(btn => btn.addEventListener('click', onBtnClick));

    // Manejadores y otros métodos

    const onBtnClick = function (event) {
        switch (event.target.id) {
            case 'triangulo':
                break;
            case 'cuadrado':
                break;
            case 'circulo':
                break;
        }
        
    }
}
    