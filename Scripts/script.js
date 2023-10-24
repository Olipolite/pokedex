const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            height: result.height,
            weight: result.weight,
            order: result.order,
        }));
        renderPokemon(pokemon);
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


const renderPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon
        .map((pokeman) => `
            <li class="pokemon-card">
                <img class="card-image" src="${pokeman.image}"></img>
                <h2 class="card-title">${pokeman.name}</h2>
                <p class="card-subtitle">Type: ${pokeman.type}</p>
                <p class="card-tooltip">Height: ${pokeman.height / 10}m Weight: ${pokeman.weight / 10}kg Pokédex #${pokeman.id}</p>
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
    fetchShinyPokemon();
};
const buttonId = document.getElementById("shiny-button");
buttonId.addEventListener("click", shinyToggle);
