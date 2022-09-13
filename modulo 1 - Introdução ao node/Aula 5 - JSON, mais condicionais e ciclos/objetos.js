// Declaração de objetos literais
const animal = {
  id: 1,
  nome: 'Cachorro',
  tipo: 'Canino'
}

const animal2 = {
  id: 2,
  nome: 'Gato',
  tipo: 'Felino'
}

// 2 formas de acessar as propriedades de um objeto literal
// 1º Acesso por "."
console.log(animal.tipo)

// 2º Acesso por index
console.log(animal['tipo'])

// Forma para acessar o objeto literal completo.
console.log(animal)

// Acessando por index numérico
console.log(animal[0]) // retorna indefinido

const propriedadeDoObjeto = 'tipo'

// acessando propriedade utilizando uma variável
console.log(animal[propriedadeDoObjeto])

// utilizando objetos em arrays

const animais = [
  {id: 1, nome: 'Cachorro', tipo: 'Canino', cor: 'Caramelo', vacinas: [] },
  {id: 2, nome: 'Gato', tipo: 'Felino', cor: 'Preto', vacinas: [] },
  {id: 3, nome: 'Papagaio', tipo: 'Ave', cor: 'Verde', vacinas: ['Antirábica', 'Gripe Aviária'] }
]

console.log(animais[2])

// Função construtora. Serve para gerar objetos de um tipo específico
function Animal (nome, tipo, cor, vacinas) {
  this.id = Math.random() * 10
  this.nome = nome
  this.tipo = tipo
  this.cor = cor
  this.vacinas = vacinas
}

// console.log(cachorro)

// console.log(cachorro instanceof Animal)

const cachorro = new Animal('Cachorro', 'Canino', 'Caramelo', ['Antirábica'])
const cachorroBranco = new Animal('Cachorro', 'Canino', 'Branco', ['Antirábica'])
animais.push(cachorro)

const gato = new Animal('Gato', 'Felino', 'Branco', [])
animais.push(gato)

console.log(animais)

const arrayDeAnimais = []
for (let i = 0; i < 10; i++) {
  arrayDeAnimais[i] = new Animal()
}