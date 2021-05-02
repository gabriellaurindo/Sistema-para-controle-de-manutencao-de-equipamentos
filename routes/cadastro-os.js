//Importando Módulos
const express = require('express')
const router = express.Router()
const cadastro_os = require('../api/controllers/cadastro-os')
const auth = require('../api/middlewares/authenticate')

//Rota Raiz
router.post('/cadastro/os', auth, function (req, res,) {
   cadastro_os(req,res)
})

//Exportando Rota de Cadastro de Ordens de Serviço
module.exports = router