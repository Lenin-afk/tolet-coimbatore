from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Listing(BaseModel):
    # TODO: Add fields - id (int), title (str), rent (int), area (str), contact (str)
    id: int
    title: str
    rent: int
    area: str
    contact: str

# TODO: GET route at "/listings" - return all listings


listings = []


@app.get("/listings")
def get_listings():
    return listings

# TODO: POST route at "/listings" - add listing to list


@app.post("/listings")
def add_listings(listing: Listing):
    listings.append(listing.model_dump())
    return {"message": "Listing added!"}

# TODO: DELETE route at "/listings/{id}" - remove listing with that id
# If not found return {"error": "Listing not found"}


@app.delete("/listings/{id}")
def delete_route(id: int):
    for i in listings:
        if i["id"] == id:
            listings.remove(i)
            return {"message": "Listing deleted!"}
    else:
        return {"error": "Listing not found"}
