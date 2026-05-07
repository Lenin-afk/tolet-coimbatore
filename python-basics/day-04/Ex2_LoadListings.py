import json

# TODO: Open "listings.json" in read mode and load data using json.load
with open("listings.json", "r") as f:
    data = json.load(f)

# TODO: Loop through listings and print title and rent of each
for i in data:
    print(i["title"], "-", i["rent"])
