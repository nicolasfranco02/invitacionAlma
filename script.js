 /*document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const mailtoLink = `mailto:gabrielfranco4321@gmail.com?subject=Confirmación de Asistencia&body=Nombre: ${name}%0ACorreo: ${email}`;
    window.location.href = mailtoLink;
});*/
// evento botn
document.getElementById('asistireBtn').addEventListener('click', function() {
    var formulario = document.getElementById('formulario');
    if (formulario.style.display === 'none') {
      formulario.style.display = 'block';
    } else {
      formulario.style.display = 'none';
    }
  });

  document.getElementById('noasistireBtn').addEventListener('click', function() {
    var formulario2 = document.getElementById('formulario2');
    if (formulario2.style.display === 'none') {
      formulario2.style.display = 'block';
    } else {
      formulario2.style.display = 'none';
    }
  });
// envio mensaje
  document.getElementById('confirmarAsistenciaBtn').addEventListener('click', function() {
    let nombre = document.getElementById('nombre').value;
    let numeroTelefono = '+5491130637045'; // Reemplaza con tu número de teléfono
    let cancion= document.getElementById('cancion').value;
    let impedimentos = document.getElementById('impedimentos').value;
    let mensaje = 'Hola, soy ' + nombre + ' y confirmo mi asistencia al evento. me gustaria escuchar ' + cancion +  
    ' y cuento con el impedimento '+ impedimentos+ ' ';
    let url = 'https://api.whatsapp.com/send?phone=' + numeroTelefono + '&text=' + encodeURIComponent(mensaje);
    window.open(url, '_blank');
  });
  
  document.getElementById('noconfirmarAsistenciaBtn').addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let numeroTelefono = '+5491130637045'; // Reemplaza con tu número de teléfono
    let msj= document.getElementById('msj').value;
    let mensaje = 'Hola, soy ' + name + ' y no voy a poder asistir al evento. ' + msj + ' ';
    let url = 'https://api.whatsapp.com/send?phone=' + numeroTelefono + '&text=' + encodeURIComponent(mensaje);
    window.open(url, '_blank');
  });

  //contador

  function countdown() {
    const targetDate = new Date("2024-11-15T21:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }
  
  setInterval(countdown, 1000);
  
