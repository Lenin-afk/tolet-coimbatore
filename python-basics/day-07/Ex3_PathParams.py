from fastapi import FastAPI

app = FastAPI()

listings = [{"Id": 1, "Title": "1BHK", "Rent": 7000, "Area": "RS Puram"},
            {"Id": 2, "Title": "2BHK", "Rent": 8000, "Area": "Sitra"},
            {"Id": 3, "Title": "3BHK", "Rent": 9000, "Area": "Hopes"},
            {"Id": 4, "Title": "4BHK", "Rent": 10000, "Area": "Nehru Nagar"}
            ]
# TODO: Add 4 listing dictionaries with id, title, rent, area
# TODO: Create a GET route at "/listings/{id}" that returns
# the listing with that id
# If not found, return {"error": "Listing not found"}


@app.get("/listings/{Id}")
def func(Id: int):
    for i in listings:
        if i["Id"] == Id:
            return i
    else:
        return {"error": "Listing not found"}
