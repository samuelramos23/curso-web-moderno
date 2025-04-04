const peso1 = 1.0
const peso2 = Number('2.0') // Number() converte string para número

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // isInteger() verifica se o número é inteiro
console.log(Number.isInteger(peso2)) // peso2 é inteiro porque Number() converteu a string '2.0' para o número 2.0, que é inteiro (não tem parte decimal)

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))// toFixed() formata o número para 2 casas decimais
console.log(media.toString(2)) // em binário, toString(2) converte o número para binário
console.log(typeof media)
console.log(typeof Number)