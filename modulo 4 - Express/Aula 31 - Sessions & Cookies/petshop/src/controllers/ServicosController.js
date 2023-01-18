const ServicoModel = require('../models/ServicoModel');
const { validationResult } = require('express-validator');

module.exports = {
  index: (req, res) => {
    const servicos = ServicoModel.index(); // <--- Pedindo os dados para o modelo

    return res.render('servicos', { servicos }); // ----->  Enviando os dados para a view
  },

  admin: (req, res) => {
    const servicos = ServicoModel.index();
    return res.render('admin-servicos', { servicos });
  },

  editar: (req, res) => {
    const { id } = req.params;
    let servico = null

    if (id) {
      servico = ServicoModel.buscar(id);
    }

    return res.render('cadastro-edicao', { servico, errors: {} });
  },

  criar: (req, res) => {
    let { errors } = validationResult(req);

    if (errors.length) {
      const errosFormatados = {};
      errors.forEach(erro => errosFormatados[erro.param] = erro.msg);

      return res.render('cadastro-edicao', { errors: errosFormatados, servico: null });
    }

    ServicoModel.criar(req.body);
    return res.redirect('/servicos/admin');
  },

  atualizar: (req, res) => {
    const { id } = req.params;
    let { errors } = validationResult(req);

    if (errors.length) {
      const errosFormatados = {};
      errors.forEach(erro => errosFormatados[erro.param] = erro.msg);

      return res.render('cadastro-edicao', {
        errors: errosFormatados,
        servico: { id, ...req.body }
      });
    }

    ServicoModel.atualizar(id, req.body);
    return res.redirect('/servicos/admin');
  },

  deletar: (req, res) => {
    const { id } = req.params;
    ServicoModel.deletar(id);
    return res.redirect('/servicos/admin');
  }
};