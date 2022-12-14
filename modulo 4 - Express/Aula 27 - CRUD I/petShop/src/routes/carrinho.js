const router = require('express').Router();
const CarrinhoController = require('../controller/carrinhoController');

router.get('/', CarrinhoController.index);
router.post('/', CarrinhoController.add);
router.delete('/delete/:id', CarrinhoController.remove);

module.exports = router;