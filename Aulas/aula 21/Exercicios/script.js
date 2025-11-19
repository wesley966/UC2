/*//1.Matriz do jogo da velha
//a)
let matriz1 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
//b)
matriz1 [1][2]= 1
//c)
console.log(matriz1)

//2.Percorrendo uma matriz
//a)
let matriz2 = [
    [1,2,3,4]
    [5,6,7,8]
    [9,10,11,12]
    [13,14,15,16]
]
//b)
function calcularElementos(){
    soma = 0
    for(let linha=0;  linha<matriz2.length;  linha++){
        for(let coluna=0;  coluna<matriz2[i].length;  coluna++){
            soma +=matriz2[linha][coluna]
        }
    }
    console.log("Soma do elementos:",soma);
}
calcularElementos()
*/
//3 Jogo de Batalha Naval
//a)
let matriz3 = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
]

//b)
function navios(){
    matriz3[0][0]=1
    matriz3[1][0]=1
    matriz3[2][0]=1
    matriz3[9][1]=1
    matriz3[9][2]=1
    matriz3[1][3]=1
    matriz3[4][3]=1
    matriz3[5][3]=1
    matriz3[6][3]=1
    matriz3[7][3]=1
    matriz3[1][4]=1
    matriz3[1][5]=1
    matriz3[1][6]=1
    matriz3[3][6]=1
    matriz3[4][6]=1
    matriz3[8][6]=1
    matriz3[8][7]=1
    matriz3[8][8]=1
    matriz3[7][9]=1
    matriz3[2][8]=1

    console.log(matriz3)
}
navios(matriz3)

//c)
function jogabilidade(){
    matriz3=0
    quantidadeDeNavios=20
   for(i=0;matriz3<quantidadeDeNavios;i++){
    let posicao = prompt("Qual a posicao voce ira escolher?")

    if(posicao===0){
        console.log("AGUA")}
        else if(posicao===1){
            console.log("NAVIO")
        quantidadeDeNavios-=1
    }
}
}       
jogabilidade()