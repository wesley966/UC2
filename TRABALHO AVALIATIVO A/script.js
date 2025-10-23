//DESAFIO1- A ESCOLHA DA FERRAMENTA
//1.Criando 5 variaveis constantes 
const velocidadeDiamante = 80
const velocidadeFerro = 70
const velocidadeOuro = 60
const velocidadePedra = 50
const velocidadeMadeira = 40

//2.Criando uma 6 novas variaveis
const blocoMinerar = "Obsidiana"
const blocoMinerar2 = "Minerio de Diamante"

//3.Criando uma estrutura condicional com if/else if/else para determinar com equipamento das 5 primeiras variaveis pode quebrar o bloco da variavel "blocoMinerar"
if(blocoMinerar||blocoMinerar2){
    console.log(`Use picareta de diamante:Velocidade ${velocidadeDiamante}`)
}
else if(){
console.log("O minério nao foi destruido!")
}
else if(result3){
    console.log("O minério nao foi destruido!")
}
else if(result4){
    console.log("O minério nao foi destruido!")
}
else if(result5){
    console.log("O bloco nao foi destruido!")
}
else{
    console.log("Sem efeito!")
}


//DESAFIO2- O CÁLCULO DE DANO
//1.Criando 4 variaveis que podem variar 
let danoEspada = 6
let forcaEncantamento = 1.5
let armaduraInimiga = 2
let vidaInimiga = 20

//2.Criando uma nova variavel para definir o resultado da variavel "danoEspada"* a variavel"forcaEncantamento"
const danoBruto = danoEspada*forcaEncantamento
//3.Criando uma nova variavel para definir a subtracao da variavel "danoBruto" e "armaduraInimiga"
const danoFinal = danoBruto-armaduraInimiga
//4.Criando uma nova variavel para atualizar a variavel"vidaInimiga" e atribuir subtracao com o "danoFinal"
let novaVida = vidaInimiga-=danoFinal

//5.Estrutura if/else para comparar se a "novaVida"se é menor ou igual a 0: se sim é imprimido "O creeper foi derrotado!Voce sobreviveu a explos)ao!"se nao é imprimido:´O creeper está vivo com ${novaVida - danoFinal} de vida. Corra!`
if(novaVida<=0){
    console.log("O creeper foi derrotado!Voce sobreviveu a explosao!")
}
else{
    console.log(`O creeper está vivo com ${novaVida - danoFinal} de vida. Corra!`)
}

//DESAFIO3- O CRAFTING
//1.Criando novas duas variaveis constantes e booleanas e, duas novas variaveis que podem variar
const temDiamantes = true
let nivelMesaCrafting = 2
const temGravetos = false
let temFerro = 10

//2.Uma nova variavel para demostrar oque é necessário para conseguir uma picareta de diamante "pickDiamante"
const pickDiamante = (temDiamantes, nivelMesaCrafting, temGravetos, temFerro)

//3.Uma estrutura para demonstrar oque sera imprimido se as condicoes da variavel "pickDiamante"foram atendidas
if(pickDiamante){
console.log("Picareta de Diamante criada!Hora de buscar obsidiana!")
}
else{
console.log("Faltam recursos ou as condicoes de crafting nao sao atendidas!")
}




