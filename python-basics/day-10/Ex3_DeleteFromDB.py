from fastapi import FastAPI
from sqlalchemy import create_engine, text

app = FastAPI()

# TODO: Create engine
engine = create_engine("postgresql://postgres:1111@localhost/tolet")

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

# TODO: DELETE route at "/listings/{id}" that:
# deletes listing with that id from DB
# returns {"message": "Listing deleted!"}
# if not found return {"error": "Listing not found"}


@app.delete("/listings/{id}")
def delete_listing(id: int):
    with engine.connect() as conn:
        res = conn.execute(text("DELETE FROM listings WHERE id = :id"),
                           {
            "id": id
        })
        conn.commit()
        if res.rowcount == 1:
            return {"message": "Listing deleted!"}
        else:
            return {"error": "Listing not found"}
