//Importando Módulos
const express = require('express')
const router = express.Router()
const auth = require('../api/middlewares/authenticate')
const pesquisa_cliente = require('../api/controllers/pesquisa-cliente')

//Rota de Pesquisa Geral
router.get('/pesquisa/cliente', auth, function (req, res) {
    pesquisa_cliente(req,res)
})
   
//Exportando Rota Raiz
module.exports = router