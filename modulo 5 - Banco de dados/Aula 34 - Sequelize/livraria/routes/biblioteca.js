const express = require('express');
const router = express.Router();
const LivrosController = require('../controllers/LivrosController');

router.get('/', LivrosController.index);

router.get('/form/:id?', LivrosController.form);

router.post('/', LivrosController.criar);

router.put('/editar/:id', LivrosController.editar);

router.delete('/deletar/:id', LivrosController.deletar);

module.exports = router;