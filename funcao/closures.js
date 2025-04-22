// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxiico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Local
// Closures são funções que "lembram" o escopo onde foram criadas, mesmo quando são executadas fora desse escopo