//1
const nome =prompt ("Qual o seu nome?")
const corFa = prompt ("Qual a sua cor favorita?")
const mensagem = 'A cor favorita de ' + nome + " é: " + corFa

console.log(mensagem)
console.log(typeof mensagem)

//2
const template = `A cor favorita de ${nome} é ${corFa}`
console.log(template)
console.log(typeof template)

const concatenacao = "A cor favorita de " + nome + " é: "+corFa
console.log(concatenacao)
console.log(typeof concatenacao)

//EXERCICIOS PROTOTIPOS DE STRING
const suaFrase = prompt("Escreva uma frase:")

console.log(suaFrase.toUpperCase())
console.log(suaFrase.replaceAll("o", "i"))
console.log(suaFrase.length)


//EXERCICIOS DE ARRAYS
//1.
