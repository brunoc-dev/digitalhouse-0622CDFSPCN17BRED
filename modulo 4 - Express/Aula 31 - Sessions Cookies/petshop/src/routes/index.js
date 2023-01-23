var express = require('express');
const BaseController = require('../controllers/BaseController');
var router = express.Router();

/* GET home page. */
router.get('/', BaseController.index);

router.get('/login', BaseController.loginForm);

router.post('/login', BaseController.autenticar);
router.get('/logout', BaseController.logout);

module.exports = router;
