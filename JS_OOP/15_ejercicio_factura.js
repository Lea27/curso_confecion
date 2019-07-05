
const factura = {
    empresa = { 
        nombre:'' ,
        dirección: '', 
        teléfono: '',
        nif: ''
    },
    cliente = { 
        empresa: '',
        dirección: '',
        teléfono: '',
        nif: ''   
    },
    item = [
        {descripción: '', precioU: '', cantidad}
    ],
   numfactura: '',
    tipoIVA: '',
    formaPago: '',
    fecha: new Date()
}

factura.calcularImporte = function() {
    const importe = {}
    importe.base = this.items
    return this.items
    .map(item => item.precioU * item.cantidad)
    .reduce( (total, item) => total + item) * (1+this.tipoIVA)
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    console.log(importe)
}

factura.listarItems = function () {
    let items = ``
    this.item.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocalesString()
            let cant = item.cantidad
            items +=   f 
        
        }
    )
    
}

factura.prepararFactura = function () {
    const importe = this.calcularImporte()
    const factura = gf
                                         
}

function fijarLongitudCadena(cadena = '', lon = 0) {

    
}


