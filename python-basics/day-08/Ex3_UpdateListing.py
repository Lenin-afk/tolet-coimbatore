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


listings = []

# TODO: GET route at "/listings"
# TODO: POST route at "/listings"
# TODO: DELETE route at "/listings/{id}"


@app.get("/listings")
def get_listings():
    return listings


@app.post("/listings")
def add_listings(listing: Listing):
    listings.append(listing.model_dump())
    return {"message": "Listing added!"}


@app.delete("/listings/{id}")
def delete_route(id: int):
    for i in listings:
        if i["id"] == id:
            listings.remove(i)
            return {"message": "Listing deleted!"}
    else:
        return {"error": "Listing not found"}


# TODO: PUT route at "/listings/{id}" that updates
# the rent of an existing listing
# If not found return {"error": "Listing not found"}
@app.put("/listings/{id}")
def update_rent(id: int, new_rent: int):
    for i in listings:
        if i['id'] == id:
            i['rent'] = new_rent
            return {"message": "Rent updated"}
    else:
        return {"error": "Listing not found"}
