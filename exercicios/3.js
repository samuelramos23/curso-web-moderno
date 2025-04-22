function potencia(a, b){
    let resultado = 1;
    for (let i = 0; i < b; i++) {
        resultado *= a;
    }
    return resultado;
}

console.log(potencia(10,1))
console.log(potencia(10,2))
console.log(potencia(10,3))
console.log(potencia(5,2))