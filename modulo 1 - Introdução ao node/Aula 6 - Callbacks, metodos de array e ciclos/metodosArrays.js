/**
 * Métodos de array
 * Os métodos mais utilizados:
 * array.filter() >>>>> recebe um callback que, ao retornar true ou false cria um
 * novo array com os elementos que atendem a essa condição.
 * Ex.
 * const numbers = array.filter((elemento) => typeof elemento == 'number') retorna um novo array somente
 * com números
 * 
 * array.find() >>>>> recebe um callback que, ao retornar true ou false devolve o
 * elemento do array que atende a condição criada no callback.
 * Ex.
 * const nome = array.find((elemento) => elemento == 'Bruno') retorna o primeiro elemento que corresponde à string
 * 'Bruno'
 * 
 * array.map() >>>>> recebe um callback que, gera um novo array, com os elementos retornados
 * pelo callback.
 * 
 * const saudacoes = array.map((elemento) => elemento + ' Seja bem vindo(a)')
 */

const idades = [10, 4, 18, 22, 19, 80, 67, 32]

const adultos = idades.filter(maiores => maiores >= 18)

console.log(idades)
console.log(adultos)

console.log('=========================================')

const usuarios = [
  { email: 'bruno@mail.com', nome: 'Bruno' },
  { email: 'jeff@mail.com', nome: 'Jeff' },
  { email: 'altair@mail.com', nome: 'Altair' }
]

const usuario = usuarios.find(elemento => elemento.email == 'bruno@mail.com')

console.log(usuario.nome)

console.log('=========================================')

const numeros = [1, 2, 3, 4, 5, 6]

const numerosDobrados = numeros.map(element => element * 2)

console.log(numerosDobrados)