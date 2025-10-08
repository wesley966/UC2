//CONCATENAÇAO

//aspas duplas
const nome = " Wesllei Oliveira da Rosa "
const idade = 20
const frase = "O meu nome é " + nome + " e minha idade é "+ idade 
console.log(frase)
console.log(typeof frase)

//aspas simples
const frase2 = 'O meu nome é ' + nome + ' e minha idade é '+ idade
console.log(frase)
console.log(typeof frase)


//TEMPLATE
const frase3 = `O meu nome é ${nome} e minha idade é  ${idade}`
console.log(frase3)
console.log(typeof frase3)


// PROPRIEDADE LENGTH
console.log(nome.length)

//METODO toLowerCase()
const frasemaiuscula = ""
const fraseminuscula = frasemaiuscula.toLowerCase()
console.log(frasemaiuscula, fraseminuscula)

//METODO toUpperCase()
const fraseupper = frasemaiuscula.toUpperCase()
console.log(frasemaiuscula,fraseupper)

//METODO trim()
console.log(nome.trim())

//METODO include(caracteres)
const frase4 = "A gigante cidade de gotham"
console.log(frase4.includes("gotham"))
console.log(frase4.includes("metropolis"))

//METODO replaceAll(chars1, chars2)
const frase5 = frase4.replaceAll("gotham, metropolis")
console.log(frase5)

//ARRAYS
const listaDeCompras = ["abacate", "banana", "tomate"]
console.log(listaDeCompras[0])

