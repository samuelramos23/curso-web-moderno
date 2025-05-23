function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) + imposto}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
// O apply aceita um array como segundo parâmetro
// O call aceita uma lista de parâmetros

console.log(getPreco.call(carro, 0.17, '$')) 
console.log(getPreco.apply(carro, [0.17, '$']))