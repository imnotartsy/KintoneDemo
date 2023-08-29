/*
 * Modified from colorcell Plug-in
 * https://github.com/kintone-samples/plugin-samples/blob/master/examples/colorcell/js/desktop.js
 */
jQuery.noConflict();

async function getPokemon(dexnum) {
    var api_url = "https://pokeapi.co/api/v2/pokemon-form/" + dexnum + "/";
    console.log(api_url);
    const response = await fetch(api_url);
    const data = await response.json();
    const type_return = data["types"][0]["type"]["name"];
    return Promise.resolve(type_return);
};

(function($, PLUGIN_ID) {
    "use strict";
    
    kintone.events.on('app.record.index.show', function(event) {
        var config = kintone.plugin.app.getConfig(PLUGIN_ID);
        
        var dex = config['Pokedex Number'];
        // ! TODO: alwys sanitize user input
        var red = config['red_value'];
        var blue = config['blue_value'];
        var green = config['green_value'];

        // make rest api call to get pokemon type
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




            var fields = kintone.app.getFieldElements(code);
        
            for (var i = 0; i < event.records.length; i++) {
                var record = event.records[i];
                var $field = $(fields[i]);
                
                $field.removeClass('colorcell-plugin-red');
                $field.removeClass('colorcell-plugin-blue');
                $field.removeClass('colorcell-plugin-green');
                
                if (record[code]['value'] === red) {
                    $field.addClass('colorcell-plugin-red');
                } else if (record[code]['value'] === blue) {
                    $field.addClass('colorcell-plugin-blue');
                } else if (record[code]['value'] === green) {
                    $field.addClass('colorcell-plugin-green');
                }
            }

        
        })();



        
        
    });

})(jQuery, kintone.$PLUGIN_ID);