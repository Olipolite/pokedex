const searchPokemon = () => {
    let $input = $("#search-pokemon").val().toLowerCase();
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

$("#search-pokemon").on("keydown", () => {
    searchPokemon();
});

// Old Vanilla JS Code - 
// const searchPokemon = () => {
//     let input = document.getElementById("search-pokemon").value;
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName("card-title");
//     let pokemonCard = document.getElementsByClassName("pokemon-card");

//     for (let i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             pokemonCard[i].style.display="none"
//         } else {
//             pokemonCard[i].style.display="flex"
//         }
//     };
// };

