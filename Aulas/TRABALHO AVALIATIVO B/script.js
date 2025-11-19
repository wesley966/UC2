
function escolherPersonagem(){
    let personagem = prompt("Qual seu personagem?")
    let personagems = [

    {nome: "Frodo",
    classe: "Hobit",
    nivel: 10,
    pontosDeVida: 10,
    habilidades:["ponto fraco inimigo","soco"],
    historicoDeAcoes:[],
    acoes:["atacar","defender","especial"]},

    {
        nome:"Legolas",
        classe:"Elfo",
        nivel:20,
        pontosDeVida:20,
        habilidades:["flecha","super flecha"],
        historicoDeAcoes:[],

        atacar: function atacar(){
            connsole.log("atacou")
        },
        defender: function defender(){
            console.log("defendeu")},

            especial: function especial(){
                console.log("especial usado")
            }
        }
    }

]

if(movimento==="atacar"){
console.log(!pontosDeVida-10)
}
else if(movimento==="defender"){
    console.log(!pontosDeVida+10)
}
else if(movimento==="habilidade especial"){
console.log(!pontosDeVida-20)
}
else{
    console.log("nao identificado")
}
}
    if(movimento==="atacar"){
    console.log(!pontosDeVida-10)
    }
    else if(movimento==="defender"){
        console.log(!pontosDeVida+10)
    }
    else if(movimento==="habilidade especial"){
    console.log(!pontosDeVida-20)
    }
    else{
        console.log("nao identificado")
    }

}
console.log(frodo)
console.log(legola)

function deletar(){
    const personagemExcluido = prompt("Qual o personagem a ser excluido?")
    personagens.pop(personagemExcluido)||
    //personagem.splice(0,1)

}

function buscarPersonagem(){
    const personagemBuscado = prompt("Qual personagem disponivel voce quer pesquisar?")
    personagem.find(personagemBuscado)
}

function listarPersonagens(){
    for(persona of personagens)
    console.log(personagens)
}
listarPersonagens()

function verificarStatus(personagem){
console.log(personagem.nome)
console.log(personagem.hp)
console.log(personagem.nivel)
}
verificarStatus(personagem[0])

function cadastroPersonagens(nome,hp,nivel,habilidades,...){
let personagens = ("nome:"nome,"hp:"hp,"nivel"nivel,"habilidades:"habilidades)
personagens.push(personagens)
console.log("cadastrou o personagem",nome)
nome=fff
hp=fff
nivel=fff
habilidades=fff
}