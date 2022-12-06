const express = require('express');
const router = express.Router();

const ServicosController = require('../controller/servicosController')

router.get('/', ServicosController.listaServicos);

router.get('/admin', ServicosController.mostraAdminServicos)

// Rota de criação de produto
router.post('/create', ServicosController.criaServico)

// Rota de busca de produtos
router.get('/search', ServicosController.buscaServico)

module.exports = router;