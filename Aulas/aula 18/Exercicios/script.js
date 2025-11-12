/*function minhaFuncao(variavel){
    return variavel*5
}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//1.
//a)
//10
//50

//b)
//Erro

let textoDoUsuario = prompt("Insira um texto")
const outraFuncao = function(texto){
    return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/

//2.
//a)
//Transforma a resposta do usuario em minusculo e inclui a palavra cenoura
//b)


//3
//a)
function informacoes(){
    console.log("Eu sou Wesllei, tenho 20 anos, moro em Sao Leopoldo e sou estdante")
}

informacoes()

//4.
//a)
function numero(number1, number2){
    return number1 + number2
    
}
console.log(numero(5,6))


//b)
function doisNum(num1,num2){
    return num1>=num2
}
console.log(doisNum(2,3))

//c)
function outro(numero){
    if(numero%2===0)
    console.log("par")
else{
    console.log("impar")
}
}
outro(6)

//d)
function mensagem(sagem){
    return sagem.lenght
}
console.log(("Todos os Dias"))

//5.

function soma(mais,mais1){
    return mais + mais1
}

function subtracao(menos,menos){
    return menos - menos
}

function multiplicacao(vezes, vezes1){
    return vezes * vezes1
}

function divisao(divisao, divisao1){
    return divisao / divisao1
}
const again = Number(prompt("Digite um numero"))
const again1 = Number(prompt("Digite o segundo numero"))

const semSoma = soma(again,again1)
const comSub = subtracao(again,again1)
const multi = multiplicacao(again,again1)
const divi = divisao(again,again1)

console.log(`Numeros inseridos: ${again} e ${again1}`)
console.log(`Soma: ${semSoma}`)
console.log(`Diferenca: ${comSub}`)
console.log(`Multiplicacao: ${multi}`)
console.log(`Divisao: ${divi}`)

