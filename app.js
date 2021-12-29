let fs = require('fs')
let moment = require('moment')
let bebidas = require('./bebidas')
let comidas = require('./comidas')
let postres = require('./postres')
let merienda = require('./merienda')

console.log("Me gusta tomar: ")
console.log(bebidas[0])

console.log("Me gusta comer: ")
console.log(comidas[1])

console.log("De postre me gusta el: ")
console.log(postres[2])

console.log("Para la tarde me gusta el: ")
console.log(merienda[0])

let texto = fs.readFileSync(__dirname + '/documento.txt', 'utf-8')
console.log(texto)

console.log("La fecha de hoy es: " + moment().format('DD/MM/YYYY'));


