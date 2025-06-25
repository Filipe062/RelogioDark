function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;

  const opcoesData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
  document.getElementById('data').textContent = dataFormatada;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // primeira execução

// Alternar tema e salvar no localStorage
const botaoTema = document.getElementById('toggle-tema');
const iconeTema = document.getElementById('icone-tema');

// Carregar tema salvo
if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark');
  iconeTema.textContent = '🌚';
}

botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('tema', temaAtual);
  iconeTema.textContent = temaAtual === 'dark' ? '🌚' : '🌞';
});
