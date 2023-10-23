const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
        }));
        displayPokemon(pokemon);
        console.log(pokemon)
    });
};

const fetchShinyPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemonShiny = results.map((result) => ({
            image: result.sprites['front_shiny'],
        }));
        const cardImage = document.querySelectorAll(".card-image");
        cardImage.forEach((img, index) => {
            img.src = pokemonShiny[index].image;
        })
        console.log(pokemonShiny,"shiny");
    });
};

fetchPokemon();

const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon
        .map((pokeman) => `
            <li class="pokemon-card">
                <img class="card-image" src="${pokeman.image}"/>
                <h2 class="card-title"> ${pokeman.name.charAt(0).toUpperCase() + pokeman.name.slice(1)}</h2>
                <p class="card-subtitle">Type: ${pokeman.type.charAt(0).toUpperCase() + pokeman.type.slice(1)}</p>
            </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

const shinyButton = document.createElement("button");
shinyButton.textContent = "Shiny!"
const containerClass = document.querySelector(".container");
containerClass.prepend(shinyButton);

// Set ID for button -
const setShinyButtonId = document.querySelector(".container").firstChild;
setShinyButtonId.setAttribute("id", "shiny-button");

const shinyToggle = () => { 
    console.log("tjenare");
    fetchShinyPokemon();
};
const buttonId = document.getElementById("shiny-button");
buttonId.addEventListener("click", shinyToggle);
