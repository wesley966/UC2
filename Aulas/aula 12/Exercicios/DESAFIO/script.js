//DESAFIO
const jogador = prompt("Escolha entre: pedra, papel, tesoura, lagarto, spock")
const numeroAleatorio = [Math.floor(Math.random()*4)]
let escolhaComputador = {}
switch(numeroAleatorio){
    case 0:
        escolhaComputador = 'pedra';
    break
    case 1:
escolhaComputador = 'papel';
break
case 2:
escolhaComputador = 'tesoura';
break
case 3:
    escolhaComputador = 'lagarto';
    break
    case 4:
        escolhaComputador = 'spock';
        break
}

console.log(`Voce escolheu: ${jogador}`)
console.log(`Computador escolheu: ${escolhaComputador}`)

if(jogador===escolhaComputador){
    console.log("Empate")
}
else if(jogador>escolhaComputador){
(jogador==='pedra'&&escolhaComputador==='tesoura')||
(jogador==='pedra'&&escolhaComputador==='lagarto')||
(jogador==='tesoura'&&escolhaComputador==='papel')||
(jogador==='tesoura'&&escolhaComputador==='lagarto')||
(jogador==='papel'&&escolhaComputador==='pedra')||
(jogador==='papel'&&escolhaComputador==='spock')||
(jogador==='lagarto'&&escolhaComputador==='spock')||
(jogador==='lagarto'&&escolhaComputador==='papel')||
(jogador==='spock'&&escolhaComputador==='pedra')||
(jogador==='spock'&&escolhaComputador==='tesoura')
console.log("Voce Venceu")
}
else{
    console.log("O Computador Venceu")
}
