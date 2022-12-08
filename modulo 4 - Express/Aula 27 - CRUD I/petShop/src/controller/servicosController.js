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
        if (!req.file) {
            return res.send ("Por favor, envie um arquivo")
        }

        ServicoModel.createOne(req)
        res.send("O produto de nome " + req.body.nome + " foi criado com sucesso")
    },
    buscaServico: (req, res) => {

        res.send(ServicoModel.findOne(req))
    },
    listaServico: (req, res) => {
        res.send(ServicoModel.findByParams(req))
    },
    deletaServico: (req, res) => {
        ServicoModel.deleteOne(req)
        res.send("O produto de id " + req.body.id + " foi deletado com sucesso")
    },
    atualizaServico: (req, res) => {
        ServicoModel.updateOne(req)
        res.send("O produto de id " + req.body.id + " foi atualizado com sucesso")
    }
}