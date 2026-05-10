from fastapi import FastAPI

app = FastAPI()

listings = [{"Title": "1BHK", "Rent": 7000, "Area": "RS Puram"},
            {"Title": "2BHK", "Rent": 8000, "Area": "Sitra"},
            {"Title": "3BHK", "Rent": 9000, "Area": "Neelambur"},
            {"Title": "4BHK", "Rent": 6000, "Area": "Saibaba Colony"}
            ]
# TODO: Add 4 listing dictionaries with title, rent, area

# TODO: Create a GET route at "/listings" that returns all listings


@app.get("/listings")
def func():
    return listings

# TODO: Create a GET route at "/listings/affordable" that returns


@app.get("/listings/affordable")
def affordable():
    res = []
    for i in listings:
        if i["Rent"] < 8000:
            res.append(i)
    return res
# only listings with rent < 8000
