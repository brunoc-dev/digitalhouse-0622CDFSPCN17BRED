const { check } = require('express-validator');

module.exports = [
  check('nome')
    .notEmpty().withMessage('Campo obrigatório').bail()
    .isString().withMessage('Não deve conter números').bail()
    .isLength({ min: 3, max: 20 }).withMessage('Deve possuir entre 3 e 10 caracteres').bail(),
  check('valor')
    .notEmpty().withMessage('Campo obrigatório').bail()
    .isNumeric().withMessage('Deve conter somente números').bail(),
  check('descricao')
    .notEmpty().withMessage('Campo obrigatório').bail(),
]