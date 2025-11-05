/*//DECLARACAO
function imprimirOlaMundo(){
    console.log("Olá Mundo!")
}
//EXECUCAO/INVOCACAO
imprimirOlaMundo()

//ESCOPO

//GLOBAL
const a = 1

function imprimeVariavel(){
//LOCAL  
const b = 2
console.log("Variavel a", a)
console.log("Variavel b", b)
}

//GLOBAL
imprimeVariavel()

console.log("Variavel a", a)
console.log("Variavel b", b)*/
//VAI DAR ERRADO 


//RETORNO
function calculaArea(altura,largura){
    const area = altura*largura
    return area
}

const areaCalculada = calculaArea(3,6)

console.log(calculaArea(4,6))
console.log(areaCalculada)