import json

with open("listings.json", "r") as f:
    data = json.load(f)

# TODO: Write a function called filter_affordable(listings)
# that prints only listings with rent below 8000
# print title, rent and area


def filter_affordable(listings):
    for i in listings:
        if i["rent"] < 8000:
            print(i["title"], "-", i["rent"], "-", i["area"])


filter_affordable(data)
