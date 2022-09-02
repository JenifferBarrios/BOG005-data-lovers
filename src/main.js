import data from './data/ghibli/ghibli.js';
import { filtrarDirector, filtrarProductor, ordenPeliculas, calculo } from './data.js';


// *******Despliega menú hamburguesa*******
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

// *******Pinta las tarjetas en el DOM*******
function crearTarjetas(peliculas) {
    const container = document.querySelector('.container')
    container.innerHTML = ""
    peliculas.forEach(films => {
        container.innerHTML += `
    <article class="card" id= "card">
            <h2 class="titulo">${films.title}</h2>
            <img class="posters" src="${films.poster}"
            <p class="descripcion">${films.description}</p>
            <article class ="fecha">Fecha de Lanzamiento
            ${films.release_date}
            </article> 
            
            </article>
    
    `});

}
crearTarjetas(data.films);//llama a la function crearTarjetas

// *******Filtrar directores*******
const select = document.getElementById("director")
select.addEventListener("change", (e) => {
    let selectValue = e.target.value;
    
    const percent = calculo(data.films, selectValue)
    let arrFilterdirector = filtrarDirector(selectValue, data.films)
    document.getElementById("porcentaje").innerHTML = `El Porcentaje de Peliculas dirigida por ${selectValue} es ${percent} `
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
      
}