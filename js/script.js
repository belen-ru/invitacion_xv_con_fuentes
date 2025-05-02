
document.getElementById('entrar').addEventListener('click', function () {
  document.getElementById('bienvenida').style.display = 'none';
  document.getElementById('contenido').style.display = 'block';
  document.getElementById('musica').play();
});

document.getElementById('btn-musica').addEventListener('click', function () {
  const audio = document.getElementById('musica');
  if (audio.paused) {
    audio.play();
    this.textContent = 'Pausar música';
  } else {
    audio.pause();
    this.textContent = 'Reproducir música';
  }
});

const cuentaRegresiva = document.getElementById("cuenta-regresiva");
const fechaEvento = new Date("2025-08-24T20:00:00").getTime();
function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;
  if (diferencia <= 0) {
    cuentaRegresiva.innerHTML = "¡Hoy es el gran día!";
    return;
  }
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  cuentaRegresiva.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}
setInterval(actualizarContador, 1000);
