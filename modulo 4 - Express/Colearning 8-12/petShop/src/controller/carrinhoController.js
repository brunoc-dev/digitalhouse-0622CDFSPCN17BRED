module.exports = {
    mostraCarrinho: (req, res) => {
        res.render('carrinho', {js: "/js/carrinho.js"})
    }
}