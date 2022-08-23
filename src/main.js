import { filtrarData } from './data.js';
import data from './data/ghibli/ghibli.js';

//console.log(example, data);
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});
crearTarjetas(data.films);
function crearTarjetas(peliculas) {
    console.log(peliculas);
    const container=document.querySelector(".container")
    peliculas.forEach(films => {
    container.innerHTML += `
    <article class="card">
            <div class="card-image" id="card-1"> </div>
            <h2>${films.title}</h2>
            <p>${films.description}</p>
            <a href="https://www.ghiblicollection.com/product/my-neighbor-totoro?product_id=6644" target="_blank">Conoce Mas</a>
          </article>
    `});

}
console.log(data.films);
console.log(filtrarData);

// Filtrar directores:
/* const select = document.getElementById('director');//identifica al elemento 'director'
select.addEventListener('change', (item) => {
    // filtrarData();
    const filtrarData = data.films.filter(dato => dato.director == item.target.value)
console.log(filtrarData);  
}) */
const select = document.getElementById('director');
select.addEventListener('change',item)




    
    
    
    
    
