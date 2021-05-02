//Importando Módulos
const Client = require("../models/Client")

//Função de login
function  cadastro_client (req,res){
    Client.find().limit(1).sort({data_de_criacao: 'desc' }).then(ordem =>{
        cod = ordem[0].cod + 1
        const {descricao, idclient} = req.body
        Os.create({cod, descricao, idclient}).catch((err)=>{
            console.log("Houve um erro: " + err);
            res.statusCode = 401
            res.send({Error:err})
        });
            res.statusCode = 201
            res.send({Descricao:"Registro criado com sucesso!"})
    })  
}

//Exportando Módulo
module.exports = cadastro_os