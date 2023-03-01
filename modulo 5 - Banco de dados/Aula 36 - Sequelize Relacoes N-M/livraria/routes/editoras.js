const router = require('express').Router();
const EditorasController = require('../controllers/EditorasController')

router.get('/', EditorasController.index);

router.get('/form/:id?', EditorasController.form);

router.post('/', EditorasController.criar);

router.put('/:id', EditorasController.editar);

router.delete('/:id', EditorasController.remover);

module.exports = router;