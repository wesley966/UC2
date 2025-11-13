//1.
const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: ["Matheus Nachtergarle","Selton Mello","Denise Fraga","Virginia Cavendish"],
    transmissoesHoje: [
        {canal:"Telecine",horario: "21"},
        {canal:"Canal Brasil",horario:"19"},
        {canal:"Globo",horario:"14"}
    ]
}
console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length-1])
console.log(filme.transmissoesHoje[2])

//a)O elenco na posicao indice[0],ou seja,"Matheus Nachtergarle"
//O lenght conta todas as posicoes, ou seja,4,transforma em indice e diminui 1 fazendo ser o indice 3 "Virginia Cavendish"
//Imprime na posicao do indice[2],ou seja, `{canal:Globo",horario:"14"}`

//2.
const cachorro={
    nome:"Juca",
    idade:"3",
    raca:"SRD"
}
const gato = {
    ...cachorro,
    nome:"Juba"
}
const tartaruga={
    ...gato,
    nome: gato.nome.replaceAll("a", "o")
}
console.log(cachorro)
console.log(gato)
console.log(tartaruga)
//a)As caracteristicas do cachorro,tartaruga e gato
//b)Copia aquele objeto

//3.
function minhaFuncao(objeto, propriedade){
    return objeto[propriedade]
}

const pessoa = {
    nome: "Caio",
    idade:23,
    backender:false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//a)Ta imprimindo o boolean da propriedade "backender" = false
//Ta imprimindo o valor da propriedade "altura"= indefinido

//b)
//Já que a propriedade "altura"nao existe, foi indetificado como indefinido


//1.
//a)
const objeto={
    nome:"Sei La",
    apelido:["ate","seila2,tu"]
}
function novoNome(objeto){
console.log(`Eu sou ${objeto.nome},e pode me chamar por:${objeto.apelido}`)
}
console.log(novoNome(objeto))

//b)
const novoObjeto={
    ...objeto,
    apelido:["si","sol","la"]
}
//2.
//a)
const obt ={
    nome:"Pedro",
    idade:20,
    profissao:"Construtor"
}
const obt2 ={
    nome:"Joao",
    idade:22,
    profissao:"Jardineiro"
}
function array(sem){
    sem.push(obt.nome)
    sem.push(obt.idade)
    sem.push(obt.profissao)
    return [obt.nome,obt.lenght,obt.idade,obt.profissao,obt.profissao.lenght]
}

function array2(sem2){
    sem2.push(obt2.nome)
    sem2.push(obt2.idade)
    sem2.push(obt2.profissao)
    return [obt2.nome,obt2.lenght,obt2.idade,obt2.profissao,obt2.profissao.lenght]
}
//3.
//a)
let carrinho=[]
//b)
const maca={
    nome:"maca",
    disponibilidade:true
}
const bergamota={
    nome:"bergamota",
    disponibilidade:true
}
const dragonFruit ={
    nome:"dragonFruit",
    disponibilidade:true
}

//c)
function array3(fruta){
fruta.push(carrinho)
carrinho.push[maca]
carrinho.push[bergamota]
carrinho.push[dragonFruit]
return carrinho
}
//d)
console.log(carrinho)