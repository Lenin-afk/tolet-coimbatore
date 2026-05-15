from fastapi import FastAPI, Header
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from jose import jwt, JWTError

app = FastAPI()
SECRET_KEY = "tolet-secret-key"
ALGORITHM = "HS256"

engine = create_engine("postgresql://postgres:1111@localhost/tolet")


class Listing(BaseModel):
    # TODO: Add fields - title (str), rent (int), area (str), contact (str)
    title: str
    rent: int
    area: str
    contact: str


def verify_token(token):
    # TODO: Copy from Ex1
    try:
        payload = jwt.decode(token, SECRET_KEY, ALGORITHM)
        return payload["sub"]
    except JWTError:
        raise JWTError("Invalid token")

# TODO: GET route at "/listings" - fetch all from DB (no auth needed)


@app.get("/listings")
def get_listing():
    with engine.connect() as conn:
        res = conn.execute(text("SELECT * FROM listings"))
        res_list = []
        for i in res:
            res_list.append(
                {
                    "title": i[1],
                    "rent": i[2],
                    "area": i[3],
                    "contact": i[4]
                })
        return res_list
# TODO: POST route at "/listings" that:
# requires token in header
# verifies token first
# if valid inserts listing into DB and returns {"message": "Listing added by {username}!"}
# if invalid returns {"error": "Invalid token"}


@app.post("/listings")
def func(listing: Listing, token: str = Header(...)):
    try:
        username = verify_token(token)
        with engine.connect() as conn:
            conn.execute(text("INSERT INTO listings (title, rent, area, contact) VALUES(:title, :rent, :area, :contact)"),
                         {
                "title": listing.title,
                "rent": listing.rent,
                "area": listing.area,
                "contact": listing.contact
            })
            conn.commit()
            return {"message": f"Listing added by {username}!"}
    except JWTError:
        return {"error": "Invalid token"}
