const Carrinho = require('../models/Carrinho');
const Servico = require('../models/ServicoModel');

module.exports = {
  index: (req, res) => {
    const carrinho = Carrinho.findAll();
    const servicos = Servico.findAllById(carrinho.map(id => +id));

    res.render('carrinho', { servicos });
  },

  add: (req, res) => {
    const { servicoId } = req.body;
    Carrinho.add(servicoId);
    res.redirect('/carrinho');
  },

  remove: (req, res) => {
    const { id } = req.params;
    Carrinho.remove(id);
    res.redirect('/carrinho');
  }
}