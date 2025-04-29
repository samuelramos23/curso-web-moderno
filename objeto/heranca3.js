const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // Cria um objeto filha1 com pai como protótipo
filha1.nome = 'Ana' // Adiciona uma propriedade nome ao objeto filha1
console.log(filha1.corCabelo) // Retorna 'preto'

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } 
}) // Cria um objeto filha2 com pai como protótipo e adiciona uma propriedade nome

console.log(filha2.nome) // Retorna 'Bia'
filha2.nome = 'Carla' // Não vai funcionar, pois a propriedade nome é não gravável
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // Retorna 'Bia tem cabelo preto'

console.log(Object.keys(filha1)) // Retorna as chaves do objeto filha1
console.log(Object.keys(filha2)) // Retorna as chaves do objeto filha2

for (let key in filha2) {
    // Retorna as chaves do objeto filha2
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
} // Retorna 'nome' e 'corCabelo'