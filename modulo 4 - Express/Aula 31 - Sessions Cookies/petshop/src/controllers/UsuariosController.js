const UsuarioModel = require('../models/UsuarioModel');

module.exports = {
  criarForm: (req, res) => {
    return res.render('cadastro-usuario', {erros: [], user: null})
  },

  criar: (req, res) => {
    const usuario = req.body;
    const erros = [];

    if (!usuario.email || !usuario.senha) {
      erros.push({ msg: 'Login inválido!' });
      return res.render('cadastro-usuario', {erros, user: null});
    }

    UsuarioModel.criar(usuario);
    return res.redirect('/login');
  }
}