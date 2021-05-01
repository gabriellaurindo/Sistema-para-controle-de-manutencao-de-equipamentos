//Importando Módulos
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require("../api/models/User")

//Rota Raiz
router.get('/', function (req, res,) {
   res.send({Descrição:'API REST Privada!', Version: '1.0.0'})
})


   
//Exportando Rota Raiz
module.exports = router