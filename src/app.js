//Importar Módulos
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//Config body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Config cors
app.use(cors());


//Importar Rotas
const index =   require('../routes/index')
const login =   require('../routes/login')
const cadastro_os = require('../routes/cadastro-os')
const pesquisa_os = require('../routes/pesquisa-os')
const cadastro_cliente = require('../routes/cadastro-client')
const pesquisa_cliente = require('../routes/pesquisa-cliente')

//Usar Rotas
app.use('/',index)
app.use('/',login)
app.use('/',cadastro_os)
app.use('/',pesquisa_os)
app.use('/',cadastro_cliente)
app.use('/',pesquisa_cliente)

//Importando Banco
require("../config/database")

module.exports = app