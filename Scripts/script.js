const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites["front_default"],
            back: result.sprites["back_default"],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            height: result.height,
            weight: result.weight,
            order: result.order,
        }));
        renderPokemon(pokemon);
        renderKantoPokemon(pokemon);
        console.log(pokemon);
    });
};


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
    $("ul li img").each(function(i) {
        $(this).attr("id", + i)
    })
};



$("#regions-container h2:first").attr("id", "kanto-region");

const renderKantoPokemon = (pokemon) => {
    $("#kanto-region").on("click", () => {
        pokemon.map((pokeman, index) => {
            $(".card-image").eq(index).attr("src", pokeman.image);
            $(".card-title").eq(index).text(pokeman.name);
            $(".card-subtitle").eq(index).text(`Type: ${pokeman.type}`);
            $(".card-tooltip").eq(index).text(`Height: ${pokeman.height / 10}m Weight: ${pokeman.weight / 10}kg Pokédex #${pokeman.id}`)
        })
        $(".pokemon-card:gt(99)").css("display", "flex");
    })
};

const pokemonBack = (pokemon) => {
    $("ul li img").on("click", function(e) {
        let id = this.id;
        console.log(id);
        let imageBack = pokemon[id].back;
        if($("#" + id).attr("src") == imageBack) {
            $("#" + id).attr("src", pokemon[id].image);
        } else {
            $("#" + id).attr("src", pokemon[id].back);
        };
    });
};   

fetchPokemon();
