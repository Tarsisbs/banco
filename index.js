import {buscarTitulares, Titular} from "./model/Titular.js"
import {Conta} from "./model/Conta.js"

let titulares = buscarTitulares()
console.log(titulares)

let c1 = new Conta(300, 156234, 123, 225, titulares[0])
let c2 = new Conta(2000, 151451, 114, 157, titulares[1])
let c3 = new Conta(1000000, 205748, 666, 222, titulares[2])

console.log(c1)
console.log(c2)
console.log(c3)