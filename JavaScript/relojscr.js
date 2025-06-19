function updateClock() {
    var dateElement = document.getElementById('fecha');
    var timeElement = document.getElementById('hora');
  
    var currentDate = new Date();
  
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = currentDate.toLocaleDateString('es-ES', options);
  
    var timeString = currentDate.toLocaleTimeString('es-ES');
  
    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
  }
  setInterval(updateClock, 1000);

  window.onload = updateClock;

function PlayAudio() {
  document.getElementById("re4").play()
}

