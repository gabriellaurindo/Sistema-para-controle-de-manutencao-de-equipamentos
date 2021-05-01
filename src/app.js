//Importar Módulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Config body parser
app.use(bodyParser.json())

//Importar Rotas
const index =   require('../routes/index')

//Usar Rotas
app.use('/',index)

//Importando Banco
require("../config/database")

module.exports = app