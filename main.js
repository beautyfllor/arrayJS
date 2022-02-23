'use strict'

/* array vazio -> const numeros = []*/

const numeros = [20, 131, 70, 279, 320]

//PROBLEMA - Acrescentar 100 a cada elemento

// --------Solução Imperativa--------
/*Criamos uma variável 'tamanhoArray' para que o programa
não tivesse que realizar o cálculo toda volta que o for der*/
// const tamanhoArray = numeros.length -1
// let numeros100 = []
// for (let i=0; i <= tamanhoArray; i++) {
//     numeros100[i] = numeros[1] + 100
// }

// --------Solução Declarativa--------
/* Parâmetros do método - MAP
   1° Elemento (valor/dado)
   2° Índice
   3° Array
*/
const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)
/* MAP - percorre o array, podendo modificar os elementos 
e retorna um novo array de mesmo tamanho */

console.log("Números:", numeros)
console.log("Números mais 100:", numeros100)

//PROBLEMA - Criar um novo array com os números menores que 100

// --------Solução Imperativa--------
// const tamanhoArray = numeros.length -1
// let numerosMenores100 = []
// for(let i=0; i <= tamanhoArray; i++) {
//     if(numeros[i] < 100) {
//         numerosMenores100[i] = numeros[i] 
//     }
// }

// --------Solução Declarativa--------
/* Parâmetros do método - FILTER
   1° Elemento (valor/dado)
   2° Índice
   3° Array
*/
// const menor100 = (numero) => numero < 100
// const numerosMenores100 = numeros.filter(menor100)
/* FILTER - Percorre todo o array, filtrando dependendo 
de uma condição e retorna um array do mesmo tamanho ou menor. */

// console.log("Números menores que 100:", numerosMenores100)

// PROBLEMA - Somar todos os valores (elementos)

// --------Solução Imperativa--------
// const tamanhoArray = numeros.length -1
// let soma = 0
// for(let i = 0; i <= tamanhoArray; i++) {
//     soma += numeros[i]
// }

// --------Solução Declarativa--------

/* Parâmetros do método - REDUCE
   1° Acumulador
   2° Elemento (valor/dado)
   3° Índice
   4° Array
*/
const soma = (a, b) => a + b
const total = numeros.reduce(soma, 0)
/* REDUCE -  Percorre todo o array aplicando uma função (callback)
e retornando um único valor.*/

console.log("Soma:", total)