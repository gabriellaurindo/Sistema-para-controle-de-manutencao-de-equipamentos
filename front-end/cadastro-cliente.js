async function cadastrarcliente(){
    try{
       const token =  localStorage.getItem('token')
       const nome = document.getElementById("nome").value
       const email = document.getElementById("email").value
       const telefone = document.getElementById("telefone").value
       const endereco = document.getElementById("endereco").value
       const result = await fetch('http://localhost:8080/cadastro/cliente',{
           headers:{
               "Content-Type": "application/json",
               "authorization": token
           },
           method:"POST",
           body: JSON.stringify({nome,email,endereco,telefone}),
       });
       const json = await result.json()
       console.log(json)
       window.alert("Cliente Cadastrado com sucesso!")
       window.location.replace("http://127.0.0.1:5500/pesquisa.html");
    }catch(err){
        console.log(err)
    }
  }  

     