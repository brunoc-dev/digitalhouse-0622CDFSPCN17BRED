const express = require('express');
const router = express.Router();
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/servicos")
    } ,
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    } ,
})

const upload = multer({storage: storage, limits: {fileSize: 10000000}})


const ServicosController = require('../controller/servicosController')

router.get('/', ServicosController.listaServicos);

router.get('/admin', ServicosController.mostraAdminServicos)

// Rota parametrizada
router.get('/servico/:id/:nome?', ServicosController.listaServico)

// Rota de criação de produto
router.post('/create', upload.single("imagem"), ServicosController.criaServico)

// Rota de busca de produtos
router.get('/search', ServicosController.buscaServico)

// Rota de deletar serviços
router.delete('/remove', ServicosController.deletaServico)

// Rota de atualização de serviços
router.put('/edit', ServicosController.atualizaServico)



module.exports = router;