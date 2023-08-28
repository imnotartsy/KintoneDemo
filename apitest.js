// import $ from "jquery";

var code = "1";
var api_url = "https://pokeapi.co/api/v2/pokemon-form/" + code + "/";
console.log(api_url);

async function getPokemon() {
    const response = await fetch(api_url);
    const data = await response.json();
    const type_return = data["types"][0]["type"]["name"];
    return Promise.resolve(type_return);
};

(async () => {
    var pk_type = await getPokemon();
    console.log("Retrieved type for pokemon:", pk_type);

    var color = "";
    switch (pk_type) {
        case "normal":
            color = "colorcell-plugin-red";
            break;
        case "fire":
            color = "colorcell-plugin-blue";
            break;
        case "water":  
            color = "colorcell-plugin-green";
            break;
        default:
            color = "colorcell-plugin-red";
    }

    console.log("Color:", color);

})();







