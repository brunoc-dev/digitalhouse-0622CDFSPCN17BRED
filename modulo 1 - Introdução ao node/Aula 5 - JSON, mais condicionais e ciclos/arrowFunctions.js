// Aula 5 - Arrow Functions
// Definição padrão de funções:
function saudar (nome) {
  return 'Olá ' + nome
}

// console.log(saudar('Bruno'))

// // definição de uma função anônima
// const saudar = function (nome) {
//   return 'Olá ' + nome
// }

// console.log(saudar('Bruno'))

// // Definição padrão da arrow function
// const saudar = (nome) => {
//   return 'Olá ' + nome
// }

// console.log(saudar('Bruno'))

// Arrow Function na forma reduzida
const saudar = nome => 'Olá ' + nome

console.log(saudar('Bruno'))