import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import data from './data/ghibli/ghibli.js';

console.log(example, data);
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

//console.log(data.films);
console.log(data.films[0].title);