import { example } from './data.js';
//import data from './data/athletes/athletes.js';
import data from './data/ghibli/ghibli.js';
console.log(example, data);

console.log(data.athletes[0].name);

console.log(data.films);
console.log(data.films[0].title);

const card1= document.querySelector(".card");
const card1title=card1.querySelector("h2");
console.log(card1title);
card1title.textContent=data.films[0].title;

const card2 = document.createElement('article')



card2.innerHTML = `
    <div style="background-image: url(${data.films[1].poster})" id="card-1"></div>
    <h2>${data.films[1].title}</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, laboriosam?</p>
    <a href="https://www.ghiblicollection.com/product/my-neighbor-totoro?product_id=6644" target="_blank">Conoce Mas</a>
`
document.querySelector('.main').append(card2)