const express = require('express');
const router = express.Router();
const ServicosController = require('../controllers/ServicosController');
const validadorFormServicos = require('../middlewares/validadorFormServicos');

// C - Criação de novos serviços
router.get('/cadastrar', ServicosController.editar);
router.post('/cadastrar', validadorFormServicos, ServicosController.criar);

// R - Leitura de serviços
router.get('/', ServicosController.index);
router.get('/admin', ServicosController.admin);

// U - Atualização de serviços
router.get('/editar/:id', ServicosController.editar);
router.put('/editar/:id', validadorFormServicos, ServicosController.atualizar);

// D - Remoção de serviços
router.delete('/deletar/:id', ServicosController.deletar);

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
