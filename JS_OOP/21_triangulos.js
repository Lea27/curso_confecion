/**
 * @description :funcion que devuelve las propiedades de un tiranguloo
 * @property {number} lado 1
 * @property {number} lado 2
 * @property {number} lado 3
 * @method {number} get lados
 * @method {number} get perímetro
 * @method {object} get tipo
 */

/*
 function triangulo(lado1, lado2, lado3) {
      this.lados =[lado1, lado2, lado3]
      this.perimetro = lado1 + lado2 + lado3
      this.tipo (equilatero, isosceles, escaleno) {
        if (lado1 == lado2 == lado3) {
           return equilatero
        } else if (!lado1 == lado2 == lado3) {
            return escaleno
        }}

 const triangulo1 = {
     lado1: 1,
     lado2: 3,
     lado3: 4
 }
 console.log(triangulo1)
 } */

            
/*
function triangulo(l1, l2, l3) {
        this._l1 = l1
        this._l2 = l2             //en las funciones constructuras, con this, guardamos los parametros en propiedades
        this._l3 = l3
}

triangulo.prototype.getLados = function () {
    return this
}
triangulo.prototype.getPerimetro = function () {
    return this._l1 + this._l2 + this._l3
}
triangulo.prototype.getTipo = function () {

    
}

const t = new triangulo(5, 8, 5)

console.log(t.getPerimetro()) */

function triangulo(lados, ...rest) {
    this._lados = (Array.isArray(lados) && lados.length === 3)
        ? lados : [lados].concat(rest)
    if (this._lados.length !==3) {
        throw new Error('Número de lados inválido')
        this.tipos = ['Equilátero', 'Isosceles', 'Escaleno']
}
    }
   


//triangulo.prototype.tipos = ['Equilátero', 'Isosceles', 'Escaleno']
triangulo.prototype.getLados = function () {
    
}

triangulo.prototype.getPerimetro = function () {
    return this._lados.reduce( (a,b) => a + b)
}

triangulo.prototype.getTipo = function () {
    let tipo = 1
    if (this._lados[0] === this._lados[1] &&
        this._lados[0] === this._lados[2]) {
            tipo = 0
    } else if (this._lados[0] !== this._lados[1] &&
        this._lados[0] !== this._lados[2] &&
        this._lados[0] !== this._lados[2]) {
            tipo = 2
        }
    return this.tipos[tipo]
    return triangulo.tipos[tipo]
}

try {
    new triangulo(3, 3, 3).getLados()
    new triangulo(2, 4, 7).getLados()
    new triangulo(3, 3, 6).getLados()
    new triangulo([3, 3]).getLados()

} catch (error) {
    console.log(error.message)
}

let t = new triangulo([3, 3, 7])
console.log(t.getLados())
console.log(t.getPerimetro())
console.log(t.getTipo())