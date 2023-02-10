const { Editora } = require('../models');
const {Op} = require('sequelize');

module.exports = {
  index: async (req, res) => {
    const { search } = req.query;
    const editoras = await Editora.findAll({
      where: search ? { nome: {[Op.like]: '%' + search + '%'} } : null 
    });

    res.render('editoras', { editoras });
  }
};