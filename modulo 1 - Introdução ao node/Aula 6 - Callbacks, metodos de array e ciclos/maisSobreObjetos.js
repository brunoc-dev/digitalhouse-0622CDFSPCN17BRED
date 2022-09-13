// es6+ ECMA Script 6 -> JavaScript Moderno;
// Destructuring -> Desestruturação

/**
 * Objetos Literais -> Estrutura de dados
 * 
 * declarando um objeto (estruturando um dado):
 * const meuObjeto = { propriedade: 'valor' }
 * 
 * Desestruturando um dado:
 * const { propriedade } = meuObjeto;
 * 
 * console.log(propriedade) -> console.log(meuObjeto.propriedade)
 * 
 * const dadoDaInternet = {
 *  ...,
 *  ...,
 *  ...,
 * }
 * 
 * function hello(nome) {
 * }
 * 
 * const { nome, idade } = dadoDaInternet
 * hello(dadoDaInternet.nome)
 * 
 * Podemos usar desestruturação em parametros de função
 * function imprimeNome({ nome, sobrenome }) {
 *   
 * }
 */

const pais = {
  nome: 'Brasil',
  continente: 'América do Sul'
}

console.log(pais.continente)
console.log(pais['continente'])

const { continente } = pais;

console.log(continente);

// Exemplo de código ruim de entender:
// meuObjetoPRincipal.propriedadeDoobjetoPrincipal.objetoSecundario.propriedadeSecundario

// const { objetoSecundario } = meuObjetoPRincipal.propriedadeDoobjetoPrincipal

// Com desestruturação fica melhor de compreender
// console.log(objetoSecundario)

function mostraContinente({ continente }) {
  console.log(continente)
}

mostraContinente(pais)


// DESESTRUTURAÇÃO EM ARRAYS

const alturas = [
  ['bruno', 183],
  ['tunico', 187]
]

console.log(alturas[0][0])
console.log(alturas[0][1])
console.log(alturas[1][0])

// Cada item do array será atribuído à uma variável na ordem do índice do array
// alturas[0], alturas[1] ... alturas[n]
const [ nome, altura ] = alturas

console.log('O ' + nome + ' tem ' + altura + 'cm de altura')

// SPREAD OPERATOR
// Desestruturar Objetos ou Arrays em outros objetos ou arrays

const fruta = {
  nome: 'abacate',
  tipo: 'tropical'
}

const dadosNutricionais = {
  id: '1234ABCD',
  calorias: '150kcal',
  porcao: '20g',
  ...fruta // Usa todas as propriedades de frutas em dadosNutricionais
}

console.log(dadosNutricionais.tipo)

function soma2(numeros) {
  numeros.forEach(num => console.log(num + 2));
}

const array1 = [1, 2, 3, 4]

// incluindo um array no outro:
soma2([...array1, 5, 6, 7])

// Rest operator

const pessoa = {
  nome: 'tulio',
  idade: 15,
  corPredileta: 'amarelo'
}

function entregaPresente (pessoa) {
  // armazena o corPredileta e o restante do objeto pessoa vai pra variável rest
  const { corPredileta, ...rest } = pessoa

  if (corPredileta == 'amarelo') {
    console.log('Parabéns, toma aqui o seu presente!')
  }
  else {
    console.log('O presente não é pra você')
  }

  return rest // retorna a pessoa sem a propriedade corPredileta
}

const restoDoObjeto = entregaPresente(pessoa)
console.log(restoDoObjeto)
