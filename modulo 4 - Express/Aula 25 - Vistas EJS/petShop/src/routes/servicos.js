const express = require('express');
const router = express.Router();

const ServicosController = require('../controller/servicosController')

router.get('/', ServicosController.listaServicos);

module.exports = router;