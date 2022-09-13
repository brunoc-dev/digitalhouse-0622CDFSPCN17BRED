module.exports = {
  som (x, y) {
    return x + y;
  },

  sub (x, y) {
    return x - y;
  },

  mul (x, y) {
    return x * y;
  },

  div (x, y) {
    return x / y;
  },

  calcular (x, y, operacao) {
    console.log(operacao(x, y));
  }
}