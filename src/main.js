import data from './data/ghibli/ghibli.js';
import { filtrarDirector } from './data.js';
// *******Despliega menú hamburguesa*******
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});
// *******Pinta las tarjetas en el DOM*******
function crearTarjetas(peliculas){
    const container = document.querySelector('.container')
    peliculas.forEach(films => {   
    container.innerHTML += `
    <article class="card">
            <h2 class="titulo">${films.title}</h2>
            <img class="posters" src="${films.poster}"
            <button><a href="https://www.ghiblicollection.com/product/my-neighbor-totoro?product_id=6644" target="_blank">Conoce Mas</a></button>
          </article>
    `});
}
crearTarjetas(data.films);//llama a la function crearTarjetas

// ***Imprime la info completa *** actualmente sin estilo y escondida.
function infoMovie(info){
    const infoMovies = document.querySelector('.info-movies')
    info.forEach(films =>{
        infoMovies.innerHTML += `
        <article class="paragraph">
            <h2 class="titulo2">${films.title}</h2>
            <p class="descripcion2"></p>
            <p> ${films.description}</p>
            <p>${films.director}</p>
            <p>${films.producer}</p>
    `})
}
infoMovie(data.films);//llama a la function infoMovie

// *******Filtrar directores*******
const select = document.getElementById('director');//identifica al elemento 'director'
select.addEventListener('change', filtrarDirector);//determina el evento.

