// const nome = localStorage.getItem('nome');

// alert(nome);

// localStorage.setItem("nome", "Leandro");

// alert(localStorage.getItem("nome"));

// localStorage.removeItem("nome");


// const usuario_html = document.getElementById('usuario').value;
// const senha_html = document.getElementById('senha').value;

// function login(){
//  //acessar o valor digitado nos campos do USUARIO e SENHA
//  //Validar se os valores são iguais aos valores armazenados no localStorage

//     const usuarioDigitado = localStorage.getItem('usuario');
//     const senha = localStorage.getItem('senha');

//     if(usuario_html == usuario && senha_html == senha){
//         alert("Entrando")
//     }
//     else if(usuario_html != usuario || senha_html != senha){
//         alert("Senha ou usuário incorreto!")
//     }
    
    

// }

// login();


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
}


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


