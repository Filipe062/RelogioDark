function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');

  const relogio = document.getElementById('relogio');
  relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // inicializa ao abrir

document.getElementById('toggle-tema').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});