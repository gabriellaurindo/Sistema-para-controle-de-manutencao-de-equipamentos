//Importando Módulos
const express = require('express')
const router = express.Router()
const auth = require('../api/middlewares/authenticate')
const login = require('../api/controllers/login')

//Rota Para Verificação
router.post('/login', function (req, res,) {
    login(req,res)    
})
  
//Exportando Rota de Login
module.exports = router