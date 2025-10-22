//Exercicios de Fixacao
const respostaDoUsuario = prompt("Digite o numero que voce quer testar:")
const numero = Number(respostaDoUsuario)

if(numero %2===0){
    console.log("Passou no texte")
}else{
    console.log("Nao passou no texte")
}

//Exercicios de interpretacao de codigo:
//1.
//a)

//Cria uma variavel para perguntar ao usuario
//Cria outra variavel para transformar a resposta de usuario em numero

//Se o numero do usuario % 2 é igual a 0 sera imprimido no console "Passou no texte"
//Ou outra respost sera imprimido "Nao passou no texte"

//O texte que ele realiza é se o usuario digitou  numero necessario ou nao

//b)
//Qualquer numero que %2 é igual a 0

//c)
//Qualquer numero que %2 nao é igual a 0

//2.MERCADO
//a)
//Para ver qual o preco da fruta escolhida pelo usuario
//b)
//"O preço da fruta, maça, é R$2.25, preço"
//c)
//O item pera estaria junto ao default

//3.MENSAGEM SECRETA
//a)
//Esta perguntando um numero para o usuario e o transformando em Number
//b)
//"Voce passou no texte"
//"Essa mensagem é secreta"
//c)
//if(numero>0){
//    console.log("Esse numero passou no texte")
//}
 //   else{
 //       console.log("Essa mensagem é secreta")
  //  }


//4.
//a)
const idade = Number(prompt("Qual sua idade?"))
const Didade = 18
//b)
idade.toLocaleString(String, Number)
//c)
if(idade>=Didade){
    console.log("Voce pode dirigir")
}
else{
    console.log("Voce nao pode dirigir")
}


//5.
const pergunta = prompt("Qual seu turno: M, V ou N")
if(pergunta==='M'){
    console.log("Bom Dia!")
}
else if(pergunta==='V'){
    console.log("Boa Tarde!")
}
else if(pergunta==='N'){
    console.log("Boa Noite!")
}
else{
    console.log("Nao Identificado!")
}

//6.
switch(pergunta){
    case 'M':
        console.log("Bom Dia!")
        break
        case 'V':
            console.log("Boa Tarde!")
            break
            case 'N':
                console.log("Boa Noite!")
                break
                default:
                    console.log("Nao Ideantificado!")
break
}
