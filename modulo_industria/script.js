let segundos = 60;
let intervalo = null;

function atualizarTela() {
  const minutos = Math.floor(segundos / 60);
  const seg = segundos % 60;

  document.getElementById("timer").textContent =
    `${String(minutos).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}

function iniciar() {
  if (intervalo !== null) return;

  intervalo = setInterval(() => {
    if (segundos > 0) {
      segundos--;
      atualizarTela();
    } else {
      pausar();
      alert("Tempo esgotado!");
    }
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function reiniciar() {
  pausar();
  segundos = 60;
  atualizarTela();
}

atualizarTela();