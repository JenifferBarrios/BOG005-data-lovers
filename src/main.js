import data from './data/ghibli/ghibli.js';

import { filterDirector, filterProducer, orderMovies, percentDirector} from './data.js';


// *******Despliega menú hamburguesa*******
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

// *******Pinta las tarjetas en el DOM*******

function createCards(movies){
    const container = document.querySelector('.container')
    container.innerHTML= ""
    movies.forEach(films => {   
    container.innerHTML += `
    <article class="card">
            <h2 class="titulo">${films.title}</h2>
            <img class="posters" src="${films.poster}"
          </article>

    `});

}
createCards(data.films);//llama a la function crearTarjetas

// *******Filtrar directores*******


// *******Filtrar productores*******
const select2 = document.getElementById('producer');//Identifica al elemento 'productor'
select2.addEventListener('change', (e)=>{
    let selectValue = e.target.value 
    let arrFilterProducer = filterProducer(selectValue, data.films)
    console.log(arrFilterProducer)
    createCards(arrFilterProducer)
});

// *******Ordenar alfabéticamente por título de película*******
const selectAZ = document.getElementById("orderAZ");
selectAZ.addEventListener("change", (evento)=>{
    let eventAZ = evento.target.value;
    let arrOrder = orderMovies(eventAZ, data.films);
    createCards(arrOrder);
})

// ***Imprime el porcentaje en pantalla***
function showPercent(director){
document.getElementById('percent').innerHTML = percentDirector(data.films, director);
}
const select = document.getElementById("director")
select.addEventListener("change", (e) => {
    let selectValue = e.target.value;
    let arrFilterdirector = filtrarDirector(selectValue, data.films)
    console.log(calculo(data.films, selectValue))
    mostrarPorcentaje(selectValue)
    crearTarjetas(arrFilterdirector)
})

// filtrar productores
const select2 = document.getElementById("producer")
select2.addEventListener("change", (evento) => {
    let selectValue2 = evento.target.value;
    let arrFilterProducer = filtrarProductor(selectValue2, data.films)
    crearTarjetas(arrFilterProducer)
    // console.log(arrFilterProducer)
})

// *******Ordenar peliculas *******

const selectAZ = document.getElementById("ordenAZ")
selectAZ.addEventListener("change", (evento) => {
    let eventoAZ = evento.target.value;
    let arrOrdenar = ordenPeliculas(eventoAZ, data.films)
    crearTarjetas(arrOrdenar)
})

function mostrarPorcentaje  (director) {
      document.getElementById("porcentaje").innerHTML = calculo(data.films,director)
}



