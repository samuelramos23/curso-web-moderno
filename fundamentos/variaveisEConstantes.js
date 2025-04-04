var a = 3
let b = 4

// usar somente let, var não respeita escopo de bloco, const não pode ser alterada
// var é global, let é local

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50
console.log(c)
