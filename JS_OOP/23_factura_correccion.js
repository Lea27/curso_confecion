const {fechaEsp, fijarLongitudCadena} = requiere ('15_facturas.js')

function Factura (empresa = {}, cliente = {}, items = [{}], numFactura ='', tipoIVA ='', formaPago ='', fecha = new Date()) {
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.numFactura = numFactura
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.fecha = fecha
    
}



function Empresa (nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}

function Item (descripcion = '', precioU = 0, cantidad =0) {
    this.descripcion = descripcion 
    this.precioU = precioU
    this.cantidad = cantidad
}

function Direccion (calle, num, poblacion, pais) {
    this.calle = calle
    this.num = num
    this.poblacion = poblacion
    this.pais = pais
}
Direccion.prototype.ToString() = function () {
    return `${this.calle} ${this.num} ${this.poblacion} ${this.pais}`
}

Factura.prototype.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe
}
Factura.prototype.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________
                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}
    Num. Factura: ${this.numFactura}
    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}
    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}
    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    Forma de Pago ..............................${this.formaPago}
    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

Factura.prototype.render = function () {
    console.log(this.prepararFactura())
}


const empresa = new Empresa(
    'Ediciones Tuatalug', 
    new Direccion('c/ Pez', '1', 'Madrid', 'España'),
    '625875921',
    'T-34761234',)

const cliente1 = new Empresa(
    'Librería Boracai',
    new Direccion('c/ Carranza', '5', 'Cádiz','España'),
    '625493421',
    'F-76521743')

const items = [
    new Item('Angular 8.0', 30, 10),
    new Item('JS para torpes', 32, 12),
    new Item('Typescrip Avanzado', 45, 8),
    new Item('Introducción a las aplicaciones Web',  37, 11)
]


const factura_1 = new Factura(
    empresa, cliente1, items, '000000012', 0.04, 'Contacto',
)

console.log(factura_1)
