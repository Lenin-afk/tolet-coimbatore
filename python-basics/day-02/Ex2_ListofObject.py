class Listing:
    def __init__(self, title, rent, area):
        self.title = title
        self.rent = rent
        self.area = area

    def show(self):
        print("Title:", self.title)
        print("Rent:", self.rent)
        print("Area:", self.area)
        print(self.is_affordable())
        print("---")

    def is_affordable(self):
        return "Affordable" if self.rent < 8000 else "Expensive"


listings = [
    Listing("1BHK", 7000, "RS Puram"),
    Listing("2BHK", 12000, "Gandhipuram"),
    Listing("Single Room", 5500, "Saibaba Colony"),
    Listing("3BHK", 18000, "Peelamedu"),
]

def filter_affordable(listings):
    for listing in listings:
        if listing.rent < 8000:
            listing.show()

filter_affordable(listings)