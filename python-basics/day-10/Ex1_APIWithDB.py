from fastapi import FastAPI
from sqlalchemy import create_engine, text

app = FastAPI()

# TODO: Create SQLAlchemy engine with your postgres password
engine = create_engine("postgresql://postgres:1111@localhost/tolet")

# TODO: Create GET route at "/listings" that:
# connects to DB, fetches all listings
# returns them as a list of dictionaries with keys:
# id, title, rent, area, contact


@app.get("/listings")
def get_listings():
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
