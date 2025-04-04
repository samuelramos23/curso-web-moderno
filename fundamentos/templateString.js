const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` 
//${nome} é uma expressão que será avaliada e o resultado será concatenado
// com a string. O template string é delimitado por crase (`) e pode ter várias linhas
// e interpolar expressões. O template string é uma forma mais moderna de concatenar strings
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`) 

const up = texto => texto.toUpperCase()
// função que transforma o texto em maiúsculo
// o template string pode ter expressões, como a função up() que transforma o texto em maiúsculo
console.log(`Ei... ${up('cuidado')}!`) 