const pessoa = {
    saudacao: function() {
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind() faz o this referenciar o objeto
falarDePessoa()

const falarDePessoa2 = pessoa.saudacao.bind(pessoa)
falarDePessoa2() 