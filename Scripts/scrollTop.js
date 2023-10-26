$("#pokedex").after($("<button>Top</button>"));
$("#pokedex").next().attr("id", "scroll-top-button")

const scrollTop = () => {
    $("#scroll-top-button").on("click", () => {
        $(window).scrollTop(0);
    });
};
scrollTop();