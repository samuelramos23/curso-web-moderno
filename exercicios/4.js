function divisao(a, b) {
    const resultado = a / b
    const resto = a % b
    return { resultado, resto }
}

console.log(divisao(10, 5))
console.log(divisao(9, 3))
console.log(divisao(13, 2))