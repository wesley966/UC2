//1.
let array// cria a variavel com nome array que pode variar
console.log('a.  ', array)//imprime a variavel array como "a. indefinido"

array = null//transforma a variavel array em nula
console.log('b,  ', array)//imprime a variavel array como nula sendo "b.  null"

array = [3,4,5,6,7,8,9,10,11,12,13]//adiciona a variavel array com numeros de 3 a 13
console.log('c.   ', array.length)//imprime o numero de caracteres na variavel array como "c. 11"

let i = 0//cria a variavel i que pode variar e seu indice é 0
console.log('d.  ', array[i])//imprime o numero correspondente da variavel array "d.  3"

array[i+1] = 19//adiciona ao indice 0 "1" e reposiciona o numero inicial deste indice como 19
console.log('e.  ', array)//imprime a variavel array atualizando-a como "e. [3,19,5,6,7,8,9,10,11,12,13]"

const valor = array[i+6]//cria uma nova constante variavel "valor" e adicionando 6 a variavel "i"
console.log('f.  ', valor)//imprime a variavel "valor" como "f. 9 "


//2.

//SUBI NUM ONIBUS EM MARROCOS
//SUBI NUM ONIBUS EM MIRROCOS
//27

//3.
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")
console.log(` e-mail   ${email}  foi cadastrado com sucesso. Seja bem vindo(a), ${nome}!`)

//4.
const comida = [ "macarrao", "batata", "amendoim", "polenta", "arroz"]
//a)
console.log(comida)
//b)
console.log("Essas sao as minhas comidas preferidas:")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])
//c)
const novaComida = prompt("Qual sua comida preferida?")
let indice = 1
comida[indice] = novaComida
console.log(comida)

//5.
//a)
const listaDeTarefas = []
//b)
const tarefa1 = prompt("Quail sua primeira tarefa?")
const tarefa2 = prompt("Qual sua segunda tarefa?")
const tarefa3 = prompt("Quail sua terceira tarefa?")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
//c)
console.log(listaDeTarefas)
//d)
const indiTarefa = prompt("Qual o indice das tarefas realizadas?")
//e)
listaDeTarefas.splice(indiTarefa, indiTarefa)
//f)
console.log(listaDeTarefas)

