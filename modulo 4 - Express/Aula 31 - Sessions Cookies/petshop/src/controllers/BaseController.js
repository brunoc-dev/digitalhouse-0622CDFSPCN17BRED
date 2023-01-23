const ServicoModel = require('../models/ServicoModel');
const UsuarioModel = require('../models/UsuarioModel');
const bcrypt = require('bcryptjs');

module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index();
    return res.render('index', { servicos });
  },

  loginForm: (req, res) => {
    return res.render('login', {erros: []});
  },

  autenticar: (req, res) => {
    // req.params -> url
    // req.query - url depois do ?
    // req.body - dados do formulario em um post
    const usuario = req.body;

    if (!usuario.email || !usuario.senha) {
      return res.render('login', {erros: [
        {msg: 'Autenticação Inválida'}
      ]});
    }

    const usuarioEncontrado = UsuarioModel.buscar(usuario.email);

    if (!usuarioEncontrado) {
      return res.render('login', {erros: [
        {msg: 'Autenticação Inválida'}
      ]});
    }

    const senhaValida = bcrypt.compareSync(usuario.senha, usuarioEncontrado.senha);

    if (!senhaValida) {
      return res.render('login', {erros: [
        {msg: 'Autenticação Inválida'}
      ]});
    }

    delete usuarioEncontrado.senha;
    req.session.usuario = usuarioEncontrado;

    return res.redirect('/servicos/admin');
  },

  logout: (req, res) => {
    delete req.session.usuario;
    req.session.usuario = undefined;
    res.redirect('/login');
  }
}