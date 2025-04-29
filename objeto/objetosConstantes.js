// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // Congela o objeto, não permitindo alterações

pessoa.nome = 'Maria' // Não vai funcionar
console.log(pessoa) // Continua sendo Pedro
delete pessoa.nome // Não vai funcionar

console.log(pessoa.nome) 
console.log(pessoa) // Continua sendo Pedro

const pessoaConstante = Object.freeze({ nome: 'João' }) // Congela o objeto, não permitindo alterações
pessoaConstante.nome = 'Maria' // Não vai funcionar
console.log(pessoaConstante) // Continua sendo João