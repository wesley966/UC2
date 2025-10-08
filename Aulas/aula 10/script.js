//PROTOTIPOS DE ARRAYS

//PROPRIEDADE length
const pokemon = ["bulbassauro","squirtle","charmander"]
console.log(pokemon.length)


//METODO includes(elemento)
const series = ["Vikings","The Big Bang Theory"]
console.log(series.includes("Vikings"))
console.log(series.includes("Game of Thrones"))

//METODO push(elemento)
const numero = [1,2,3]
console.log(numero.push(4))

numero.push(5,6,7)
console.log(numero)

//METODO pop()
const peixes = ["palhaco","mandarim","esturjao"]
peixes.pop()
console.log(peixes)

//METODO splice(i(indice),n(quantidade))
const letras = ["A","B","C","D","E","F","G","H"]
//indice(i)      0   1   2   3   4   5   6   7

letras.splice(2,1)

letras.splice(3,2)
console.log(letras)


