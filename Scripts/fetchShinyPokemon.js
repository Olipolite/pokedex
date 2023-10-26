const fetchShinyPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemonShiny = results.map((result) => ({
            image: result.sprites["front_shiny"],
        }));
        shinyToggle(pokemonShiny)
        console.log(pokemonShiny)
    });
};

fetchShinyPokemon();

const shinyButton = document.createElement("button");
shinyButton.textContent = "Shiny!"
const containerClass = document.querySelector(".container");
containerClass.prepend(shinyButton);

// Set ID for button -
const setShinyButtonId = document.querySelector(".container").firstChild;
setShinyButtonId.setAttribute("id", "shiny-button");

const shinyToggle = (pokemonShiny) => {
    $("#shiny-button").on("click", (e) => {
        $(".card-image").each((index, element) => {
            $(element).attr("src", pokemonShiny[index].image)
        });
    });
};
