document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("backgroundMusic");
  const musicButton = document.getElementById("musicButton");
  const titulo = document.querySelector(".titulo");

  // Agrega el mensaje de "Haz clic..." solo si no existe
  if (!titulo.querySelector("small")) {
    const clickMessage = document.createElement("small");
    clickMessage.textContent = "Haz clic en el botón para activar la música";
    titulo.appendChild(clickMessage);
  }

  // Controlador del botón de música
  musicButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play()
        .then(() => {
          musicButton.classList.add("playing");
          // Oculta el mensaje al reproducir
          const clickMessage = titulo.querySelector("small");
          if (clickMessage) clickMessage.style.display = "none";
        })
        .catch(error => console.error("Error al reproducir:", error));
    } else {
      audio.pause();
      musicButton.classList.remove("playing");
    }
  });

  // Ocultar título después de 3 minutos
  setTimeout(function() {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(() => titulo.style.display = "none", 3000);
  }, 180000);
});
