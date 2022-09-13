// Importando um arquivo no formato JSON.
// Lembrando que o require já utiliza o JSON.parse()
const frutas = require('./frutas.json')

// Importando o módulo fs do node
const fs = require('fs')

// Ler arquivos do sistema operacional
// const frutas = fs.readFileSync('./frutas.json')
console.log(JSON.stringify(frutas, null, 2))

// Escrever arquivos no sistema operacional
// fs.writeFileSync('novoJson.json', JSON.stringify(frutas, null, 2))