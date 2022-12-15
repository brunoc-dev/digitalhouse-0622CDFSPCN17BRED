const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');
const validadorFormServicos = require('../middlewares/validadorFormServicos');

// C - Criação de novos serviços
router.get('/cadastrar', ServicosController.editar);
router.post('/cadastrar', validadorFormServicos, ServicosController.criar);

// R - Leitura de serviços
router.get('/', ServicosController.index);
router.get('/admin', ServicosController.admin);

// U - Atualização de serviços
router.get('/editar/:id', ServicosController.editar);
router.put('/editar/:id', validadorFormServicos, ServicosController.atualizar);

module.exports = router;