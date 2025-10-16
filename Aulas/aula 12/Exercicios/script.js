
//5.
const aluPre = prompt("Qual sua aluna preferida?")
switch(aluPre.toLowerCase()){
    case 'hermione':
        console.log('Grifinoria')
        break
        case 'ana':
            console.log('Lufa-Lufa')
            break
            case 'luna':
                console.log('Corvinal')
                break
                case 'narcisa':
                    console.log('Sonserina')
                    break
                    default:
                        console.log('Sua aluna nao existe')
                        break
}


const conEnsiMedio = prompt("Voce concluiu o ensino medio?")
const idadeMaior = prompt("Voce é maior de idade?")
const outraFacul = prompt("Voce esta cursando outra faculdade?")

if(conEnsiMedio&&idadeMaior){
    console.log("VOCE PASSOU!")
}
else if(outraFacul){
    console.log("TENTA NA PROXIMA!")
}