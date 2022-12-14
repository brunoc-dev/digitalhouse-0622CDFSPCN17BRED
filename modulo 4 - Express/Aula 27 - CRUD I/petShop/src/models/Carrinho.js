const carrinho = require('../database/carrinho.json');
const path = require('path');
const fs = require('fs');

const filename = path.join(__dirname, "../database/carrinho.json");

module.exports = {
  save: function (data) {
    return fs.writeFileSync(filename, data);
  },

  add: function (servicoId) {
    carrinho.push(servicoId);
    this.save(JSON.stringify(carrinho, null, 4));
  },

  findAll: function () {
    return carrinho
  },

  remove: function (id) {
    const novoCarrinho = carrinho.filter(item => item != id);
    this.save(JSON.stringify(novoCarrinho, null, 4));
  }
}