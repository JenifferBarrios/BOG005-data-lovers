import data from './data/ghibli/ghibli.js';

import { filterDirector, filterProducer, orderMovies, percentDirector} from './data.js';

// *******Despliega menú hamburguesa*******
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
});

// *******Pinta las tarjetas en el DOM*******

function createCards(movies){
    const container = document.querySelector('.container')
    container.innerHTML= ''
    movies.forEach(films => {   
    container.innerHTML += `
    <article class='card'>
            <h2 class='title'>${films.title}</h2>
            <img class='posters' src='${films.poster}'
            <p class='description'>${films.description}</p>
            <p class='releaseDate'>Release Year: ${films.release_date}</p>
    `});
}
createCards(data.films);//llama a la function crearTarjetas

// *******Filtrar directores*******
const select = document.getElementById('director');
select.addEventListener('change', (event) => {
    let selectValue = event.target.value;
    const arrFilterdirector = filterDirector(selectValue, data.films)
    document.getElementById('percent').innerHTML = `El Porcentaje de Peliculas dirigida por ${selectValue} es: ${percentDirector(data.films, selectValue)} `
    createCards(arrFilterdirector)
})

// *******Filtrar productores*******
const select2 = document.getElementById('producer');//Identifica al elemento 'productor'
select2.addEventListener('change', (e)=>{
    let selectValue = e.target.value 
    let arrFilterProducer = filterProducer(selectValue, data.films)
    // console.log(arrFilterProducer)
    createCards(arrFilterProducer)
});

// *******Ordenar alfabéticamente por título de película*******
const selectAZ = document.getElementById('orderAZ');
selectAZ.addEventListener("change", (evento)=>{
    let eventAZ = evento.target.value;
    let arrOrder = orderMovies(eventAZ, data.films);
    createCards(arrOrder);
})