const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const nomeArquivoUsuarios = path.join(__dirname, '../database/usuarios.json');

module.exports = {
  listar: function () {
    return JSON.parse(fs.readFileSync(nomeArquivoUsuarios));
  },

  gravar: function (usuarios) {
    return fs.writeFileSync(nomeArquivoUsuarios, JSON.stringify(usuarios, null, 4));
  },

  criar: function (usuario) {
    const usuarios = this.listar();

    usuario.senha = bcrypt.hashSync(usuario.senha, 10);

    usuarios.push(usuario);
    this.gravar(usuarios);
  }
}