
//////////////////// codigo do gpt
function login() {
    // 1. Captura o texto digitado nos campos do formulário
    const usuarioDigitado = document.getElementById('usuario_html').value;
    const senhaDigitada = document.getElementById('senha').value;

    // 2. Busca os dados salvos no localStorage do navegador
    const usuarioSalvo = localStorage.getItem('usuario');
    const senhaSalva = localStorage.getItem('senha');

    // 3. Compara os dados digitados com os dados salvos
    if (usuarioDigitado === usuarioSalvo && senhaDigitada === senhaSalva) {
        alert("Entrando...");
    } else {
        alert("Senha ou usuário incorreto!");
    }

    window.location.href = "./home.html"

}
/////////////fim

function cadastro(){
    const novoUsuario = document.getElementById('novo_usuario').value;
    const nome = document.getElementById('novo_nome').value;
    const novaSenha = document.getElementById('nova_senha').value;
    const palavraPasse = document.getElementById('palavra_passe').value;
    

    localStorage.setItem('usuario', novoUsuario);
    localStorage.setItem('senha',novaSenha );
    localStorage.setItem('nome', nome);
    localStorage.setItem('palavra-passe', palavraPasse);


    alert("Cadastro feito!");

    // window.location.href = "./login.html"
}



function recuperarSenha(){
   

    localStorage.setItem('tentativasRecuperar', 0);

    const mudarSenhaCadastro = document.getElementById('mudar_senha').value;
    const palavraPasseConfirmacao = document.getElementById('palavra_passe_registrada').value;
    const palavraPasse = localStorage.getItem('palavra-passe');

    let tentativasRecuperar = Number(localStorage.getItem('tentativas' ) || 0);

    if(tentativasRecuperar >= 3){
        alert("Limite atingido, tente sua senha após um tempo");
        return;
    }

    // localStorage.getItem('senha', mudarSenhaCadastro);
    // localStorage.getItem('palavra-passe', palavraPasse);
    // localStorage.getItem('tentativas', tentativasRecuperar);
    
    if(palavraPasseConfirmacao == palavraPasse){
        localStorage.setItem('senha', mudarSenhaCadastro);
        alert("Senha mudada!");
        localStorage.setItem('tentativas', 0);
    }
    else{
        alert("A palavra-passe não coincide");
        tentativasRecuperar = tentativasRecuperar + 1;

        localStorage.setItem('tentativas', tentativasRecuperar);    
    }
 
    
   
    // window.location.href = "./login.html";
    
}



////////////////tentativa do meu
// function login(){
//     const campo_usuario = document.getElementById("usuario").value;
//     const campo_senha = document.getElementById("senha").value;


//     const local_usuario = localStorage.getItem("usuario");
//     const local_senha = localStorage.getItem("senha");

//     if(campo_usuario == local_usuario && campo_senha == local_senha){
//         alert("Entrando!");
//     }
//     else{
//         alert("Senha ou usuário incorreto");
//     }

// }





///////////////////// código do professor
// function login() {
//     // 1º Acessar o valor digitado nos campos USUARIO e SENHA
//     const cmapo_usuario = document.getElementById("usuario").value;
//     const campo_senha = document.getElementById("senha").value;

//     // 2º carregar os valores do localStorange
//     const local_usuario = localStorage.getItem("usuario");
//     const local_senha = localStorage.getItem("senha");

//     // 3º Validar se o valores digitados são iguais aos valores armazenados no localStorage
//     if (cmapo_usuario == local_usuario && campo_senha == local_senha) {
//         alert("Login realizado com sucesso! 👍");
//     } else {
//         alert("Usuário ou senha inválidos! 👎");
//     }

// }





// function cadastro() {
        // 1º Carregar os campos de cadastro
        // NOME, USUÁRIO, SENHA, PALAVRA-PASSE


        // 2º Cadastrar os dados no localStorage
        // Ex.: localStorage.setItem("NOME", valor)
        // OBS.: "valor" é o dado que foi carregado no passo 1


        // 3º Redirecionar para a tela de login
// }


    // function recuperar_senha() {
// 1º Carregar os valores dos campos NOME e PALAVRA-PASSE


// 2º Buscar no localStorage os valores de NOME e PALAVRA-PASSE


// 3º Comparar se os valores carregados nos campos da tela
// são compatíveis com os valores armazenados no localStorage.
//
// Se forem iguais, exibir a senha na tela ou em um alert.
//
// Se forem diferentes, notificar o usuário na tela ou em um alert
// informando que os dados não são compatíveis.
// Além disso, limpar os campos de entrada (inputs).


// DESAFIO SEM I.AAAAA:
//
// Vocês devem implementar um controle de tentativas para a recuperação de senha.
//
// REGRAS:
// Vocês devem validar a quantidade de tentativas incorretas
// de NOME e PALAVRA-PASSE.
//
// Quando o usuário errar 3 vezes, vocês devem bloquear os campos (inputs)
// e impedir que o usuário realize uma nova tentativa de recuperação de senha.
//
// Lembrem-se de salvar a quantidade de erros no localStorage.



