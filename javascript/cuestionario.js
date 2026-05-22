const moods = {
  tristeza: {
    cancion: "Someone Like You",
    album: "21 (2011)",
    id: "SyuRxUKDJjI",
    descripcion: "Para esos dias grises donde las lagrimas limpian el alma. La desgarradora interpretacion de Adele sobre el desamor y la aceptacion te abraza en tu dolor, recordandote que esta bien sentir la tristeza en toda su profundidad."
  },
  amor: {
    cancion: "Make You Feel My Love",
    album: "19 (2008)",
    id: "QVeubNxaBsg",
    descripcion: "Una promesa incondicional de devocion pura. La suave melodia del piano y la calidez en la voz de Adele transmiten un amor tan profundo que esta dispuesto a ir al fin del mundo para dar cobijo y calor a quien ama."
  },
  nostalgia: {
    cancion: "When We Were Young",
    album: "25 (2015)",
    id: "Xpc8mAJ_2nM",
    descripcion: "Un viaje melancolico a traves de los recuerdos y los anos compartidos. Un homenaje al pasado, al paso del tiempo y a las personas que marcaron nuestras vidas, capturado en una balada cinematografica y conmovedora."
  },
  superacion: {
    cancion: "Set Fire to the Rain",
    album: "21 (2011)",
    id: "uJdu4Lfy8aI",
    descripcion: "Un himno de empoderamiento y liberacion. La catarsis perfecta donde el dolor se transforma en fuego purificador. Representa el momento exacto en el que decides liberarte de las cadenas del pasado y renacer con fuerza."
  }
};

const opciones = document.querySelectorAll(".opcion-mood");

opciones.forEach(opcion => {
  opcion.addEventListener("click", () => {
    opciones.forEach(o => o.classList.remove("seleccionado"));
    opcion.classList.add("seleccionado");

    const data = moods[opcion.dataset.mood];
    document.getElementById("resultado-titulo").textContent = data.cancion;
    document.getElementById("resultado-album").textContent = `Album: ${data.album}`;
    document.getElementById("resultado-descripcion").textContent = data.descripcion;
    document.getElementById("video-container").innerHTML =
      `<a class="video-thumb" href="https://www.youtube.com/watch?v=${data.id}" target="_blank" rel="noopener" aria-label="Ver ${data.cancion} en YouTube">
         <img src="https://img.youtube.com/vi/${data.id}/hqdefault.jpg" alt="${data.cancion}" loading="lazy">
         <span class="play-overlay" aria-hidden="true">
           <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
         </span>
       </a>`;
    document.getElementById("resultado-quiz").classList.add("activo");
  });
});
