const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');
const validadorFormServicos = require('../middlewares/validadorFormServicos');
const autenticado = require('../middlewares/autenticado');

// C - Criação de novos serviços
router.get('/cadastrar', autenticado, ServicosController.editar);
router.post('/cadastrar', autenticado, validadorFormServicos, ServicosController.criar);

// R - Leitura de serviços
router.get('/', autenticado, ServicosController.index);
router.get('/admin', autenticado, ServicosController.admin);

// U - Atualização de serviços
router.get('/editar/:id', autenticado, ServicosController.editar);
router.put('/editar/:id', autenticado, validadorFormServicos, ServicosController.atualizar);

// D - Remoção de serviços
router.delete('/deletar/:id', autenticado, ServicosController.deletar);

// 1 . Interação na view (botão, formulário, etc.)
// 2 . Criar rota com o método http específico (EX: router.delete(...))
// 3 . Criar um método no Controller para processar a rota.
// 4 . Criar um método no modelo para executar a ação desejada.
// x . Redirecionamento?

module.exports = router;

// C R U D -> Conceito;
// POST GET PUT DELETE -> REST (rotas)
// Criar, Listar, Atualizar, Deletar -> Funções do controller;
// Criar, Listar, Atualizar, Deletar -> Funções do model;
// Acesso aos dados através do modelo (model);
// viewForm, viewList, viewForm, viewDelete (views);
