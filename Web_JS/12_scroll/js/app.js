export function app() {
    console.log('Cargada app')


    window.addEventListener('scrol', onScroll)
    let header = document.querySelector('body>header')

    function onScroll(event) {
        console-log(event)
        let y = event.target.scrollingElement.scrollTop
        
        console.log(y)
        if (y >= 40) {
            header.classList.add('sticky')
        } else {
            header.classList.remove('sticky')

        }
        
    }
}