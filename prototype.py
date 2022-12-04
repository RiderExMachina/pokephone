import json

def getPokemon(number):
    #number = number.zfill(3)
    ## Workaround for the Python Prototype, as the JSON file was improperly made (^_^)`
    #with open(f"pokedex/db/pokemon/{number}.json", "r") as inFile:
    with open("data.json", 'r') as inFile:
        pokeList = json.load(inFile)
    return pokeList[number]

def main():
    print("Enter a phone number to turn into a Pokemon \n(please use the XXX-XXX-XXXX format)")
    number = input("[Phone Number] => ")
    ## Checks for proper phone number length and existence of hyphen
    if len(number) == 12 and "-" in number:
        with open("gotcha.txt", 'a') as heh:
            heh.write(f"{number}\n")
        part1 = number.split("-")[0]
        part2 = number.split("-")[1]
        part3 = number.split("-")[2][0:2]
        part4 = number.split("-")[2][2:]
    else:
        print("Something went wrong! Check the format (maybe you used a '.' instead of a '-')")

    ## Catches failures in case someone decides to be funny
    try:
        if int(part1) >= 151:
            ## Because this part is reused later, this could be turned into a function
            split1 = part1[0:2]
            split2 = part1[2:]
            poke1 = getPokemon(split1)
            poke2 = getPokemon(split2)
            result1 = f"{poke1}, {poke2}"
        if int(part2) >= 151:
            split1 = part2[0:2]
            split2 = part2[2:]
            poke1 = getPokemon(split1)
            poke2 = getPokemon(split2)
            result2 = f"{poke1}, {poke2}"
        result3 = getPokemon(part3)
        result4 = getPokemon(part4)
        ## Todo: Add alternatives
        ## IE 208-555-1234 could end in Butterfree, Nidoking
        ## or it could also end in Scyther, Charmander or Bulbasaur, Stantler
        print(f"{result1} - {result2} - {result3}, {result4}")
    except TypeError:
        print("Seems like your number might be wrong, try again?")

main()
