const { Autor } = require('../models');

module.exports = {
  index: async (req, res) => {
    const autores = await Autor.findAll({
      order: [
        ['nome', 'desc']
      ]
    });
    res.render('autores', { autores });
  }
}