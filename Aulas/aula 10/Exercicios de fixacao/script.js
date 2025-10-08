//1.
//Pode variar o comando arrays
//imprime a variavel a


//2.
//SUBI NUM ONIBUS EM MARROCOS
//SUBI NUM ONIBUS EM MIRROCOS
//27

//3.
const nome = prompt("Qual seu nome?")
const email = prompt("Qual seu email?")
console.log("O e-mail " + email + " foi cadastrado com sucesso. Seja bem vindo(a), " + nome +"!")

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
console.log(comida.replaceAll("batata", novaComida))
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










