const ServicoModel = require('../models/ServicoModel')

module.exports = {
    listaServicos: (req, res) => {
        const servicos = ServicoModel.index();
        //res.render('VIEW', {Objeto})
        return res.render('servicos', {listaServicos: servicos, title: "Lista de Serviços"})
    }
}