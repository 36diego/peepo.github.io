function updateClock() {
  var dateElement = document.getElementById('date');
  var timeElement = document.getElementById('time');

  var currentDate = new Date();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = currentDate.toLocaleDateString('es-ES', options);

  var timeString = currentDate.toLocaleTimeString('es-ES');

  dateElement.textContent = dateString;
  timeElement.textContent = timeString;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Actualizar el reloj al cargar la página
window.onload = updateClock;