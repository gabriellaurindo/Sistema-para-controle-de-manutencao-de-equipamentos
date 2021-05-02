//Importando Módulos
const mongoose = require('mongoose')

//Definindo Schema
const Schema = mongoose.Schema

//Criando e configurando um novo Schema
const osSchema = new Schema({
    descricao:{
       type: String,
       require: true
    },
    flag:{
        type: String,
        trim: true,
        uppercase: true,
        required: true,
        maxlength: 1,
        default:"A"
    },
    data_de_criacao:{
        type: Date,
        default: Date.now
    },
    data_de_conclusao:{
        type: Date,
        require: true,
        default:0
    },
    cod:{
        type:Number,
        require:true,
        default:0
    },
    id_client:{
        type:String,
        require:true
    }
})

//Definindo modelo de usuário baseado no Schema
const Os = mongoose.model("Os", osSchema)

//Exportando Módulo
module.exports = Os


