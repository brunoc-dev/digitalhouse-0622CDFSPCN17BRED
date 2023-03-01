const { Autor, Livro } = require('../models');

module.exports = {
  index: async (req, res) => {
    const autores = await Autor.findAll({
      order: [
        ['nome', 'desc']
      ],

      include: [
        {model: Livro, as: 'livros'}
      ]
    });
    res.render('autores', { autores });
  }
}