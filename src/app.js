//Importar Módulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//Config body parser
app.use(bodyParser.json())

//Importar Rotas
const index =   require('../routes/index')
const login =   require('../routes/login')
const cadastro_os = require('../routes/cadastro-os')
const pesquisa_os = require('../routes/pesquisa-os')

//Usar Rotas
app.use('/',index)
app.use('/',login)
app.use('/',cadastro_os)
app.use('/',pesquisa_os)

//Importando Banco
require("../config/database")

module.exports = app