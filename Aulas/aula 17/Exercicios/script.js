//1.
let funcao = function(numero1, numero2){
    const soma = numero1+numero2
    console.log(soma)
}
const result = funcao(4, 5)

//2.
let someNumbers = (num) => {
    const result = num * 2
    console.log(result)
}
const resultado = someNumbers(10)



//Determine o Monstro

function determinaMonstro(temPeleGelada, transformaComLuaCheia, brilhaNoSol, temSedeDeSangue){
    
    if(transformaComLuaCheia===true){}
    else if(temPeleGelada===false){}
    else if(brilhaNoSol===false){}
    else if(temSedeDeSangue===true){}
    else{
        console.log("Errado")
    }
    return temPeleGelada, transformaComLuaCheia, brilhaNoSol, temSedeDeSangue
}
const novoTipo = determinaMonstro(false,true,false,true)
console.log(novoTipo)
