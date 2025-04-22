function calculos(a, b) {
    const soma = a + b;
    const sub = a - b;
    const mult = a * b;
    const div = a / b;
    return {
        soma,
        sub,
        mult,
        div
    }
}

console.log(calculos(3, 4))
