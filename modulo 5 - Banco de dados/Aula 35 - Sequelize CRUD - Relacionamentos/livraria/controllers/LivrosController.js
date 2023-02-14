const fs = require('fs');
const path = require('path');
const { Livro, Editora } = require('../models');

const livrosPath = path.resolve(__dirname, '../database/livros.json');

const getLivros = () => {
  return JSON.parse(fs.readFileSync(livrosPath));
}

function saveLivros (livros) {
  fs.writeFileSync(livrosPath, JSON.stringify(livros, null, 4));
}

module.exports = {
  async index(req, res) {
    const livros = await Livro.findAll({
      include: [
        { model: Editora, as: 'editora', require: true }
      ],
    });
    res.render('biblioteca', { livros });
  },

  form (req, res) {
    let livro;
    let id = req.params.id;

    if (id) {
      livro = getLivros().find(livro => livro.id == id);
    }

    res.render('adicionar-livro', { livro });
  },

  criar (req, res) {
    const livros = getLivros();

    livros.push({
      id: livros.at(-1).id + 1,
      ...req.body
    });

    saveLivros(livros);
    res.redirect('/biblioteca');
  },

  editar (req, res) {
    const id = req.params.id;
    const livros = getLivros()
    const livro = livros.find(livro => livro.id == id);

    livro.titulo = req.body.titulo;
    livro.editora = req.body.editora;

    saveLivros(livros);
    res.redirect('/biblioteca');
  },

  deletar (req, res) {
    const id = req.params.id;
    let livros = getLivros();

    livros = livros.filter(livro => livro.id != id);

    saveLivros(livros);
    res.redirect('/biblioteca');
  }
}