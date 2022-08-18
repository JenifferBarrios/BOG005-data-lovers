// import { example } from './data.js';
// console.log(example, data);
// console.log(data.films);
import data from './data/ghibli/ghibli.js';
console.log(data.films[0].title);
crearTarjetas(data.films);

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


/* const card1= document.querySelector(".card");
const card1title=card1.querySelector("h2");
console.log(card1title);
card1title.textContent=data.films[0].title;

const card2 = document.createElement('article')
 */


/* card2.innerHTML = `
    <div style="background-image: url(${data.films[1].poster})" id="card-1"></div>
    <h2>${data.films[1].title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, laboriosam?</p>
    <a href="https://www.ghiblicollection.com/product/my-neighbor-totoro?product_id=6644" target="_blank">Conoce Mas</a>
`
document.querySelector('.main').append(card2) */