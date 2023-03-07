const express = require('express');
const router = express.Router();
const LivrosController = require('../controllers/LivrosController')

router.post('/', LivrosController.criar);

module.exports = router;