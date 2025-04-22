function dinheiro(valor){
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

console.log(dinheiro(0.30000000000000004))
