let condicao1 = true
if(condicao1){
    //Como o valor da condicao é true,
    //o codigo desse bloco é executado
    console.log('Entrei no if 1!')
}

let condicao2 = false
if(condicao2){
    console.log('Entrei no if 1!!')
}


//IF+ELSE
if(condicao1===condicao2){
    console.log("os numeros sao iguais")
}

else if(condicao2)
console.log("os numeros sao diferentes")


else if(condicao1){
    console.log("Entrou no else if 1")
}

else{
    console.log("Entrou no else if 2")
}

//SWICTH CASE
let paisOrigem = prompt("Digite seu pais de origem")
switch(paisOrigem){
    case 'Brasil':
    console.log('brasileiro')
    break
    case 'EUA':
        console.log('norte americano')
        break
        case 'Inglaterra':
            console.log('ingles')
            break
            default:
                console.log('nacionalidade nao encontrada')
                break
}