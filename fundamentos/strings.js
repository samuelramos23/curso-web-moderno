const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt() retorna o caractere na posição 4 (5ª posição, porque começa em 0)
console.log(escola.charAt(5)) // charAt() retorna vazio se não existe caractere na posição 5
console.log(escola.charCodeAt(3)) // charCodeAt() retorna o código do caractere na posição 3 (4ª posição, porque começa em 0) da tabela unicode
console.log(escola.indexOf('3')) // indexOf() retorna a posição do caractere '3' na string escola

console.log(escola.substring(1)) // substring() retorna a string a partir da posição 1 (2ª posição, porque começa em 0)
console.log(escola.substring(0, 3)) // substring() retorna a string da posição 0 (1ª posição, porque começa em 0) até a posição 3 (4ª posição, porque começa em 0), não incluindo o caractere da posição 3  

console.log('Escola '.concat(escola).concat("!")) // concat() concatena strings 
console.log('Escola ' + escola + "!") // concatena strings
console.log(escola.replace(3, 'e')) // replace() substitui o caractere 3 por e

console.log('Ana,Maria,Pedro'.split(',')) // split() divide a string em um array de strings, usando a vírgula como separador