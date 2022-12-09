const express = require('express')
const CarrinhoController = require('../controller/carrinhoController')
const router = express.Router()


router.get('/', CarrinhoController.mostraCarrinho)

module.exports = router