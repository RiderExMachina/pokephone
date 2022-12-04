import json

pokeDex = {}
for i in range(1,152):
    number = str(i).zfill(3)
    with open(f"pokedex/db/pokemon/{number}.json", "r") as inFile:
        data = json.load(inFile)
    pokeDex[i] = data["name"]


with open("data.json", 'a') as outFile:
    json.dump(pokeDex, outFile, indent=4)
