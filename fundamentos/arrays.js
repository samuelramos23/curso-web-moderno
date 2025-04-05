const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //length mostra o tamanho do array 

valores.push({id: 3}, false, null, 'teste') //push adiciona elementos ao array
console.log(valores)

console.log(valores.pop()) //pop remove o último elemento do array
delete valores[0] //delete remove o elemento do array 
console.log(valores)

console.log(typeof valores) //typeof para mostrar que array é um objeto