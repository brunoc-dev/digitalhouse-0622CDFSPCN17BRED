// Métodos de Strings
const palavra = 'Hotorrinolaringologista    '
const url = 'google.com.br'

// IndexOf retorna o index da ocorrencia do primeiro parâmetro passado.
console.log(palavra.indexOf('r', 6))

// Slice retornar uma fatia da string original
console.log(palavra.slice(5, 11))
console.log(url.slice(-3))

// Trim, limpa os espaços antes e dpois da string
console.log(palavra.trim() + '<- Olha o espaço aqui')

const CPF = '12.987.987-98'

console.log(CPF.split("")[1])

const text = 'Olá mundo'

console.log(text.split(" "))