//Importando Módulos
const Client = require("../models/Client")

async function pesquisa_cliente (req,res){
    await Client.find().then(listagem =>{
        res.send(listagem)
    }) 
}    

module.exports = pesquisa_cliente