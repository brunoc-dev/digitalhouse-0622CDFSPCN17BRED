const { Livro } = require('../models');

module.exports = {
  async criar(req, res){
    try {
      const { nome, editora } = req.body;
      await Livro.create({nome, editoras_id: editora})
      return res.status(201).json({mensagem: 'Deu certo!'});
    } catch (err) {
      console.log(err)
      return res.status(500).json({mensagem: 'Deu xabú!'});
    }
  }
};