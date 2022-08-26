import data from './data/ghibli/ghibli.js';
import { filtrarDirector } from './data.js';
import { filtrarProductor} from './data.js';

// *******Despliega menú hamburguesa*******
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

// *******Pinta las tarjetas en el DOM*******
function crearTarjetas(peliculas){
    const container = document.querySelector('.container')
    container.innerHTML= ""
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

// *******Filtrar directores*******
const select = document.getElementById("director")
select.addEventListener("change",(e)=>{
    let selectValue = e.target.value ;
    let arrFilterdirector = filtrarDirector(selectValue,data.films)
// console.log(arrFilterdirector)
crearTarjetas(arrFilterdirector)
})

// filtrar productores
const select2= document.getElementById("producer")
select2.addEventListener("change",(evento)=>{
    let selectValue2 = evento.target.value ;
    let arrFilterProducer = filtrarProductor(selectValue2,data.films)
    crearTarjetas(arrFilterProducer)
    // console.log(arrFilterProducer)
})




// *******Ordenar por año de estreno*******
// const button = document.getElementById('annio');
// button.addEventListener('click', sortData);
