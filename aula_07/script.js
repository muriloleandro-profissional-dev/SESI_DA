// 1. SELECIONANDO OS ELEMENTOS DO HTML
const botoes = document.querySelectorAll(".botaos button"); // Pega os 9 botões
const textoVez = document.querySelector(".vez_jogador span"); // Pega o <span> do jogador

// 2. VARIÁVEIS DE ESTADO (A memória do jogo)
let jogadorAtual = "X"; // Começa com o jogador X
let tabuleiro = ["", "", "", "", "", "", "", "", ""]; // Guarda o estado das 9 casas
let jogoAtivo = true; // Controla se o jogo pode continuar ou se acabou

// 3. COMBINAÇÕES POSSÍVEIS DE VITÓRIA (Horizontais, Verticais e Diagonais)
const combinacoesVitoria = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontais
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticais
  [0, 4, 8], [2, 4, 6]             // Diagonais
];

// 4. ADICIONANDO O 'ESCUTADOR DE CLIQUE' EM CADA UM DOS 9 BOTÕES
botoes.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    // Pega o índice do botão clicado (0 a 8)
    const index = e.target.getAttribute("data-index");

    // SE a casa já estiver ocupada OU o jogo já tiver acabado, ignora o clique
    if (tabuleiro[index] !== "" || !jogoAtivo) {
      return;
    }

    // REGISTRA A JOGADA
    tabuleiro[index] = jogadorAtual; // Atualiza a memória
    e.target.textContent = jogadorAtual; // Escreve o X ou O na tela

    // VERIFICA SE HOUVE VITORIA, EMPATE OU SE SEGUE O JOGO
    if (checarVitoria()) {
      textoVez.parentElement.textContent = `O Jogador ${jogadorAtual} venceu!`;
      jogoAtivo = false;
    } else if (checarEmpate()) {
      textoVez.parentElement.textContent = "Deu Velha! O jogo empatou.";
      jogoAtivo = false;
    } else {
      // SE NINGUÉM GANHOU, TROCA A VEZ DO JOGADOR
      if (jogadorAtual === "X") {
        jogadorAtual = "O";
      } else {
        jogadorAtual = "X";
      }
      textoVez.textContent = jogadorAtual; // Atualiza o texto na tela
    }
  });
});

// 5. FUNÇÃO QUE CHECA SE ALGUÉM GANHOU
function checarVitoria() {
  for (let combinacao of combinacoesVitoria) {
    const posA = combinacao[0];
    const posB = combinacao[1];
    const posC = combinacao[2];

    // Se as 3 posições da combinação forem iguais e não estiverem vazias, temos um vencedor!
    if (
      tabuleiro[posA] !== "" &&
      tabuleiro[posA] === tabuleiro[posB] &&
      tabuleiro[posA] === tabuleiro[posC]
    ) {
      return true;
    }
  }
  return false;
}

// 6. FUNÇÃO QUE CHECA SE DEU EMPATE (VELHA)
function checarEmpate() {
  // Se nenhuma casa estiver vazia (""), significa que o tabuleiro encheu
  return !tabuleiro.includes("");
}