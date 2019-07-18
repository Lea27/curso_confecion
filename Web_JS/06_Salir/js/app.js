export function app() {
    console.log('Cargada app')

    let btnSalir = document.querySelector('#btn-salir')

    btnSalir.addEventListener('click', onClick)

    function onClick(event) {
        let url = 'https://www.google.com/'
        location.assign(url)
    }
}