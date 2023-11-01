const fetchJohtoPokemon = () => {
    const promises = [];
    for (let i = 152; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        let pokemonJohto = results.map((result) => ({
            name: result.name,
            image: result.sprites["front_default"],
            back: result.sprites["back_default"],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            height: result.height,
            weight: result.weight,
            order: result.order,
        }));
        console.log(pokemonJohto)
        renderJohtoPokemon(pokemonJohto);
        pokemonJohtoBack(pokemonJohto);
    });
}

$("#regions-container h2:last").attr("id", "johto-region");

const renderJohtoPokemon = (pokemonJohto) => {
    $("#johto-region").on("click", () => {
        pokemonJohto.map((pokemanJohto, index) => {
            $(".card-image").eq(index).attr("src", pokemanJohto.image);
            $(".card-title").eq(index).text(pokemanJohto.name);
            $(".card-subtitle").eq(index).text(`Type: ${pokemanJohto.type}`);
            $(".card-tooltip").eq(index).text(`Height: ${pokemanJohto.height / 10}m Weight: ${pokemanJohto.weight / 10}kg Pokédex #${pokemanJohto.id}`);
        });
        $(".pokemon-card:gt(99)").css("display", "none");
        kantoRegion = false;
    });
};

const pokemonJohtoBack = (pokemonJohto) => {
    $("li img").on("click", function() {
        if(!kantoRegion){
            const id = this.id;
            const imageJohtoBack = pokemonJohto[id].back
            if($("#" + id).attr("src") === imageJohtoBack) {
                $("#" + id).attr("src", pokemonJohto[id].image);
            } else {
                $("#" + id).attr("src", pokemonJohto[id].back);
            };
        } else {
            return;
        };
    });
};

fetchJohtoPokemon()
