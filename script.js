// ---------- CRONÔMETRO ----------
let segundos = 0;
let timer = null;

function formatarTempo(seg) {
  const h = String(Math.floor(seg / 3600)).padStart(2, '0');
  const m = String(Math.floor((seg % 3600) / 60)).padStart(2, '0');
  const s = String(seg % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function atualizarCronometro() {
  document.getElementById("cronometro").textContent = formatarTempo(segundos);
}

function iniciar() {
  if (timer) return; // se já estiver rodando, não faz nada
  timer = setInterval(() => {
    segundos++;
    atualizarCronometro();
  }, 1000);
}

function pausar() {
  clearInterval(timer);
  timer = null;
}

function resetar() {
  pausar();
  segundos = 0;
  atualizarCronometro();
}

// ---------- CALCULAR IDADE ----------
function calcularIdade() {
  const input = document.getElementById("data-nascimento").value;
  if (!input) return alert("Por favor, selecione sua data de nascimento.");

  const nascimento = new Date(input);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  document.getElementById("idade").textContent = `Você tem ${idade} anos.`;
}

// ---------- VERIFICAR ANIVERSÁRIO ----------
function verificarAniversario() {
  const input = document.getElementById("data-aniversario").value;
  if (!input) return alert("Digite sua data de nascimento.");

  const hoje = new Date();
  const aniversario = new Date(input);

  const diaHoje = hoje.getDate();
  const mesHoje = hoje.getMonth();
  const diaNasc = aniversario.getDate();
  const mesNasc = aniversario.getMonth();

  const msg = diaHoje === diaNasc && mesHoje === mesNasc
    ? "🎉 Feliz Aniversário, Luiz! 🥳"
    : "Ainda não é seu aniversário.";

  document.getElementById("mensagem-aniversario").textContent = msg;
}


const botaoTema = document.getElementById('toggle-tema');

function aplicarTema() {
  const tema = localStorage.getItem('tema');
  if (tema === 'dark') {
    document.body.classList.add('dark');
    botaoTema.textContent = '🌚 Alternar Tema';
  } else {
    document.body.classList.remove('dark');
    botaoTema.textContent = '🌞 Alternar Tema';
  }
}

botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('tema', 'dark');
    botaoTema.textContent = '🌚 Alternar Tema';
  } else {
    localStorage.setItem('tema', 'light');
    botaoTema.textContent = '🌞 Alternar Tema';
  }
});

// Aplica o tema salvo ao carregar a página
aplicarTema();


