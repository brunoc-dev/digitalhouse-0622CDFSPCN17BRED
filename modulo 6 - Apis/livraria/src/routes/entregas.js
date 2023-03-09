const express = require('express');
const EntregasController = require('../controllers/EntregasController');
const router = express.Router();

router.get('/endereco', EntregasController.obterEnderecoPorCep);

router.get('/frete', EntregasController.calcularFrete);

module.exports = router;