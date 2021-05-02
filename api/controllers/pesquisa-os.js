//Importando Módulos
const Os = require("../models/Os")

async function pesquisa_os (req,res){
    await Os.find().then(listagem =>{
        res.send(listagem)
    }) 
}    

module.exports = pesquisa_os