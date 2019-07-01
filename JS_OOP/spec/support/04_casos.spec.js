
let (comprobarCaso) = require('../04_caso.js')

describe('fucion comprobarCaso', () => {
    it('should be 0 if all MAY', () => {
        const cadena = 'HOLA PEPE'
        expect(comprobarCaso(cadena)).toEqual(0)
    });
    it('should be 1 if all min', () => {
        const cadena = 'hola amigo'
        expect(comprobarCaso(cadena)).toEqual(1)
    });
    it('should be 2 if MAY & min', () => {
        const cadena = 'Hola Pepe'
        expect(comprobarCaso(cadena)).toEqual(2);
    });
});

describe('fucion mostrarcomprobacionCaso', () => {
    it('should be "solo mayúsculas" if all MAY', () => {
        const cadena = 'HOLA PEPE'
        console.log = jasmine.createSpy("log")
        mostrarcomprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo mayúsculas')
   });
    it('should be "solo minúsculas" if all MAY', () => {
        const cadena = 'hola amigo'
        console.log = jasmine.createSpy("log")
        mostrarcomprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo mayúsculas')
    });
    it('should be "mayúsculas y minúsculas" if all MAY', () => {
        const cadena = 'Hola Pepe'
        console.log = jasmine.createSpy("log")
        mostrarcomprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo mayúsculas')
    });




}); 