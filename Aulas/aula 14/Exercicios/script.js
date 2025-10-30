//1.
const numeros = ["Oi","Sumido","tudo,bem?","Saudades"]
for (let numero of numeros){
    console.log(numero)
}
//2.



//Exercicios de Fixacao
//1.
let valor = 0//Criou uma variavel que pode variar chamada "valor" e  representa 0
for (let i = 0; i < 5; i++){//Esta determinando que o comeco de "i" é 0, a continuacao maxima de "i" sera do maior numero menor que 10, e o "i" ira incrementar de 1 á 1.
    valor += i//
}
console.log(valor)//imprime o valor da variavel "valor"= 10

//2.
const lista = [10,11,12,15,18,19,21,23,25,27,30]
for (let numero of lista){
    if (numero > 18){
        console.log(numero)
    }
}
//a)
//Todos os numeros maiores que 18

//b)
//Nao
//Poderia usar o meodo indexOf() Ex:console.log(lista.indexOF(15))

//3.*,**,***,****.
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual<quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha +="*"
    }
    console.log(linha)
    quantidadeAtual++
}

//4.
const bichinhos = Number(prompt("Quanto s bichinhos voce tem?"))
//a)
if(bichinhos===0){
    console.log("Que pena!Voce pode adotar um pet!")
}
//b)
else{ let nomesPets = []
    for( let i=0;i<bichinhos;i++){
        nomesPets.push(prompt("Digite o nome do pet:"))
    }
   //c)
    console.log(nomesPets)
}
//5.
let arrayOriginal = [10,20,30,40,50,60]
//a)
for(let numero of arrayOriginal){
    console.log(numero)
}
//b)
for (let numero of arrayOriginal){
    console.log(numero/10)
}
//c)
let arrayPares = []
for (let numero of arrayOriginal){
    if(numero%2===0){
        arrayPares.push(numero)
        console.log(arrayPares)
    }
}
//d)
let arrayFrases = []
for(let i=0;i<arrayOriginal.length;i++){
    arrayFrases.push("O elemento do index " + i + "é:" +arrayOriginal[i])
}
console.log(arrayFrases)
//e)
let maiorNum = arrayOriginal[0]
let menorNum = arrayOriginal[0]
for(let numero of arrayOriginal){
    if(numero>maiorNum){
        maiorNum=numero
    }
    else if(numero<menorNum){
        menorNum=numero
    }
    console.log("menorNum é:".menorNum."maiorNum é:".maiorNum)
}