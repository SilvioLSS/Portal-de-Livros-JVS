AOS.init(); //Inicializa a biblioteca AOS com os efeitos de scroll.

let emailAdm = "adm@gmail.com";
let senhaAdm = "123mudar";
let adm = false;
let isLogado = false;

let usuario = JSON.parse(localStorage.getItem('usuario'));  // Carregar usuário de localStorage

// Função de cadastro
function cadastrar(event){
    event.preventDefault(); // Impede o envio do formulário para não recarregar a página

    let nome = document.getElementById("nomeCadastro").value;
    let email = document.getElementById("emailCadastro").value;
    let senha = document.getElementById("senhaCadastro").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value;
    let isAdm = false;

    // Verifica se os campos estão preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    // Cria o objeto usuário
    usuario = { 
        nome: nome,
        email: email,
        senha: senha,
        isAdm: isAdm
    };

    // Salva o usuário no localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
}

// Função de login
function verificarLogin(event){
    event.preventDefault(); // Impede o envio do formulário

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (email === emailAdm && senha === senhaAdm) {
        adm = true;
        alert("Bem-vindo, administrador!");
    } else if (usuario && email === usuario.email && senha === usuario.senha) {
        isLogado = true;
        alert("Login realizado com sucesso!");
    } else {
        alert("Email ou senha incorretos!");
    }
    
    if (isLogado || adm) {
        document.getElementById("botao_login").style.display = "none";
        document.getElementById("botao_logout").style.display = "block";  // Mostrar botão de logout
    }
}

// Adicionar eventos
document.getElementById("cadastrar").addEventListener("click", cadastrar);
document.getElementById("btnlogar").addEventListener("click", verificarLogin);
