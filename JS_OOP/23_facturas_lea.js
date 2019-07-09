/**
 * 
 * @description :la funccion Factura permite crear facturas
 * @property :
 */

 
 function Cliente(nombre, direccion, telefono, nif) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono = telefono
    this.nif = nif
}
function Elementos(descripcion, precioU, cantidad , numFactura, tipoIVA, formaPago, fecha) {
this.descripcion = descripcion 
this.precioU = precioU
this.cantidad = cantidad
this.numFactura = numFactura
this.tipoIVA = tipoIVA
this.formaPago = formaPago
this.fecha = fecha 
}
     
 
 function Factura(empresa) {
    const empresa = {
        nombre: 'Ediciones Tuatalug',
        direccion: 'c/ Pez 1, Madrid',
        telefono: '625875921',
        nif: 'T-34761234',}
    this.cliente = cliente
    this.elementos = []
 }


 const f1 = new Factura(
   new cliente('Librería Boracai', 'c/ Carranza 5, Cádiz', '625493421', 'F-76521743',)
 )
