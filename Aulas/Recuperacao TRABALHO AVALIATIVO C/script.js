//CRIAR PERSONAGEM:
const link={
    nome:"link",
    hp:100,
    ruppes:400,
    armaEquipada:"master sword",
    inventario:["bumerangue","bomba","escudo","hylian","arco"],
    historicoDeAcoes:[]
}
//Estou criando um objeto chamado "link" e colocando as propriedades:nome,hp,ruppe,armaequipada,inventario e histoeicodeAcoes.

const danoMasterSword = 70
const danoBomba = 50
const danoBumerangue = 30

//Estou declarando as variaveis danomasterSword,danobomba,danoBumerangue.

const bokoblin={
    nome:"bokoblin",
    hp:60,
    armaEquipada:"bokoclub",
    inventario:["60 ruppes","1 horn"]
}

//Estou criando um novo objeto com as propriedades:nome,hp,armaequipada e inventario.

//FUNCOES
function atacar(quemAtacar){
    console.log("Voce esta lutando com um BOKOBLIN e um OKTOROK!")
    quemAtacar= prompt("Quem voce quer batalhar?")

    bokoblinMultiplicador = 1
    oktorokMultiplicador = 1.5
    if(quemAtacar.toLowerCase==="bokoblin"){
    console.log(`voce derrotou o bokoblin! com multiplicador de dano:${bokoblinMultiplicador}`)
link.historicoDeAcoes.push(`atacou bokoblin causando ${60*1} de dano`)
}
else if(quemAtacar.toLowerCase==="oktorok"){
console.log(`voce derrotou o oktorok! com multiplicador de dano:${oktorokMultiplicador}`)
link.historicoDeAcoes.push(`atacou oktorok causando ${60*1.5} de dano`)
}
else{
    console.log("foi encontrado um erro!")
}

//Estou criando a funcao de atacar com a escolha do inimigo atráves do prompt e usando o if/else para determinar oque sera adicionado ao console e ao historicoDeAcoes.

}
function comprar(pocao_de_cura,pocao_de_cura_menor){
    pocao_de_cura_menor = 120
    pocao_de_cura = 300
    if(link.ruppes===pocao_de_cura){
        console.log("o item foi comprado!")
        link.ruppes-300
        link.inventario.push("pocao de cura")
    }
    else if(link.ruppes<pocao_de_cura){
        console.log(`infelizmente voce nao pode comprar isso!Mas voce ganha ${pocao_de_cura_menor}`)
        link.inventario.push("pocao de cura menor")
        link.ruppes-120
    }
    else if(link.ruppes>pocao_de_cura){
        console.log("voce comprou o item!")
        link.ruppes-300
        link.inventario.push("pocao de cura")
    }
    else {
        console.log("algo deu errado!")
    }
}

//Estou criand uma funcao de compra onde eu criei duas variaveis sem denominacao se e const ou let, e uso o if/else para determinar se o objeto link possui as condicoes necessarias para ativar os comandos.

function curar(){
    if(link.inventario.includes("pocao de cura")&&link.hp<100){
        console.log("voce se curou!")
        link.hp+100
        link.inventario.pop("pocao de cura")
        link.historicoDeAcoes.push("usou a pocao de cura")
    }
    else if(link.inventario.includes("pocao de cura")&&link.hp>=100){
        console.log("Sua vida esta cheia voce nao pode se curar!")
    }
    else if(!link.inventario.includes("pocao de cura")){
    console.log("Voce nao tem pocao!")}
    else {
        console.log("algo deu errado!")
    }

}

//Estou criando uma funcao para curar, usando if/else para determinar se as propriedades do objeto link corrspondem. Se as condicoes correspondem a funcao sera executada e o objeto link.inventario sera atualizado. 

function verificarInventario(){
for(i=0;i<link.inventario.length;i++){
    console.log(`Item encontrado no iventario: ${link.inverio[0]}`)
    console.log(`Item encontrado no iventario: ${link.inverio[1]}`)
    console.log(`Item encontrado no iventario: ${link.inverio[2]}`)
    console.log(`Item encontrado no iventario: ${link.inverio[3]}`)
    console.log(`Item encontrado no iventario: ${link.inverio[4]}`)
    console.log(`Item encontrado no iventario: ${link.inverio[5]}`)

    if(link.inventario.includes("bomba")){
        console.log("Cuidado!bomba encontrada!")
    }

}
}

//Estou usando um loop for, dentro de uma funcao, para passar pelos itens de link.inventario e imprimilos,caso tenha o item "bomba" uma mensagem expecifica sera imprimida.

//FUNCOES
function verificarStatus(objetoStatus){
    objetoStatus = prompt("Qual status voce quer ver: bokoblin ou link?")
    if(objetoStatus.toLowerCase==="link"){
    console.log(link.nome)
    console.log(link.hp)
    console.log(limk.ruppes)
    console.log(link.armaEquipada)
    console.log(link.inventario.join(','))
    console.log(link.historicoDeAcoes.join(','))
}
else if(objetoStatus.toLowerCase==="bokoblin"){
    console.log(bokoblin.nome)
    console.log(bokoblin.hp)
    console.log(bokoblin.armaEquipada.join(','))
    console.log(bokoblin.inventario.join(','))}
    else {
        console.log("seu personagem nao foi encontrado")
    }
}

//Estou usando uma funcao para verificar os status do objeto "link", usando console.log para imprimir cada uma e join para imprimir os arrays de link.inventario e link.historicoDeAcoes.O promp para escolher o inimigo e o if/else para determinar o que vai ser imprimido.

function entrarCaverna4(linkNivel){
    linkNivel = 7
if(link.armaEquipada.includes("master sword")&&linkNivel>=4){
console.log("Sucesso! Voce pode esplorar a dungeun")
}
else {
    console.log("Voce nao pode entrar na dungeun!")
}

//Estou criando uma funcao para entrar na caverna de nivel 8, criando as variaveis linkNivel e nivel, e usando if/else para ver se "link" possui(.includes)no inventario o item necessario e o nivel necssario para realizar a funcao.

}
function entrarNacaverna8(linkNivel){
linkNivel = 7
if(link.armaEquipada.includes("master sword")&&linkNivel>=8){
console.log("Sucesso! Voce pode desafiar a dungeun!")
}
else{
    console.log("Voce ainda nao tem o necessário!")
}
}

//Estou criando uma funcao para entrar na caverna de nivel 8, criando as variaveis linkNivel e nivel, e usando if/else para ver se "link" possui(.includes)no inventario o item necessario e o nivel necssario para realizar a funcao.
atacar()
comprar()
curar()
verificarInventario()
verificarStatus()
entrarCaverna4()
entrarNacaverna8()