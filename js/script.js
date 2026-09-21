//Array que irá gravar os contatos
//Variável de coleção
let contatos=[];
function cadastrar(){//begin
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    
    //criando um objeto com os dados

    //json
    let contato = {
        nome:nome, 
        telefone:telefone,
        cidade:cidade,
        estado:estado 
    }
    //adicionar o objeto dentro de contatos (array)
    contatos.push(contato);
    //mostro a lista na tela
    listar();
    //limpando os comandos da tela
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").value = "";
}//end

function listar(){
    let lista = document.getElementById("lista");
    //limpar a estrutura do html
    lista.innerHTML = "";
    //percorrer nosso array para catar item a item
    contatos.forEach(function(contato){
        let item = document.createElement("li");//<li>nome - telefone - cidade - estado</li>
        item.textContent = contato.nome + " - " + contato.telefone + " - " + contato.cidade + " - " + contato.estado;
        lista.appendChild(item);
    }); 
}