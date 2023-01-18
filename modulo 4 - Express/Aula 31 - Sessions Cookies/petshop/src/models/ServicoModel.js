const { uuid } = require('uuidv4');
const path = require('path');
const fs = require('fs');

const nomeArquivoServicos = path.join(__dirname, '../database/servicos.json');

module.exports = {
  index () {
    return JSON.parse(fs.readFileSync(nomeArquivoServicos));
  },

  armazenar (servicos) {
    fs.writeFileSync(nomeArquivoServicos, JSON.stringify(servicos));
  },

  criar ({ nome, valor, descricao }) {
    if (!nome || !valor || !descricao) return

    const servicos = this.index();

    servicos.push({ id: uuid(), nome, valor, descricao });
    this.armazenar(servicos);
  },

  buscar (id) {
    return this.index().find(servico => servico.id == id);
  },

  atualizar (id, { nome, valor, descricao }) {
    if (!id) return

    if (!nome || !valor || !descricao) return

    const servicos = this.index();
    const novoServico = servicos.find(servico => servico.id == id);

    novoServico.nome = nome;
    novoServico.valor = valor;
    novoServico.descricao = descricao;

    this.armazenar(servicos);
  },

  deletar (id) {
    if (!id) return

    const servicos = this.index();
    const novosServicos = servicos.filter(servico => servico.id != id);
    // O passo abaixo remove imagens submetidas através do multer.
    // fs.unlinkSync(path.join(__dirname, '../../public/' + servico.filename)).
    this.armazenar(novosServicos);
  }
};