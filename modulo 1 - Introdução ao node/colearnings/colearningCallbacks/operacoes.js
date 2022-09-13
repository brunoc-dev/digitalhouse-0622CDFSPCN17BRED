const calculadora = require('./calculadora')

calculadora.calcular(2, 6, calculadora.som)
calculadora.calcular(2, 6, calculadora.mul)
calculadora.calcular(2, 6, calculadora.div)
calculadora.calcular(2, 6, calculadora.sub)

calculadora.calcular(12, 16, function (x, y) {
  // if (x <= 10 && y <= 10) {
  //   console.log('Erro: Números abaixo de 0')
  // } else if (x < y) {
  //   return 'x é menor que y'
  // } else if (x == y) {
  //   return 'x é igual a y'
  // } else {
  //   return 'y é maior que x'
  // }
  return x / y;
})