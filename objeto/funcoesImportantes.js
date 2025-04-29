const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Retorna as chaves do objeto
console.log(Object.values(pessoa)) // Retorna os valores do objeto
console.log(Object.entries(pessoa)) // Retorna as chaves e valores do objeto

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Se o atributo é enumerável
    writable: false, // Se o atributo é gravável
    value: '01/01/2019' // Valor do atributo
})

pessoa.dataNascimento = '01/01/2017' // Não vai funcionar
console.log(pessoa.dataNascimento) // Continua sendo 01/01/2019
console.log(Object.keys(pessoa)) // Retorna as chaves do objeto

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Faz a cópia dos objetos
console.log(dest) // Retorna o objeto de destino

Object.freeze(obj) // Congela o objeto, não permitindo alterações
obj.c = 1234 // Não vai funcionar
console.log(obj) // Continua sendo 3