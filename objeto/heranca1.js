const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // Retorna o protótipo do objeto
console.log(ferrari.__proto__ === Object.prototype) // Retorna true
console.log(volvo.__proto__ === Object.prototype) // Retorna true
console.log(Object.prototype.__proto__ === null) // Retorna true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // Retorna function
console.log(typeof Object.prototype, typeof MeuObjeto.prototype) // Retorna object e object