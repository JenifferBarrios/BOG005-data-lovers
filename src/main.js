import data from './data/ghibli/ghibli.js';
console.log(data.films[0].title);
crearTarjetas(data.films);

// console.log(example, data);
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
            <div class="card-image" id="card-1"></div>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, laboriosam?</p>
            <a href="https://www.ghiblicollection.com/product/my-neighbor-totoro?product_id=6644" target="_blank">Conoce Mas</a>
          </article>
    `});
    console.log(data.films);
}