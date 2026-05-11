from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# TODO: Create a Listing class using BaseModel with fields:
# title (str), rent (int), area (str), contact (str)


class Listing(BaseModel):
    title: str
    rent: int
    area: str
    contact: str


listings = []
# TODO: Create a GET route at "/listings" that returns all


@app.get("/listings")
def get_listings():
    return listings

# TODO: Create a POST route at "/listings" that accepts a Listing object
# adds it to the listings list and returns {"message": "Listing added!"}


@app.post("/listings")
def add_listings(listing: Listing):
    listings.append(listing.model_dump())
    return {"message": "Listing added!"}
