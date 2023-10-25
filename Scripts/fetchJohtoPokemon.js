const fetchJohtoPokemon = () => {
    const promises = [];
    for (let i = 152; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        let pokemonJohto = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            height: result.height,
            weight: result.weight,
            order: result.order,
        }));
        console.log(pokemonJohto)
        renderJohtoPokemon(pokemonJohto);
    });
}

$("#regions-container h2:last").attr("id", "johto-region");

const renderJohtoPokemon = (pokemonJohto) => {
    $("#johto-region").on("click", () => {
        pokemonJohto.map((pokemanJohto, index) => {
            $(".card-image").eq(index).attr("src", pokemanJohto.image);
            $(".card-title").eq(index).text(pokemanJohto.name)
        })
        $(".pokemon-card:gt(99)").css("display", "none");
    })
}

fetchJohtoPokemon()
