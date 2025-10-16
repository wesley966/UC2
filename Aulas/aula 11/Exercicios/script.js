//1.
//a)
const num1 = Number(prompt("Escreva um numero:"))
const num2 = Number(prompt("Escreva o segundo numero:"))

//b)
if(num1===num2){
    //c)
    console.log("Sucesso")
}

//2.
//a)
const num3 = Number(prompt("Digite o primeiro numero"))
const num4 = Number(prompt("Digite seu segundo numero"))

//b)
const resultado = num3===num4

//c)
if(resultado){
    console.log("sao iguais")
}
else{
    console.log("sao diferentes")
}

//3)
//a)
const num5 = Number(prompt("Primeiro digito"))
const num6 = Number(prompt("Segundo digito"))

//b)
let resultado2 = num5>num6
let resultado3 = num5<num6
let resultado4 = num5===num6

if(resultado2){
    console.log("sucesso")
}
else if(resultado3){
    console.log("parabems")
}
else{
    console.log("falhou")
}

//4.
const pokeIni = prompt("Qual seu pokemon inicial preferido da primeira geracao?")

switch(pokeIni.toLowerCase()){
    case 'bulbasaur':
    console.log('planta e veneno')
    break
case 'charmander':
    console.log('fogo')
    break
    case 'squirtle':
        console.log('agua')
        break
        default:
            console.log('seu pokemon nao existe')
            break
}

