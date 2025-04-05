let valor //não inicializado
console.log(valor)

valor = null //ausência de valor
console.log(valor)
// console.log(valor.toString()) //erro, não é possível chamar toString() em null

const produto = {}
console.log(produto.preco) //undefined, não existe o atributo preco
console.log(produto) //objeto vazio

produto.preco = 3.50
console.log(produto) //objeto com o atributo preco

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco) //false
//delete produto.preco
console.log(produto) //objeto com o atributo preco undefined

produto.preco = null //sem preço
console.log(!!produto.preco) //false
console.log(produto) //objeto com o atributo preco null