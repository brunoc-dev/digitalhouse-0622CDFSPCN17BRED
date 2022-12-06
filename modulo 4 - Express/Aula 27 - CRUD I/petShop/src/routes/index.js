var express = require('express');
var router = express.Router();

const IndexController = require('../controller/indexController')

/* GET home page. */
// Passando a rota e controller para a view
router.get('/', IndexController.index);

module.exports = router;
