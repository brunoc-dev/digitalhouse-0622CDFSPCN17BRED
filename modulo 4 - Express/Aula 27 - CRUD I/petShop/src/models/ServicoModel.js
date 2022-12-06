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
      imagem: req.body.imagem
    }
    servicos.push(novoServico)
    fs.writeFileSync(path.join(__dirname, "../database/servicos.json"), JSON.stringify(servicos, null, 4))
  },
  findOne: (req) => {
    let found = servicos.find(servico => servico.id == req.query.id)
    return found
  }
}