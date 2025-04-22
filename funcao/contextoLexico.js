const valor = 'Global'

function minhaFuncao() {
    console.log(valor) // Local
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()