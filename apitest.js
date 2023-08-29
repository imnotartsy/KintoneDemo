// import $ from "jquery";

var dex = "1";



async function getPokemon(dexnum) {
    var api_url = "https://pokeapi.co/api/v2/pokemon-form/" + dexnum + "/";
    console.log(api_url);
    const response = await fetch(api_url);
    const data = await response.json();
    const type_return = data["types"][0]["type"]["name"];
    return Promise.resolve(type_return);
};

var color = "";

(async () => {
    var pk_type = await getPokemon(dex);
    console.log("Retrieved type for pokemon:", pk_type);

    
    switch (pk_type) {
        case "normal":
            color = "colorcell-plugin-green";
            break;
        case "fire":
            color = "colorcell-plugin-red";
            break;
        case "water":  
            color = "colorcell-plugin-blue";
            break;
        default:
            color = "colorcell-plugin-red";
    }

    console.log("Color:", color);

})();


console.log("Color:", color);







