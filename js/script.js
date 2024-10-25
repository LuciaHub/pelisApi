const URLPELICULAS = "data/films.json";
const DIVPELICULAS = document.querySelector("#fichasPeliculas");
const POSTERURL = "https://image.tmdb.org/t/p/w1280";
const searchInput = document.getElementById('search-input'); 
let peliculas = []; 

function mostrarPeliculas(listaPeliculas) {
    DIVPELICULAS.innerHTML = ""; 
    listaPeliculas.forEach(pelicula => {
        DIVPELICULAS.insertAdjacentHTML("beforeend",
        `
        <div class="pelicula">
          <div class="images">
            <img src="${POSTERURL + pelicula.poster_path}" alt="${pelicula.title}">
          </div>
          <div class="titleAndCount">
            <h2>${pelicula.title}</h2>
            <p class="count">${pelicula.vote_average}</p>
          </div>
          <div class="descripcion">
            <h3 class="overview">Descripción</h3>
            <p>${pelicula.overview}</p>
          </div>
        </div>
        `);
    });
}

let crearPeliculas = function (URLPELICULAS) {
  fetch(URLPELICULAS)
  .then(response => response.json())
  .then(data => {
      peliculas = data; 
      mostrarPeliculas(peliculas); 
  })
}

function filtrarPeliculas() {
  const textoBusqueda = searchInput.value.toLowerCase();
  const peliculasFiltradas = peliculas.filter(pelicula => {
    return pelicula.title.toLowerCase().includes(textoBusqueda);
  });
  mostrarPeliculas(peliculasFiltradas);

}
searchInput.addEventListener('input', filtrarPeliculas);


crearPeliculas(URLPELICULAS);
