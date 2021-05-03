async function cadastraros(){
    try{
       const token =  localStorage.getItem('token')
       const descricao = document.getElementById("descricao").value
       const id_client = document.getElementById("id_client").value
       const result = await fetch('http://localhost:8080/cadastro/os',{
           headers:{
               "Content-Type": "application/json",
               "authorization": token
           },
           method:"POST",
           body: JSON.stringify({descricao,id_client}),
       });
       const json = await result.json()
       console.log(json)
       window.alert("Ordem de serviço cadastrada com sucesso!")
       window.location.replace("http://127.0.0.1:5500/pesquisa.html");
    }catch(err){
        console.log(err)
    }
  }  

     