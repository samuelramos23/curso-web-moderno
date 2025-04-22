function jurosSimples(capitalInicial, taxaJuros, tempo) {
    const montante = capitalInicial + (capitalInicial * taxaJuros * tempo)
    return montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function jurosComposto(capitalInicial, taxaJuros, tempo) {
    const montante = capitalInicial * (1 + taxaJuros) ** tempo
    return montante.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

console.log(jurosSimples(1000, 0.05, 3))
console.log(jurosComposto(1000, 0.05, 3))