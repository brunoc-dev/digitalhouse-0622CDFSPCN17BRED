const express = require('express');
const router = express.Router();
const LivrosController = require('../controllers/LivrosController');
const AutoresController = require('../controllers/AutoresController');
const EditorasController = require('../controllers/EditorasController');

router.get('/', LivrosController.index);

router.get('/form/:id?', LivrosController.form);

router.post('/', LivrosController.criar);

router.put('/editar/:id', LivrosController.editar);

router.delete('/deletar/:id', LivrosController.deletar);

router.get('/autores', AutoresController.index);

module.exports = router;