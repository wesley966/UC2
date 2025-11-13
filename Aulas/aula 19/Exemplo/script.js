/*//EXERCICIO 1:
const filme ={
    nome:"Sr misterio",
    anoDeLancamento:"1960",
    elenco:[mr.misterio,sr.misterio,atributo.misterio],
    propriedade:"ja vi"
}
console.log(filme.nome)
console.log(filme.anoDeLancamento)
console.log(filme["elenco"])
console.log(filme["propriedade"])

//EXERCICIO 2:
const pessoa = {
    nome : "Michael",
    idade : 30,
    generoMusicalPreferido : "Rock"
}
console.log(`O nome da pessoa é: ${pessoa.nome},ela tem ${pessoa["idade"]} anos e gosta muito de ${pessoa["generoMusicalPreferido"]}`)

//EXERCICIO 3:

//EXERCICIO 4*/
    
//EXERCICIO 5-NARUTO:
let personagens = [
    {
        nome:"naruto",
        idade:16,
        estilo:"vento",
        jutsos:["rasenshuriken","kagebulshinnojutso","rasengan"]
    },
    {
        nome:"sasuke",
        idade:16,
        estilo:"relampago",
        jutsos:["amaterasu,","chidori","susanoo"]
    },
    {
        nome:"sakura",
        idade:16,
        estilo:"vento",
        jutsos:["saionara","superchute","supercabecada"]
    }
    //2
]
function adiciPerso(perso){
    personagens.push(perso)
    console.log(`Foi adicionado: ${perso.nome}`)
} 
 const novoPersonagem={
    
        nome:"Gaara",
        idade:"16",
        classe:"kazekage",
        poderes:"areia"}
//3
function buscarPersonagem(nomeBuscado){
    function personagem(personagens){
        return perso.nome.toLowerCase()===nomeBuscado.toLowerCase()
    }
    const personagemEncontrado
}





function buscarPersonagem(nome){
    nome.find(personagens)
    if(nome){
        console.log("ta certo")}
        else{
            console.log("Houve um erro")
        }
        return nome
    
}

