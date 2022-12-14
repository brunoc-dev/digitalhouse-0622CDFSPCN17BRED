const ServicoModel = require('../models/ServicoModel');

module.exports = {
    index: (req, res) => {
        //controler comunicando com o model
        const servicos = ServicoModel.index();
        //controler comunicando com a view
        return res.render('index', { servicos, css: 'style.css' })
    }
}