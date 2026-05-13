from fastapi import FastAPI
from sqlalchemy import create_engine, text
from pydantic import BaseModel

app = FastAPI()

# TODO: Create engine
engine = create_engine("postgresql://postgres:1111@localhost/tolet")


class Listing(BaseModel):
    # TODO: Add fields - title (str), rent (int), area (str), contact (str)
    title: str
    rent: int
    area: str
    contact: str


# TODO: GET route at "/listings" - fetch all from DB


@app.get("/listings")
def get_listing():
    with engine.connect() as conn:
        res = conn.execute(text("SELECT * FROM listings"))
        res_list = []
        for i in res:
            res_list.append({
                "id": i[0],
                "title": i[1],
                "rent": i[2],
                "area": i[3],
                "contact": i[4]
            })
    return res_list

# TODO: POST route at "/listings" - insert new listing into DB
# Use parameterized query
# Return {"message": "Listing added!"}


@app.post("/listings")
def insert_listing(listing: Listing):
    with engine.connect() as conn:
        conn.execute(text("INSERT INTO listings (title, rent, area, contact) VALUES (:title, :rent, :area, :contact) "),
                     {
                         "title": listing.title,
                         "rent": listing.rent,
                         "area": listing.area,
                         "contact": listing.contact
        })
        conn.commit()
        return {"message": "Listing added!"}
