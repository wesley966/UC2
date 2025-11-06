/*//1.
function bemTurma(){
    console.log("Bem vindo turma 25-2N!")
}

bemTurma()

/2.
functi/on numeros(numero1, numero2){
    const soma = numero1+numero2
    console.log(soma)
}
numeros(4, 5)

//3.
function number(num){
    const result = num * 2
    console.log(result)
}
number(10)


//1.
function nomes(nome){
    console.log(`Olá ${nome}`)
}
nomes("ronaldo")
nomes("roberto")
nomes("ronald")

//2.
function num(num){
    console.log(`A soma é ${num}`)
}
num(1)
num(2)

//1.
function num(number1, number2){
    const soma = number1 + number2
    return soma
}
const nova = num(6,3)
console.log(nova)*/

//2.
let array = [2,4,6,8]
function divisao(array2){
    let novoArray = []
    novoArray.push(array2[0]/2)
    novoArray.push(array2[1]/2)
    return novoArray
}
console.log(divisao(array))