const searchPokemon = () => {
    let $input = $(".search-pokemon").val().toLowerCase();
    let x = $(".card-title");
    let pokemonCard = $(".pokemon-card");
    
    for (let i = 0; i < x.length; i++) {
        if (!x.eq(i).text().toLowerCase().includes($input)) {
            pokemonCard.eq(i).css("display", "none");
        } else {
            pokemonCard.eq(i).css("display", "flex");
        }
    };
};

$(".search-pokemon").on("keydown", () => {
    searchPokemon();
});
