const sequencia = {
    _valor: 1, // convenção para indicar que é privado
    get valor() { return this._valor++ }, // getter
    set valor(valor) { // setter
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // 1