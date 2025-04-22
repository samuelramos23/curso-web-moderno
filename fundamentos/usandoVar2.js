var numero = 1
{
    var numero = 2
    console.log('Dentro do bloco: ' + numero)
}
console.log('Fora do bloco: ' + numero)
// O var tem escopo de função, não de bloco
// O que significa que ele é acessível fora do bloco onde foi declarado
// O var é uma variável global, acessível em qualquer parte do código
// Isso pode causar problemas de manutenção e legibilidade do código
// Por isso, é recomendado usar o let ou const para declarar variáveis
// O let tem escopo de bloco, ou seja, só é acessível dentro do bloco onde foi declarado
// O const é uma variável constante, ou seja, não pode ser reatribuída
// O let e o const são mais seguros e recomendados para uso em JavaScript