const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');

router.get('/cadastrar', UsuariosController.criarForm);

router.post('/cadastrar', UsuariosController.criar);

module.exports = router;