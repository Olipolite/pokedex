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
        shinyToggle(pokemonShiny, null);
    });
};

const fetchShinyJohtoPokemon = () => {
    const promises = [];
    for (let i = 152; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemonJohtoShiny = results.map((result) => ({
            shiny: result.sprites["front_shiny"],
        }));
        console.log(pokemonJohtoShiny);
        shinyToggle(null, pokemonJohtoShiny);
    });
};


$(".regions-container").after("<button class='shiny-button'>Shiny</button>");

const shinyToggle = (pokemonShiny, pokemonJohtoShiny) => {
    $(".shiny-button").on("click", function() {
        if (kantoRegion) {
            if(pokemonShiny) {
                pokemonShiny.map((pokemanShiny, index) => {
                    $(".card-image").eq(index).attr("src", pokemanShiny.image);
                });
            }
        } else {
            if(pokemonJohtoShiny) {
                console.log(pokemonJohtoShiny);
                pokemonJohtoShiny.map((pokemanJohtoShiny, index) => {
                    $(".card-image").eq(index).attr("src", pokemanJohtoShiny.shiny);
                });
            };
        };
    });
};

fetchShinyPokemon();
fetchShinyJohtoPokemon();
