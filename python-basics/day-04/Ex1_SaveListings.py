import json

listings = [{"title": "1BHK", "rent": 7000, "area": "RS Puram", "furnished": True},
            {"title": "2BHK", "rent": 12000,
                "area": "Gandhipuram", "furnished": False},
            {"title": "Single Room", "rent": 5500,
             "area": "Saibaba Colony", "furnished": True},
            ]
# TODO: Add 3 listing dictionaries with title, rent, area, furnished


# TODO: Open "listings.json" in write mode and save listings using json.dump
with open("listings.json", "w") as f:
    json.dump(listings, f, indent=4)

print("Listings saved successfully!")
