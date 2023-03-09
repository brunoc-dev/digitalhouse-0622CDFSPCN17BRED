var express = require('express');
var router = express.Router();
const entregasRouter = require('./entregas');
const livrosRouter = require('./livros');

router.use('/entregas', entregasRouter);
router.use('/livros', livrosRouter); // /api/livros
// router.use('/autores', autoresRouter); // /api/autores

module.exports = router;
