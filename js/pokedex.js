pokedex = {
    "01": "Bulbasaur",
    "02": "Ivysaur",
    "03": "Venusaur",
    "04": "Charmander",
    "05": "Charmeleon",
    "06": "Charizard",
    "07": "Squirtle",
    "08": "Wartortle",
    "09": "Blastoise",
    "1": "Bulbasaur",
    "2": "Ivysaur",
    "3": "Venusaur",
    "4": "Charmander",
    "5": "Charmeleon",
    "6": "Charizard",
    "7": "Squirtle",
    "8": "Wartortle",
    "9": "Blastoise",
    "10": "Caterpie",
    "11": "Metapod",
    "12": "Butterfree",
    "13": "Weedle",
    "14": "Kakuna",
    "15": "Beedrill",
    "16": "Pidgey",
    "17": "Pidgeotto",
    "18": "Pidgeot",
    "19": "Rattata",
    "20": "Raticate",
    "21": "Spearow",
    "22": "Fearow",
    "23": "Ekans",
    "24": "Arbok",
    "25": "Pikachu",
    "26": "Raichu",
    "27": "Sandshrew",
    "28": "Sandslash",
    "29": "Nidoran\u2640",
    "30": "Nidorina",
    "31": "Nidoqueen",
    "32": "Nidoran\u2642",
    "33": "Nidorino",
    "34": "Nidoking",
    "35": "Clefairy",
    "36": "Clefable",
    "37": "Vulpix",
    "38": "Ninetales",
    "39": "Jigglypuff",
    "40": "Wigglytuff",
    "41": "Zubat",
    "42": "Golbat",
    "43": "Oddish",
    "44": "Gloom",
    "45": "Vileplume",
    "46": "Paras",
    "47": "Parasect",
    "48": "Venonat",
    "49": "Venomoth",
    "50": "Diglett",
    "51": "Dugtrio",
    "52": "Meowth",
    "53": "Persian",
    "54": "Psyduck",
    "55": "Golduck",
    "56": "Mankey",
    "57": "Primeape",
    "58": "Growlithe",
    "59": "Arcanine",
    "60": "Poliwag",
    "61": "Poliwhirl",
    "62": "Poliwrath",
    "63": "Abra",
    "64": "Kadabra",
    "65": "Alakazam",
    "66": "Machop",
    "67": "Machoke",
    "68": "Machamp",
    "69": "Bellsprout",
    "70": "Weepinbell",
    "71": "Victreebel",
    "72": "Tentacool",
    "73": "Tentacruel",
    "74": "Geodude",
    "75": "Graveler",
    "76": "Golem",
    "77": "Ponyta",
    "78": "Rapidash",
    "79": "Slowpoke",
    "80": "Slowbro",
    "81": "Magnemite",
    "82": "Magneton",
    "83": "Farfetch'd",
    "84": "Doduo",
    "85": "Dodrio",
    "86": "Seel",
    "87": "Dewgong",
    "88": "Grimer",
    "89": "Muk",
    "90": "Shellder",
    "91": "Cloyster",
    "92": "Gastly",
    "93": "Haunter",
    "94": "Gengar",
    "95": "Onix",
    "96": "Drowzee",
    "97": "Hypno",
    "98": "Krabby",
    "99": "Kingler",
    "100": "Voltorb",
    "101": "Electrode",
    "102": "Exeggcute",
    "103": "Exeggutor",
    "104": "Cubone",
    "105": "Marowak",
    "106": "Hitmonlee",
    "107": "Hitmonchan",
    "108": "Lickitung",
    "109": "Koffing",
    "110": "Weezing",
    "111": "Rhyhorn",
    "112": "Rhydon",
    "113": "Chansey",
    "114": "Tangela",
    "115": "Kangaskhan",
    "116": "Horsea",
    "117": "Seadra",
    "118": "Goldeen",
    "119": "Seaking",
    "120": "Staryu",
    "121": "Starmie",
    "122": "Mr. Mime",
    "123": "Scyther",
    "124": "Jynx",
    "125": "Electabuzz",
    "126": "Magmar",
    "127": "Pinsir",
    "128": "Tauros",
    "129": "Magikarp",
    "130": "Gyarados",
    "131": "Lapras",
    "132": "Ditto",
    "133": "Eevee",
    "134": "Vaporeon",
    "135": "Jolteon",
    "136": "Flareon",
    "137": "Porygon",
    "138": "Omanyte",
    "139": "Omastar",
    "140": "Kabuto",
    "141": "Kabutops",
    "142": "Aerodactyl",
    "143": "Snorlax",
    "144": "Articuno",
    "145": "Zapdos",
    "146": "Moltres",
    "147": "Dratini",
    "148": "Dragonair",
    "149": "Dragonite",
    "150": "Mewtwo",
    "151": "Mew"
}

function getPokemon(number){
    // Get pokemon from pokedex
    return pokedex[number]
}

function failureWarning(msg){
     document.getElementById("results").innerHTML = "<div class='error-message'>"+ msg +"</div>";
}

function numberSplit(number){
    var results = [];
    //split the number
    if (parseInt(number) >= 151){
        //this for loop is for a future idea in which we provide other alternatives.
        //  Yes, it is buggy right now. That will be fixed later.
        for (i=1; i<=3;i++){
            number1 = number.substr(0, i);
            number2 = number.substr(i);
            poke1 = getPokemon(number1);
            poke2 = getPokemon(number2);
            console.log("Got Pokemon " + poke1 + " and " + poke2 + " for numbers " + number1 + " and " + number2);
            results.push({key: i, values: [poke1, poke2]})
        }
    }
    //console.log(results)
    return results;
}

function parseNumber(number){
    // take the number and parse it
    part1 = number.split("-")[0];
    part2 = number.split("-")[1];
    part3 = number.split("-")[2];
    console.log("Number has been split into: '" + part1 + "', '" + part2 + "', and '" + part3 +"'." )

    if (isNaN(part1) || isNaN(part2) || isNaN(part3)){
        failureWarning("Unable to process. Please ensure you are entering numbers.")
    }
    else {
        pokemon1 = numberSplit(part1)
        pokemon2 = numberSplit(part2)
        pokemon3 = numberSplit(part3)
    }
    console.log(pokemon1[1].values)
    document.getElementById("results").innerHTML = "Your encrypted phone number would be: <br/><b>" + pokemon1[1].values.join(", ") + " - " + pokemon2[1].values.join(", ") + " - " + pokemon3[1].values.join(", ") +"</b>";
}

function getResults(){
    if (document.getElementById("results").innerHTML != ""){
        document.getElementById("results").innerHTML = "";
    }
    // kick the process off
    testNumber = "222-555-1234"
    //test number for verification.
    //Should return "Raticate, Wartortle - Golduck, Charmeleon - Butterfree, Nidoking"
    number = document.getElementById("number").value;
    if (number == ""){
        number = testNumber;
        console.log("Test number in use!");
    }
    else{
        console.log("Using " + number);
    }
    //document.getElementById("results").innerText = "This is what I got! " + number;

    if (number.length == 12 && number.includes("-")){
        parseNumber(number);
    }
    else{
        console.log("Incorrect fomatting detected")
       failureWarning("Incorrect phone number input! Please use XXX-XXX-XXXX format and do not use other formatting.")
    }
}
