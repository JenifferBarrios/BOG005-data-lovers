import data from './data/ghibli/ghibli.js';
import { filtrarDirector } from './data.js';
// console.log(data.films[0].title);
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
    console.log(data.films);
}
crearTarjetas(data.films);

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
infoMovie(data.films);
// Mostrar la info completa en el DOM aún no funciona
/* function mostrarInfo(){
    document.getElementById('info-movies').style.display = 'block';
}
const movies = document.getElementById('movies-link');
movies.addEventListener('click', mostrarInfo); */

// *******Filtrar directores*******
const select = document.getElementById('director');//identifica al elemento 'director'
select.addEventListener('change', filtrarDirector);

