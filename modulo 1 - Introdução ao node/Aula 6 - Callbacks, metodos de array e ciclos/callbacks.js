function saudar (fulano) {
  return 'Olá ' + fulano
}

function saudarEmIngles(fulano) {
  return 'Hello ' + fulano
}

function saudarEmCanino(fulano) {
  return 'Au au ' + fulano
}

function cumprimentar (fulano, callbackSaudar) {
  console.log(callbackSaudar(fulano) + ', tudo bem?')
}

// cumprimentar('Bruno', saudar)
// cumprimentar('Marcos', saudarEmIngles)
// cumprimentar('Aline', saudarEmCanino)

// function calcular (n, m, operacao) {
//   console.log(operacao(n, m))
// }

// function somar(a, b) {
//   return a + b
// }

// calcular(10, 20, somar)

// calcular(10, 20, function (a, b) {
//   return a + b
// })

// calcular(10, 20, (a, b) => a + b)
// calcular(10, 20, (a, b) => a - b)
// calcular(10, 20, (a, b) => a / b)
// calcular(10, 20, (a, b) => a * b)


const animal = 'Humano'

if (animal == 'Cachorro') {
  cumprimentar('Waldemar', saudarEmCanino)
} else if (animal == 'Gato') {
  cumprimentar('Waldemar', fulano => 'Miau, ' + fulano)
} else {
  cumprimentar('Waldemar', saudar)
}
