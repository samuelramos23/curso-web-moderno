function triangulo(a, b, c){
    if (a === b && b === c){
        return ("Triângulo equilátero")
    }
    else if (a === b || a === c || b === c){
        return ("Triangulo Isósceles")
    }
    else
        return ("Triangulo Escaleno")

}

console.log (triangulo(1, 1, 1))
console.log (triangulo(1, 1, 3))
console.log (triangulo(1, 2, 3))