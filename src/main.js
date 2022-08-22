import data from './data/ghibli/ghibli.js';
// console.log(data.films[0].title);
crearTarjetas(data.films);
infoMovie(data.films);
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});
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
             `
    })
}
function mostrarInfo(){
    document.getElementById('info-movies').style.display = 'block';
}
const movies = document.getElementById('movies-link');
movies.addEventListener('click', mostrarInfo);
