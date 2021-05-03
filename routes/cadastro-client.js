//Importando Módulos
const express = require('express')
const router = express.Router()
const cadastro_cliente = require('../api/controllers/cadastro-client')
const auth = require('../api/middlewares/authenticate')

//Rota Raiz
router.post('/cadastro/cliente', auth, function (req, res,) {
   cadastro_cliente(req,res)
})

//Exportando Rota de Cadastro de Ordens de Serviço
module.exports = router