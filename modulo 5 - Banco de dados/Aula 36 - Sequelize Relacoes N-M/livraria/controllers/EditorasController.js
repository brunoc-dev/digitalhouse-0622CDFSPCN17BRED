const { Editora } = require('../models');
const {Op} = require('sequelize');

module.exports = {
  index: async (req, res) => {
    const { search } = req.query;
    const editoras = await Editora.findAll({
      where: search ? { nome: {[Op.like]: '%' + search + '%'} } : null 
    });

    res.render('editoras', { editoras });
  },

  form: async (req, res) => {
    let editora;
    const { id } = req.params;

    if (id) editora = await Editora.findByPk(id);

    res.render('adicionarEditora', { editora });
  },

  criar: async (req, res) => {
    const { nome } = req.body;
    await Editora.create({ nome });

    res.redirect('/editoras');
  },

  editar: async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    await Editora.update({ nome }, {
      where: { id }
    });

    res.redirect('/editoras');
  },

  remover: async (req, res) => {
    const { id } = req.params;

    await Editora.destroy({
      where: { id },
    });

    res.redirect('/editoras');
  },
};