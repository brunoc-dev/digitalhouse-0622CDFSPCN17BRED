const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

const servicos = require('../database/servicos.json');
const nomeArquivoServicos = path.join(__dirname, '../database/servicos.json');

module.exports = {
  index () {
    return servicos
  },

  armazenar (servicos) {
    fs.writeFileSync(nomeArquivoServicos, JSON.stringify(servicos));
  },

  criar ({ nome, valor, descricao }) {
    if (!nome || !valor || !descricao) return

    servicos.push({ id: uuid(), nome, valor, descricao });
    this.armazenar(servicos);
  },

  buscar (id) {
    return servicos.find(servico => servico.id == id);
  },

  atualizar (id, { nome, valor, descricao }) {
    if (!id) return

    if (!nome || !valor || !descricao) return

    const servico = this.buscar(id);

    servico.nome = nome;
    servico.valor = valor;
    servico.descricao = descricao;

    this.armazenar(servicos);
  },

  deletar (id) {
    if (!id) return

   servicos = servicos.filter(servico => servico.id != id);
   this.armazenar(servicos);
  }
}