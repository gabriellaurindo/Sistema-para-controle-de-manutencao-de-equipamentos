window.onload = pesquisarcliente()
    async function pesquisarcliente(){
    try{
       const token =  localStorage.getItem('token')
       const result = await fetch('http://localhost:8080/pesquisa/cliente',{
           headers:{
               "Content-Type": "application/json",
               "authorization": token
           },
       });
       const json = await result.json()
       for (var i = 0; i < json.length; i++){
            var div = document.createElement("div");
            var cod = document.createTextNode(json[i].cod + "|    |");
            var descricao = document.createTextNode(json[i].nome + "|    |");
            var datadecriacao = document.createTextNode(json[i].data_de_criacao + "|    |");
            var flag = document.createTextNode(json[i].flag + "     ");
            div.appendChild(cod);
            div.appendChild(descricao);
            div.appendChild(datadecriacao);
            div.appendChild(flag); 
            var divAtual = document.getElementById("div1");
            document.body.insertBefore(div, divAtual);
       }
    }catch(err){
        console.log(err)
    }
  }
  function recarregar(){
    window.location.replace("http://127.0.0.1:5500/pesquisacliente.html");
  }        

     