const servicos = require("../database/servicos.json")
const fs = require('fs')
const path = require('path')

module.exports = {
  index: () => {
    return servicos
  },
  createOne: (req) => {
    let novoServico = {
      id: servicos[servicos.length -1].id + 1,
      nome: req.body.nome,
      valor: req.body.valor,
      descricao: req.body.descricao,
      imagem: req.file.filename
    }
    servicos.push(novoServico)
    fs.writeFileSync(path.join(__dirname, "../database/servicos.json"), JSON.stringify(servicos, null, 4))
  },

  findAllById: (ids) => {
    return servicos.filter(servico => ids.includes(servico.id));
  },

  findOne: (req) => {
    let found = servicos.find(servico => servico.id == req.query.id)
    return found
  },
  findByParams: (req) => {
    let found = servicos.find(servico => servico.id == req.params.id)
    return found
  },
  deleteOne: (req) => {
    let novoServicos = servicos.filter(servico => servico.id != req.body.id)
    if (!novoServicos.length) return
    fs.writeFileSync(path.join(__dirname, "../database/servicos.json"), JSON.stringify(novoServicos, null, 4))
  },
  updateOne: (req) => {
    servicos.forEach(servico => {
      if (servico.id != req.body.id) return
      servico.nome = req.body.nome
      servico.descricao = req.body.descricao
      servico.valor = req.body.valor
      servico.imagem = req.body.imagem
    })
    fs.writeFileSync(path.join(__dirname, "../database/servicos.json"), JSON.stringify(servicos, null, 4))
  }
}