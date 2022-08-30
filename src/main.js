import data from './data/ghibli/ghibli.js';
import { filterDirector, filterProducer, orderMovies, percentDirector} from './data.js';

// *******Despliega menú hamburguesa*******
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () =>{
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
const select = document.getElementById('director');//identifica al elemento 'director'
select.addEventListener('change', (event)=>{
    let selectValue = event.target.value // evento guardamos el valor de select
    let arrFilterDirector= filterDirector(selectValue, data.films) // Mandamos dos argumentos 1 Nombre del director y 2 data
    console.log(arrFilterDirector)
    console.log(percentDirector(data.films,selectValue))
    createCards(arrFilterDirector) // reusamos la fn que pinta las tarjetas 
});

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
    let arrOrdenar = orderMovies(eventAZ, data.films);
    createCards(arrOrdenar);
})

// ***Imprime el porcentaje en pantalla***
// document.getElementById('printPercent').textContent = 'dirigió '+ percentDirector.filterData + 'películas';
