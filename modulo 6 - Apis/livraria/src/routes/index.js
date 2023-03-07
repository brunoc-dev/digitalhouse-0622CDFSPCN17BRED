var express = require('express');
var router = express.Router();
const livrosRouter = require('./livros');

router.use('/livros', livrosRouter); // /api/livros
// router.use('/autores', autoresRouter); // /api/autores

module.exports = router;
