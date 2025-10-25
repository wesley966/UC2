//1.
let num1 //primeira variavel indefinida
let soma = 0//uma variavel para a soma dos numeros

while(num1!==0){//enqunto o numero da variavel "num1"for diferente de zero irá repetir a acao de loop
    num1 = Number(prompt("Qualquer numero:"))//demacarcando a primeira variavel como prompt
    soma += num1//para demonstrar que tipo de calculo sera feito
}
console.log(`O resultado é: ${soma}`)//imprime"O resultado é: (variavel soma)


//2.
let numero = [11,15,18,14,12,13]
let maiorNumero = 0

for(let i=0; i<6; i++){
    if(numero[i]>maiorNumero)
    console.log("O maior numero: ", numero[i])
}