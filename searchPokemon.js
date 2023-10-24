const searchPokemon = () => {
    let input = document.getElementById("search-pokemon").value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName("card-title");
    let pokemonCard = document.getElementsByClassName("pokemon-card");

    for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            pokemonCard[i].style.display="none"
        } else {
            pokemonCard[i].style.display="flex"
        }
    };
};
