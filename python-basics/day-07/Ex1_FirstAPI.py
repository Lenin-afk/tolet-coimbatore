from fastapi import FastAPI

app = FastAPI()

# TODO: Create a GET route at "/" that returns
# {"message": "Welcome to ToLet Coimbatore API"}


@app.get("/")
def home():
    return {"message": "Welcome to ToLet Coimbatore API"}
# TODO: Create a GET route at "/listings" that returns
# a list of 2 listing dictionaries with title, rent, area


@app.get("/listings")
def func():
    return [{"Title": "1BHK", "Rent": 7000, "Area": "RS Puram"},
            {"Title": "2BHK", "Rent": 8000, "Area": "Sitra"},
            {"Title": "3BHK", "Rent": 9000, "Area": "Neelambur"}
            ]
