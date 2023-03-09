const express = require('express');
const router = express.Router();
const LivrosController = require('../controllers/LivrosController')

router.post('/', LivrosController.criar);

router.get('/', LivrosController.listar);

router.get('/:id', LivrosController.obter);

router.put('/:id', LivrosController.atualizar);

router.delete('/:id', LivrosController.deletar);

module.exports = router;