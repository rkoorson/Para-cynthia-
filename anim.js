// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("backgroundMusic");
  const body = document.body;
  
  // Reproduce la música al hacer clic en cualquier parte de la pantalla
  body.addEventListener("click", function() {
    audio.play()
      .then(() => console.log("Música iniciada"))
      .catch(error => console.error("Error al reproducir:", error));
  });

  // Opcional: Mensaje para el usuario (puedes personalizarlo)
  const titulo = document.querySelector(".titulo");
  titulo.innerHTML += "<br><small>(".playmp3")</small>";
});
