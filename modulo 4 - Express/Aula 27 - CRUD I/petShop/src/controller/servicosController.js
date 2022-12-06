const ServicoModel = require('../models/ServicoModel')

module.exports = {
    listaServicos: (req, res) => {
        const servicos = ServicoModel.index();
        //res.render('VIEW', {Objeto})
        return res.render('servicos', {listaServicos: servicos, title: "Lista de Serviços"})
    },
    mostraAdminServicos: (req, res) => {
        res.render("admin")
    },
    criaServico: (req, res) => {
        ServicoModel.createOne(req)
        res.send("O produto de nome " + req.body.nome + " foi criado com sucesso")
    },
    buscaServico: (req, res) => {

        res.send(ServicoModel.findOne(req))
    }
}