let emailAdm = "adm@gmail.com";
let senhaAdm = "123mudar";
let adm = false;


function cadastrar(){
   let nome =  document.getElementById("nomeCadastro").value;
   let email = document.getElementById("emailCadastro").value;
   let senha = document.getElementById("senhaCadastro").value;
   let confirmarSenha = document.getElementById("confirmarSenha").value;
   let isAdm = false;

   if(senha == confirmarSenha){
        let usuario ={ 
            nome : nome,
            email : email,
            senha : senha,
            isAdm : isAdm
        
        };
   }

   localStorage.setItem('usuario', JSON.stringify(usuario));
}

let usuario = JSON.parse(localStorage.getItem('usuario'));

function verificarLogin(){

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email == emailAdm && senha == senhaAdm){
        adm = true;
    }else{
        if(email == usuario.email && senha == usuario.senha){
            
        }
    }
}

document.getElementById("cadastrar").addEventListener("click", cadastrar());
document.getElementById("logar").addEventListener("click", );


