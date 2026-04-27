listings = [
    {"title": "1BHK in RS Puram", "rent": 7000, "area": "RS Puram"},
    {"title": "2BHK in Gandhipuram", "rent": 12000, "area": "Gandhipuram"},
    {"title": "Single room in Saibaba Colony",
        "rent": 5500, "area": "Saibaba Colony"},
]


def show_affordable_listings(listings):
    for listing in listings:
        if listing["rent"] < 8000:
            print(listing["title"], "-", listing["area"], "-", listing["rent"])


show_affordable_listings(listings)
