import { filterDirector, filterProducer, orderMovies, percentDirector } from "../src/data.js";

const dataSample = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    poster:
      "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
    release_date: "1986",
    rt_score: "95",
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    description:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    poster:
      "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
    release_date: "1988",
    rt_score: "93",
  },
  {
    id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    title: "Kiki's Delivery Service",
    description:
      "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    poster:
      "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
    release_date: "1989",
    rt_score: "96",
  },
  {
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    title: "Grave of the Fireflies",
    description:
      "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    director: "Isao Takahata",
    producer: "Toru Hara",
    poster:
      "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
    release_date: "1988",
    rt_score: "97",
  },
];
describe("filterDirector", () => {
  it("Deberia mostrar el nombre de una pelicula de un director", () => {
    const filteredData = [
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        description:
          "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        release_date: "1986",
        rt_score: "95",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        description:
          "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        title: "Kiki's Delivery Service",
        description:
          "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
        release_date: "1989",
        rt_score: "96",
      },
    ];
    expect(filterDirector("Hayao Miyazaki", dataSample)).toEqual(filteredData);
  });
});

describe("filterProducer", () => {
  it("Deberia mostrar el nombre de una pelicula de un productor", () => {
    const filteredData = [
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        description:
          "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        release_date: "1986",
        rt_score: "95",
      },
    ];
    expect(filterProducer("Isao Takahata", dataSample)).toEqual(filteredData);
  })
});

describe("orderMovies", ()=>{
  it("Deberia mostrar el nombre de las peliculas en orden alfabetico A-Z", ()=>{
    const AzMovieOrder = [
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        description:
          "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        release_date: "1986",
        rt_score: "95",
      },
      {
        id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
        title: "Grave of the Fireflies",
        description:
          "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
        director: "Isao Takahata",
        producer: "Toru Hara",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
        release_date: "1988",
        rt_score: "97",
      },
      {
        id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        title: "Kiki's Delivery Service",
        description:
          "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
        release_date: "1989",
        rt_score: "96",
      },
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        description:
          "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        release_date: "1988",
        rt_score: "93",
      },
    ]
    expect(orderMovies('AZ',dataSample)).toEqual(AzMovieOrder);
  })
});

describe("orderMovies", ()=>{
  it("Deberia mostrar el nombre de las peliculas en orden alfabetico Z-A", ()=>{
    const AzMovieOrder = [
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        description:
          "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        release_date: "1988",
        rt_score: "93",
      },
      {
        id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
        title: "Kiki's Delivery Service",
        description:
          "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Kiki%27s_Delivery_Service_%282%29.jpg",
        release_date: "1989",
        rt_score: "96",
      },
      {
        id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
        title: "Grave of the Fireflies",
        description:
          "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
        director: "Isao Takahata",
        producer: "Toru Hara",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/a/a5/Grave_of_the_Fireflies_Japanese_poster.jpg",
        release_date: "1988",
        rt_score: "97",
      },
      {
        id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        title: "Castle in the Sky",
        description:
          "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
        release_date: "1986",
        rt_score: "95",
      },
    ]
    expect(orderMovies('ZA',dataSample)).toEqual(AzMovieOrder);
  })
});

describe('percentDirector', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof percentDirector).toBe('function')
  })
})