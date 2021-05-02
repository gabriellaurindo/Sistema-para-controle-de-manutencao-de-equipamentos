//Importando Módulos
const express = require('express')
const router = express.Router()
const auth = require('../api/middlewares/authenticate')
const pesquisa_os = require('../api/controllers/pesquisa-os')

//Rota de Pesquisa Geral
router.get('/pesquisa/os', auth, function (req, res) {
    pesquisa_os(req,res)
})
   
//Exportando Rota Raiz
module.exports = router