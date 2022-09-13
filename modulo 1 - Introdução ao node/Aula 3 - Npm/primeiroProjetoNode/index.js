const fs = require('fs'); // módulo nativo do node
const calculadora = require('./meuModulo'); // módulo local

// const frutas = ['Limão', 'Banana', 'Laranja', 'Mamão'];

// for (i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// fs.writeFileSync('testeModulo.txt', 'Conteúdo do arquivo texto');

console.log(calculadora.soma(10, 10))
console.log(calculadora.multiplicacao(10, 10))