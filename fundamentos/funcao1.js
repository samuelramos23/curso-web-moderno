//Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN
imprimirSoma(2, 3, 4, 5, 6) // Soma apenas os dois primeiros argumentos
imprimirSoma() // NaN

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // 3 porque o parametro de b é 0
console.log(soma()) // NaN